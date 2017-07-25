
'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = function() {
    $('.tab-content').hide();
    $('#home').show();
    app.Portfolio.fetchAll()
  };

  module.homeController = homeController;
})(app);
