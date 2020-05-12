import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import { writeFileSync } from "fs";

const Leads = () => {
    const [leads, setleads] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadLeads()
    }, [])

    const loadLeads = () => {
        API.getLeads()
        .then(res => setleads(res.data)
        )
        .catch(err => console.log(err))
    };

    const deleteLead = () => {
        API.deleteLead(id)
            .then(res => loadLeads())
            .catch(err => console.log(err));
    }

    const handleInputChange = (event) => {
        const {name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(formObject.lastName && formObject.homePhone && formObject.resortName) {
            API.saveLead({
                firstName: formObject.firstName,
                lastName: formObject.lastName,
                homePhone: formObject.homePhone,
                altPhone: formObject.altPhone,
                email: formObject.email,
                address: formObject.address,
                city: formObject.city,
                state: formObject.state,
                zip: formObject.zip,
                resortName: formObject.resortName
            })
            .then(res => loadLeads())
            .catch(err => console.log(err))
        }
    };
    
}