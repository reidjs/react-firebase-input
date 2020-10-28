import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

export const FirebaseTextInput = (props) => {
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
    switch(props.type) {
      case 'checkbox':
      case 'radio':
        handleCheckboxChange(e.target.value)
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
        // console.log('val', val[refKey])
        if (val[refKey]) {
          obj[refKey] = false
        } else {
          obj[refKey] = true
        }
        dbRef.update(obj)
      }
    })
  }
  // const instance = props.instance
  const otherProps = Object.assign({}, props)
  delete otherProps.dbRef
  delete otherProps.refKey
  // console.log('instance', instance)
  useEffect(() => {
    if (dbRef && refKey) {
      dbRef.on('value', (snapshot) => {
        if (snapshot.exists()) {
          // console.log('snapshot.val()', snapshot.val())
          let val
          if (snapshot.val() && snapshot.val()[refKey]) {
            val = snapshot.val()[refKey]
          }
          // console.log('val', val)
          if (props.type === 'checkbox') {
            setChecked(val == true)
          } else if (props.type === 'radio') {
            setChecked(val === props.value)
          } else {
            setValue(val)
          }
        }
      })
    }
  }, [dbRef, refKey])
  if (props.type === 'textarea') {
    return (
      <textarea onChange={handleChange} placeholder="test" {...otherProps} disabled={props.disabled || (!dbRef || !refKey)} />
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

