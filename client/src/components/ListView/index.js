import React, { useState, useEffect } from "react";
import TableBody from "../TableBody/index"
import TableHead from "../TableHead/index"
import PO from "../Popover"
import API from "../../utils/API"

import {FormControl, InputGroup, Table, Container} from "react-bootstrap"



const ListView = () => {
  const [leads, setLeads] = useState([])
  const [columns, setColumns] = useState([])
    // const [leads, setLeads] = useState([
        // {
        //     disposition: "NA",
        //     attempts: 2,
        //     firstName: 'marc',
        //     lastName: 'banana',
        //     email: "someemail@emial.com",
        //     resortName: "Westgate",
        //     homePhone: "3217689889",
        //     altNumber: "4078976755",
        //     address: "adefafea",
        //     city: "aefwafea",
        //     state: "afewaefee",
        //     zip: "afewaf",
        // }
    // ])
  //   const columns = () => {
  //     if (leads[0]) {
  //         return Object.keys(leads[0])
  //     }
  //     return []
  // }

    //const [sortKey, setSortKey] = useState('')

    const handleSort = (fieldToSortBy) => {
        const sortedArray = leads.sort((itema, itemb) => {
           return itema[fieldToSortBy] - itemb[fieldToSortBy]
        })
        setLeads(sortedArray)
    }
    

    useEffect(() => {
        loadLeads()
    }, [])

    const loadLeads = () => {
        API.getLeads()
        .then(res => {
           console.log("res.data",Array.isArray(res.data))
            setLeads(res.data)
            setColumns(Object.keys(res.data[0]))
        }
        )
        .catch(err => console.log(err));
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
           
            <TableBody leads={leads}
            columns={columns}/>
            </Table>
           
            <PO/>
            </Container>
           
    )
}

export default ListView;