import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Patient from '../Patient';
import styles from './patientList.module.css';

export const PatientList = ({ patients }) => {
  return (
    <div>
      {patients.isLoading ? (
        <h3>LOADING...</h3>
      ) : (
        <Paper className={styles.container}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.colPatient}>Action</TableCell>
                <TableCell className={styles.colPatient}>Name</TableCell>
                <TableCell className={styles.colPatient} align="right">
                  Lastname
                </TableCell>
                <TableCell className={styles.colPatient} align="right">
                  Age
                </TableCell>
                <TableCell className={styles.colPatient} align="right">
                  Turn
                </TableCell>
                <TableCell className={styles.colPatient} align="right">
                  Doctor
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.list.map((patient) => (
                <Patient key={patient._id} patient={patient} />
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
};

PatientList.propTypes = {
    patients: PropTypes.instanceOf(Object).isRequired,
};

export default PatientList;