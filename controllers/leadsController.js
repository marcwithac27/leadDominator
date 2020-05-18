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
            homePhone: item.homePhone,
            altPhone: item.altPhone,
            email: item.email
          }
          return leadInfo
        });
        res.json(fData)
      })
      // .then(leads => {
      //   const dataToSend = leads.map(lead => {
      //     return {
      //       ...lead,
      //       disposition: lead.disposition[0],
      //       attempts: lead.disposition.length
      //     }
      //   })
      //   res.json(dataToSend)
      // })
      // .then((lead) => {
      //   console.log(lead.disposition)
      //   res.send([
      //     ...lead,
      //     {disposition: lead[0]},
      //   ])
         
        
      // })
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

  findById: function(req, res) {
    Lead
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    Lead
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    Lead
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Lead
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
