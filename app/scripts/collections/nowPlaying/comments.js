/**
 * comments collection - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Backbone Collection constructor
 */
define(function (require) {

  'use strict';
  
  var Backbone = require('backbone');

  return Backbone.Collection.extend({

    /**
     * massage inbound data
     * @param  {Object} response
     * @return {Array<Object>}
     */
    parse: function (response) {
      var entries = response.feed.entry;
      var i = entries.length;
      var entry;

      while (i--) {
        entry = entries[i];
        entry.authorName = entry.author[0].name.$t;
      }
      return entries;
    }
  });
});
