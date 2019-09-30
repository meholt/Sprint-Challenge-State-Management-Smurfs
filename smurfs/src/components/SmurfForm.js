import React, { useState } from 'react';

import { connect } from 'react-redux';

import { addSmurf } from '../actions';

const SmurfForm = ( { addSmurf } ) => {

    const [formText, setFormText] = useState({
        name: '',
        height: '',
        age: ''
    })

    const handleNameChanges = e => {
        setFormText({
            ...formText,
            name: e.target.value
        })
    }

    const handleHeightChanges = e => {
        setFormText({
            ...formText,
            height: e.target.value
        })
    }

    const handleAgeChanges = e => {
        setFormText({
            ...formText,
            age: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addSmurf(formText);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name={formText.name}
                value={formText.name}
                onChange={handleNameChanges}
                placeholder='Enter the smurfs name...'
             />
            
            <input
                type='text'
                name={formText.height}
                value={formText.height}
                onChange={handleHeightChanges}
                placeholder='Enter the smurfs height...'
             />
            
            <input
                type='text'
                name={formText.age}
                value={formText.age}
                onChange={handleAgeChanges}
                placeholder='Enter the smurfs age...'
             />

             <button type='submit'>Add Smurf</button>
        </form>
    );
}


export default connect(null, { addSmurf })(SmurfForm);