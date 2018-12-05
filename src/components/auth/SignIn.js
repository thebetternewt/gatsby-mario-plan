import React, { Component } from 'react'

import { AuthContext } from '../../contexts/authContext'
import { Form } from '../styledComponents/forms'
import Spinner from '../styledComponents/loaders'

class SignIn extends Component {
  static contextType = AuthContext

  state = {
    email: '',
    password: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { signIn } = this.context
    const { email, password } = this.state
    signIn({ email, password })
  }

  render() {
    const { loading, error } = this.context

    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Log In</h5>
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
          {loading ? (
            <Spinner dark />
          ) : (
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Log in</button>
            </div>
          )}
          {error && <div className="red-text center">{error.message}</div>}
        </Form>
      </div>
    )
  }
}

export default SignIn
