import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import Layout from '../components/layout/Layout'

const ProjectDetails = props => {
  console.log(props.data)
  console.log(props)

  const { title, content, authorFirstName, authorLastName } = props.data.project

  return (
    <Layout>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {authorFirstName} {authorLastName}
            </div>
            <div>14th November, 4pm</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query($id: String!) {
    project(id: { eq: $id }) {
      id
      title
      content
      authorLastName
      authorFirstName
      createdAt
    }
  }
`
