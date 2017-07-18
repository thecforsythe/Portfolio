'use strict';
//-------------CONSTRUCTOR FUNCTION----------
function Portfolio (jsonObj) {
  this.image = jsonObj.image;
  this.name = jsonObj.name;
  this.link = jsonObj.link;
  this.date = jsonObj.date;
  this.notes = jsonObj.notes;
}

Portfolio.all = [];


Portfolio.prototype.toHtml = function(){
  let template = Handlebars.compile($('#web-design-template').text());
  return template(this);
};

Portfolio.loadAll = function(jsonLibrary) {
  jsonLibrary.forEach(function(ele) {
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
    $.getJSON( 'data/jsonLibrary.json' )
      .then(function(data) {
        localStorage.jsonLibrary = JSON.stringify(data);
        Portfolio.loadAll(data);
        Portfolio.renderAll();

      }, function (xhr, message, err) {
        console.error(err);
      });
  }
}
Portfolio.renderAll = function () {
  Portfolio.all.forEach(function(project){
    $('#web-design').append(project.toHtml())
  });
}
//--------------------END-------------------
/* Click Hamburger or share icons to reveal tabs */
var hamburgerReveal = function() {
  $('.main-nav').click(function(){
    $('.tabs').slideToggle(100);
  });
};
/* Click Hamburger or share icons to reveal tabs */
var shareReveal = function() {
  $('.socialMediaIcon').hide();
  $('.socialMedia').click(function(){
    $('.socialMediaIcon').slideToggle(100);
  });
};

/* Show only home div on load */
var homeOnlyOnLoad = function() {
  $('.tab-content').hide();
  $('#home').show();
};

/* Click tab to reveal div */
var selectedTabReveal = function() {
  $('.tabs').on('click',function(){
    $('.tab-content').hide();
    var selectedTab = $(this).data('content');
    var makeIDforTab = '#' + selectedTab;
    $(makeIDforTab).show(500);
  });
};

/*Find Parent*/
//$('.webContainer').parent().css('background-color','green');

/* Call all functions */
$(document).ready(function(){
  hamburgerReveal();
  shareReveal();
  homeOnlyOnLoad();
  selectedTabReveal();

});
