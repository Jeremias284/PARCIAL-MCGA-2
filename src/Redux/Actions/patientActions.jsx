import {
    GET_PATIENTS_FETCHING,
    GET_PATIENTS_FULFILLED,
    GET_PATIENTS_REJECTED,
    ADD_PATIENT_FETCHING,
    ADD_PATIENT_FULFILLED,
    ADD_PATIENT_REJECTED,
    UPDATE_PATIENT_FETCHING,
    UPDATE_PATIENT_FULFILLED,
    UPDATE_PATIENT_REJECTED,
    DELETE_PATIENT_FETCHING,
    DELETE_PATIENT_FULFILLED,
    DELETE_PATIENT_REJECTED,
  } from '../Types/patientActionTypes';
  
  const URL = process.env.URL_HEROKU;
  export const getPatientsFetching = () => ({
    type: GET_PATIENTS_FETCHING,
  });
  
  export const getPatientsFulfilled = (payload) => ({
    type: GET_PATIENTS_FULFILLED,
    payload,
  });
  
  export const getPatientsRejected = () => ({
    type: GET_PATIENTS_REJECTED,
  });
  
  export const getPatients = () => (dispatch) => {
    dispatch(getPatientsFetching());
    return fetch(`${URL}/patients`)
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        dispatch(getPatientsFulfilled(response));
      })
      .catch((nombre) => {
        dispatch(getPatientsRejected());
      });
  };
  
  export const addPatientFetching = () => ({
    type: ADD_PATIENT_FETCHING,
  });
  
  export const addPatientFulfilled = (payload) => ({
    type: ADD_PATIENT_FULFILLED,
    payload,
  });
  
  export const addPatientRejected = () => ({
    type: ADD_PATIENT_REJECTED,
  });
  
  export const addPatient = (patient) => (dispatch) => {
    dispatch(addPatientFetching());
    return fetch(`${URL}/patients`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(patient),
    })
      .then((data) => data.json())
      .then((response) => {
        dispatch(addPatientFulfilled(response));
      })
      .catch(() => {
        dispatch(addPatientRejected());
      });
  };
  
  export const updatePatientFetching = () => ({
    type: UPDATE_PATIENT_FETCHING,
  });
  
  export const updatePatientFulfilled = (payload) => ({
    type: UPDATE_PATIENT_FULFILLED,
    payload,
  });
  
  export const updatePatientRejected = () => ({
    type: UPDATE_PATIENT_REJECTED,
  });
  
  export const updatePatient = (patient) => (dispatch) => {
    dispatch(updatePatientFetching());
    return fetch(`${URL}/patients/${patient.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(patient),
    })
      .then((data) => data.json())
      .then((response) => {
        dispatch(updatePatientFulfilled(response));
      })
      .catch(() => {
        dispatch(updatePatientRejected());
      });
  };
  
  export const deletePatientFetching = () => ({
    type: DELETE_PATIENT_FETCHING,
  });
  
  export const deletePatientFulfilled = (payload) => ({
    type: DELETE_PATIENT_FULFILLED,
    payload,
  });
  
  export const deletePatientRejected = () => ({
    type: DELETE_PATIENT_REJECTED,
  });
  
  export const deletePatient = (id) => (dispatch) => {
    dispatch(deletePatientFetching());
    return fetch(`${URL}/patients/${id}`, {
      method: 'DELETE',
    })
      .then((data) => data.json())
      .then(() => {
        dispatch(deletePatientFulfilled(id));
      })
      .catch(() => {
        dispatch(deletePatientRejected());
      });
};
