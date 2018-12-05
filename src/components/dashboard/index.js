import React, { Component } from 'react'

import Notifications from './Notifications.'
import ProjectList from '../projects/ProjectList'
import Spinner from '../styledComponents/loaders'

import { ProjectContext } from '../../contexts/projectContext'

export default class Dashboard extends Component {
  static contextType = ProjectContext

  componentDidMount = () => {
    this.context.getProjects()
  }

  render() {
    const { projects, loading } = this.context

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {loading ? <Spinner /> : <ProjectList projects={projects} />}
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}
