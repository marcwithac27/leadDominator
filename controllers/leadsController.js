const Lead = require("../models/lead")
const Disposition = require("../models/dispo")
// Defining methods for the leadsController
module.exports = {
  findAll: function(req, res, next) {
    Lead
      .find(req.query)
      .populate("disposition")
      .sort({ date: -1 })
      .then((data) => {
        const fData = data.map(item => {
          const leadInfo = {
            Disposition: item.disposition[0] || null,
            Attempts: item.disposition ? item.disposition.length : 0,
            
            Name: item.firstName + " " + item.lastName,
            Phone_Numbers: item.homePhone + " " + item.altPhone,
            ResortName: item.resortName,
            Email: item.email
          }
          return leadInfo
        });
        res.json(fData)
      })
      .catch(err => next(err));
  },

  

  createDispo: function (req,res, next){
    Lead.findOne({id: req.body.id})
    .then(lead => {
      Disposition.create({
        status: req.body.status,
        lead: lead
      }).then(dispo => {
        res.json(dispo)
      })
    })
    .catch(err => next(err));
  },

  findById: function(req, res, next) {
    Lead
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => next(err));
  },
  create: function(req, res, next) {
    const reqbody = {
      firstName: "",
      lastName: "",
      homePhone: "",
      altPhone: "",
      email: "",
      resort: "",
    }
    Lead
      .create({
        tableData: {
          firstname: reqbody.firstName,
          lastName: reqbody.lastName,
          homePhone: reqbody.homePhone,
          altPhone: reqbody.altPhone,
          email: reqbody.email,
          resortName: reqbody.resort
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => next(err));
  },
  update: function(req, res, next) {
    Lead
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => next(err));
  },
  remove: function(req, res, next) {
    Lead
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => next(err));
  }
};
