import React from "react";


const TableHead = (props) => {
    
    return(
        <thead>
            <tr>
                {props.columns.map((columnName) => {
                    return <th key={columnName} onClick={ () => props.handleSort(columnName)}>{columnName}</th>
                })}
                
            </tr>
        </thead>
    )
}

export default TableHead;