import React from "react";

const TableBody = ({ leads, columns, handleSelectLead }) => {
    const rows = leads.map(lead => {
        return {
            ...lead.tableData,
            id: lead._id
        }
    });
   

    return (

        <tbody>
            {
                rows.map(row => {
                    
                    return <tr onClick={(event) => handleSelectLead(row.id, event)}>
                        <td>{row.disposition}</td>
                        <td>{row.attempts}</td>
                        <td>{row.firstName}</td>
                        <td>{row.lastName} </td>
                        <td>{row.homePhone}</td>
                        <td>{row.altPhone}</td>
                        <td>{row.email}</td>
                        <td>{row.resortName}</td>
                        <td>{row.otherPhone1}</td>
                        <td>{row.otherPhone2}</td>
                    </tr>
                })
            }
            


        </tbody>
    )
}

export default TableBody;