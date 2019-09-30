import React, { useState } from 'react';

import { connect } from 'react-redux';

import { addSmurf } from '../actions';

import { Button, Form } from 'semantic-ui-react';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin-top: 20px;
    .form-main {
        width: 30%;
        margin: auto;
    }
`;

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
        setFormText({
            name: '',
            height: '',
            age: ''
        })
    }

    return (
        <FormContainer>
            <Form className='form-main' onSubmit={handleSubmit}>
                <Form.Field>
                    <input
                        type='text'
                        name={formText.name}
                        value={formText.name}
                        onChange={handleNameChanges}
                        placeholder='Enter the smurfs name...'
                        />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        name={formText.height}
                        value={formText.height}
                        onChange={handleHeightChanges}
                        placeholder='Enter the smurfs height...'
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        name={formText.age}
                        value={formText.age}
                        onChange={handleAgeChanges}
                        placeholder='Enter the smurfs age...'
                    />
                </Form.Field>

                <Button primary type='submit'>Add Smurf</Button>
            </Form>
        </FormContainer>
    );
}


export default connect(null, { addSmurf })(SmurfForm);