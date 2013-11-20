define(
  [
    'marionette',
    'stache!templates/search/searchItem'
  ], function(
    Marionette,
    template
  ) {
  'use strict';

  return Marionette.ItemView.extend({
    template: template,
    tagName: 'li',
    className: 'yt-lockup2 yt-lockup2-video yt-uix-tile context-data-item clearfix'

  }); 
});