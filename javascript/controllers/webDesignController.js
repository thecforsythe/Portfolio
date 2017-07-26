
'use strict';
var app = app || {};

(function(module) {
  const webDesignController = {};

  webDesignController.index = function() {
    $('.tab-content').hide();
    $('#web-design').show();
    app.Portfolio.fetchAll();
  };

  module.webDesignController = webDesignController;
})(app);
