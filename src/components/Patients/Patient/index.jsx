import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import modalTypes from '../../../Redux/Types/modalTypes';

import { showModal as showModalAction } from '../../../Redux/Actions/modalActions';
import styles from './patient.module.css';

export const Patient = ({ patient, showModal }) => {
  const { _id, name, surname, age, DNI, turns, doctor } = patient;
  const showDeleteModal = (patientId, patientName) => {
    showModal(modalTypes.DELETE_PATIENT, {
      id: patientId,
      name: patientName,
    });
  };

  const showUpdateModal = () => {
    showModal(modalTypes.UPDATE_PATIENT, {
        patient,
    });
  };

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>
        <FaTimes
          className={styles.btn}
          style={{ cursor: 'pointer' }}
          onClick={() => showDeleteModal(_id, name)}
        />
        <FaEdit
          className={styles.btn}
          style={{ cursor: 'pointer' }}
          onClick={() => showUpdateModal(patient)}
        />
      </TableCell>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{surname}</TableCell>
      <TableCell align="right">{age}</TableCell>
      <TableCell align="right">{DNI}</TableCell>
      <TableCell align="right">{turns}</TableCell>
      <TableCell align="right">{doctor}</TableCell>
    </TableRow>
  );
};

Patient.propTypes = {
    patient: PropTypes.instanceOf(Object).isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal: showModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Patient);