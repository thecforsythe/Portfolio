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

var webDesignLibrary = [

  {
    screenShotFileName:   'pictures/checkInScreenShot.png',
    title:                'Check In: A better way to select hotel rooms',
    url:                'https://dustinyschild.github.io/hotel-final-project/index.html',
    date:                 '6-30-2017',
    description:          '<p>Working with two other partners, Dustin Yelland and Benjamin Beeksma, we created an API that allows travelers to choose a hotel room in a similar mannor to choosing a seat on airplane. Rooms can be filtered by room type and amenities. I provided a custom layout, css styling and responsive design.</p>',
  },
  {
    screenShotFileName:   'pictures/busMallScreenShot.png',
    title:                'Bus Mall',
    url:                  'https://thecforsythe.github.io/busMall/',
    date:                 '6-23-2017',
    description:          '<p>This site features css keyframe animations and a chart powered by chart.js. Click on the pictures to see the animated transitions.</p>',
  },
  {
    screenShotFileName:   'pictures/aboutMeScreenShot.png',
    title:                'About Me',
    url:                  'https://thecforsythe.github.io/About-Me/',
    date:                 '6-9-2017',
    description:          '<p>This is my first webpage. Pretty basic, but hey, everyone has to start somewhere!</p>',
  },

];

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
})
console.log(webDesignLibrary);
