define(
  [
    'marionette', 
    'app',
    'views/search/layout',
    'views/search/searchResults',
    'collections/search/collection'
  ], function(
    Marionette,
    app,
    LayoutView,
    SearchResultsView,
    SearchResultsCollection
  ) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.layout = new LayoutView();
      this.collection = new SearchResultsCollection();
    },

    search: function (id) {

      if (app.mainRegion.currentView != this.layout) {
        app.mainRegion.show(this.layout);
        this.layout.results.show(new SearchResultsView({ collection: this.collection }));
      }

      this.collection.searchTerm = id;
      this.collection.fetch({ dataType: 'jsonp' });
    }
  });
});