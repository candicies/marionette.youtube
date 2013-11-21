define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var vent = require('eventAggregators/nowPlayingEventAggregator');
  
  return Marionette.AppRouter.extend({
    initialize: function () {
      this.listenTo(vent, 'nowPlaying:route', this.onNowPlaying);
    },

    appRoutes: {
      'nowplaying(/:id)': 'nowPlaying'
    },

    onNowPlaying: function (route) {
      this.navigate(route, { trigger: true });
    }
  });
});