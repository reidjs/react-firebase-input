import React, { useState, useEffect } from 'react'

export const FirebaseForm = (props) => {
  const { dbRef } = props

  // needs dbRef
  // each child needs a refkey (this is intentionally lowercase)
  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {}
    props.children.forEach(child => {
      // console.log('child', child)
      const refkey = child.props.refkey
      if (refkey) {
        const value = child.props.value
        obj[refkey] = value
      }
    })
    dbRef.update(obj)
  }

  const otherProps = Object.assign({}, props)
  delete otherProps.onSubmit
  delete otherProps.dbRef

  return (
    <form {...otherProps} onSubmit={handleSubmit}>
      {props.children}
    </form>
  )
}

export const FirebaseInput = (props) => {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState('')
  const { dbRef, refKey } = props

  const handleChange = e => {
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
  const updateDatabase = value => {
    const obj = {}
    obj[refKey] = value
    dbRef.update(obj)
  }

  const handleCheckboxChange = value => {
    const obj = {}

    dbRef.once('value').then(snapshot => {
      if (snapshot.exists()) {
        const val = snapshot.val()
        if (val[refKey] === true) {
          obj[refKey] = false
          setChecked(false)
        } else {
          obj[refKey] = true
          setChecked(true)
        }
        dbRef.update(obj)
      }
    })
  }
  const handleRadioChange = value => {
    const obj = {}

    dbRef.once('value').then(snapshot => {
      if (snapshot.exists()) {
        const val = snapshot.val()
        if (val[refKey] === value) {
          obj[refKey] = ''
        } else {
          obj[refKey] = value
        }
        dbRef.update(obj)
      }
    })
  }

  const otherProps = Object.assign({}, props)
  delete otherProps.dbRef
  delete otherProps.refKey

  useEffect(() => {
    if (!dbRef || !refKey)
      return

    if (props.type === 'checkbox') {
      dbRef.once('value').then((snapshot) => {
        if (snapshot.exists()) {
          let val
          if (snapshot.val() && snapshot.val()[refKey]) {
            val = snapshot.val()[refKey]
          }
          setChecked(val == true)
        }
      })
    } else if (props.type === 'radio') {
      dbRef.on('value', snapshot => {
        if (snapshot.exists()) {
          let val
          if (snapshot.val() && snapshot.val()[refKey]) {
            val = snapshot.val()[refKey]
          }
          setChecked(val === props.value)
        }
      })
    } else {
      dbRef.on('value', snapshot => {
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
      <textarea onChange={handleChange} {...otherProps} disabled={props.disabled || (!dbRef || !refKey)} />
    )
  } else if (props.type === 'checkbox') {
    return (
      <input onChange={handleChange} {...otherProps} disabled={props.disabled || (!dbRef || !refKey)} checked={checked}></input>
    )
  } else if (props.type === 'radio') {
    return (
      <input onChange={handleChange} {...otherProps} disabled={props.disabled || (!dbRef || !refKey)} checked={checked}></input>
    )
  } else {
    return (
      <input onChange={handleChange} value={value} {...otherProps} disabled={props.disabled || (!dbRef || !refKey)}></input>
    )
  }
}

