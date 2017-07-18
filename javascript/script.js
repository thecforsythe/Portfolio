'use strict';
//-------------CONSTRUCTOR FUNCTION----------
function Portfolio (jsonObj) {
  this.image = jsonObj.image;
  this.name = jsonObj.name;
  this.link = jsonObj.link;
  this.date = jsonObj.date;
  this.notes = jsonObj.notes;
}

/*var aboutMe = new Portfolio('aboutMeScreeShot.png', 'About Me', 'https://thecforsythe.github.io/About-Me/', '6-12-17', 'Created first website using HTML and Javascript. Hey everbody has to start somewhere.');
console.log(aboutMe);*/
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
  var eTag;
  $.ajax({
    type: 'HEAD',
    url: 'data/jsonLibrary.json',
    complete: function(XMLHttpRequest){
      eTag = XMLHttpRequest.getResponseHeader('ETag');
    }
  });
  if (localStorage.eTag === eTag) {

    Portfolio.loadAll(JSON.parse(localStorage.jsonLibrary));
    portfolioView.initIndexPage();
  } else {
    $.getJSON( 'data/jsonLibrary.json', function(data,message,xhr) {
      localStorage.eTag = xhr.getResponseHeader('ETag');
      localStorage.rawData = JSON.stringify(data);
      Portfolio.loadAll(data);
      portfoioView.initIndexPage();
    });
  }
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
