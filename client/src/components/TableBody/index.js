import React, { useEffect, useState } from "react";
import TableRow from "../TableRow";
import { Link } from "react-router-dom";
import API from "../../utils/API"
const leads = [{}];
const columns = Object.keys(leads[0])
let rows = []
leads.forEach(lead => {
    rows = columns.map(column => {
        return lead[column]
    })
})

const TableBody = () => {
    const [leads, setLeads] = useState([])

    useEffect(() => {
        loadLeads()
    }, [])

    const loadLeads = () => {
        API.getLeads()
        .then(res => 
           console.log(res.data)
            //setLeads(res.data),
            
        )
        .catch(err => console.log(err));
    }

    return (
        
        
    <tbody>
        {
            
                <TableRow key= {leads._id} rows= {rows}>
                    <Link to={"/leads/" + leads._id}/>

                </TableRow>
            
        }
    </tbody>
    )
}

export default TableBody;