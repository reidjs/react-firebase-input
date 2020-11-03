import React, { useState, useEffect, createRef } from 'react'

// Helper function for forms, loops through all the children for attribute 'refkey' to grab values from.
// https://stackoverflow.com/questions/2712136/how-do-i-make-this-loop-all-children-recursively
const allDescendantsWithRefKey = (node, result = {}) => {
  for (let i = 0; i < node.childNodes.length; i++) {
    const childNode = node.childNodes[i];
    allDescendantsWithRefKey(childNode, result);
    if (childNode.getAttributeNode) {
      const refkeyAttr = childNode.getAttributeNode('refkey')
      const type = childNode.getAttributeNode('type')
      if (refkeyAttr) {
        const refkey = refkeyAttr.value
        if (type && (type.value === 'checkbox' || type.value === 'radio')) {
          if (type.value === 'checkbox') {
            result[refkey] = childNode.checked
          }
          if (type.value === 'radio' && childNode.checked) {
            result[refkey] = childNode.value
          }
        } else {
          result[refkey] = childNode.value
        }
      }
    }
  }
  return result
}

/**
 * <FirebaseForm>
 * <input refkey="foo" value="bar" />
 * <button>Submit</button>
 * </FirebaseForm>
 * 
 * Wrap inputs with a refkey="" prop to create a form that submits to your firebase realtime database instance
 * 
 * @dbRef     { reference } reference to object within firebase realtime database, e.g., database.ref('/foo/bar')
 * @newRecord { bool }      if set to a truthy value, pushes a new object to the database at the reference.
 * @callback  { function }  called with (null, newRecord.key) on success, or (error) on error
 */
export const FirebaseForm = props => {
  // dbRef: required prop
  // newRecord: optional boolean, pushes a new record and sets the form values instead of changes the existing one.
  // callback: optional callback for newRecord success or error
  const { dbRef, newRecord, callback } = props
  const ref = createRef()
  // Each child needs a refkey (this is intentionally lowercase)
  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = allDescendantsWithRefKey(ref.current)
    if (newRecord) {
      const record = dbRef.push()
      record
        .set(obj)
        .then(() => {
          if (callback) callback(null, record.key)
        })
        .catch((err) => {
          if (callback) callback(err)
        })
    } else {
      dbRef
        .update(obj)
        .then(() => {
          if (callback) {
            callback(null)
          }
        })
        .catch((err) => {
          if (callback) {
            callback(err)
          }
        })
    }
  }

  const otherProps = Object.assign({}, props)
  delete otherProps.onSubmit
  delete otherProps.dbRef
  delete otherProps.newRecord
  delete otherProps.callback

  return (
    <form {...otherProps} ref={ref} onSubmit={props.onSubmit || handleSubmit}>
      {props.children}
    </form>
  )
}


/** 
 * <FirebaseInput />
 * 
 * Returns firebase component that syncs to realtime database 
 *   
 * @dbRef     { reference } to the firebase database instance e.g. database.ref('users/john/')
 * @refKey    { string }    the specific key in the ref, e.g., for 'users/john/email' it would be 'email'
 * @callback  { function }  callback function, called with (null, value) on success and (err) on fail.
 * 
 */
export const FirebaseInput = (props) => {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  const { dbRef, refKey, callback } = props

  const handleChange = (e) => {
    const obj = {}
    const value = e.target.value
    if (!dbRef) {
      throw Error('no database reference')
    }
    if (!refKey) {
      throw Error('no reference key')
    }
    switch (props.type) {
      case 'checkbox':
        handleCheckboxChange()
        return
      case 'radio':
        handleRadioChange(value)
        return
      default:
        obj[refKey] = value
        updateDatabase(obj, value)
    }
  }

  const updateDatabase = (obj, value) => {
    dbRef
      .update(obj)
      .then(() => {
        if (callback) {
          callback(null, value)
        }
      })
      .catch((err) => {
        if (callback) {
          callback(err)
        }
      })
  }

  const handleCheckboxChange = () => {
    const obj = {}

    dbRef.once('value').then((snapshot) => {
      if (snapshot.exists()) {
        const val = snapshot.val()
        if (val[refKey] === true) {
          obj[refKey] = false
          setChecked(false)
        } else {
          obj[refKey] = true
          setChecked(true)
        }
      } else {
        // if obj doesnt exist in DB, it is created with the key whatever refKey is
        obj[refKey] = checked
      }
      updateDatabase(obj, checked)
    })
  }
  const handleRadioChange = (value) => {
    const obj = {}

    dbRef.once('value').then((snapshot) => {
      if (snapshot.exists()) {
        const val = snapshot.val()
        if (val[refKey] === value) {
          obj[refKey] = ''
        } else {
          obj[refKey] = value
        }
      } else {
        // if object doesn't exist in DB, it is set to the value of the radio input
        if (checked) {
          obj[refKey] = value
        }
      }
      updateDatabase(obj, value)
    })
  }

  const otherProps = Object.assign({}, props)
  delete otherProps.dbRef
  delete otherProps.refKey
  delete otherProps.callback


  useEffect(() => {
    if (!dbRef || !refKey) return

    if (props.type === 'checkbox') {
      dbRef.once('value').then((snapshot) => {
        if (snapshot.exists()) {
          // let val
          if (snapshot.val() && snapshot.val()[refKey]) {
            const val = snapshot.val()[refKey]
            // eslint-disable-next-line
            setChecked(val == true)
          }
        }
      })
    } else if (props.type === 'radio') {
      dbRef.on('value', (snapshot) => {
        if (snapshot.exists()) {
          if (snapshot.val() && snapshot.val()[refKey]) {
            const val = snapshot.val()[refKey]
            setChecked(val === props.value)
          }
        }
      })
    } else {
      dbRef.on('value', (snapshot) => {
        if (snapshot.exists()) {
          let val
          if (snapshot.val() && snapshot.val()[refKey]) {
            val = snapshot.val()[refKey]
          }
          setValue(val)
        }
      })
    }
  }, [dbRef, refKey])

  if (props.type === 'textarea') {
    return (
      <textarea
        onChange={handleChange}
        {...otherProps}
        disabled={props.disabled || !dbRef || !refKey}
      />
    )
  } else if (props.type === 'checkbox') {
    return (
      <input
        onChange={handleChange}
        {...otherProps}
        disabled={props.disabled || !dbRef || !refKey}
        checked={checked}
      />
    )
  } else if (props.type === 'radio') {
    return (
      <input
        onChange={handleChange}
        {...otherProps}
        disabled={props.disabled || !dbRef || !refKey}
        checked={checked}
      />
    )
  } else {
    return (
      <input
        onChange={handleChange}
        value={props.value || value}
        {...otherProps}
        disabled={props.disabled || !dbRef || !refKey}
      />
    )
  }
}
