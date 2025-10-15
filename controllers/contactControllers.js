const utilities = require("../utilities")

const contactController = {}

contactController.buildContactPage = async function(req, res){
    let nav = await utilities.getNav()
    res.render("contact/contact", {title: "Contact Us", nav, errors: null})
}

module.exports = contactController