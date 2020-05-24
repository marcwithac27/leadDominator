import React, { useState, useEffect } from "react";
import TableBody from "../TableBody/index"
import TableHead from "../TableHead/index"
import PO from "../Popover"
import API from "../../utils/API"
import {BillingModal,DetailModal,ResortModal,StatusModal,AddLeadModal} from "../Modal"
// import Modal from "../Modal"
// import {Status, ResortInfo, BillingInfo}from "../Form"
import {FormControl, InputGroup, Table, Container, Button, Modal} from "react-bootstrap"
import { BillingInfo } from "../Form";



const ListView = () => {
  // const [lead, setLead] = useState([])
  const [leads, setLeads] = useState([])
  const [columns, setColumns] = useState([])
  const [inputObj, setInputObj] = useState("") 
  const [filteredLeads, setFilteredLeads] = useState([...leads])
  const [selectedLead, setSelectedLead] = useState()
    //const [sortKey, setSortKey] = useState('')

    // const handleSort = (fieldToSortBy) => {
    //     const sortedArray = leads.sort((itema, itemb) => {
    //        return itema[fieldToSortBy] - itemb[fieldToSortBy]
    //     })
    //     setLeads(sortedArray)
    // }
    

    useEffect(() => {
        loadLeads()
    }, [])

    const loadLeads = () => {
        API.getLeads()
        .then(res => {
          console.log(res.data)
            setLeads(res.data)
            setColumns(Object.keys(res.data[0]))
            setFilteredLeads(res.data)
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

    // const handleSelect = (event) => {
    //   const {value} = event.target;
    //   setSelectedLead({...selectedLead, value})
    // }

    // const handleIC = (event) => {
    //   const {value} = event.target;
    //   setFilteredLeads({...filtered, value})
    // }

    // create handler to pass into TableBody
    // This should have the id of the lead
    // leads.find where lead.id === id
    // this part of state (selectedLead) will be passed into the modal
   
    
     const found = []
     
     const filtered = Object.keys(leads)
     .filter(key => found.includes(key))
     .reduce((obj, key) => {
       obj[key] = leads[key];
       console.log(obj)
       return obj;
     }, {});
    

    

    return(
        
        
      
       <Container fluid>
       <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text  id="inputGroup-sizing-default">Search</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl 
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
       <Table striped bordered hover>
        
            <TableHead
            columns={columns}
            
            
            />
           
            <TableBody leads={leads} columns={columns}></TableBody>
            
            </Table>
           
            <AddLeadModal/>
            <BillingModal/>
            <StatusModal/>
            <DetailModal/>
            <ResortModal/>

            </Container>
           
    )
    // <BillingModal onShow={someStateForBillingMOdal} selectedLead={stateForSelectedLEad} />
    // <ResortModal onShow={someStateForBillingMOdal} selectedLead={stateForSelectedLEad}/>
}

export default ListView;