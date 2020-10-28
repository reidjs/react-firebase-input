import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

export const FirebaseTextInput  = (props) => {
  const [value, setValue] = useState(null)
  const { dbRef, refKey } = props
  const handleChange = e => {
    // console.log('e', e)
    if (dbRef && refKey) {
      const obj = {}
      obj[refKey] = e.target.value
      dbRef.update(obj)
    }
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
          setValue(val)
        }
      })
    }
  }, [dbRef, refKey])

  return (
    <input onChange={handleChange} value={value} {...otherProps}></input>
  )
}

