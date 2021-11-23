import { combineReducers } from 'redux';
import patientReducer from './patientReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  patients: patientReducer,
  modal: modalReducer,
});

export default rootReducer;
