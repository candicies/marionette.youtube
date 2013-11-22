/**
 * related videos collection view - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette.CollectionView constuctor
 */
define(function (require) {
  'use strict';

  var Marionette = require('marionette');
  var ItemView = require('./item');
  var vent = require('eventAggregators/nowPlayingEventAggregator');

  var Model = Backbone.Model.extend({ idAttribute: 'source' });

  return Marionette.CollectionView.extend({
    itemView: ItemView,

    maxEntries: 10,

    collection: new Backbone.Collection(),

    /**
     * called when new instance created, listen for current video loaded and 
     * unshift the video object to the recent videos collection
     * @return {none}
     */
    initialize: function () {
      this.listenTo(vent, 'nowPlaying:sync', this.add);
    },

    /**
     * manage the recent videos collection at a specified max length
     * @param {[type]} data
     */
    add: function (data) {
      this.collection.unshift(new Model(data));
      if (this.collection.length > this.maxEntries) {
        this.collection.pop();
      }
    }
  });
});