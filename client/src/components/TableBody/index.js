import React from "react";


const TableBody = ({leads, columns}) => {
    console.log('columns', columns)
    let rows = [];
    leads.forEach(lead => {
        const row = [];
        columns.forEach(column => {
            console.log('lead[column]', lead[column])
            row.push(lead[column])
        })
        rows.push(row)
    })
    console.log(rows)
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