/**
 * home view - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette.ItemView constructor
 */
define(function (require) {

  var Marionette = require('marionette');
  var template = require('stache!templates/home/home');

  return Marionette.ItemView.extend({
    template: template
  });
});