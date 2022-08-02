import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC1bJQAD0pMwDK73cDxTpA7jMxfgOmk0Iw',
  authDomain: 'twittev-c23bf.firebaseapp.com',
  projectId: 'twittev-c23bf',
  storageBucket: 'twittev-c23bf.appspot.com',
  messagingSenderId: '644002770512',
  appId: '1:644002770512:web:65e49afcb132cce0df2b55',
  measurementId: 'G-38ZGP4D8ZQ'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const mapUserFromFirebaseAuthToUser = (user) => {
  if (!user) return null

  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const authStateChanged = (onChange) => {
  return onAuthStateChanged(auth, user => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user)
    onChange(normalizedUser)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new GithubAuthProvider()
  return signInWithPopup(auth, githubProvider)
}
