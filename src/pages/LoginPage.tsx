import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export const LoginPage = () => {
    return (
        <div>
            <Header title="Login stranica" centered />
            <Container>
                <Row>
                    <Col md={4}>
                       <Input label="Ime" />
                       <Input label="Prezime" />
                    </Col>

                    <Col md={4}>
                       <button>Login</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}