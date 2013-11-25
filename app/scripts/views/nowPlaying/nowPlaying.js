/**
 * current video, HTML5 youtube player container - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette.ItemView constructor
 */
define(function (require) {

  'use strict';
  
  var Marionette = require('marionette');
  var template = require('stache!templates/nowPlaying/nowPlaying');
  var vent = require('eventAggregators/nowPlayingEventAggregator');

  return Marionette.ItemView.extend({
    template: template,

    /**
     * called when new instance created
     * @return {none}
     */     
    initialize: function () {
      this.listenTo(this.model, 'sync', this.render);
      this.listenTo(this.model, 'sync', this.onSync);
    },

    /**
     * event handler for associated event aggregator,
     * notify other entities that the current video has been loaded
     * @return {none}
     */
    onSync: function () {
      // vent.trigger('nowplaying.relatedcontent', this.model.toJSON());
      vent.trigger('nowPlaying:sync', this.model.toJSON());
    }
  });
});