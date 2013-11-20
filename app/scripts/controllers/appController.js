define(
  [
    'marionette', 
    'app',
    'views/headerView'
  ], function(
    Marionette,
    app,
    HeaderView
  ) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      app.headerRegion.show(new HeaderView());
    },

    index: function () {
      // var collection = new Backbone.Collection([
      //   { id: 1 },
      //   { id: 2 },
      //   { id: 3 }
      // ]);

      // var layout = new LayoutView();

      // app.mainRegion.show(layout);
      // layout.searchBar.show(new SearchResultsView({ collection: collection }));
    }
  });
});