/**
 * item view for search results collection view - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette.ItemView constructor
 */
define(function (require) {
  
  'use strict';

  var Marionette = require('marionette');
  var template = require('stache!templates/search/searchItem');

  return Marionette.ItemView.extend({
    template: template,
    tagName: 'li',
    className: 'yt-lockup2 yt-lockup2-video yt-uix-tile context-data-item clearfix'
  }); 
});