import { Link } from 'gatsby'
import React from 'react'

const SignedInLinks = ({ signOut, profile }) => (
  <ul className="right">
    <li>
      <Link to="/create">New Project</Link>
    </li>
    <li>
      <button
        onClick={signOut}
        style={{
          background: 'transparent',
          color: 'inherit',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </li>
    <li>
      <Link to="/" className="btn btn-floating pink lighten-1">
        {profile.initials}
      </Link>
    </li>
  </ul>
)

export default SignedInLinks
