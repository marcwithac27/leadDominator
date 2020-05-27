import React, { useState, useEffect } from "react";
import TableBody from "../TableBody/index"
import TableHead from "../TableHead/index"
import API from "../../utils/API"
import { BillingModal, DetailModal, ResortModal, StatusModal, AddLeadModal } from "../Modal"
import { FormControl, InputGroup, Table, Container } from "react-bootstrap"
// import PO from "../Popover"



const ListView = () => {
  // const [lead, setLead] = useState([])
  const [leads, setLeads] = useState([])
  const [columns, setColumns] = useState([])
  const [selectedLead, setSelectedLead] = useState({})
  // const [inputObj, setInputObj] = useState("") 
  // const [filteredLeads, setFilteredLeads] = useState([...leads])
  // const [selectedLead, setSelectedLead] = useState()
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
        
        setLeads(res.data)
        setColumns(Object.keys(res.data[0].tableData))

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


  //  const found = []

  //  const filtered = Object.keys(leads)
  //  .filter(key => found.includes(key))
  //  .reduce((obj, key) => {
  //    obj[key] = leads[key];
  //    console.log(obj)
  //    return obj;
  //  }, {});


  const handleSelectLead = (id) => {
    API.getLead(id)
    .then(res => {
      console.log("Lead?", res.data, selectedLead)
      setSelectedLead(res.data)
    })
    
    
    // setState of which was clicked,
    // pull that whole lead object from your leads state
    // feed that lead object into your modals
   
  } 

  return (



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
          columns={['Disposition', 'Attempts', 'First Name', 'Last Name', 'Home Phone', 'Alt Phone', 'Email','Resort Name', 'Other Phone 1', 'Other Phone 2']}


        />

        <TableBody leads={leads} columns={columns} handleSelectLead={handleSelectLead} ></TableBody>

      </Table>
      <AddLeadModal />
      <BillingModal />
      <StatusModal />
      <DetailModal />
      <ResortModal />

    </Container>

  )
}

export default ListView;