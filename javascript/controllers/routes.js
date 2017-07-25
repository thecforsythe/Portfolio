// This is where we define the client-side routes
page('*', //view.middleware.activeHeaderLink);
  function(ctx, next) {
    var activeLink = $(`a[href='${ctx.path}']`);
    //console.log(activeLink.arr('href'));

    $('a.active').removeClass('active');
    activeLink.toggleClass('active');

    next();
  });

page('/', app.home);
page('/about', app.about);
page('/web-design', app.contact);
page('/artwork', 'about');

page();
