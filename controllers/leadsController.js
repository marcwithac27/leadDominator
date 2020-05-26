const Lead = require("../models/lead")
const Disposition = require("../models/dispo")
// Defining methods for the leadsController
module.exports = {
  findAll: function (req, res, next) {
    Lead
      .find(req.query)
      .populate("disposition")
      .sort({ date: -1 })
      .then((data) => {
        console.log('data from findALL', data)
        const fData = data.map(lead => {
          const dispoStatus = lead.disposition && lead.disposition.length ? lead.disposition[0].status : null;
          return {
            ...lead.toObject(),
            tableData: {
              ...lead.tableData.toObject(),
              disposition: dispoStatus,
              attempts: lead.disposition ? lead.disposition.length : 0,
              firstName: lead.tableData.firstName,
              lastName: lead.tableData.lastName,
              homePhone: lead.tableData.homePhone,
              altPhone: lead.tableData.altPhone,
              email: lead.tableData.email,
              resortName: lead.tableData.resortName,
              otherPhone1: lead.tableData.otherPhone1,
              otherPhone2: lead.tableData.otherPhone2
            }
          }
        })
        res.json(fData)
      })
      .catch(err => next(err));
  },



  createDispo: function (req, res, next) {
    Lead.findOne({ id: req.body.id })
      .then(lead => {
        Disposition.create({
          status: req.body.status,
          lead: lead,
          note: req.body.note,
          date: now() 
        }).then(dispo => {
          res.json(dispo)
        })
      })
      .catch(err => next(err));
  },

  findById: function (req, res, next) {
    Lead
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => next(err));
  },
  create: function (req, res, next) {
    const {
      tableData: {
        firstName,
        lastName,
        homePhone,
        altPhone,
        email,
        resortName
      }
    } = req.body;
    console.log("req.body",req.body)
    Lead
      .create({
        tableData: {
          firstName,
          lastName,
          homePhone,
          altPhone,
          email,
          resortName
        }
      })
      .then((dbModel) => {
        console.log("This is what you are looking for",dbModel)
        res.json(dbModel)
      })
      .catch(err => next(err));
  },
  update: function (req, res, next) {
    Lead
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => next(err));
  },
  remove: function (req, res, next) {
    Lead
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => next(err));
  }
};
