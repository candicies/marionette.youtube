/**
 * create a Marionette application 
 * @param  {Object} require
 * @return {Object} Marionette application instance
 */
define(function (require) {
  
  'use strict';

  var Backbone = require('backbone');
  var Marionette = require('marionette');

	var app = new Marionette.Application();

  //configuration, setting up regions, etc
  app.addRegions({
    mainRegion: '#main'
  });

  app.addInitializer(function () {
    Backbone.history.start();
  });

	return app;

});