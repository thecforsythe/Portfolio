
'use strict';
var app = app || {};

(function(module) {
  const artworkController = {};

  artworkController.init = function() {
    $('.tab-content').hide();
    $('#artwork').show();
  };

  module.artworkController = artworkController;
})(app);
