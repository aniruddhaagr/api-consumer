import React from "react";
import {BASE_URL} from '../constants'
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
    };
  }

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
        last_name: data.last_name,
        email: data.email,
      })
    })
  }

  componentDidMount(){
    this.getUserData();
  }

  render() {
    return (
      <div>
        <div>
          <label>First Name:</label>
          <label>{this.state.first_name}</label>
        </div>

        <div>
          <label>Last Name:</label>
          <lable>{this.state.last_name}</lable>
        </div>

        <div>
          <label>Email:</label>
          <lable>{this.state.email}</lable>
        </div>

      </div>
    );
  }
}

export default Profile;
