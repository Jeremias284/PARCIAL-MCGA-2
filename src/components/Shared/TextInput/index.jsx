import React from 'react';
import styles from './textInput.module.css';

const TextInput = ({ input, label, placeholder, meta }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.lbl}>{label}</label>
      <input {...input} placeholder={placeholder} />
      {meta.error && meta.touched && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default TextInput;