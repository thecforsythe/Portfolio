
'use strict';
var app = app || {};

(function(module) {
  const webDesignController = {};

  webDesignController.init = function() {
    $('.tab-content').hide();
    $('#web-Design').show();
  };

  module.webDesignController = webDesignController;
})(app);
