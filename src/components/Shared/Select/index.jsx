import React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import styles from './select.module.css';

const Select = ({ input, meta, label, options }) => {
  return (
    <div className={styles.selectContainer}>
      <label className={styles.lbl}>{label}</label>
      {/* <select className={styles.sel} {...input}> */}
      <NativeSelect className={styles.sel} {...input}>

        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.value}
          </option>
        ))}
      {/* </select> */}
      </NativeSelect>
      {meta.error && meta.touched && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default Select;