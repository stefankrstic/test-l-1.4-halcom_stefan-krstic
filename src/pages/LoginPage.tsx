import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { isValidElement, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { BaseButton } from "../components/BaseButton";
import './LoginPage.scss';

export const LoginPage = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    
    const nameError = validate(name);
    const surnameError = validate(surname);
    const isValid = nameError === null && surnameError === null;   
    
    const handleLoginClick = () => {
        console.log('login clicked');
    };

    return (
        <div className="LoginPage">
            <Header title="Login stranica" centered />
            <Container>
                <Row>
                    <Col md={4}>
                       <Input
                          label="Ime" 
                          value={name}  
                          error={isTouched ? nameError : null}
                          onChange={(name) => {
                              setName(name);
                              setIsTouched(true);
                          }}
                        />
                       <Input 
                         label="Prezime" 
                         value={surname} 
                         error={isTouched ? surnameError : null}
                         onChange={(surname) => {
                             setSurname(surname);
                             setIsTouched(true);
                         }} 
                        />
                    </Col>

                    <Col md={2} />

                    <Col className="loginContainer" md={2}>
                       <BaseButton className="loginButton" disabled={!isValid} onClick={handleLoginClick}>
                       <FontAwesomeIcon icon={faArrowRight} />
                       Login</BaseButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const validate = (input: string): string | null => {
    if (input.length === 0) {
        return 'Polje je obavezno';
    }

    if (!/^[a-zčćžšđ]+$/ig.test(input)) {
        return 'Polje mora sadržati slova'
    }

    return null
};