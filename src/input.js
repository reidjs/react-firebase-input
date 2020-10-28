
import React, { Component, useEffect, useState } from "react";

import { hot } from "react-hot-loader";


export const FirebaseTextInput  = (props) => {
  // console.log('finstance', instance)
  // const a = instance.database.ref('test-d8283/')
  // console.log('a', a)

  // useEffect(() => {
  //   if (instance) {
  //     console.log('instance.database', instance)
  //   }
  // }, [instance])

  // on mount get data from FB
  // on change 
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
          const val = snapshot.val()[refKey ]
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