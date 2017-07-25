'use strict';
var app = app || {};


page('/', app.homeController.init);
page('/about', app.aboutController.init);
page('/webDesign', app.webDesignController.init);
page('/artwork', app.artworkController.init);

page();
