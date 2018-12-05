import React, { Component } from 'react'

import { AuthContext } from '../../contexts/authContext'
import { Form } from '../styledComponents/forms'
import Spinner from '../styledComponents/loaders'

class SignUp extends Component {
  static contextType = AuthContext

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { signUp } = this.context

    signUp(this.state)
  }

  render() {
    const { loading, error } = this.context

    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={this.handleChange}
            />
          </div>
          {loading ? (
            <Spinner dark />
          ) : (
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            </div>
          )}
          {error && <div className="red-text center">{error.message}</div>}
        </Form>
      </div>
    )
  }
}

export default SignUp
