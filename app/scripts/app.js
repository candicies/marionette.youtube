define(['backbone', 'marionette'], function(Backbone, Marionette) {
  'use strict';
	var app = new Marionette.Application();

  //configuration, setting up regions, etc
  app.addRegions({
    headerRegion: '#header',
    mainRegion: '#main'
  });

  app.addInitializer(function () {
    Backbone.history.start();
  });

	return app; 

});