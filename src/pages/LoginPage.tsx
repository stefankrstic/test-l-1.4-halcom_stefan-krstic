import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { BaseButton } from '../components/BaseButton';
import './LoginPage.scss';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const navigate = useNavigate();
    const user = useContext(UserContext);

    const nameError = validate(name);
    const surnameError = validate(surname);
    const isValid = nameError === null && surnameError === null;

    const handleLoginClick = () => {
        navigate('/test');
        user.login(name, surname);
    };

    return (
        <div className="LoginPage">
            <Header title="Login stranica" centered />
            <Container>
                <Row>
                    <Col sm={9}>
                        <div className="inputs">
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
                        </div>
                    </Col>

                    <Col className="buttons" sm={3}>
                        <BaseButton disabled={!isValid} onClick={handleLoginClick}>
                            <FontAwesomeIcon icon={faArrowRight} />
                            Login
                        </BaseButton>
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

    if (!/^[a-zčćžšđ]+$/gi.test(input)) {
        return 'Polje mora sadržati slova';
    }

    return null;
};
