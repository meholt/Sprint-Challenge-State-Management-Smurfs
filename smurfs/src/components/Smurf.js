import React from 'react';

const Smurf = ( { smurf } ) => {

    return (
        <div>
            <h3>Name: {smurf.name}</h3>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}</h4>
        </div>
    );
}

export default Smurf;