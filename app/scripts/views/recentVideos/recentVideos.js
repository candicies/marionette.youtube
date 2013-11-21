define(function (require) {
  'use strict';

  var Marionette = require('marionette');
  var ItemView = require('views/recentVideos/item');
  var vent = require('eventAggregators/nowPlayingEventAggregator');

  var Model = Backbone.Model.extend({ idAttribute: 'source' });

  return Marionette.CollectionView.extend({
    itemView: ItemView,

    maxEntries: 10,

    collection: new Backbone.Collection(),

    initialize: function () {
      this.listenTo(vent, 'nowPlaying:sync', this.add);
    },

    add: function (data) {
      this.collection.unshift(new Model(data));
      if (this.collection.length > this.maxEntries) {
        this.collection.pop();
      }
    }
  });
});