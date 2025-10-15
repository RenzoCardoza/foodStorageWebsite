const utilities = require("../utilities")

const infoController = {}

infoController.buildInformation = async function(req, res){
    let nav = await utilities.getNav()
    res.render("infos/infos", {title: "Where to begin?", nav, errors: null})
}

module.exports = infoController