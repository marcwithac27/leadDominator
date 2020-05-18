import React, { useState, useEffect } from "react";
import TableBody from "../TableBody/index"
import TableHead from "../TableHead/index"
import PO from "../Popover"
import API from "../../utils/API"

import {FormControl, InputGroup, Table, Container} from "react-bootstrap"



const ListView = () => {
  // const [lead, setLead] = useState([])
  const [leads, setLeads] = useState([])
  const [columns, setColumns] = useState([])
  const [inputObj, setInputObj] = useState("") 
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
            setLeads(res.data)
            setColumns(Object.keys(res.data[0]))
        }
        )
        .catch(err => console.log(err));
    }

    // useEffect(() => {
    //   findLeads()
    // }, [])

    // const findLeads = (query) => {
    //   API.searchLeads(query)
    //   .then(res => {
    //     setLeads(res.data)
    //     setColumns(Object.keys(res.data[0]))
    //   })
    //   .catch(err => console.log(err));
    // }

    const handleIC = (event) => {
      const {value} = event.target;
      setInputObj({...inputObj, value})
    }

    const handleIS = (event) => {
      // useEffect(() => {
      //   findLeads()
      // }, [])
     
        API.searchLeads(event)
        .then(res => {
          setLeads(res.data)
          setColumns(Object.keys(res.data[0]))
        })
        .catch(err => console.log(err));
      
    }

    

    return(
        
        
      
       <Container fluid>
       <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl onChange={handleIC} onSubmit={handleIS}
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