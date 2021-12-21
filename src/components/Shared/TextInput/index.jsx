import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './textInput.module.css';

// const TextInput = ({ input, label, placeholder, meta }) => {
  const TextInput = ({ input, label, placeholder, meta, size, variant }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.lbl}>{label}</label>
      {/* <input {...input} placeholder={placeholder} /> */}
      <TextField
        {...input}
        size={size}
        variante={variant}
        placeholder={placeholder}
      />
      {meta.error && meta.touched && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default TextInput;