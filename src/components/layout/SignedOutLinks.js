import { Link } from 'gatsby'
import React from 'react'

const SignedOutLinks = () => (
  <ul className="right">
    <li>
      <Link to="/sign-up">Sign Up</Link>
    </li>
    <li>
      <Link to="/sign-in">Log In</Link>
    </li>
  </ul>
)

export default SignedOutLinks
