'use strict';
/*-------------CONSTRUCTOR FUNCTION----------
function Portfolio (image, name, link, date, notes) {
  this.image = image;
  this.name = name;
  this.link = link;
  this.date = date;
  this.notes = notes;
}

var aboutMe = new Portfolio('aboutMeScreeShot.png', 'About Me', 'https://thecforsythe.github.io/About-Me/', '6-12-17', 'Created first website using HTML and Javascript. Hey everbody has to start somewhere.');
console.log(aboutMe);

--------------------END-------------------*/
/* Click Hamburger to reveal tabs */
var hamburgerReveal = function() {
  $('.tabs').hide();
  $('.main-nav').click(function(){
    $('.tabs').slideToggle(100);
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

/* Call all functions */
$(document).ready(function(){
  hamburgerReveal();
  homeOnlyOnLoad();
  selectedTabReveal();
});
