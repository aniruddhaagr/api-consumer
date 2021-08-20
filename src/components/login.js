import React from "react";

import Errors from './errors'

import {BASE_URL} from '../constants'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: [],
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {this.setState({email: event.target.value}); }
  handleChangePassword(event) {this.setState({password: event.target.value}); }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)

    fetch(`${BASE_URL}user/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(response => {
      if (response.ok) {
        return response.json()  
      } else {
        return Promise.reject(response) 
      }
    })
    .then(data => {
        localStorage.setItem("auth_token", data.auth_token)
        localStorage.setItem("logged-in", true)
        this.props.history.push('/');
    })
    .catch(errors => {
      errors.json().then(err => this.setState({errors: err.message}))
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        { !!this.state.errors.length &&
          <Errors errorMessages={this.state.errors}/>
        }
        <div>
          <label>Email:</label>
          <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>

      </form>
    );
  }
}

export default Login;
