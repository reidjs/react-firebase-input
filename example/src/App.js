import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import { FirebaseTextInput } from 'react-firebase-input'
import 'react-firebase-input/dist/index.css'

const exampleConfig = `{
  "apiKey": "YOURAPIKEY",
  "authDomain": "PROJECTID.firebaseapp.com",
  "databaseURL": "https://PROJECTID.firebaseio.com",
  "projectId": "PROJECTID",
  "storageBucket": "PROJECTID.appspot.com",
  "messagingSenderId": "873011175747",
  "appId": "1:873011175747:web:a7066a6062c881d3bb4ff6"
}`
// const instance = firebase.initializeApp(firebaseConfig);
const App = () => {
  // let instance
  // let db
  const [dbRef, setDbRef] = useState(null)
  const [db, setDb] = useState(null)
  const [dbRefString, setDbRefString] = useState('/')
  const [config, setConfig] = useState({})
  const [refKey, setRefKey] = useState('')
  const [err, setError] = useState('')
  const [success, setSuccess] = useState('')
  const updateConfigSecrets = async e => {
    setError('')
    setSuccess('')

    // console.log('e.target.value', e.target.value)
    setConfig(e.target.value)
    // updateDbRef()
    // const raw = e.target.value
    // try {
    //   const c = JSON.parse(raw)
    //   instance = await firebase.initializeApp(c);
    //   db = firebase.database()
    //   const r = db.ref(dbRefString)
    //   setDbRef(r)
    //   setSuccess('Success.')
    // } catch (err) {
    //   // console.log('err', err.message)
    //   setError(err.message)
    // }
  }
  const handleDbRefChange = e => {
    // setError('')
    // setSuccess('')
    setDbRefString(e.target.value)
    // let r
    // try {
    //   r = db.ref(e.target.value)
    //   setDbRef(r)
    // } catch (err) {
    //   setError(err.message)
    // }
  }
  const handleKeyChange = e => {
    setRefKey(e.target.value)
  }

  const updateDbRef = async (e) => {
    e.preventDefault()
    try {
      const c = JSON.parse(config)
      if (!db) {
        await firebase.initializeApp(c);
        const t = firebase.database()
        setDb(t)
        setDbRef(t.ref(dbRefString))
      } else {
        const r = db.ref(dbRefString)
        setDbRef(r)
      }
      setSuccess('Success.')
    } catch (err) {
      setError(err.message)
    }
  }
  // useEffect(() => {
  //   if (instance) {
  //     const db = firebase.database()
  //     const r = db.ref('/')
  //     setDbRef(r)
  //   }
  // }, [instance])
  return (
    <div style={{ padding: "10px 30px" }}>
      <form>
        <h1>Firebase Config</h1>
        <h3>Paste your Firebase Realtime Database config JSON here</h3>
        <textarea placeholder={exampleConfig} rows="15" cols="40" onChange={updateConfigSecrets}>
        </textarea>
        <h3>Database Reference</h3>
        <input onChange={handleDbRefChange} value={dbRefString}></input>
        <h3>Reference Key</h3>
        <input onChange={handleKeyChange} value={refKey}></input>
        <br />
        <br />
        <button onClick={updateDbRef}>Update DB Configuration</button>

        <p style={{ color: 'red' }}>{err}</p>
        <p style={{ color: 'green' }}>{success}</p>
      </form>
      <hr />
      <h1>Components</h1>
      <ul>
        <li>
          <h2>FirebaseTextInput</h2>
          {/* <button onClick={submitConfig}>submit configuration</button> */}
          <FirebaseTextInput dbRef={dbRef} refKey={refKey} placeholder="Create React Library Example 😄" />
        </li>
      </ul>
      <div style={{ height: "900px" }}>

      </div>
    </div>
  )
}

export default App
