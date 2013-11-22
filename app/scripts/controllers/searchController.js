/**
 * search controller - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette Controller constructor
 */
define(function (require) {
  
  'use strict';

  var Marionette = require('marionette'); 
  var app = require('app'); 
  var LayoutView = require('views/search/layout');
  var SearchResultsView = require('views/search/searchResults'); 
  var SearchBarView = require('views/search/searchBar'); 
  var SearchResultsCollection = require('collections/search/collection'); 
  var vent = require('eventAggregators/searchEventAggregator');

  /**
   * simple extension of Backbone.Collection to override 'id' attribute
   * @type {Object}
   */
  SearchResultsCollection = SearchResultsCollection.extend({
    model: Backbone.Model.extend({ idAttribute: 'source' })
  });

  return Marionette.Controller.extend({

    /**
     * called when instance is created
     * @return {none}
     */
    initialize: function () {
      this.layout = new LayoutView();
      this.collection = new SearchResultsCollection();
    },

  /**
   * route handler for associated router
   * @param  {string} searchTerm - the user's current search term
   * @return {none}
   */
    search: function (searchTerm) {

      var mainContentRegion = app.layout.mainContent; //app.mainRegion.currentView.regionManager.get('mainContent');
      if (mainContentRegion.currentView != this.layout) {
        mainContentRegion.show(this.layout);
        this.layout.searchBar.show(new SearchBarView());
        this.layout.results.show(new SearchResultsView({ collection: this.collection }));
      }

      if (searchTerm) { 
        this.collection.searchTerm = searchTerm;
        this.collection.fetch({ dataType: 'jsonp' });

        vent.trigger('search:searchTermChanged', searchTerm);
      }
    }
  });
});