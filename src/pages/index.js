import React from 'react'
import { Redirect } from '@reach/router'

import Layout from '../components/layout/Layout'
import ProjectProvider from '../contexts/projectContext'
import Dashboard from '../components/dashboard'
import { AuthContext } from '../contexts/authContext'

const DashboardPage = () => (
  <AuthContext.Consumer>
    {({ getUser }) => {
      if (!getUser()) {
        return <Redirect noThrow to="/sign-in" />
      }
      return (
        <Layout>
          <ProjectProvider>
            <Dashboard />
          </ProjectProvider>
        </Layout>
      )
    }}
  </AuthContext.Consumer>
)

export default DashboardPage
