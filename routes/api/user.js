const router = require("express").Router();

const userController = require("../../controllers/userController");


router
    .route("/users")
    .post(userController.create);

router
    .route("/user/id")
    .put(userController.update);

module.exports = router;
