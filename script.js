'use strict';

function Portfolio (image, name, link, date, notes) {
  this.image = image;
  this.name = name;
  this.link = link;
  this.date = date;
  this.notes = notes;
}

var aboutMe = new Portfolio('aboutMeScreeShot.png', 'About Me', 'https://thecforsythe.github.io/About-Me/', '6-12-17', 'Created first website using HTML and Javascript. Hey everbody has to start somewhere.');

/* Click Hamburger to reveal tabs */

/*
$(document).ready(function(){
  $('.main-nav').click(function(){
    $('li').slideToggle();
  });
});
*/

/* Click tab to reveal div */
$(document).ready(function(){
  $('.tab-content').hide();
  $('#home').show();
});


$(document).ready(function(){
  $('.tabs').on('click',function(){
    var selectedTab = $(this).data('content');
    $('.tab-content').hide();
    var makeIDforTab = '#' + selectedTab;
    $(makeIDforTab).show();
  });
});
/*
hamburgerReveal = function() {
  $('.main-nav').click(function(){
    $('li').slideToggle();
  });
};

$(document).ready(function(){
  hamburgerReveal();
})*/
console.log(aboutMe);
