const express = require("express")
const router = new express.Router()
const infoController = require("../controllers/infoControllers")
const utilities = require("../utilities")

router.get("/", utilities.handleErrors(infoController.buildInformation))

module.exports = router