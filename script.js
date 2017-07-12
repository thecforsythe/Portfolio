'use strict';

function Portfolio (image, name, link, date, notes) {
  this.image = image;
  this.name = name;
  this.link = link;
  this.date = date;
  this.notes = notes;
}

var aboutMe = new Portfolio('aboutMeScreeShot.png', 'About Me', 'https://thecforsythe.github.io/About-Me/', '6-12-17', 'Created first website using HTML and Javascript. Hey everbody has to start somewhere.');


$(document).ready(function(){
  $('.main-nav').click(function(){
    $('li').slideToggle();
  });
});


console.log(aboutMe)
