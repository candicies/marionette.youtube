define(function (require) {

  'use strict';

  var Marionette = require('marionette');
  var template = require('stache!templates/nowPlaying/relatedVideo');

  return Marionette.ItemView.extend({
    template: template,
    tagName: 'li',
    className: 'video-list-item'

  });

});