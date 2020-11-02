import React, { useState, useEffect, createRef } from 'react'

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

export const FirebaseInput = (props) => {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  // callback: optionally calls with result of update
  const { dbRef, refKey, callback } = props

  const handleChange = (e) => {
    const obj = {}
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
        handleRadioChange(e.target.value)
        return
      default:
        obj[refKey] = e.target.value
        updateDatabase(obj)
    }
  }

  const updateDatabase = (obj) => {
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
        // obj doesnt exist in DB, create it with the key whatever refKey is
        obj[refKey] = checked
      }
      updateDatabase(obj)
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
        // object doesn't exist in DB, set it to the value of the radio input
        if (checked) {
          obj[refKey] = value
        }
      }
      updateDatabase(obj)
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
          // let val
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
        value={value}
        {...otherProps}
        disabled={props.disabled || !dbRef || !refKey}
      />
    )
  }
}
