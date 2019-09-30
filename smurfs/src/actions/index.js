import axios from 'axios';

export const FETCH_SMURFS_PENDING = 'FETCH_SMURFS_PENDING';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const ADD_SMURF_PENDING = 'ADD_SMURF_PENDING';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';


export const addSmurf = (smurfInfo) => dispatch => {
    dispatch({ type: ADD_SMURF_PENDING });
    axios.post('http://localhost:3333/smurfs', smurfInfo)
        .then(res => {
            console.log(res);
            dispatch({
                type: ADD_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_SMURF_FAIL,
                payload: err
            })
        })
}

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_PENDING });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({
                type: FETCH_SMURFS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_SMURFS_FAIL,
                payload: err
            })
        })
}