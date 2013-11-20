/**
 * Search results collection
 * @param  {Object} require
 * @return {Object}
 */
define(function (require) {

  'use strict';
  
  //module dependencies
  var Backbone = require('backbone');
  var Model = require('models/search/result');

  /**
   * Parse integer seconds to string time format - TODO: move to utilities module
   * @param  {Number} seconds
   * @return {String}
   */
  function getDuration(seconds) {
    minutes = parseInt(seconds / 60, 10);
    seconds = '' + (seconds % 60);
    if (seconds.length === 1) { 
      seconds = '0' + seconds; 
    }
    return minutes + ':' + seconds;
  }

  /**
  * Massage the youtube API data for mustache.js rendering
  * @param  {Array<Object>} entries
  */
  function processEntries(entries) {
    var i = entries.length;
    var entry;
    var paths;

    while (i--) {
      entry = entries[i];
      paths = entry.id.$t.split('/');
      entry.source = paths[paths.length-1];
      entry.duration = getDuration(entry.media$group.yt$duration.seconds);
      entry.thumbnail = entry.media$group.media$thumbnail[0].url;
      entry.authorName = entry.author[0].name.$t;
      entry.description = entry.media$group.media$description.$t.substr(0, 50);
    }
  }

  /**
  * @exports collections/search/collection
  * @requires Backbone
  */
  return Backbone.Collection.extend({
    model: Model,
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
      processEntries(entries);
      return entries;
    }
  });

});
