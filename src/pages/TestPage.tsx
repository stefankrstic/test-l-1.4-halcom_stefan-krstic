import React from "react";
import { BaseButton } from "../components/BaseButton";
import styles from './TestPage.module.scss'
import { Row, Col, Container } from 'react-bootstrap';
import { Header } from "../components/Header";

export const TestPage = () => {
    return (
        <div>
            <Header title="Kandidat : Pera Peric" />
        <Container>
        <Row>
            <Col sm={8}>
            <div className={styles.buttons}>
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
        </Container>
        </div>
    )
}