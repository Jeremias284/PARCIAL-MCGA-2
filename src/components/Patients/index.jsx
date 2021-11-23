import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@mui/material/Button';
import { getPatients as getPatientsAction } from '../../Redux/Actions/patientActions';
import { showModal as showModalAction } from '../../Redux/Actions/modalActions';
import modalTypes from '../../Redux/Types/modalTypes';
import PatientList from './PatientList';
import PatientList from './PatientForm';
import ConfirmationMessage from './ConfirmationMessage';
import Modal from '../Shared/Modal';
import styles from './patients.module.css';

const Patients = ({ patients, getPatients, showModal, modalType, meta }) => {
  useEffect(() => {
    getPatients();
  }, []);

  const showAddModal = () => {
    showModal(modalTypes.ADD_PATIENT);
  };

  return (
    <div className={styles.patientsContainer}>
      <Button
        style={{
          color: '#1c294d',
          border: '1px solid black',
          fontWeight: '700',
        }}
        onClick={() => showAddModal()}
      >
        Add Patient
      </Button>

      <Modal>
        {modalType === 'ADD_PATIENT' && <PatientForm />}{' '}
        {modalType === 'DELETE_PATIENT' && (
          <ConfirmationMessage patientId={meta.id} patientName={meta.name} />
        )}
        {modalType === 'UPDATE_PATIENT' && (
          <PatientForm patient={meta.patient} />
        )}{' '}
      </Modal>

      <PatientList patient={patients} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getPatients: getPatientsAction,
      showModal: showModalAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  patients: state.patients,
  modalType: state.modal.modalType,
  meta: state.modal.meta,
});

export default connect(mapStateToProps, mapDispatchToProps)(Patients);