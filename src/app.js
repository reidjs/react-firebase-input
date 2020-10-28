import React, { useState, useEffect } from "react";
import { FirebaseTextInput } from './input'
import { hot } from "react-hot-loader";
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBGVF0Yf_IEvQT3cvt01JO-pE6FMjafCAw",
  authDomain: "test-d8283.firebaseapp.com",
  databaseURL: "https://test-d8283.firebaseio.com",
  projectId: "test-d8283",
  storageBucket: "test-d8283.appspot.com",
  messagingSenderId: "873011175747",
  appId: "1:873011175747:web:a7066a6062c881d3bb4ff6"
};
const instance = firebase.initializeApp(firebaseConfig);

const App  = (props) => {

  // Initialize Firebase
  // const [db, setDb] = useState(null)
  // console.log('finstance', instance)
  // const a = instance.database.ref('test-d8283/')
  // console.log('a', a)

  // useEffect(() => {
  //   if (instance) {
  //     console.log('instance.database', instance)
  //   }
  // }, [instance])
  const [dbRef, setDbRef] = useState(null)
  // const instance = props.instance
  // console.log('instance', instance)
  useEffect(() => {
    if (instance) {
      const db = firebase.database()
      const r = db.ref('/')
      setDbRef(r)
    }
  }, [instance])
  return (
    <FirebaseTextInput dbRef={dbRef} refKey="foo" placeholder="hi"/>
  )
}
// const FirebaseTextInput = hot(module)(Text)


// export default App
export default hot(module)(App)