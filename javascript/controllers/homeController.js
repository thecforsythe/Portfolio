
'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.index = function() {
    $('.tab-content').hide();
    $('#home').show();
  };

  module.homeController = homeController;
})(app);
