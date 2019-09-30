import React from 'react';

import { Card, Image, Icon } from 'semantic-ui-react';
import smurfImg from '../imgs/smurf.png';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const CardContainer = styled.div`
    margin: 20px;
    .close-btn {
        cursor: pointer;
    }

    .smurfCard {
        
    }
`;

const Smurf = ( { smurf, deleteSmurf } ) => {

    const handleClick = () => {
        deleteSmurf(smurf.id);
    }

    return (
        <CardContainer>
            <Card className='smurfCard' centered>
                <Icon onClick={handleClick} className='close-btn' name='close' color='red' size='large' />
                <Image className='smurfImg' src={smurfImg} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Name: {smurf.name}</Card.Header>
                    <Card.Meta>Age: {smurf.age}</Card.Meta>
                    <Card.Description>Height: {smurf.height}</Card.Description>
                </Card.Content>
            </Card>
        </CardContainer>
    );
}

export default connect(null, { deleteSmurf })(Smurf);