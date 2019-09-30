import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

import Smurf from './Smurf.js';

const SmurfList = ( { smurfs, fetchSmurfs }) => {

    useEffect(() => {
        fetchSmurfs();
    }, [])

    return (
        <div>
            {smurfs.map(smurf => {
                return <Smurf key={smurf.id} smurf={smurf} />
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfList.smurfs,
        error: state.smurfList.error,
        pending: state.smurfList.pending
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);