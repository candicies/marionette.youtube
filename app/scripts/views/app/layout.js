define(
  [
    'marionette',
    'stache!templates/app/layout'
  ], function(
    Marionette,
    template
  ) {
   
  'use strict';

  return Marionette.Layout.extend({
    template: template,

    regions: {
      recentVideos: '#recentVideos',
      mainContent: '#mainContent'
    }
  });
});