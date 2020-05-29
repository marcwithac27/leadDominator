const User = require("../models/users")


module.exports = {

    create: function (req,res,next){
       const{
           userData: {
               firstName,
               lastName,
               userName,
               password,
               email,
           }
       } = req.body;
       console.log("req.body", req.body)
       User
        .create({
            userData: {
                firstName,
                lastName,
                userName,
                password,
                email
            }
        })
        .then((dbModel) => {
            console.log("dbModel", dbModel)
            res.json(dbModel)
        })
        .catch(err => next(err))
    },

    update: function (req, res, next){
        User
          .findOneAndUpdate({_id: req.params.id}, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => next(err))
    }
}