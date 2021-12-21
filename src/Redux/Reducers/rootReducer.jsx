import { combineReducers } from 'redux';
import patientReducer from './patientReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  patients: patientReducer,
  modal: modalReducer,
  auth: authReducer,
});

export default rootReducer;
