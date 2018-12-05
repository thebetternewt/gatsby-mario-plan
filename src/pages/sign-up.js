import React from 'react'
import { Redirect } from '@reach/router'

import SignUp from '../components/auth/SignUp'
import Layout from '../components/layout/Layout'
import { AuthContext } from '../contexts/authContext'

const SignUpPage = () => (
  <AuthContext.Consumer>
    {({ getUser }) => {
      if (getUser()) {
        return <Redirect noThrow to="/" />
      }
      return (
        <Layout>
          <SignUp />
        </Layout>
      )
    }}
  </AuthContext.Consumer>
)

export default SignUpPage
