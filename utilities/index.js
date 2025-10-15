const Util = {};

// BUILD NAVIGATION BAR
Util.getNav = async function (req, res, next){
    let list = '<ul class="navBar">'
    list += '<a href="/" title="Home Page"><li>Home</li></a>'
    list += '<a href="/infos/" title="More Info"><li>Get Started</li></a>'
    list += '<a href="/contact/" title="Contact"><li>Contact Us</li></a>'
    list += '</ul>'
    return list
}

/* ****************************************
 * Middleware For Handling Errors
 * Wrap other function in this for 
 * General Error Handling
 **************************************** */
Util.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

module.exports = Util;