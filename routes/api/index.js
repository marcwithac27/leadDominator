const router = require("express").Router();
const leadRoutes = require("./leads");
const userRoutes = require("./user")

// lead routes
router.use("/leads", leadRoutes);
router.use("/user", userRoutes)

module.exports = router;
