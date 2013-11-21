/**
 * search controller - AMD sugared syntax
 * 
 * @param  {[type]} require
 * @return {[type]}
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

  return Marionette.Controller.extend({
    initialize: function () {
      this.layout = new LayoutView();
      this.collection = new SearchResultsCollection();
    },

  /**
   * [search description]
   * @param  {[type]} id
   * @return {[type]}
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