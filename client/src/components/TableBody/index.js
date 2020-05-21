import React from "react";
import Collap from "../Collapes"

const TableBody = ({leads, columns}) => {
    let rows = [];
    leads.forEach(lead => {
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