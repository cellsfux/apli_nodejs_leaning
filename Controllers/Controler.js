var express = require('express')

var userController = require('./userControler')



exports.router=(()=>{
    var apiRour= express.Router();

    //User Route
    apiRour.route('/users/register/').get(userController.register)
  
  
    return apiRour;
})();