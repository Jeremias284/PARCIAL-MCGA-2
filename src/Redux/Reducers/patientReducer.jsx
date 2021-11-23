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
  } from '../types/patientActionTypes';
  
  const initialState = {
    isLoading: false,
    list: [],
    error: false,
  };
  
  const patientReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PATIENTS_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
      case GET_PATIENTS_FULFILLED:
        return {
          ...state,
          isLoading: false,
          list: action.payload,
        };
      case GET_PATIENTS_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: true,
        };
      case ADD_PATIENT_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
      case ADD_PATIENT_FULFILLED:
        return {
          ...state,
          isLoading: false,
          list: [...state.list, action.payload],
        };
      case ADD_PATIENT_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: true,
        };
      case UPDATE_PATIENT_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
      case UPDATE_PATIENT_FULFILLED:
        return {
          ...state,
          isLoading: false,
          list: state.list.map((patient) => {
            if (patient._id === action.payload._id) {
              const patientUpdated = action.payload;
              return patientUpdated;
            }
            return patient;
          }),
        };
      case UPDATE_PATIENT_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: true,
        };
      case DELETE_PATIENT_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
      case DELETE_PATIENT_FULFILLED:
        return {
          ...state,
          isLoading: false,
          list: [
            ...state.list.filter((patient) => patient._id !== action.payload),
          ],
        };
      case DELETE_PATIENT_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: true,
        };
      default:
        return state;
    }
  };
  
  export default patientReducer;
  