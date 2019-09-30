import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const FETCH_SMURFS = 'FETCH_SMURFS'; 

export const addSmurf = smurf => {

    return {
        type: ADD_SMURF,
        payload: {

        }
    }
}

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS });
    // axios call
}