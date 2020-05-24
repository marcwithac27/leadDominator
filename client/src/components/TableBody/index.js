import React from "react";

const TableBody = ({leads, columns, selectRow}) => {
    let rows = [];
    leads.forEach(lead => {
        console.log(leads)
        const row = [];
        columns.forEach(column => {
            row.push(lead[column])
            
        })
        
        rows.push(row)
        
    //    console.log(row [2])
    })
    
    return (
        
    <tbody>
        
        {
            rows.map(row => {
                return <tr>
                    {/* <td><button onClick={() => selectRow(row.id)}>View Info</button></td> */}
                    {
                        row.map(data => {
                           
                            return <td>{(data)}</td>
                        })
                        
                    }
                    
                </tr>
            })
        }
        
        
    </tbody>
    )
}

export default TableBody;