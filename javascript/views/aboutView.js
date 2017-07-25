// This is where we define the view for the "About" page
var views = views || {};

(function (module) {
  function about() {
    console.log('About!');

    $('#content').text('All about Page.js');
    $('#contacts').hide();

  }

  module.about = about;
})(views);
