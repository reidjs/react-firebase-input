import React, { useState, useEffect } from 'react'

export const FirebaseForm = (props) => {
  // dbRef: required prop
  // newRecord: optional boolean, pushes a new record and sets the form values instead of changes the existing one.
  // callback: optional callback for newRecord success or error
  const { dbRef, newRecord, callback } = props

  // Each child needs a refkey (this is intentionally lowercase)
  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {}
    props.children.forEach((child) => {
      if (child && child.props) {
        const refkey = child.props.refkey
        if (refkey) {
          const value = child.props.value
          obj[refkey] = value
        }
      }
    })
    if (newRecord) {
      const record = dbRef.push()
      record
        .set(obj)
        .then(() => {
          if (callback) callback(record.key)
        })
        .catch((err) => {
          if (callback) callback(err)
        })
    } else {
      dbRef
        .update(obj)
        .then(() => {
          if (callback) {
            callback()
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
    <form {...otherProps} onSubmit={props.onSubmit || handleSubmit}>
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
    if (!dbRef) {
      throw Error('no database reference')
    }
    if (!refKey) {
      throw Error('no reference key')
    }
    switch (props.type) {
      case 'checkbox':
        handleCheckboxChange(e.target.value)
        return
      case 'radio':
        handleRadioChange(e.target.value)
        return
      default:
        updateDatabase(e.target.value)
    }
  }

  const updateDatabase = (value) => {
    const obj = {}
    obj[refKey] = value
    dbRef
      .update(obj)
      .then(() => {
        if (callback) {
          callback()
        }
      })
      .catch((err) => {
        if (callback) {
          callback(err)
        }
      })
  }

  const handleCheckboxChange = (value) => {
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
        dbRef
          .update(obj)
          .then(() => {
            if (callback) {
              callback()
            }
          })
          .catch((err) => {
            if (callback) {
              callback(err)
            }
          })
      }
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
        dbRef
          .update(obj)
          .then(() => {
            if (callback) {
              callback()
            }
          })
          .catch((err) => {
            if (callback) {
              callback(err)
            }
          })
      }
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
          // console.log('snapshot.val()', snapshot.val())
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
