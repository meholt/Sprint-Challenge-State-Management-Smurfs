import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
    ADD_SMURFS,
    FETCH_SMURFS_FAIL
} from '../actions/index';

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurfs: false,
    error: ''
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                fetchingSmurfs: true,
                error: ''
            };

        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                fetchingSmurfs: false,
                error: ''
            };

        case ADD_SMURFS:
            return {
                smurfs: action.payload
            };

        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}

export default reducer;