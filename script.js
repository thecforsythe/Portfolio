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
$(document).ready(function(){
  $('li').hide();
  $('.main-nav').click(function(){
    $('li').slideToggle(100);
  });
});

/* Show only home div on load */
$(document).ready(function(){
  $('.tab-content').hide();
  $('#home').show();
});

/* Click tab to reveal div */
$(document).ready(function(){
  $('.tabs').on('click',function(){
    $('.tab-content').hide();
    var selectedTab = $(this).data('content');
    var makeIDforTab = '#' + selectedTab;
    $(makeIDforTab).show(500);
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
