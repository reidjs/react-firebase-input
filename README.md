# Goal
Export HTML5 inputs in react that sync to and from firebase

Props
firebaseRef
  - reference to the firebase obj (database.ref('foo/'))
refKey
  - value to update under the reference

On Component Mount
- Pull in value from firebase and set as current value

On Value Change (local)
- Update local value

On Value Change (in firebase)
- Update local value


## React Component Usage:
<FirebaseInputText firebaseRef={firebaseRef} refKey={firebaseRefKey} className="foo" placeholder="hello" style={{width: '100%'}} />

## DOM output:
<input type="text" className="foo" placeholder="hello" value="" style="width: 100%">

## TODO
<FirebaseInputNumber />
<FirebaseInputCheckbox />