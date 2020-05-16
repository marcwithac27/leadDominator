const Lead = require("../models/lead");

// Defining methods for the leadsController
module.exports = {
  findAll: function(req, res) {
    Lead
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
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
