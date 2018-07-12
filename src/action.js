import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';
import * as api from './api';
import { getUserName } from './selectors';

const startLogin = createAction(actionTypes.LOGIN_START);
const stopLogin = createAction(actionTypes.LOGIN_END);


//
export function login({username, password}) {
    return (dispatch, getState) => {
    dispatch(startLogin);
    return api
        .login({username, password})
        .then((data) => {
            if (data.ok) {
                dispatch(stopLogin({username: data.username}));
            } else {
                dispatch(stopLogin(new Error(data.errors.join('\n'))));
            }
        })
        .catch((error) => {
            dispatch(stopLogin(new Error('Network error')));
      });
    }
}

const logout = createAction(actionTypes.LOGOUT);