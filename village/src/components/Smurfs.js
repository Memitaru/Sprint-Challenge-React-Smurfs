import React, { Component } from 'react';
import styled from 'styled-components'

import Smurf from './Smurf';

const SmurfsVillage = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Image = styled.img`
  width: 400px;
`

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Image src="https://vignette.wikia.nocookie.net/smurfs/images/0/07/Smurf_Village_Comic_Books.jpg/revision/latest?cb=20120417231142" alt="smurf village" />
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
