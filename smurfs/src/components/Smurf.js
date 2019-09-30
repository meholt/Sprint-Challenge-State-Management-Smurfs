import React from 'react';

import { Card, Image } from 'semantic-ui-react';
import smurfImg from '../imgs/smurf.png';

const Smurf = ( { smurf } ) => {

    return (
        <Card centered>
            <Image src={smurfImg} wrapped ui={false} />
            <Card.Content>
                <Card.Header>Name: {smurf.name}</Card.Header>
                <Card.Meta>Age: {smurf.age}</Card.Meta>
                <Card.Description>Height: {smurf.height}</Card.Description>
            </Card.Content>
        </Card>
    );
}

export default Smurf;