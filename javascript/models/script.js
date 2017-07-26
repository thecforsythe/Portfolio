'use strict';

var app = app || {};
(function(module){

  //-------------CONSTRUCTOR FUNCTION----------
  function Portfolio (jsonObj) {
    this.screenShotFileName = jsonObj.screenShotFileName;
    this.title = jsonObj.title;
    this.url = jsonObj.url;
    this.date = jsonObj.date;
    this.description = jsonObj.description;
  }

  Portfolio.all = [];


  Portfolio.prototype.toHtml = function(){
    let template = Handlebars.compile($('#web-design-template').text());
    return template(this);
  };

  /* Replace this block with .map block below
  Portfolio.loadAll = function(jsonLibrary) {
    jsonLibrary.forEach(function(ele) {
      Portfolio.all.push(new Portfolio(ele));
    });
  };*/


  Portfolio.loadAll = function(jsonLibrary) {
    jsonLibrary.map(function(ele) {
      Portfolio.all.push(new Portfolio(ele));
    });
  };

  Portfolio.fetchAll = function() {
    let json = localStorage.jsonLibrary;
    if (json) {
      console.log({json});
      Portfolio.loadAll(JSON.parse(json));
      Portfolio.renderAll();
    } else {
      $.getJSON( 'Data/jsonLibrary.json' )
        .then(function(data) {
          localStorage.jsonLibrary = JSON.stringify(data);
          Portfolio.loadAll(data);
          Portfolio.renderAll();

        }, function (xhr, message, err) {
          console.error(err);
        });
    }
  }
  /* Replace this block with .map block below
  Portfolio.renderAll = function () {
    Portfolio.all.forEach(function(project){
      $('#web-design').append(project.toHtml())
    });
  }*/

  Portfolio.renderAll = function () {
    Portfolio.all.map(function(project){
      $('#web-design').append(project.toHtml())
    });
  }
  //--------------------END-------------------
  /* Click Hamburger icon to reveal tabs - Replacing code with page.js controller pages */
  var hamburgerReveal = function() {
    $('.main-nav').click(function(){
      $('.tabs').slideToggle(100);
    });
  };
  /* Click Share icon to reveal tabs */
  var shareReveal = function() {
    $('.socialMediaIcon').hide();
    $('.socialMedia').click(function(){
      $('.socialMediaIcon').slideToggle(100);
    });
  };

  /* Show only home div on load - Commented out because page.js will load tabs
  var homeOnlyOnLoad = function() {
    $('.tab-content').hide();
    $('#home').show();
  };
    */
  /* Click tab to reveal div - Commented out because page.js will load tabs
  var selectedTabReveal = function() {
    $('.tabs').on('click',function(){
      $('.tab-content').hide();
      var selectedTab = $(this).data('content');
      var makeIDforTab = '#' + selectedTab;
      $(makeIDforTab).show(500);
    });
  };
    */
  /*Find Parent*/
  //$('.webContainer').parent().css('background-color','green');

  /* Call all functions */
  $(document).ready(function(){
    hamburgerReveal();
    shareReveal();
    //homeOnlyOnLoad(); /*Old function, referenced on line 83 above, replaced when pages.js was incorporated*/
    //selectedTabReveal();  /*Old function, referenced on line 89 above, replaced when pages.js was incorporated*/

  });
  module.Portfolio = Portfolio;
}(app));
