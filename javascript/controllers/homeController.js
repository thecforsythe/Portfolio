
'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = function() {
    $('.tab-content').hide();
    $('#home').show();
  };

  module.homeController = homeController;
})(app);
