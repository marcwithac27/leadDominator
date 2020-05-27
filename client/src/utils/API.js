import axios from "axios";

export default {
  // Gets all leads
  getLeads: function() {
    return axios.get("/api/leads");
  },
  // Gets the book with the given id
  searchLeads: function(query) {
    return axios.get("/api/leads/" + query);
  },
  getLead: function(id) {
    return axios.get("/api/leads/" + id);
  },
  // Deletes the book with the given id
  deleteLead: function(id) {
    return axios.delete("/api/leads/" + id);
  },
  // Saves a book to the database
  saveLead: function(leadData) {
    return axios.post("/api/leads/", leadData);
  },
  updateLead: function(id){
    return axios.put("/api/lead/" + id)
  },
};
