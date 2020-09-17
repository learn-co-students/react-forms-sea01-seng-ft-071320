// src/components/ParentComponent
import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'
 
class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    message: ""
  }
 
  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }
 
  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }


  handleChange = event =>{
    this.setState({
      [event.target.name]: event.target.value})
  }



  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }
 
  render() {
    return (
      <div>

        <Form
          formData={this.state}
          handleChange={this.handleChange}
          handleMessageChange={this.handleMessageChange}
          />
        <DisplayData formData={this.state}/>

      </div>
    )
  }
}
 
export default ParentComponent;