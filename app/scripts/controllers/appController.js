define(function (require) {
  
  'use strict';
  
  var Marionette = require('marionette');
  var app = require('app');
  var AppLayoutView = require('views/app/layout');
  var RecentVideosView = require('views/recentVideos/recentVideos');
  var HomeView = require('views/home/home');

  return Marionette.Controller.extend({
    initialize: function () {
      app.layout = new AppLayoutView();
      app.mainRegion.show(app.layout);
      app.layout.recentVideos.show(new RecentVideosView());
    },

    index: function () {
      app.layout.mainContent.show(new HomeView());
    }
  });
});