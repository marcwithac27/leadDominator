import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap"
import API from "../../utils/API"
// This file exports the Input, TextArea, and FormBtn components

export function Status() {
  return (
    <Form>
      <Form.Label>Status</Form.Label>
      <Form.Control as="select">
        <option>NA</option>
        <option>LM</option>
        <option>CB</option>
        <option>DNO</option>
        <option>DNC</option>
        <option>NI</option>
        <option>TR</option>
      </Form.Control>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Notes</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
    </Form>
  );
}

export function ResortInfo() {
  // const initFormValues = {
  //   deeded
  // }
  // const [formObject, setFormObject] = useState(initFormValues)
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value })
  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Label>Deeded</Form.Label>
          <Form.Control 
          as="select"
          name="deeded"
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Banked</Form.Label>
          <Form.Control as="select">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Additional</Form.Label>
          <Form.Control as="select">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Exchange</Form.Label>
          <Form.Control as="select">
            <option>RCI</option>
            <option>II</option>
            <option>DAE</option>
            <option>Trading Places</option>
            <option>RTX</option>
            <option>Platinum Interchange</option>
          </Form.Control>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control as="select">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Week Type</Form.Label>
          <Form.Control as="select">
            <option>Floating</option>
            <option>Fixed</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Wk Pts</Form.Label>
          <Form.Control as="select">
            <option>Week</option>
            <option>Points</option>
          </Form.Control>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Label>Unit</Form.Label>
          <Form.Control as="select">
            <option>Studio</option>
            <option>Standard</option>
            <option>Lockout </option>
            <option>Deluxe</option>
            <option>Oceanside</option>
            <option>Presidential</option>
            <option>Other</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Usage</Form.Label>
          <Form.Control as="select">
            <option>Annual</option>
            <option>Biennial</option>
            <option>Triennial</option>
            <option>Quadrennial</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Ownership</Form.Label>
          <Form.Control as="select">
            <option>Deeded</option>
            <option>Leased</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Rental Price</Form.Label>
          <Form.Control name="rentalPrice" placeholder="Rental Price" />
        </Col>
      </Form.Row>
    </Form>
  );
}

export function BillingInfo() {
  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Control name="nameOn Account" placeholder="Name On Account" />
        </Col>
        <Col>
          <Form.Control name="billingAddress" placeholder="Billing Address" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control name="billingCity" placeholder="Billing City" />
        </Col>
        <Col>
          <Form.Control name="billingState" placeholder="Billing State" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control name="billingZip" placeholder="Billing Zip" />
        </Col>
        <Col>
          <Form.Control name="adAmount" placeholder="Advertising Fee" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control name="cardNumber" placeholder="cardNumber" />
        </Col>
        <Col>
          <Form.Control name="expMonth" placeholder="Exp Month" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control name="expYear" placeholder="Exp Year" />
        </Col>
        <Col>
          <Form.Control name="cvv" placeholder="CV2" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control name="bankName" placeholder="Bank Name" />
        </Col>
        <Col>
          <Form.Control name="checkNumber" placeholder="Check Number" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control name="routingNumber" placeholder="Routing Number" />
        </Col>
        <Col>
          <Form.Control name="bankAccountNumber" placeholder="Account Number" />
        </Col>
      </Form.Row>
    </Form>
  );
}

