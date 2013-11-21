define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var vent = require('eventAggregators/searchEventAggregator');
  
  return Marionette.AppRouter.extend({
    initialize: function () {
      vent.on('global:route', this.onSearch, this);
    },

    appRoutes: {
      'search(/:searchTerm)': 'search'
    },

    onSearch: function (route) {
      this.navigate(route, { trigger: true });
    }
  });
});