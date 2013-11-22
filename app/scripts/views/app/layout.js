/**
 * main app layout - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette.Layout constructor
 */
define(function (require) { 

  'use strict';

  var Marionette = require('marionette');
  var template = require('stache!templates/app/layout');

  return Marionette.Layout.extend({
    template: template,

    regions: {
      recentVideos: '#recentVideos',
      mainContent: '#mainContent'
    }
  });
});