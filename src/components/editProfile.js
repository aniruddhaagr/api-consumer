import React from "react";
import {BASE_URL} from '../constants'
class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {},
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirstName(event) {this.setState({first_name: event.target.value}); }
  handleChangeLastName(event) {this.setState({last_name: event.target.value}); }
  handleChangeEmail(event) {this.setState({email: event.target.value}); }

  getUserData(){
    fetch(`${BASE_URL}user/profile`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem("auth_token"),
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        first_name: data.first_name,
        last_name: data.first_name,
        email: data.email,
      })
    })
  }

  componentDidMount(){
    this.getUserData();
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`${BASE_URL}user`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem("auth_token"),
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(data => {
      this.props.history.push('/');
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
          <input type="submit" value="Submit" />
        </div>

      </form>
    );
  }
}

export default EditProfile;
