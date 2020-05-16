const Lead = require("../models/lead")
const Disposition = require("../models/dispo")
// Defining methods for the leadsController
module.exports = {
  findAll: function(req, res, next) {
    Lead
      .find(req.query)
      .populate("disposition")
      .sort({ date: -1 })
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
      .then((data) => {
        Disposition.countDocuments({lead: data._id})
        .then(() => {
          res.send([
            ...data,
          ])
        })
      })
      .catch(err => next(err));
  },
  createDispo: function (req,req){
    Lead.findOne({id: req.body.id})
    .then(lead => {
      Disposition.create({
        status: req.body.status,
        lead: lead
      }).then(dispo => {
        res.json(dispo)
      })
    })
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
