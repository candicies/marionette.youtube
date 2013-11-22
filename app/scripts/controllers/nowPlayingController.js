/**
 * now playing controller - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette Controller constructor
 */
define(function (require) {

  'use strict';

  var Marionette = require('marionette');
  var app = require('app');
  var SearchBarView = require('views/search/searchBar'); 
  var LayoutView = require('views/nowPlaying/layout');
  var NowPlayingView = require('views/nowPlaying/nowPlaying');
  var CommentsView = require('views/nowPlaying/comments');
  var RelatedVideosView = require('views/nowPlaying/relatedVideos');
  var NowPlayingModel = require('models/nowPlaying/nowPlaying');
  var CommentsCollection = require('collections/nowPlaying/comments');
  var RelatedVideosCollection = require('collections/nowPlaying/relatedVideos');
  var vent = require('eventAggregators/nowPlayingEventAggregator');

  /**
   * simple extension of Backbone.Collection to override 'id' attribute
   * @type {Object}
   */
  CommentsCollection = CommentsCollection.extend({
    model: Backbone.Model.extend({ idAttribute: 'source' })
  });
  
  /**
   * simple extension of Backbone.Collection to override 'id' attribute
   * @type {Object}
   */
  RelatedVideosCollection = RelatedVideosCollection.extend({
    model: Backbone.Model.extend({ idAttribute: 'source' })
  });

  return Marionette.Controller.extend({

    /**
     * called when instance is created
     * @return {none}
     */
    initialize: function () {
      this.layout = new LayoutView();
      this.nowPlayingModel = new NowPlayingModel();
      this.commentsCollection = new CommentsCollection();
      this.relatedVideosCollection = new RelatedVideosCollection();

      this.listenTo(vent, 'nowPlaying:sync', this.onSync);
    },

    /**
     * route handler for associated router
     * @param  {string} id - source id for video
     * @return {none}
     */
    nowPlaying: function (id) {
      var mainContentRegion = app.layout.mainContent; 
      if (mainContentRegion.currentView != this.layout) {
        mainContentRegion.show(this.layout);
        this.layout.searchBar.show(new SearchBarView());
        this.layout.nowPlaying.show(new NowPlayingView({ model: this.nowPlayingModel }));
        this.layout.comments.show(new CommentsView({ collection: this.commentsCollection }));
        this.layout.relatedVideos.show(new RelatedVideosView({ collection: this.relatedVideosCollection }));
      }

      if (id) {
        this.nowPlayingModel.videoSource = id;
        this.nowPlayingModel.fetch({ dataType: 'jsonp' });
      }
    },

    /**
     * event handler for associated event aggregator, fetches comments and related videos when the current video
     * has been loaded
     * @param  {Object} data - the current video 
     * @return {none}
     */
    onSync: function (data) {
      this.commentsCollection.url = data.gd$comments.gd$feedLink.href + '?format=5&alt=json-in-script';
      this.commentsCollection.fetch({ dataType: 'jsonp' });

      this.relatedVideosCollection.url = data.id.$t + '/related' + '?format=5&alt=json-in-script';
      this.relatedVideosCollection.fetch({ dataType: 'jsonp' });
   }
  });
});