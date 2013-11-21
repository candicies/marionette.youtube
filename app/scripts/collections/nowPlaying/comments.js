/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  'use strict';
  
  //module dependencies
  var Backbone = require('backbone');

  function processEntries(entries) {
    var i = entries.length;
    var entry;

    while (i--) {
      entry = entries[i];
      entry.authorName = entry.author[0].name.$t;
    }
  }

  return Backbone.Collection.extend({
    parse: function (response) {
      var entries = response.feed.entry;
      processEntries(entries);
      return entries;
    }
  });
});
