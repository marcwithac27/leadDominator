import React, { useState } from "react";
import { Form, CardGroup, Card, Container, Button, Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API"

const Detail = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col md={4}>
                    <Card border="secondary" style={{ width: '33rem', height: "35rem", padding: "0" }}>
                        <Card.Header className="text-center" as="h2" style={{ height: "5rem" }}>Marc Maldonado</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>Address</Col>
                            </Row>
                            <Row>
                                <Col as="h3">1350 Long Oak Way</Col>
                            </Row>
                            <Row>
                                <Col as="h4" lg="auto">Sanford</Col>
                                <Col as="h4" lg="auto">FL</Col>
                                <Col as="h4" lg="auto">32771</Col>
                            </Row>
                            <Row>
                                <Col>Email</Col>
                            </Row>
                            <Row>
                                <Col as="h5">mcmaldonado30@gmail.com</Col>
                            </Row>
                            <Row>
                                <Col>Home Phone</Col>
                            </Row>
                            <Row>
                                <Col as="h3" lg="auto">4077518144</Col>
                            </Row>
                            <Row>
                                <Col>Alt Phone</Col>
                            </Row>
                            <Row>
                                <Col as="h3" lg="auto">4077518144</Col>
                            </Row>
                            <Row>
                                <Col>Other Phone 1</Col>
                            </Row>
                            <Row>
                                <Col as="h3" lg="auto">4077518144</Col>
                            </Row>
                            <Row>
                                <Col>Other Phone 2</Col>
                            </Row>
                            <Row>
                                <Col as="h3" lg="auto">4077518144</Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card border="secondary" style={{ width: '33rem', height: "35rem", padding: "0" }}>
                    <Card.Header className="text-center" as="h2" style={{ height: "5rem" }}>Westgate</Card.Header>
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card border="secondary" style={{ width: '29rem', height: "35rem", padding: "0", margin: "0" }}>
                        <Card.Header style={{ height: "5rem" }}>{props.resortName}</Card.Header>
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Detail;