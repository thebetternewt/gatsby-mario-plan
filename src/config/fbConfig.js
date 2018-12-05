import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGE_SENDER_ID,
}
firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

let store, auth

if (typeof window !== 'undefined') {
  store = firebase.firestore()
  auth = firebase.auth()
}

export { store, auth }
export default firebase
