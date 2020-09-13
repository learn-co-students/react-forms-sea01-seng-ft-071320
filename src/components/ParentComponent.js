import React, { Component } from "react";
import Form from "./Form";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData formData={this.state} />
      </div>
    );
  }

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
}

export default ParentComponent;
