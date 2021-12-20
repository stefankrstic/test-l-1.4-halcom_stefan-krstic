import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from "react";
import './Input.scss';

interface InputProps {
    label: string;
    error?: string;
}

export const Input = ({label, error}: InputProps) => {
  return (
      <div className="Input">
          <div className="group">
          <label className="label">{label} :</label>
          <input className={clsx('input', error && 'invalid')} type="text" />
          </div>
    
        {error ? (
          <div className="error">
              <FontAwesomeIcon icon={faInfoCircle} />{error}
              </div>
              ) : null}
          </div>
    
  );
}

