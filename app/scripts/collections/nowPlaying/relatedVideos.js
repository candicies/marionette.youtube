/**
 * related videos collection - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Backbone Collection constructor
 */
define(function (require) {

  'use strict';
  
  //module dependencies
  var Backbone = require('backbone');
  var utils = require('common/utils');

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
      var paths;

      while (i--) {
         entry = entries[i];
         paths = entry.id.$t.split('/');
         entry.source = paths[paths.length-1];
         entry.duration = utils.getDuration(entry.media$group.yt$duration.seconds);
         entry.authorName = entry.author[0].name.$t;
         entry.thumbNailUrl = entry.media$group.media$thumbnail[1].url;
         entry.titleAbbr = entry.title.$t.substr(0, 20);
      }
      
      return entries;
    }
  });

});
