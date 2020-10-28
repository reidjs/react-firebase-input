import React, { Component, useEffect } from "react";
import firebase from 'firebase/app';
import 'firebase/database';

import { hot } from "react-hot-loader";

const firebaseConfig = {
  apiKey: "AIzaSyBGVF0Yf_IEvQT3cvt01JO-pE6FMjafCAw",
  authDomain: "test-d8283.firebaseapp.com",
  databaseURL: "https://test-d8283.firebaseio.com",
  projectId: "test-d8283",
  storageBucket: "test-d8283.appspot.com",
  messagingSenderId: "873011175747",
  appId: "1:873011175747:web:a7066a6062c881d3bb4ff6"
};
// Initialize Firebase
const instance = firebase.initializeApp(firebaseConfig);


const Text  = (props) => {

  console.log('instance', instance)
  // const a = instance.database.ref('test-d8283/')
  // console.log('a', a)

  // useEffect(() => {
  //   if (instance) {
  //     console.log('instance.database', instance.database)
  //   }
  // }, [instance])
  return (
    <input {...props}></input>
  )
}
const FirebaseTextInput = hot(module)(Text)


export { FirebaseTextInput }