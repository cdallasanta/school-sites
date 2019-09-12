import React from 'react';

export default class Login extends React.Component {
  state = {
    email: "test123@example.com",
    password: "password"
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/auth/sign_in', {
      method: 'POST',
      body: {
        email: this.state.email,
        password: this.state.password
      }
    })
    .then((response, status, jqXHR) => {
      debugger;
      sessionStorage.setItem('user',
        JSON.stringify({
          'access-token': jqXHR.getResponseHeader('access-token'),
          client: jqXHR.getResponseHeader('client'),
          uid: response.data.uid
        })
      );
      this.props.history.push('/');
    })
  }

  render () {
    return (
      <div>
        <h2>Sign in</h2>
        <form onSubmit={this.handleLogin} >
          <input name="email" value={this.state.email} onChange={this.handleChange} />
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}