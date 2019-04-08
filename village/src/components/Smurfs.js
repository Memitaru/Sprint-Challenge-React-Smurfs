import React, { Component } from 'react';
import styled from 'styled-components'

import Smurf from './Smurf';

const SmurfsVillage = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <SmurfsVillage>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </SmurfsVillage>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
