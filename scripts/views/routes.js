'use strict';

page('/', app.bookView.initIndexPage);
page('/about', app.bookView.initAboutPage);
page('/new', app.bookView.initNewPage);

page();

// (app.Book.fetchAll(app.bookView.initIndexPage)
