define(function (require) {
  'use strict';
  var Marionette = require('marionette');
  var app = require('app');
  var AppLayoutView = require('views/app/layout');

  return Marionette.Controller.extend({
    initialize: function () {
      app.layout = new AppLayoutView();
      app.mainRegion.show(app.layout);
    },

    index: function () {
    }
  });
});