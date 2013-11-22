/**
 * Search results collection
 * @param  {Object} require
 * @return {Object}
 */
define(function (require) {

  'use strict';

  //module dependencies
  var Backbone = require('backbone');
  // var Model = require('models/search/result');
  var utils = require('common/utils');

  /**
  * @exports collections/search/collection
  * @requires Backbone
  */
  return Backbone.Collection.extend({
    // model: Model,
    searchTerm: '',
    startIndex: 1,

    /**
     * Generate the collection's url dynamically at runtime
     */
    url: function () {
      return 'http://gdata.youtube.com/feeds/videos?vq=' + this.searchTerm + '&format=5&max-results=20&start-index=' +
        this.startIndex + '&alt=json-in-script';
    },

    /**
     * Parse the raw API data
     * @param  {Object} response
     * @return {Array<Object>}
     */
    parse: function (response) {
      var entries = response.feed.entry;
      var i = entries.length;
      var entry;
      var paths;

      while (i--) {
        entry = entries[i];
        paths = entry.id.$t.split('/');
        entry.source = paths[paths.length-1]; //generate a unique id
        entry.duration = utils.getDuration(entry.media$group.yt$duration.seconds);
        entry.thumbnail = entry.media$group.media$thumbnail[0].url;
        entry.authorName = entry.author[0].name.$t;
        entry.description = entry.media$group.media$description.$t.substr(0, 50);
      }
      
      return entries;
    }
  });

});
