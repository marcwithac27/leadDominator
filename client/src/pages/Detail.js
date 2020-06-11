import React, { useState } from "react";
import { Form, CardGroup, Card, Container, Button, Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API"

const Detail = (props) => {
    return 
    <Container>
        <Row>
            <Col>
            <Card border="secondary" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Secondary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
            </Col>
        </Row>
    </Container>
}