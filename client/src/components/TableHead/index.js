import React from "react";


const TableHead = (props) => {
    return(
        <thead>
            <tr>
                <th onClick={props.handleSortId}>{props.headId}</th>
                <th>{props.headPhoto}</th>
                <th onClick={props.handleSortName}>{props.headName}</th>
                <th>{props.headEmail}</th>
            </tr>
        </thead>
    )
}

export default TableHead;