define(
  [
    'marionette',
    'stache!templates/search/layout'
  ], function(
    Marionette,
    template
  ) {
   
  'use strict';

  return Marionette.Layout.extend({
    template: template,

    regions: {
      searchBar: '#searchBar',
      results: '#searchResults'
    }
  });
});