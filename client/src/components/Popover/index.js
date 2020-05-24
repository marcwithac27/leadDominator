import React, { useState, useRef } from "react";
import { Button, Overlay, Popover, Row, Form, Col} from "react-bootstrap"
import API from "../../utils/API";



const PO = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [formObject, setFormObject] = useState({})
  const ref = useRef(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };
  
  const handleFormSubmit = (event) => {
      
    event.preventDefault();
    if (formObject.lastName && formObject.resortName && formObject.homePhone) {
      API.saveLead({tableData:{
        firstname: formObject.firstName,
        lastName: formObject.lastName,
        homePhone: formObject.homePhone,
        altPhone: formObject.altPhone,
        email: formObject.email,
        resortName: formObject.resortName
        
      }})
      
       
        
        .catch(err => console.log(err));
    }
  };
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Add Lead</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.large}
        containerPadding={100}
      >
        <Popover id="popover">
          <Popover.Title as="h3">Lead Details</Popover.Title>
          <Popover.Content>
            
            <Form>
                <Row>
                    <Col>
                    <Form.Control 
                    placeholder="First Name"
                    name = "firstName" 
                    onChange = {handleInputChange}
                    />
                    </Col>
                    <Col>
                    <Form.Control 
                    placeholder="Last Name"
                    name = "lastName"
                    onChange = {handleInputChange} 
                    />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Control 
                    placeholder="Home Phone"
                    name = "homePhone"
                    onChange = {handleInputChange}  
                    />
                    </Col>
                    <Col>
                    <Form.Control 
                    placeholder="Alt Phone" 
                    name = "altPhone"
                    onChange = {handleInputChange} 
                    />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Control 
                    placeholder="Email"
                    name = "email"
                    onChange = {handleInputChange} 
                    />
                    </Col>
                    <Col>
                    <Form.Control 
                    placeholder="Resort"
                    name = "resortName"
                    onChange = {handleInputChange} 
                    />
                    </Col>
                </Row>
                <Button onClick = {handleFormSubmit} >Save</Button>
            </Form>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
};

export default PO