import React, { useContext, useState } from "react";
import { BaseButton } from "../components/BaseButton";
import './TestPage.scss'
import { Row, Col, Container } from 'react-bootstrap';
import { Header } from "../components/Header";
import { Modal } from '../components/Modal';
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const buttons = [1, 2, 3, 4, 5];

export const TestPage = () => {
    const user = useContext(UserContext);
    const [clicks, setClicks] = useState<Array<number>>([]);
    const [isRecording, setIsRecording] = useState(true);
    const navigate = useNavigate();

    const handleClick = (button: number) => () => {
        if (isRecording) {
            setClicks([...clicks, button]);
        }
    };

    const handleStopClick = () => {
        setIsRecording(false);
    };

    const handleExitClick = () => {
        user.setState({name: '', surname: ''})
        navigate('/');
    }

    const getButtonColor = (button: number) => {
        if (isRecording) {
            return lastClick === button ? 'yellow' : 'gray';
        }

        if (button === lastClick) {
            return 'orange';
        }

        if (button === firstClick) {
            return 'green';
        }

        return 'gray';
    };

    const firstClick = clicks[0];
    const lastClick = clicks[clicks.length - 1];

    return (
        <div className="TestPage"> 
            <Header title={`Kandidat : ${user.name} ${user.surname}`} />
        <Container>
    <Row>
        <Col sm={8}>
            <div className="buttons">
                {buttons.map((button) => (
                    <BaseButton key={button} onClick={handleClick(button)} color={getButtonColor(button)}>
                       {button}
                    </BaseButton>
                ))}
            </div>
        </Col>

        <Col sm={4}>
            {isRecording ? (
                <BaseButton onClick={handleStopClick} color="orange">
                    Stop
                </BaseButton>
            ) : (
                <div>
                    <div>Prvi klik : dugme br. {firstClick}</div>
                    <div>Poslednji klik : dugme br. {lastClick}</div>
                </div>
            )}
        </Col>
    </Row>
    {isRecording ? null : (
        <Row>
            <Col sm={3}>
                <BaseButton color="red">Reset</BaseButton>
            </Col>
            <Col sm={3}>
                <BaseButton color="blue">User Info</BaseButton>
            </Col>
            <Col sm={3}>
                <BaseButton color="blue">Statistika</BaseButton>
            </Col>
            <Col sm={3}>
                <BaseButton onClick={handleExitClick} color="blue">Izađi</BaseButton>
            </Col>
        </Row>
    )}  
        </Container>

        <Modal open={false} title="User Info">
                Modal test content
            </Modal>
        </div>
    )
}