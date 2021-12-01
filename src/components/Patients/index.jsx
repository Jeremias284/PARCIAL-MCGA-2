import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import {getPatients} from '../../Redux/Actions/patientActions';
import { showModal } from '../../Redux/Actions/modalActions';
import modalTypes from '../../Redux/Types/modalTypes';
import PatientList from './PatientList';
import PatientForm from './PatientForm';
import ConfirmationMessage from './ConfirmationMessage';
import Modal from '../Shared/Modal';
import styles from './patients.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Patients = () => {
  const dispatch = useDispatch();
   const { list, isLoading } = useSelector(
    (state) => state.patients   
  );

  const {modal} = useSelector(
    (state) => state
  );

  const { meta } = modal
  
  useEffect(() => {
    dispatch(getPatients());
    return () => {};
  }, []);

  const showAddModal = () => {
    dispatch(showModal(modalTypes.ADD_PATIENT));
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
        {modal.modalType === modalTypes.ADD_PATIENT && (<PatientForm />)} 
        {modal.modalType === modalTypes.DELETE_PATIENT && meta && (
          <ConfirmationMessage patientId={meta.id} patientName={meta.name} />
        )}
        {modal.modalType === modalTypes.UPDATE_PATIENT && (
          <PatientForm patient={meta.patient} />
        )} 
      </Modal>

      <PatientList patients={list} isLoading={isLoading} />
    </div>
  );
};

export default Patients;