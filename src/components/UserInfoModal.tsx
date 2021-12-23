import React, { useContext } from 'react';
import { Modal } from './Modal';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './UserInfoModal.scss';
import { BaseButton } from './BaseButton';
import { useNavigate } from 'react-router-dom';

interface UserInfoModalProps {
    open: boolean;
    onClose: () => void;
}

export const UserInfoModal = ({ open, onClose }: UserInfoModalProps) => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const handleGoToLoginClick = () => {
        user.logout();
        navigate('/');
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="User Info"
            footer={
                <>
                    <BaseButton color="red" onClick={onClose}>
                        Zatvori
                    </BaseButton>
                    <BaseButton color="blue" onClick={handleGoToLoginClick}>
                        Go to Login
                    </BaseButton>
                </>
            }
        >
            <div className="UserInfoModal">
                <FontAwesomeIcon className="icon" size="4x" icon={faUser} />
                <div className="userInfo">
                    User : {user.name} {user.surname}
                </div>
            </div>
        </Modal>
    );
};
