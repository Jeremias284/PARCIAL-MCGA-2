import {
    LOG_IN_FETCHING,
    LOG_IN_FULFILLED,
    LOG_IN_REJECTED,
    SIGN_UP_FETCHING,
    SIGN_UP_REJECTED,
    LOG_OUT,
  } from '../Types/authTypes';
  

  const URL = 'http://localhost:7000';
  
  const loginFetching = () => ({
    type: LOG_IN_FETCHING,
  });
  
  const loginFulfilled = (name) => ({
    type: LOG_IN_FULFILLED,
    payload: name,
  });
  
  const loginRejected = () => ({
    type: LOG_IN_REJECTED,
  });
  
  export const logIn = (values) => (dispatch) => {
    dispatch(loginFetching());
    return fetch(`${URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.errors === undefined) {
          dispatch(loginFulfilled(values.name));
          dispatch(loginFulfilled(values.password));
        } else {
          dispatch(loginRejected());
        }
      })
      .catch(() => {
        dispatch(loginRejected());
      });
  };
  
  export const signUpFetching = () => ({
    type: SIGN_UP_FETCHING,
  });
  
  export const signUpRejected = () => ({
    type: SIGN_UP_REJECTED,
  });
  
  export const signUp = (values) => (dispatch) => {
    dispatch(signUpFetching());
    return fetch(`${URL}/users`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((data) => data.json())
      .then(() => {
        dispatch(loginFulfilled(values.name));
      })
      .catch(() => {
        dispatch(signUpRejected());
      });
  };
  
  export const logOut = () => ({
    type: LOG_OUT,
  });