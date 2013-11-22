/**
 * search layout view - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette.Layout constructor
 */
define(function (require) {
   
  'use strict';

  var Marionette = require('marionette');
  var template = require('stache!templates/search/layout');

  return Marionette.Layout.extend({
    template: template,

    /**
     * define manageable regions in the layout
     * @type {Object}
     */
    regions: {
      searchBar: '#searchBar',
      results: '#searchResults'
    }
  });
});