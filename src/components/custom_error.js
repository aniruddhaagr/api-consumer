import React from "react";
class CustomError extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='error col-md-12'>
          {this.props.error}
      </div>
    );
  }
}

export default CustomError;
