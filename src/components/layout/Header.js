import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { AuthContext } from '../../contexts/authContext'

const Header = ({ siteTitle }) => (
  <AuthContext.Consumer>
    {context => {
      const { loaded, getUser, signOut, profile } = context
      console.log(context)

      const links = getUser() ? (
        <SignedInLinks signOut={signOut} profile={profile} />
      ) : (
        <SignedOutLinks />
      )

      return (
        <nav className="nav-wrapper grey darken-3">
          <div className="container">
            <Link to="/" className="brand-logo">
              {siteTitle}
            </Link>
            {loaded && links}
          </div>
        </nav>
      )
    }}
  </AuthContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
