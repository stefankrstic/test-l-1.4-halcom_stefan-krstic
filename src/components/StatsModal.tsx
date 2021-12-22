import React, { useContext } from 'react';
import { Modal } from './Modal';
import { BaseButton } from './BaseButton';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './StatsModal.scss';

interface StatsModalProps {
    open: boolean;
    onClose: () => void;
    clicks: number[];
}

export const StatsModal = ({ open, onClose, clicks }: StatsModalProps) => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const handleGoToLoginClick = () => {
        user.setState({ name: '', surname: '' });
        navigate('/');
    };

    const evenClickCount = clicks.reduce(
        (evenClickCount, button) => (button % 2 === 0 ? evenClickCount + 1 : evenClickCount),
        0,
    );

    const oddClickCount = clicks.reduce(
        (oddClickCount, button) => (button % 2 === 0 ? oddClickCount : oddClickCount + 1),
        0,
    );

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Statistika"
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
            <div className='StatsModal'>
                <div>Ukupan broj klikova : {clicks.length}</div>
                <div>Prvo kliknuto dugme : {clicks[0]}</div>
                <div>Poslednje kliknuto dugme : {clicks[clicks.length - 1]}</div>
                <div>Broj parnih klikova : {evenClickCount}</div>
                <div>Broj neparnih klikova : {oddClickCount}</div>
            </div>
        </Modal>
    );
};