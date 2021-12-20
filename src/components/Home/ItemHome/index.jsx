import React from 'react';
import PropTypes from 'prop-types';
import styles from './homeItem.module.css';

export const ItemHome = ({ patient }) => {
  return (
    <div className={styles.itemHomeContainer}>
      <p className={styles.item}>{patient.name}</p>
      <p className={styles.item}>{patient.lastName}</p>
      <p className={styles.item}>({patient.age})</p>
    </div>
  );
};

ItemHome.propTypes = {
    patient: PropTypes.instanceOf(Object).isRequired,
};

export default ItemHome;