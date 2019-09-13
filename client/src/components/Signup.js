import React from 'react';
import $ from 'jquery';
import '../stylesheets/login.scss';

export default class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errors: []
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    $("login-errors").empty();

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/auth',
      data: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      },
      success: (response, status, jqXHR) => {
        debugger;
        sessionStorage.setItem('user',
          JSON.stringify({
            'access-token': jqXHR.getResponseHeader('access-token'),
            client: jqXHR.getResponseHeader('client'),
            uid: response.data.uid
          })
        );
  // use headers: JSON.parse(sessionStorage.user) in ajax calls to api
        this.props.history.push('/');
      },
      error: resp => {
        debugger;
        this.setState({errors: resp.responseJSON.errors.full_messages})
      }
    })
  }

  renderErrors = () => {
    return (
      <div id="login-errors" className="errors">
        {
          this.state.errors.map((error, i) => {
            return <li key={i}>{error}</li>
          })
        }
      </div>
    )
  }

  render () {
    return (
      <div>
        <h2>Sign Up</h2>
        {this.state.errors.length > 0 ? this.renderErrors() : null}
        <form onSubmit={this.handleLogin} >
          <label htmlFor="name">Name: </label>
            <input name="name" value={this.state.name} onChange={this.handleChange} /><br />
          <label htmlFor="email">Email: </label>
            <input name="email" value={this.state.email} onChange={this.handleChange} /><br />
          <label htmlFor="password">Password: </label>
            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} /><br />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}