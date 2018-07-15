import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';



const DEFAULT_AUTH_STATE = {
  isPending: false,
  username: null
};

function auth(state, action) {
    switch(action.type) {
        case actionTypes.LOGIN_START: 
          return {...state, isPending: true, username: null};
        case actionTypes.LOGIN_END:
          return action.error ? {...state, isPending: false, username: null} 
                              : {...state, isPending: false, username: action.payload.username}
        case actionTypes.LOGOUT:
          return DEFAULT_AUTH_STATE;
        default: 
          return state || DEFAULT_AUTH_STATE;
    }
}




export default combineReducers({
    auth,
});