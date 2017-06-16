import {createReducer} from "utils";
import {types} from "./actions.js";


const initState = {
	ids: []
};

export default createReducer(initState, {

    [types.GET_NEWS_REQUEST]: (state, action) => {
        return {
            ...state,
            fetching: true,
            error: ''
        }
    },

    [types.GET_NEWS_SUCCESS]: (state, action) => {
        return {
            ...state,
            ids: action.res,
            fetching: false,
            error: ''
        };
    },

    [types.GET_NEWS_FAIL]: (state, action) => {
        return {
            ...state,
            error: action.payload.message,
            fetching: false
        };
    },

})
