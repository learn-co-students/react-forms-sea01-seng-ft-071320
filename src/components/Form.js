import React from 'react';
 
class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          {/* <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          /> */}
{/* 
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          /> */}
          
          <input
            type="text"
            name="firstName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input 
            type="text"
            name="lastName"
            // value={this.state.lastName}
          />


          <input 
            type="textearea"
            onChange={event => this.props.handleMessageChange(event)}
            value={this.props.formData.message}
          />
        </form>
      </div>
    )
  }
}
 
export default Form;