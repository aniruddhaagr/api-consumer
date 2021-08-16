import React from "react";
import {BASE_URL} from '../constants'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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

    fetch(`${BASE_URL}users/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
