/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var Backbone = require('backbone');

  function getDuration(seconds) {
    var minutes;

    minutes = parseInt(seconds / 60, 10);
    seconds = '' + (seconds % 60);
    if (seconds.length === 1) { seconds = '0' + seconds; }
    return minutes + ':' + seconds;
  }

  function processEntries(entries) {
    var i = entries.length;
    var entry;
    var paths;

    while (i--) {
       entry = entries[i];
       paths = entry.id.$t.split('/');
       entry.source = paths[paths.length-1];
       entry.duration = getDuration(entry.media$group.yt$duration.seconds);
       entry.authorName = entry.author[0].name.$t;
       entry.thumbNailUrl = entry.media$group.media$thumbnail[1].url;
       entry.titleAbbr = entry.title.$t.substr(0, 20);
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
