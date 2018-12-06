import React, { Component } from 'react'

import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import Spinner from '../styledComponents/loaders'

import { ProjectContext } from '../../contexts/projectContext'

export default class Dashboard extends Component {
  static contextType = ProjectContext

  componentDidMount = () => {
    console.log('Dashboard mounted...')
    this.context.getProjects()
    this.context.getNotifications()
    console.log(this.context)
  }
  componentDidUpdate = () => {
    console.log('Dashboard updated...')
    console.log(this.context)
  }

  render() {
    const { projects, notifications, loading } = this.context

    return (
      <div className="dashboard container">
        <div className="row">
          <div
            className="col s12 m6"
            style={{ maxHeight: '80vh', overflow: 'scroll' }}
          >
            {loading ? <Spinner /> : <ProjectList projects={projects} />}
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}
