import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const FETCH_SMURFS_PENDING = 'FETCH_SMURFS_PENDING';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL'; 

export const addSmurf = smurf => {

    return {
        type: ADD_SMURF,
        payload: {

        }
    }
}

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_PENDING });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}