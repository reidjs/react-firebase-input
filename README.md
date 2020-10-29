# react-firebase-input

> Sync inputs from your react app with your firebase realtime database.

🎉Now Supports Forms🎉  

See how it works:  
[Live Example](https://reidjs.github.io/react-firebase-input/)


[![NPM](https://img.shields.io/npm/v/react-firebase-input.svg)](https://www.npmjs.com/package/react-firebase-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
npm  
```bash
npm install --save react-firebase-input
```

yarn  
```bash
yarn add react-firebase-input
```

## Usage

#### Inputs
- FirebaseInput

```jsx
import React from 'react'
import firebaseDbInstance from '../your-project'
import { FirebaseInput }from 'react-firebase-input'

const Example = () => {
  const dbRef = firebaseDbInstance.ref('/school')

  return (
    <FirebaseInput
      dbRef={dbRef} 
      refKey="name"
      type="text"
    />
  )
}

```

Supports the following types 
- text 
- textarea
- radio
- checkbox
- number
- range
- password
- email
- tel

#### Forms
- FirebaseForm needs the dbRef instance as a prop
- Every input needs a refkey and a value prop

```jsx
import React, { useState } from 'react'
import firebaseDbInstance from '../your-project'
import { FirebaseForm }from 'react-firebase-input'

const Example = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const dbRef = firebaseDbInstance.ref('/user')

  return (
    <FirebaseForm dbRef={dbRef}>
      <div>Example Form</div>
      <div>Name</div>
      <input onChange={(e) => setName(e.target.value)} value={name} refkey="name" />
      <div>Email</div>
      <input onChange={(e) => setEmail(e.target.value)} value={email} refkey="email" type="email" />
      <button>Submit</button>
    </FirebaseForm>
  )
}
```

## TODO

- [ ] Support date type
- [ ] Forms should support checkboxes, radiobuttons

## License

MIT © [reidjs](https://github.com/reidjs)
