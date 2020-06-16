import React, { useState, useEffect } from "react";
import TableBody from "../TableBody/index"
import TableHead from "../TableHead/index"
import API from "../../utils/API"
import { BillingModal, DetailModal, ResortModal, StatusModal, AddLeadModal } from "../Modal"
import { FormControl, InputGroup, Table, Container } from "react-bootstrap"
import useCompData from '../../utils/CompData/useCompData'
import { PromiseProvider } from "mongoose";
// import PO from "../Popover"



const ListView = (props) => {
  const [leads, setLeads] = useState([])
  const [columns, setColumns] = useState([])
  const [selectedLead, setSelectedLead] = useState(null)
  const {setData} = useCompData('LeadDetail');
  // const [filteredLeads, setFilteredLeads] = useState([...leads])
  // const [sortKey, setSortKey] = useState('')
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


  // const handleIC = (event) => {
  //   const {value} = event.target;
  //   setFilteredLeads({...filtered, value})
  // }


  //  const found = []

  //  const filtered = Object.keys(leads)
  //  .filter(key => found.includes(key))
  //  .reduce((obj, key) => {
  //    obj[key] = leads[key];
  //    console.log(obj)
  //    return obj;
  //  }, {});


  const handleSelectLead = (id) => {
    const found = leads.find(lead => lead._id === id)
    // setSelectedLead(found)
    setData({selectedLead: found});
    props.history.push('/detail');
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
      <AddLeadModal loadLeads={loadLeads} />
      {
        selectedLead &&
        <>
          <p>actions for: {selectedLead.tableData.firstName +" "+ selectedLead.tableData.lastName}</p>
          <button onClick={() => setSelectedLead(null)}>X</button>
          <BillingModal selectedLead={selectedLead}/>
          <StatusModal selectedLead={selectedLead}/>
          <DetailModal selectedLead={selectedLead} />
          <ResortModal selectedLead={selectedLead}/>
        </>
      }
      

    </Container>

  )
}

export default ListView;