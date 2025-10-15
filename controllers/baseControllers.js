const utilities = require("../utilities/");
const baseController = {};

baseController.buildHome = async function(req, res){
    //build the navigation
    const nav = await utilities.getNav()
    res.render("index", {title: "Home", nav: nav, errors: null,});
}

module.exports = baseController;