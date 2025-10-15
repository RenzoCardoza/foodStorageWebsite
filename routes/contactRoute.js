const express = require("express")
const router = new express.Router()
const contactController = require("../controllers/contactControllers")
const utilities = require("../utilities")

router.get("/", utilities.handleErrors(contactController.buildContactPage))

module.exports = router