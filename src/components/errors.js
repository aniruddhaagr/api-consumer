import React from "react";
import CustomError from './custom_error';
class Errors extends React.Component {
  constructor(props) {
    super(props);
    this.displayError = this.displayError.bind(this);
  }

  displayError() {
    if (this.props.errorMessages) {
      return this.props.errorMessages.map((err, index) => <CustomError error={err} key={index}/>)
    }
    return []
  }

  render() {
    return (
      <div className='errors row col-md-12'>
        {this.displayError()}
      </div>
    );
  }
}

export default Errors;
