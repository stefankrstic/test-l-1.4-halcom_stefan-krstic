import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import './Input.scss';

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
    error?: string | null;
}

export const Input = ({ value, onChange, label, error }: InputProps) => {
    return (
        <div className="Input">
            <div className="group">
                <label className="label">{label} :</label>
                <input
                    className={clsx('input', error && 'invalid')}
                    type="text"
                    value={value}
                    onChange={(event) => {
                        onChange(event.target.value);
                    }}
                />
            </div>

            {error ? (
                <div className="error">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    {error}
                </div>
            ) : null}
        </div>
    );
};
