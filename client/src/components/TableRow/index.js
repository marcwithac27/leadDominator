import React from "react";


const TableRow = (props) => {
    return(
        <tr>
           
            <td>
                {props.disposition}
            </td>
            <td>
                {props.attempts}
            </td>
            <td>
                {props.firstName}
            </td>
            <td>
                {props.lastName}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.resortName}
            </td>
            <td>
                {props.homePhone}
            </td>
            <td>
                {props.altPhone}
            </td>
            <td>
                {props.address}
            </td>
            <td>
                {props.city}
            </td>
            <td>
                {props.state}
            </td>
            <td>
                {props.zip}
            </td>
        </tr>
    );
}

export default TableRow;