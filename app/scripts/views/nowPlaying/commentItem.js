/**
 * item view for comments collection view - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette.ItemView constructor
 */
define(function (require) {

  'use strict';

  var Marionette = require('marionette');
  var template = require('stache!templates/nowPlaying/comment');

  return Marionette.ItemView.extend({
    template: template,
    tagName: 'li',
    className: 'comment'
  });
});