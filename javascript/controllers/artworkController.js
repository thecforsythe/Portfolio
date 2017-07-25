
'use strict';
var app = app || {};

(function(module) {
  const artworkController = {};

  artworkController.init = function() {
    $('.tab-content').hide();
    $('#art').show();
  };

  module.artworkController = artworkController;
})(app);
