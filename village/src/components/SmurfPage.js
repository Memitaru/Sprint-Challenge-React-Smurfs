import React from 'react';

const SmurfPage = props => {
    const id = props.match.params.id;
    const smurf = props.smurfs.find(smurf => `${smurf.id}` === id)
    console.log(smurf)
  return (
    <div className="Smurf">
    smurf
      {/* <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p> */}
      
    </div>
  );
};

export default SmurfPage;
