import React, { useState } from "react";
import { Form, Container, Button, Alert, InputGroup,Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API"

const Login = (props) => {
    const [login, setLogin] = useState({ failure: false });
    const [formObject, setFormObject] = useState()
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (formObject.userName && formObject.password) {
            API.getUser({
                userName: formObject.userName,
                password: formObject.password
            })
                .then((res) => {
                    if (res.data.status === "Success") {
                        console.log(res.data)
                    } else {
                        setLogin({ failure: true });
                    }
                })
        }
    }
    console.log(formObject)
    return (
        <Container>
            <Form onSubmit={handleFormSubmit}>
            <Form.Group as={Row} controlId="formHorizontaluserName">
    <Form.Label column sm={2}>
      UserName
    </Form.Label>
    <Col sm={10}>
      <Form.Control 
      type="text" 
      placeholder="Username"
      name="userName"
      onChange={handleInputChange}
    //   value={formObject.userName}
      />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control 
      type="password" 
      placeholder="Password" 
      name="password"
      onChange={handleInputChange}
    //   value={formObject.password}
      />
    </Col>
  </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            <>
                {login.failure &&
                    <Alert variant="danger">
                        Invaild Login Credentials
            </Alert>
                }
            </>
            <Link to="/">Return</Link>
            <>
                Don't have an account?
				<Link to="/signup"> Sign up</Link>
            </>
        </Container>
    );
}

export default Login;