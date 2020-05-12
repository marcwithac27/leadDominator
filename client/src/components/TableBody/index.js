import React from "react";
import TableRow from "../TableRow";
const leads = [{}];
const columns = Object.keys(leads[0])
let rows = []
leads.forEach(lead => {
    rows = columns.map(column => {
        return lead[column]
    })
})

const TableBody = (props) => {
    return (
        
    <tbody>
        {
            
                <TableRow rows= {rows}/>
            
        }
    </tbody>
    )
}

export default TableBody;