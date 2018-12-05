import React from 'react'
import { Redirect } from '@reach/router'

import SignIn from '../components/auth/SignIn'
import Layout from '../components/layout/Layout'
import { AuthContext } from '../contexts/authContext'

const SignInPage = () => (
  <AuthContext.Consumer>
    {({ getUser }) => {
      if (getUser()) {
        return <Redirect noThrow to="/" />
      }
      return (
        <Layout>
          <SignIn />
        </Layout>
      )
    }}
  </AuthContext.Consumer>
)

export default SignInPage
