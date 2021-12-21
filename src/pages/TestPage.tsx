import React, { useContext } from "react";
import { BaseButton } from "../components/BaseButton";
import './TestPage.scss'
import { Row, Col, Container } from 'react-bootstrap';
import { Header } from "../components/Header";
import { Modal } from '../components/Modal';
import { UserContext } from "../context/UserContext";

export const TestPage = () => {
    const user = useContext(UserContext);
    return (
        <div className="TestPage"> 
            <Header title={`Kandidat : ${user.name} ${user.surname}`} />
        <Container>
        <Row>
            <Col sm={8}>
            <div className="buttons">
            <BaseButton color="gray">1</BaseButton>
            <BaseButton color="gray">2</BaseButton>
            <BaseButton color="gray">3</BaseButton>
            <BaseButton color="gray">4</BaseButton>
            <BaseButton color="gray">5</BaseButton>
            </div>
            </Col>
            <Col sm={4}>
            <BaseButton color="orange">Stop</BaseButton>
            </Col>
        </Row>
        <Row>
         <Col sm={3}>
         <BaseButton color="red">Reset</BaseButton>
         </Col>
         <Col sm={3}>
         <BaseButton color="blue">User info</BaseButton>
         </Col>
         <Col sm={3}>
         <BaseButton color="blue">Stetistika</BaseButton>
         </Col>
         <Col sm={3}>
         <BaseButton color="blue">Izadji</BaseButton>
         </Col>
         </Row>
        
        </Container>

        <Modal open={true} title="User Info">
                Modal test content
            </Modal>
        </div>
    )
}