import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import {SignedInStack, SignOutStack} from './navigation'
import {firebase} from './firebase'


const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const userHandler = user => user ? setCurrentUser(user) : setCurrentUser(null)
  useEffect(() => {
  const unsubscribe =  firebase.auth().onAuthStateChanged(user => userHandler(user))
  return unsubscribe
  }, 
  [])
  return <>{currentUser ? <SignedInStack/> : <SignOutStack/>}</>
}

export default AuthNavigation

{/*Firebase's onAuthStateChanged method can be used to detect changes in authentication state. When the component starts up, the currentUser state variable is initialized based on the current authentication state. CurrentUser is updated with the user object if a user is signed in; otherwise, it is set to null. This enables the component to render different stacks (SignedInStack or SignOutStack) depending on the user's authentication status.*/ }