export function LeadDetail({selectedLead}) {
  const initFormValues = {
    firstName: selectedLead.tableData.firstName,
    lastName: selectedLead.tableData.lastName,
    homePhone: selectedLead.tableData.homePhone,
    altPhone: selectedLead.tableData.altPhone,
    email: selectedLead.tableData.email,
    resortName: selectedLead.tableData.resortName,
    otherPhone1: selectedLead.tableData.otherPhone1,
    otherPhone2: selectedLead.tableData.otherPhone2,
    address: selectedLead.meta.addressInfo.address,
    city: selectedLead.meta.addressInfo.city,
    state: selectedLead.meta.addressInfo.state,
    zip: selectedLead.meta.addressInfo.zip
  }
  const [formObject, setFormObject] = useState(initFormValues)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formObject.lastName && formObject.resortName && formObject.homePhone) {
      API.updateLead({
        tableData: {
          firstName: formObject.firstName,
          lastName: formObject.lastName,
          homePhone: formObject.homePhone,
          altPhone: formObject.altPhone,
          email: formObject.email,
          resortName: formObject.resortName,
          otherPhone1: formObject.otherPhone1,
          otherPhone2: formObject.otherPhone2
        },
        meta: {
          addressInfo: {
            address: formObject.address,
            city: formObject.city,
            state: formObject.state,
            zip: formObject.zip
          }

        },
      })

        .catch(err => console.log(err));
    }
  };
  console.log(formObject)
  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Row>
          <Col>
            <Form.Control 
            name="firstName" 
            placeholder="First Name"
            onChange={handleInputChange}
            value={formObject.firstName}
            />
          </Col>
          <Col>
            <Form.Control 
            name="lastName" 
            placeholder="Last name" 
            onChange={handleInputChange}
            value={formObject.lastName}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control 
            name="email"
            placeholder="Email" 
            onChange={handleInputChange}
            value={formObject.email}
            />
          </Col>
          <Col>
            <Form.Control 
            name="resortName" placeholder="Resort Name" 
            onChange={handleInputChange}
            value={formObject.resortName}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control 
            name="homePhone" 
            placeholder="Home Phone" 
            onChange={handleInputChange}
            value={formObject.homePhone}
            />
          </Col>
          <Col>
            <Form.Control 
            name="altPhone" 
            placeholder="Alt Phone" 
            onChange={handleInputChange}
            value={formObject.altPhone}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control 
            name="otherPhone1" placeholder="Other Phone" 
            onChange={handleInputChange}
            value={formObject.otherPhone1}
            />
          </Col>
          <Col>
            <Form.Control 
            name="otherPhone2" placeholder="Other Phone" 
            onChange={handleInputChange}
            value={formObject.otherPhone2}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control 
            name="address" placeholder="Address" 
            onChange={handleInputChange}
            value={formObject.address}
            />
          </Col>
          <Col>
            <Form.Control 
            name="city" 
            placeholder="City"
            onChange={handleInputChange}
            value={formObject.city}
             />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control 
            name="state" 
            placeholder="State" 
            onChange={handleInputChange}
            value={formObject.state}
            />
          </Col>
          <Col>
            <Form.Control 
            name="zip" 
            placeholder="Zip"
            onChange={handleInputChange}
            value={formObject.zip}
            />
          </Col>
        </Form.Row>
      </Form.Group>
      <Button type="submit" >Save</Button>
    </Form>
  );
}

export function AddLead() {
  const [formObject, setFormObject] = useState({})
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  const handleFormSubmit = (event) => {

    event.preventDefault();
    if (formObject.lastName && formObject.resortName && formObject.homePhone) {
      API.saveLead({
        tableData: {
          firstName: formObject.firstName,
          lastName: formObject.lastName,
          homePhone: formObject.homePhone,
          altPhone: formObject.altPhone,
          email: formObject.email,
          resortName: formObject.resortName

        }
      })

        .catch(err => console.log(err));
    }
  };
  console.log(formObject)
  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Row>
        <Col>
          <Form.Control
            placeholder="First Name"
            name="firstName"
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Last Name"
            name="lastName"
            onChange={handleInputChange}
          />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control
            placeholder="Home Phone"
            name="homePhone"
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Alt Phone"
            name="altPhone"
            onChange={handleInputChange}
          />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Resort"
            name="resortName"
            onChange={handleInputChange}
          />
        </Col>
      </Form.Row>
      <Button type="submit" >Save</Button>
    </Form>
  )
}



