import React from 'react';
import Form from './Form';
import DisplayData from './DisplayData';

class ParentComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Form formData={this.state}handleChange={this.handleChange} />
            <DisplayData formData={this.state} />
        )
    }
}