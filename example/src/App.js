import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import { FirebaseInput, FirebaseForm } from 'react-firebase-input'
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
  const [config, setConfig] = useState(localStorage.getItem('config') || '')
  const [refKey, setRefKey] = useState('')
  const [err, setError] = useState('')
  const [success, setSuccess] = useState('')

  // FirebaseForm specific
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // const [radioInput, setRadioInput] = useState('')
  const updateConfigSecrets = async e => {
    setError('')
    setSuccess('')
    setConfig(e.target.value)
  }
  const handleDbRefChange = e => {
    setDbRefString(e.target.value)
  }
  const handleKeyChange = e => {
    setRefKey(e.target.value)
  }

  const updateDbRef = async (e) => {
    if (e)
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
  useEffect(() => {
    if (config) {
      localStorage.setItem('config', config)
      updateDbRef()
    }
  }, [config])

  return (
    <div style={{ padding: "10px 30px" }}>
      <a href="https://github.com/reidjs/react-firebase-input">Github Repo</a>
      <form>
        <h1>Firebase Config</h1>
        <h3>Paste your Firebase Realtime Database config JSON here</h3>
        <small>This will be saved in localStorage</small>
        <br />
        <textarea placeholder={config || exampleConfig} rows="15" cols="40" onChange={updateConfigSecrets}>
        </textarea>
        <h3>Database Reference</h3>
        <input onChange={handleDbRefChange} value={dbRefString}></input>
        <h3 style={{ color: (refKey ? '' : 'red'), marginBottom: '0' }}>Reference Key</h3>
        <small>(Not necessary for FirebaseForm)</small>
        <h3 />
        <input onChange={handleKeyChange} style={{ border: refKey ? '' : '1px solid red' }} value={refKey}></input>
        <br />
        <br />
        <h3>Update Configuration</h3>
        <button style={{ background: 'green', color: 'white', padding: '10px' }} onClick={updateDbRef}>Submit</button>

        <p style={{ color: 'red' }}>{err}</p>
        <p style={{ color: 'green' }}>{success}</p>
      </form>
      <hr />
      <h1>Components</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ul>
          <h2>Text Inputs</h2>
          <li>
            <h3>FirebaseInput</h3>
            {/* <button onClick={submitConfig}>submit configuration</button> */}
            <FirebaseInput dbRef={dbRef} refKey={refKey} placeholder="Edit text here!" />
          </li>
          <li>
            <h3>FirebaseInput[type="email"]</h3>
            <FirebaseInput type="email" dbRef={dbRef} refKey={refKey} placeholder="Edit text here!" />
          </li>
          <li>
            <h3>FirebaseInput[type="password"]</h3>
            <FirebaseInput type="password" dbRef={dbRef} refKey={refKey} placeholder="Edit text here!" />
          </li>
          <li>
            <h3>FirebaseInput[type="tel"]</h3>
            <FirebaseInput type="tel" dbRef={dbRef} refKey={refKey} placeholder="Edit text here!" />
          </li>
        </ul>
        <ul>
          <h2>Other Inputs</h2>
          <li>
            <h3>FirebaseInput[type="checkbox"]</h3>
            <div>
              <FirebaseInput type="checkbox" dbRef={dbRef} refKey={refKey} placeholder="Edit text here!" />
              <span>Sets the reference true or false</span>
            </div>
          </li>
          <li>
            <h3>FirebaseInput[type="radio"]</h3>
            <small>Sets the reference to the value of the radio button</small>
            <ul>
              <div>
                <FirebaseInput type="radio" dbRef={dbRef} refKey={refKey} value="cats" />
                <span>Cats</span>
              </div>
              <div>
                <FirebaseInput type="radio" dbRef={dbRef} refKey={refKey} value="dogs" />
                <span>Dogs</span>
              </div>
              <div>
                <FirebaseInput type="radio" dbRef={dbRef} refKey={refKey} value="lizards" />
                <span>Lizards</span>
              </div>
            </ul>
          </li>
          <li>
            <h3>FirebaseInput[type="textarea"]</h3>
            <div>
              <FirebaseInput type="textarea" dbRef={dbRef} refKey={refKey} />
            </div>
          </li>
          <li>
            <h3>FirebaseInput[type="range"]</h3>
            <div>
              <FirebaseInput type="range" dbRef={dbRef} refKey={refKey} min="0" max="100" />
            </div>
          </li>
        </ul>
        <ul>
          <h2>Forms</h2>
          <li>
            <h3>FirebaseForm</h3>
            <div>
              <FirebaseForm style={{ border: '1px solid black', padding: '15px' }} dbRef={dbRef}>
                <div>Example Form</div>
                <p></p>
                <div>Name</div>
                <input onChange={(e) => setName(e.target.value)} value={name} refkey="name" />
                <div style={{ margin: '10px 0' }}></div>
                <div>Email</div>
                <input onChange={(e) => setEmail(e.target.value)} value={email} refkey="email" type="email" />
                <p></p>
                <button>Submit</button>
              </FirebaseForm>
            </div>
          </li>
        </ul>
      </div>
      <div style={{ height: "100px" }}>

      </div>
    </div>
  )
}

export default App
