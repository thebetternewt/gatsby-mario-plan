import React from 'react'
import { Redirect } from '@reach/router'

import Layout from '../components/layout/Layout'
import CreateProject from '../components/projects/CreateProject'
import ProjectProvider from '../contexts/projectContext'
import { AuthContext } from '../contexts/authContext'

const NewProjectPage = () => (
  <AuthContext.Consumer>
    {({ getUser }) => {
      if (!getUser()) {
        return <Redirect noThrow to="/sign-in" />
      }
      return (
        <Layout>
          <ProjectProvider>
            <CreateProject />
          </ProjectProvider>
        </Layout>
      )
    }}
  </AuthContext.Consumer>
)

export default NewProjectPage
