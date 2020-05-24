import React, {useState} from "react"
import Collapsible from 'react-collapsible';
import { Form, Button, Col, Modal} from "react-bootstrap"


const Collap = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 return(
    <Collapsible trigger="Start here">
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Row>
    <Col>
      <Form.Control name="firstName" placeholder="First name" />
    </Col>
    <Col>
      <Form.Control name="lastName" placeholder="Last name" />
    </Col>
    <Col>
      <Form.Control name="email" placeholder="Email" />
    </Col>
    <Col>
      <Form.Control name="resortName" placeholder="Resort Name" />
    </Col>
  </Form.Row>
  <Form.Row>
    <Col>
      <Form.Control name="homePhone" placeholder="Home Phone" />
    </Col>
    <Col>
      <Form.Control name="altPhone" placeholder="Alt Phone" />
    </Col>
    <Col>
      <Form.Control name="otherPhone1" placeholder="Other Phone" />
    </Col>
    <Col>
      <Form.Control name="otherPhone2" placeholder="Other Phone" />
    </Col>
  </Form.Row> 
  <Form.Row>
    <Col>
      <Form.Control name="address" placeholder="Address" />
    </Col>
    <Col>
      <Form.Control name="city" placeholder="City" />
    </Col>
    <Col>
      <Form.Control name="state" placeholder="State" />
    </Col>
    <Col>
      <Form.Control name="zip" placeholder="Zip" />
    </Col>
  </Form.Row>
  <Form.Row>
    <Col>
    <Form.Label>Deeded</Form.Label>
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
    <Form.Label>Bathrooms</Form.Label>
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
  <br/>
  <Form.Row>
    <Col>
    <Button variant="secondary" onClick={handleShow}>
        Add Status
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Disposition</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
    <Col>
    <Button variant="success" type="submit">
    Add Billing Info
  </Button> 
    </Col>
    <Col>
    <Button variant="primary" type="submit">
    Save
  </Button> 
    </Col>
    <Col>
    <Button variant="danger" type="submit">
    Delete Lead
  </Button> 
    </Col>
  </Form.Row>
  <Form.Row></Form.Row>     
  </Form.Group>
</Form>
      </Collapsible>
 );
}

export default Collap;