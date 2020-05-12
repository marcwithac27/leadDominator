const router = require("express").Router();
const leadRoutes = require("./leads");

// lead routes
router.use("/leads", leadRoutes);

module.exports = router;
