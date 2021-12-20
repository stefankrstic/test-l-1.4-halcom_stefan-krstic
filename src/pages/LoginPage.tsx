import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { BaseButton } from "../components/BaseButton";
import './LoginPage.scss';

export const LoginPage = () => {
    return (
        <div className="LoginPage">
            <Header title="Login stranica" centered />
            <Container>
                <Row>
                    <Col md={4}>
                       <Input label="Ime" />
                       <Input label="Prezime" />
                    </Col>

                    <Col md={2} />

                    <Col className="loginContainer" md={2}>
                       <BaseButton className="loginButton">
                       <FontAwesomeIcon icon={faArrowRight} />
                       Login</BaseButton>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}