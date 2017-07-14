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
--------------------END-------------------*/
var rawData = [
  {
    title:       'Bacon Ipsum',
    category:    'food',
    author:      'Kevin Bacon',
    authorUrl:   'http://www.imdb.com/name/nm0000102/',
    publishedOn: '2015-11-05',
    body:        '<p>Bacon ipsat pig.</p>'
  },
------------------------------------------------
var webDesignLibrary = [

{
screenShotFileName:   'pictures/checkInScreenShot.png',
title:                'Check In: A better way to select hotel rooms',
url:                'https://dustinyschild.github.io/hotel-final-project/index.html'
dateFinished:         '6-30-2017'
description:          '<p>Working with two other partners, Dustin Yelland and Benjamin Beeksma, we created an API that allows travelers to choose a hotel room in a similar mannor to choosing a seat on airplane. Rooms can be filtered by room type and amenities. I provided a custom layout, css styling and responsive design.</p>'
};

{
screenShotFileName:   'pictures/busMallScreenShot.png',
title:                'Bus Mall',
url:                  'https://thecforsythe.github.io/busMall/'
dateFinished:         '6-23-2017'
description:          '<p>This site features css keyframe animations and a chart powered by chart.js. Click on the pictures to see the animated transitions.</p>'
};

{
  screenShotFileName:   'pictures/aboutMeScreenShot.png',
  title:                'About Me',
  url:                  'https://thecforsythe.github.io/About-Me/'
  dateFinished:         '6-9-2017'
  description:          '<p>This is my first webpage. Pretty basic, but hey, everyone has to start somewhere!</p>'
};

];
 https://thecforsythe.github.io/portfolio/


/* Click Hamburger to reveal tabs */
$(document).ready(function(){
  $('.tabs').hide();
  $('.main-nav').click(function(){
    $('.tabs').slideToggle(100);
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
