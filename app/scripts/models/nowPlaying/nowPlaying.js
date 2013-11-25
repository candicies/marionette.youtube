/**
 * model for current video
 * @param  {Object} require
 * @return {Object} Backbone.Model constructor
 */
define(function (require) {

  'use strict';
  
  //module dependencies
  var Backbone = require('backbone');
  var utils = require('common/utils');

  return Backbone.Model.extend({

    idAttribute: 'source',

    defaults: {
      source: '',
      title: {
        $t: ''
      }
    },

    videoSource: '',

    url: function () {
      return 'http://gdata.youtube.com/feeds/videos/' + this.videoSource + '?format=5&alt=json-in-script';
    },

    /**
     * override fetch to always use jsonp
     * @param  {Object} options
     * @return {none}
     */
    fetch: function (options) {
      var self = this,
        opts = _.extend({}, options || {});

      opts.dataType = 'jsonp';
      Backbone.Model.prototype.fetch.call(this, opts);
    },

    /**
     * massaged inbound data
     * @param  {Object} response - raw API data
     * @return {Object}
     */
    parse: function (response) {
      var data = response.entry;
      var paths = data.id.$t.split('/');

      data.source = paths[paths.length - 1];
      data.duration = utils.getDuration(data.media$group.yt$duration.seconds);
      data.authorName = data.author[0].name.$t;
      data.thumbNailUrl = data.media$group.media$thumbnail[1].url;
      data.titleAbbr = data.title.$t.substr(0, 20);

      return data;
    }
  });
});
