import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import { fakeAuth } from '../src/fakeAuth'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  login = (ev) => {
    ev.preventDefault();
    if (this.state.username === 'Admin' && this.state.password === 'Qwerty!123') {
      fakeAuth.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
      });
    } else {
      alert('Имя пользователя или пароль введены не верно');
      this.setState({
        username: '',
        password: ''
      })
    }
  }

  handleChange(ev) {
    const name = ev.target.name;
    const value = ev.target.value;

    this.setState({[name]: value});
  }

  render () {
    const { redirectToReferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (redirectToReferrer === true) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <p>You must log in to view this page at {from.pathname}</p>
        <form onSubmit={this.login}>
          <label><input
            name='username'
            type='text'
            placeholder='User name'
            value={this.state.username}
            onChange={this.handleChange} /></label>
          <label><input
            name='password'
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange} /></label>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default Login;
