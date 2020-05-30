const User = require("../models/users")
const jwt = require('jsonwebtoken');


module.exports = {

    create: function (req, res, next) {
        const {
            firstName,
            lastName,
            userName,
            password,
            email,
        } = req.body;
        User
            .create({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password,
                email: email
            })
        const userId = req.body._id
        const token = jwt.sign({ userName, userId }, 'shhh')
        console.log('token', token)
        res
            .cookie('token', token, { httpOnly: true })
            .send('You are logged in...');
        console.log("req.body", req.body)
            .then((dbModel) => {
                console.log("dbModel", dbModel)
                // jwt logic here to save dbModel to
                // dbModel.toObject()
                res.json(dbModel.toObject())
            })
            .catch(err => next(err))
    },
    login: function(req, res, next) {
        const {userName, password} = req.body;
        User.findOne({userName}).then(user => {
            console.log('is password correct?---', user.checkPassword(password))
            res.json(user);
        });
    },

    update: function (req, res, next) {
        User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => next(err))
    },
    findById: function (req, res, next){
        User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => next(err))
    },

    findByUserName: function (req, res, next) {
        User
        .findByUserName(req.params.userName)
        .then(dbModel=> res.json(dbModel))
        .catch(err => next(err));
    }
}