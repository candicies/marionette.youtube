/**
 * app level controller, handles the main layout - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette Controller constructor
 */
define(function (require) {
  
  'use strict';
  
  var Marionette = require('marionette');
  var app = require('app');
  var AppLayoutView = require('views/app/layout');
  var RecentVideosView = require('views/recentVideos/recentVideos');
  var HomeView = require('views/home/home');

  return Marionette.Controller.extend({

    /**
     * called when an instance is created
     * @return {none}
     */
    initialize: function () {
      app.layout = new AppLayoutView(); //attach to app so we can reference in other controllers
      app.mainRegion.show(app.layout);
      app.layout.recentVideos.show(new RecentVideosView());
    },

    /**
     * route handler for associated router
     * @return {none}
     */
    index: function () {
      app.layout.mainContent.show(new HomeView());
    }
  });
});