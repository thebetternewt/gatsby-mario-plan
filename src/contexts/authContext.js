import React, { Component, createContext } from 'react'
import { navigate } from '@reach/router'
import { auth, store } from '../config/fbConfig'

export const AuthContext = createContext()

class AuthProvider extends Component {
  static contextType = AuthContext

  getInitState = () => {
    if (typeof window !== 'undefined') {
      return {
        loaded: false,
        loading: false,
        isAuth: false,
        profile: false,
        error: null,
        signIn: credentials => this.signIn(credentials),
        signOut: () => this.signOut(),
        signUp: newUser => this.signUp(newUser),
        getUser: () => auth.currentUser,
      }
    } else {
      return {
        signIn: () => null,
        signOut: () => null,
        signUp: () => null,
        getUser: () => null,
      }
    }
  }

  state = this.getInitState()

  componentDidMount() {
    // Check auth loaded state before displaying nav links
    auth.onAuthStateChanged(async user => {
      if (user) {
        // if user exists sign-in!
        console.log('Signing in user...')
        auth.updateCurrentUser(user).then(async () => {
          // Get profile data
          const profile = await this.getUserProfile(user)
          console.log('Success!')
          this.setState({ isAuth: true, loaded: true, profile })
        })
      } else {
        console.log('No user...')
        // otherwise sign-out!
        this.signOut()
        this.setState({ isAuth: false, loaded: true, profile: null })
      }
    })
  }

  signIn = async credentials => {
    this.setState({ loading: true, error: null })

    try {
      // sign in user
      const { email, password } = credentials
      await auth.signInWithEmailAndPassword(email, password)
      const profile = await this.getUserProfile(auth.currentUser)
      console.log('profile', profile)

      console.log('Successfully logged in!')
      this.setState({ loading: false, isAuth: true, profile })
      navigate('/')
    } catch (err) {
      console.error('auth error:', err)
      this.setState({ error: err, loading: false, profile: null })
    }
  }

  signOut = async () => {
    this.setState({ loading: true, error: null })

    // sign out user
    await auth.signOut()

    this.setState({ loading: false, isAuth: false, profile: null })
    console.log('Successfully logged out!')
  }

  getUserProfile = async user => {
    const profile = await store
      .collection('users')
      .doc(user.uid)
      .get()

    return profile.data()
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }

  signUp = async newUser => {
    this.setState({ loading: true, error: null })

    try {
      // sign up user
      const { email, password, firstName, lastName } = newUser
      const userCred = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      const profile = await store
        .collection('users')
        .doc(userCred.user.uid)
        .set({ firstName, lastName, initials: firstName[0] + lastName[0] })

      console.log('Successfully signed up!')
      this.setState({ loading: false, isAuth: true, profile: profile.data() })
      navigate('/')
    } catch (err) {
      console.error('signup error:', err)
      this.setState({ error: err, loading: false })
    }
  }
}

export default AuthProvider
