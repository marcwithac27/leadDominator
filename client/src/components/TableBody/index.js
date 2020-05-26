import React from "react";

const TableBody = ({ leads, columns, handleSelectLead }) => {
    const rows = leads.map(lead => {
        return {
            ...lead.tableData,
            id: lead._id
        }
    });
    // leads.forEach(lead => {
    //     console.log(leads)
    //     const row = [];
    //     columns.forEach(column => {
    //         row.push(lead.tableData[column])

    //     })

    //     rows.push(row)

    //     //    console.log(row [2])
    // })

    return (

        <tbody>
            {
                rows.map(row => {
                    console.log(row)
                    return <tr onClick={(event) => handleSelectLead(row.id, event)}>
                        {/* <td><button onClick={() => handleSelectLead(row.id)}>EditBilling</button></td> */}
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
            {
                // rows.map(row => {

                //     return <tr>
                        

                //         {
                //             row.map(data => {
                //                 console.log(data, row)
                //                 return <td onClick={() => handleSelectLead(data.id)}>{(data)}</td>
                //             })

                //         }
                        

                //     </tr>
                // })
            }


        </tbody>
    )
}

export default TableBody;