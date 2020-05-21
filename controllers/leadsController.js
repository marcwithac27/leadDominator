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
            disposition: item.disposition[0] || null,
            attempts: item.disposition ? item.disposition.length : 0,
            
            name: item.firstname + " " + item.lastName,
            phoneNumbers: item.homePhone + " " + item.altPhone,
            resortName: item.resortName,
            email: item.email
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
    Lead
      .create(req.body)
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
