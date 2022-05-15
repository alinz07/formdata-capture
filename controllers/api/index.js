const router = require("express").Router();

const formroutes = require("./form-routes.js");

router.use("/formsubs", formroutes);

module.exports = router;
