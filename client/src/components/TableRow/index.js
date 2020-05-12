import React from "react";


const TableRow = (props) => {
    return(
        <tr>
            <td>
                {props.id}
            </td>
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
                {props.resortName}
            </td>
            <td>
                {props.mailingAddress}
            </td>
            <td>
                {props.mailingCity}
            </td>
            <td>
                {props.mailingState}
            </td>
            <td>
                {props.MailingPostalCode}
            </td>
            <td>
                {props.email}
            </td>
        </tr>
    );
}

export default TableRow;