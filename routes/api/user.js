const router = require("express").Router();

const userController = require("../../controllers/userController");


router
    .route("/")
    .post(userController.create);

router
    .route("/:id")
    .put(userController.update)
    .get(userController.findById);

router
    .route("/:username")
    .get(userController.findByUserName);

router
    .route('/login')
    .post(userController.login)

module.exports = router;
