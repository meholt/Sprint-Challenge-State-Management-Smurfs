import axios from 'axios';

export const FETCH_SMURFS_PENDING = 'FETCH_SMURFS_PENDING';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const addSmurf = (smurfInfo) => dispatch => {
    dispatch({ type: FETCH_SMURFS_PENDING });
    axios.post('http://localhost:3333/smurfs', smurfInfo)
        .then(res => {
            console.log(res);
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


export const deleteSmurf = smurfID => dispatch => {
    dispatch({ type: FETCH_SMURFS_PENDING });
    axios.delete(`http://localhost:3333/smurfs/${smurfID}`)
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