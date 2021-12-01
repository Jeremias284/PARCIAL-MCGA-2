import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal as closeModalAction } from '../../../Redux/Actions/modalActions';
import { deletePatient as deletePatientAction } from '../../../Redux/Actions/patientActions';
import Button from '../../Shared/Button';
import styles from './confirmationMessage.module.css';

const ConfirmationMessage = ({
  patientName,
  patientId,
  closeModal,
  deletePatient,
}) => {
  const onDeletePatient = () => {
    deletePatient(patientId);
    closeModal();
  };

  return (
    <div>
      <p>Are you sure to delete patient {patientName}?</p>
      <div className={styles.buttonContainer}>
        <Button type="button" btnLabel="Cancel" onClick={() => closeModal()}>
          Cancel
        </Button>
        <Button
          styles={styles.button}
          type="button"
          btnLabel="Confirm"
          onClick={() => onDeletePatient()}
        >Confirm</Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      closeModal: closeModalAction,
      deletePatient: deletePatientAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(ConfirmationMessage);