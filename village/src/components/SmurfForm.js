import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  align-items: center;
  margin: 20px auto;
`

const Input = styled.input`
  margin-bottom: 10px;
  border: 1px solid #002A32;
  padding: 10px;
`

const AddButton = styled.button`
  margin-top: 10px;
  background-color: #002A32;
  color: white;
  border: none;
  padding: 15px;
`

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    axios 
      .post('http://localhost:3333/smurfs', this.state)
      .then(res => {
        this.props.updateList(res.data);
        this.props.history.push('/');
      })
      .catch(err => {alert(err.response.data.Error)})

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <h2>Add New Smurf</h2>
        <Form onSubmit={this.addSmurf}>
          <Input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <AddButton type="submit">Add to the village</AddButton>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
