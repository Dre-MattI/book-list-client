'use strict';
var app = app || {};

((module) => {
  var errorView = {};

  errorView.initErrorPage = () => {
    $('.tab-content').hide();
    $('#books').append('<h1>Sorry bitch, no books at this location!</h1>');
  };

  module.errorView = errorView;
})(app);
