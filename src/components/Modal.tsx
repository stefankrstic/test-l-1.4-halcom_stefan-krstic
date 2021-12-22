import { faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';
import './Modal.scss';

interface ModalProps {
    open: boolean;
    title: string;
    onClose?: () => void;
    children: ReactNode;
}

export const Modal = ({ open, title, children, onClose }: ModalProps) => {
    if (!open) {
        return null;
    }

    return (
        <div className="Modal">
            <div className="backdrop" />

            <div className="wrapper">
                <div className="body">
                    <div className="header">
                        <div className="icon chevron" role="button" onClick={onClose}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>

                        {title}

                        <div className="icon times" role="button" onClick={onClose}>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>

                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
};