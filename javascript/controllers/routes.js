'use strict';
var app = app || {};


page('/', app.homeController.index);
page('/about', app.aboutController.index);
page('/webDesign', app.webDesignController.index);
page('/artwork', app.artworkController.index);

page();
