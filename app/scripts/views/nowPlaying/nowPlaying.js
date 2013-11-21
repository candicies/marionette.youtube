define(function (require) {

  var Marionette = require('marionette');
  var template = require('stache!templates/nowPlaying/nowPlaying');
  var vent = require('eventAggregators/nowPlayingEventAggregator');

  return Marionette.ItemView.extend({
    template: template,

    initialize: function () {
      this.listenTo(this.model, 'sync', this.render);
      this.listenTo(this.model, 'sync', this.onSync);
    },

    onSync: function () {
      // vent.trigger('nowplaying.relatedcontent', this.model.toJSON());
      vent.trigger('nowPlaying:sync', this.model.toJSON());
    }
  });
});