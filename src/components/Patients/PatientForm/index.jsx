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
      id: 'Friday',
      value: 'Friday',
    },
    {
      id: 'Monday',
      value: 'Monday',
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
  ];

  return (
    <div className={styles.containerForm}>
      <Form
        onSubmit={onSubmitPatient}
        initialValues={{
          name: patient ? patient.name : '',
          lastName: patient ? patient.lastName : '',
          age: patient ? patient.age : '',
          turn: patient ? patient.turn : 'Friday',
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
              />
            </div>
            <div className={styles.textInput}>
              <Field
                name="lastName"
                component={TextInput}
                placeholder="Add last name"
                label="Last name:"
                validate={composeValidators(required, trim, string)}
              />
            </div>
            <div className={styles.textInput}>
              <Field
                name="age"
                component={TextInput}
                placeholder="Add age"
                label="Age:"
                validate={composeValidators(required, number, minValue, trim)}
              />
            </div>
            <div>
              <Field
                name="turn"
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