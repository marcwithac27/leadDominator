import React, { useState } from "react";
import TableBody from "../TableBody/index"
import TableHead from "../TableHead/index"
import PO from "../Popover"

import {FormControl, InputGroup, Table, Container} from "react-bootstrap"



const ListView = () => {
    const [leads, setLeads] = useState([
        {
            disposition: "NA",
            attempts: 2,
            firstName: 'marc',
            lastName: 'banana',
            email: "someemail@emial.com",
            resortName: "Westgate",
            homePhone: "3217689889",
            altNumber: "4078976755",
            address: "adefafea",
            city: "aefwafea",
            state: "afewaefee",
            zip: "afewaf",
        }
    ])
    const columns = Object.keys(leads[0]);

    //const [sortKey, setSortKey] = useState('')

    const handleSort = (fieldToSortBy) => {
        const sortedArray = leads.sort((itema, itemb) => {
           return itema[fieldToSortBy] - itemb[fieldToSortBy]
        })
        setLeads(sortedArray)
    }
    
    return(
        
        
      
       <Container fluid>
       <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
       <Table striped bordered hover>
        
            <TableHead
            columns={columns}
            handleSort={handleSort}
            
            />
           
            <TableBody/>
            </Table>
           
            <PO/>
            </Container>
           
    )
}

export default ListView;