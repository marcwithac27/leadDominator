import React, { useState, useEffect } from "react";
import { Form, CardGroup, Card, Container, Button, Alert, Col, Row } from "react-bootstrap";
import { DetailModal, BillingModal, ResortModal } from "../components/Modal"
import { Link } from "react-router-dom";
import API from "../utils/API"
import useCompData from '../utils/CompData/useCompData'

const Detail = (props) => {
    const {compData} = useCompData('LeadDetail')
    const {selectedLead} = compData;
    useEffect(() => {
        if(!selectedLead) props.history.push('/')
    }, [])
    if(!selectedLead) return null;
    return (
        <Container fluid>
            
            <Row>
                <Col md={4}>
                    <Card border="secondary" style={{ width: '30.5rem', height: "35rem", padding: "0" }}>
                        <Card.Header className="text-center" as="h4" style={{ height: "5rem" }}>{`${selectedLead.tableData.firstName}  ${selectedLead.tableData.lastName}`}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col as="h5">Address</Col>
                            </Row>
                            <Row>
                                <Col as="h6">{selectedLead.meta.addressInfo.address}</Col>
                            </Row>
                            <Row>
                                <Col as="h6" lg="auto">{selectedLead.meta.addressInfo.city}</Col>
                                <Col as="h6" lg="auto">{selectedLead.meta.addressInfo.state}</Col>
                                <Col as="h6" lg="auto">{selectedLead.meta.addressInfo.zip}</Col>
                            </Row>
                            <Row>
                                <Col as="h5">Email</Col>
                            </Row>
                            <Row>
                                <Col as="h6">{selectedLead.tableData.email}</Col>
                            </Row>
                            <br />
                            <Row>
                                <Col as="h5">Home Phone</Col>
                                <Col as="h5">Alt Phone</Col>
                            </Row>
                            <Row>
                                <Col as="h4" >{selectedLead.tableData.homePhone}</Col>
                                <Col as="h4" >{selectedLead.tableData.altPhone}</Col>
                            </Row>
                            <br />
                            <Row>
                                <Col as="h5">Other Phone 1</Col>
                                <Col as="h5">Other Phone 2</Col>
                            </Row>
                            <Row>
                                <Col as="h4">{selectedLead.tableData.otherPhone1}</Col>
                                <Col as="h4">{selectedLead.tableData.otherPhone2}</Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer><Link to="/">Back</Link></Card.Footer>
                        <DetailModal />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card border="secondary" style={{ width: '30.5rem', height: "35rem", padding: "0" }}>
                        <Card.Header className="text-center" as="h4" style={{ height: "5rem" }}>{selectedLead.tableData.resortName}</Card.Header>
                        <Card.Body>
                            <Row as="h5">
                                <Col>Deeded</Col>
                                <Col>Exchange</Col>
                                <Col>Ownership</Col>
                            </Row>
                            <Row as="h6">
                                <Col>{selectedLead.meta.resortInfo.deeded}</Col>
                                <Col>{selectedLead.meta.resortInfo.exchange}</Col>
                                <Col>{selectedLead.meta.resortInfo.ownership}</Col>
                            </Row>
                            <br />
                            <Row as="h5">
                                <Col>Banked</Col>
                                <Col>Bedrooms</Col>
                                <Col>Usage</Col>
                            </Row>
                            <Row as="h6">
                                <Col>{selectedLead.meta.resortInfo.banked}</Col>
                                <Col>{selectedLead.meta.resortInfo.bedrooms}</Col>
                                <Col>{selectedLead.meta.resortInfo.usage}</Col>
                            </Row>
                            <br />
                            <Row as="h5">
                                <Col>Addtional</Col>
                                <Col>Bathrooms</Col>
                                <Col>Wks/Pts</Col>

                            </Row>
                            <Row as="h6">
                                <Col>{selectedLead.meta.resortInfo.additional}</Col>
                                <Col>{selectedLead.meta.resortInfo.bathrooms}</Col>
                                <Col>{selectedLead.meta.resortInfo.wkPts}</Col>
                            </Row>
                            <br />
                            <Row as="h5">
                                <Col>Total Weeks</Col>
                                <Col>Unit</Col>
                                <Col>Rental Price</Col>

                            </Row>
                            <Row as="h6">
                                <Col></Col>
                                <Col>{selectedLead.meta.resortInfo.unit}</Col>
                                <Col>{selectedLead.meta.resortInfo.rentalPrice}</Col>
                            </Row>
                        </Card.Body>
                        <ResortModal />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card border="secondary" style={{ width: '30rem', height: "35rem", padding: "0", margin: "0" }}>
                        <Card.Header className="text-center" as="h2" style={{ height: "5rem" }}>Billing Info</Card.Header>
                        <Card.Body>
                            <Row as="h5">
                                <Col>Name On Account</Col>
                            </Row>
                            <Row as="h6">
                                <Col>{selectedLead.meta.billing.nameOnAccount}</Col>
                            </Row>

                            <Row as="h5">
                                <Col>Billing Address</Col>
                            </Row>
                            <Row as='h6'>
                                <Col>{selectedLead.meta.billing.billingAddress}</Col>
                            </Row>
                            <Row as="h5">
                                <Col>Billing City</Col>
                                <Col>Billing State</Col>
                                <Col>Billing Zip</Col>
                            </Row>
                            <Row as="h6">
                                <Col>{selectedLead.meta.billing.billingCity}</Col>
                                <Col>{selectedLead.meta.billing.billingState}</Col>
                                <Col>{selectedLead.meta.billing.billingZip}</Col>
                            </Row>
                            <Row as="h5">
                                <Col>Exp Month</Col>
                                <Col>Bank Name</Col>
                            </Row>
                            <Row as="h6">
                                <Col>{selectedLead.meta.billing.expMonth}</Col>
                                <Col>{selectedLead.meta.billing.bankName}</Col>
                            </Row>
                            <Row as="h5">
                                <Col>Exp Year</Col>
                                <Col>Check Number</Col>
                            </Row>
                            <Row as="h6">
                                <Col>{selectedLead.meta.billing.expYear}</Col>
                                <Col>{selectedLead.meta.billing.checkNumber}</Col>
                            </Row>
                            <Row as="h5">
                                <Col>Card Number</Col>
                                <Col>Account Number</Col>
                            </Row>
                            <Row as="h6">
                                <Col>{selectedLead.meta.billing.cardNumber}</Col>
                                <Col>{selectedLead.meta.billing.bankAccountNumber}</Col>
                            </Row>
                            <Row as="h5">
                                <Col>CVV</Col>
                                <Col>Routing Number</Col>
                            </Row>
                            <Row as="h6">
                                <Col>{selectedLead.meta.billing.cvv}</Col>
                                <Col>{selectedLead.meta.billing.routingNumber}</Col>
                            </Row>
                        </Card.Body>
                        <BillingModal />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Detail;