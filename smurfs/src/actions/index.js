import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const ADD_SMURFS_START = 'ADD_SMURFS_START';
export const ADD_SMURFS = 'ADD_SMURFS';
export const ADD_SMURFS_FAIL = 'ADD_SMURFS_FAIL';

export const getSmurfs = info => dispatch => {
    dispatch({ type: FETCH_SMURFS});

    axios
        .get('http://localhost:3333/smurfs', info)
        .then(response => {
            console.log(response);
            dispatch({
                type: FETCH_SMURFS_SUCCESS,
                payload: response.data.results
            });
        })
            .catch(error => {
                dispatch({
                    type: FETCH_SMURFS_FAIL,
                    payload: error
                });
            });
};

export const addSmurf = smurf => dispatch => {
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(response => {
            dispatch({
                type: ADD_SMURFS,
                payload: response.data
            });
        })
        .catch(error => dispatch => {
            dispatch({
                type: ADD_SMURFS_FAIL,
                payload: error
            });
        });
};