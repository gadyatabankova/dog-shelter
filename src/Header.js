import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import AuthButton from '../src/AuthButton'

class Header extends Component {
  render () {
    return (
      <div>
        <AuthButton />
        <ul>
          <li><Link to='/today'>Today</Link></li>
          <li><Link to='/animals'>Animals</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header;
