import React, { Component, createContext } from 'react'
import { auth, store } from '../config/fbConfig'

import AuthProvider from './authContext'
import { navigate } from '@reach/router'

export const ProjectContext = createContext()

class ProjectProvider extends Component {
  static contextType = ProjectContext

  state = {
    loading: false,
    projects: null,
    notifications: null,
    selectedProject: null,
    error: null,
    getProjects: () => this.getProjects(),
    getProject: id => this.getProject(id),
    createProject: projectData => this.createProject(projectData),
    getNotifications: () => this.getNotifications(),
  }

  // componentDidMount = async () => {
  //   await this.getProjects()
  //   await this.getNotifications()
  // }

  getProjects = async () => {
    // get projects from db
    this.setState({ loading: true })

    try {
      // Listen to collection changes and update state when project collection changes
      store
        .collection('projects')
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
          const projectsArray = []

          snap.forEach(doc => {
            projectsArray.push({ ...doc.data(), id: doc.id })
          })

          this.setState({ projects: projectsArray, loading: false })
        })
    } catch (err) {
      console.error(err)
      this.setState({ error: err, loading: false })
    }
  }

  getNotifications = async () => {
    // get projects from db
    this.setState({ loading: true })

    try {
      // Listen to collection changes and update state when notification collection changes
      // TODO: only append new notifications instead of reading entire collection on every update:
      // https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots

      store
        .collection('notifications')
        .orderBy('time', 'desc')
        .limit(3)
        .onSnapshot(snap => {
          const notificationsArray = []

          snap.forEach(doc => {
            notificationsArray.push({ ...doc.data(), id: doc.id })
          })

          this.setState({ notifications: notificationsArray, loading: false })
        })
    } catch (err) {
      console.error(err)
      this.setState({ error: err, loading: false })
    }
  }

  getProject = async id => {
    console.log(`Getting project ${id}`)
    // get projects from db
    this.setState({ selectedProject: null, loading: true })

    try {
      // Fetch document
      const project = await store
        .collection('projects')
        .doc(id)
        .get()
      console.log('project:', project)

      this.setState({ selectedProject: project.data(), loading: false })
    } catch (err) {
      console.error(err)
      this.setState({ error: err, loading: false })
    }
  }

  createProject = async projectData => {
    console.log('creating new project: ', projectData)
    this.setState({ loading: true })

    try {
      // Get profile information
      // TODO: Somehow do this without a db query
      const authProvider = new AuthProvider()
      const user = auth.currentUser
      const profile = await authProvider.getUserProfile(user)

      // Create project
      await store.collection('projects').add({
        ...projectData,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: user.uid,
        createdAt: new Date(),
      })

      this.setState({ loading: false })

      // Redirect to dashboard
      navigate('/')
    } catch (err) {
      console.error(err)
      this.setState({ error: err, loading: false })
    }
  }

  render() {
    return (
      <ProjectContext.Provider value={this.state}>
        {this.props.children}
      </ProjectContext.Provider>
    )
  }
}

export default ProjectProvider
