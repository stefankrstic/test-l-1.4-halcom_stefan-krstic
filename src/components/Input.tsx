import clsx from 'clsx';
import React from "react";
import styles from './Input.module.scss';

interface InputProps {
    label: string;
    error?: string;
}

export const Input = ({label, error}: InputProps) => {
  return (
      <div className={styles.root}>
          <div className={styles.group}>
          <label className={styles.label}>{label} :</label>
          <input className={clsx(styles.input, error && styles.invalid)} type="text" />
          </div>
    

          <div className={styles.error}>{error}</div>
          </div>
    
  );
}

