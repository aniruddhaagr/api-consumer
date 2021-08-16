import React from "react";
import {BASE_URL} from '../constants'
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirstName(event) {this.setState({first_name: event.target.value}); }
  handleChangeLastName(event) {this.setState({last_name: event.target.value}); }
  handleChangeEmail(event) {this.setState({email: event.target.value}); }
  handleChangePassword(event) {this.setState({password: event.target.value}); }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)

    fetch(`${BASE_URL}users`, {
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
          <label>First Name:</label>
          <input type="text" value={this.state.first_name} onChange={this.handleChangeFirstName} />
        </div>

        <div>
          <label>Last Name:</label>
          <input type="text" value={this.state.last_name} onChange={this.handleChangeLastName} />
        </div>

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

export default Register;
