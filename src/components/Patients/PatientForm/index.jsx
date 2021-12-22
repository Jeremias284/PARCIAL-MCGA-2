import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import {
  required,
  number,
  minValue,
  trim,
  string,
  composeValidators,
} from '../../../Utils/validations';
import {
  addPatient as addPatientAction,
  updatePatient as updatePatientAction,
} from '../../../Redux/Actions/patientActions';
import { closeModal as closeModalAction } from '../../../Redux/Actions/modalActions';
import Button from '../../Shared/Button';
import Select from '../../Shared/Select';
import TextInput from '../../Shared/TextInput';
import styles from './patientForm.module.css';


export const PatientForm = ({ addPatient, updatePatient, closeModal, patient }) => {
  console.log("Entre");
  const onSubmitPatient = (values) => {
    if (patient) {
      updatePatient({ ...values, id: patient._id });
    } else {
      addPatient(values);
    }
    closeModal();
  };

  const turns = [
    {
      id: 'Monday',
      value: 'Monday',
    },
    {
      id: 'Tuesday',
      value: 'Tuesday',
    },
    {
      id: 'Wednesday',
      value: 'Wednesday',
    },
    {
      id: 'Thursday',
      value: 'Thursday',
    },
    {
      id: 'Friday',
      value: 'Friday',
    },
  ];

  const doctor = [
    {
      id: 'DrCalzada',
      value: 'DrCalzada',
    },
    {
      id: 'DrKopech',
      value: 'DrKopech',
    },
    {
      id: 'DrMena',
      value: 'DrMena',
    },
  ];

  return (
    <div className={styles.containerForm}>
      <Form
        onSubmit={onSubmitPatient}
        initialValues={{
          name: patient ? patient.name : '',
          surname: patient ? patient.surname : '',
          age: patient ? patient.age : '',
          DNI: patient ? patient.DNI: '',
          turns: patient ? patient.turn : 'Friday',
          doctor: patient ? patient.doctor : 'DrCalzada',
        }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <p className={styles.addText}>
              {patient ? 'Update Patient' : 'Add Patient'}
            </p>
            <div className={styles.textInput}>
              <Field
                name="name"
                component={TextInput}
                placeholder="Add name"
                label="Name:"
                validate={composeValidators(required, trim, string)}
                variant="filled"
                size="small"
              />
            </div>
            <div className={styles.textInput}>
              <Field
                name="surname"
                component={TextInput}
                placeholder="Add last name"
                label="Last name:"
                validate={composeValidators(required, trim, string)}
                variant="filled"
                size="small"
              />
            </div>
            <div className={styles.textInput}>
              <Field
                name="age"
                component={TextInput}
                placeholder="Add age"
                label="Age:"
                validate={composeValidators(required, number, minValue, trim)}
                variant="filled"
                size="small"
              />
            </div>
            <div className={styles.textInput}>
              <Field
                name="DNI"
                component={TextInput}
                placeholder="Add DNI"
                label="DNI  :"
                validate={composeValidators(required, number, minValue, trim)}
                variant="filled"
                size="small"
              />
            </div>
            <div>
              <Field
                name="turns"
                component={Select}
                options={turns}
                label="Turn:"
              />
            </div>
            <div className={styles.textInput}>
            <Field
                name="doctor"
                component={Select}
                options={doctor}
                label="Doctor:"
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button
                disabled={submitting || pristine}
                btnLabel="Submit"
                type="submit"
              />
              <Button
                disabled={submitting || pristine}
                btnLabel="Reset"
                type="button"
                onClick={form.reset}
              />
            </div>
          </form>
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addPatient: addPatientAction,
      updatePatient: updatePatientAction,
      closeModal: closeModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(PatientForm);