import React, { Component } from 'react'
import { Link } from 'gatsby'

import { ProjectContext } from '../../contexts/projectContext'
import Spinner from '../styledComponents/loaders'

class ProjectDetails extends Component {
  static contextType = ProjectContext

  componentDidMount() {
    const { getProject } = this.context

    getProject(this.props.id)
  }

  render() {
    let cardContent = (
      <>
        <div className="card-content">
          <span className="card-title">Error</span>
          <p>Project not found.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>
            <Link to="/">Return to dashboard</Link>
          </div>
        </div>
      </>
    )

    if (this.context.loading) {
      cardContent = (
        <div className="card-content">
          <Spinner dark />
        </div>
      )
    }
    const { selectedProject } = this.context

    if (selectedProject) {
      const {
        title,
        content,
        authorFirstName,
        authorLastName,
      } = selectedProject

      cardContent = (
        <>
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
        </>
      )
    }

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">{cardContent}</div>
      </div>
    )
  }
}

export default ProjectDetails
