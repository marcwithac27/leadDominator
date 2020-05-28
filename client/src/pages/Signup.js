import React, { useState } from 'react';
import { Form, Container, Button, Alert, Col, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API";


const Signup = () => {
    const [loginStatus, setLoginStatus] = useState({
        UserFail: false,
        PasswordFail: false
    })
    const [validated, setValidated] = useState(false);
    const [formObject, setFormObject] = useState()
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const handleFormSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          API.createUser({
              firstName: formObject.firstName,
              lastName: formObject.lastName,
              userName: formObject.userName,
              password: formObject.password,
          })

        }
        setValidated(true);
    }
    console.log(formObject)
    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue=""
                            name="firstName"
                            onChange={handleInputChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            defaultValue=""
                            onChange={handleInputChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="userName"
                                aria-describedby="inputGroupPrepend"
                                required
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email"
                        name="email" 
                        placeholder="Email" 
                        onChange={handleInputChange}
                        required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
          </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomPassword">
                        <Form.Label>Passord</Form.Label>
                        <Form.Control 
                        type="password"
                        name="password" 
                        placeholder="Password"
                        onChange={handleInputChange}
                        required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
          </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        type="text"
                        onChange={handleInputChange} 
                        placeholder="Zip" 
                        required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
          </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
            <div>
				{
					loginStatus.UserFail &&
					<Alert variant="danger">
						Username already taken
					</Alert>
				}
			</div>
			<div>
				{
					loginStatus.PasswordFail &&
					<Alert variant="danger">
						Password fields do not match
					</Alert>
				}
			</div>

			<Link to="/">Return</Link>
			<div>
				Already have an account? 
				<Link to="/login">Login</Link>
			</div>
          
        </Container>
    );
}

export default Signup;
