define(function (require) {

  'use strict';

  var Marionette = require('marionette');
  var template = require('stache!templates/nowPlaying/layout');

  return Marionette.Layout.extend({
    template: template,

    regions: {
        searchBar: '#searchBar',
        nowPlaying: '#nowPlaying',
        comments: '#comments',
        relatedVideos: '#relatedVideos'
    }
  });
});