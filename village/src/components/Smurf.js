import React from 'react';
import styled from 'styled-components';

const SmurfContainer = styled.div`
  border: 1px solid #002A32;
  width: 300px;
  margin: 10px;
`

const DeleteButton = styled.button`
  margin-bottom: 15px;
  border: 1px solid #002A32;
  background-color: #002A32;
  color: white;
  height: 30px;
  cursor: pointer;
  padding: 0 15px;
  &:hover{
    border: 2px solid #00D6D6;
  }
`

const Smurf = props => {
  return (
    <SmurfContainer>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <DeleteButton onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</DeleteButton>
    </SmurfContainer>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
