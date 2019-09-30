import { FETCH_SMURFS_FAIL, FETCH_SMURFS_PENDING, FETCH_SMURFS_SUCCESS, ADD_SMURF_PENDING, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from '../actions';

const initialState = {
    smurfs: [],
    error: '',
    pending: false
}

export const smurfList = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_PENDING:
            return {
                ...state,
                pending: true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: '',
                pending: false
            }
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                pending: false,
                error: action.payload
            }

        default:
            return state;
    }
}