import React from 'react'
import { Router, Redirect } from '@reach/router'

import Layout from '../../components/layout/Layout'
import ProjectDetails from '../../components/projects/ProjectDetails'
import { AuthContext } from '../../contexts/authContext'

const ProjectsPage = () => {
  const ProjectNotFound = () => <Redirect noThrow to="/" />

  return (
    <AuthContext.Consumer>
      {({ getUser }) => {
        if (!getUser()) {
          return <Redirect noThrow to="/sign-in" />
        }
        return (
          <Layout>
            <Router>
              <ProjectNotFound path="project" />
              <ProjectDetails path="project/:id" />
            </Router>
          </Layout>
        )
      }}
    </AuthContext.Consumer>
  )
}

export default ProjectsPage
