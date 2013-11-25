/**
 * item view for recent videos collection view - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette.ItemView constructor
 */
define(function (require) {

  'use strict';

  var Marionette = require('marionette');
  var template = require('stache!templates/recentVideos/item');

  return Marionette.ItemView.extend({
    template: template,
    tagName: 'li',
    className: 'video-list-item'
  });
});