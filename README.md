# react-firebase-input

> Sync inputs from your react app with your firebase realtime database.

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

```jsx
import React from 'react'
import firebaseDbInstance from '../your-project'
import { FirebaseTextInput }from 'react-firebase-input'

const Example = () => {
  const dbRef = firebaseDbInstance.ref('/school/grade5/')

  return (
    <FirebaseTextInput
    dbRef={dbRef} 
    refKey="students"/>
  )
}

```

## TODO
- [ ] Form with multiple reference keys input that updates firebase DB on submit

## License

MIT © [reidjs](https://github.com/reidjs)
