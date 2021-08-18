import React from "react";
import {BASE_URL} from '../constants'

class SignOut extends React.Component {
  constructor(props) {
    super(props);
    this.displayText = this.displayText.bind(this);
    this.singOutUser = this.singOutUser.bind(this);
  }

  displayText(){
    return localStorage.getItem("signed-in") == 'true' ? 'Procesing' : 'Signed out succefully';
  }

  //Send request to invalidate or remove auth_token
  singOutUser(){
    fetch(`${BASE_URL}user/sign_out`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem("auth_token"),
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      localStorage.removeItem("auth_token")
      localStorage.removeItem("logged-in")
      this.props.history.push('/');
    })
  }

  componentDidMount(){
    this.singOutUser();
  }

  render() {
    return (
      <div>
        {this.displayText()}
      </div>
    );
  }
}

export default SignOut;
