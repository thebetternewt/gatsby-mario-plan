import React, { Component } from 'react'

import { Form } from '../styledComponents/forms'
import Spinner from '../styledComponents/loaders'
import { ProjectContext } from '../../contexts/projectContext'

class CreateProject extends Component {
  static contextType = ProjectContext

  state = {
    title: '',
    content: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { title, content } = this.state
    const { createProject } = this.context

    createProject({ title, content })
  }

  render() {
    const { loading } = this.context
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              onChange={this.handleChange}
              className="materialize-textarea"
            />
          </div>
          {loading ? (
            <Spinner dark />
          ) : (
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">
                Create Project
              </button>
            </div>
          )}
        </Form>
      </div>
    )
  }
}

export default CreateProject
