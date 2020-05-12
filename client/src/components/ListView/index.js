import React, { useState } from "react";
import TableBody from "../TableBody/index"
import TableHead from "../TableHead/index"
import {Input, FormBtn} from "../Form"


const ListView = () => {
    const [leads, setLeads] = useState([
        {
            id: '123',
            firstName: 'marc',
            lastName: 'banana',
            email: "someemail@emial.com"
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
        <>
        <Input placeholder= "Search"/>
        <FormBtn/>
            <TableHead
            columns={columns}
            handleSort={handleSort}
            
            />
            <>
            <TableBody/>
            </>
        </>
    )
}

export default ListView;