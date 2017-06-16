import {createReducer} from "utils";
import {types} from "./actions.js";


const initState = {
	year: 2016,
	photos: [],
	fetching: false,
	error: ''
}

export default createReducer(initState, {

    [types.GET_PHOTOS_REQUEST]: (state, action) => {
        return {
            ...state,
            year: action.payload,
            fetching: true,
            error: ''
        }
    },

    [types.GET_PHOTOS_SUCCESS]: (state, action) => {
        return {
            ...state,
            photos: action.payload,
            fetching: false,
            error: ''
        };
    },

    [types.GET_PHOTOS_FAIL]: (state, action) => {
        return {
            ...state,
            error: action.payload.message,
            fetching: false
        };
    },

});
