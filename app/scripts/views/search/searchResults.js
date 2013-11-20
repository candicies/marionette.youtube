define(
  [
    'marionette',
    './item'
  ], function(
    Marionette,
    ItemView
  ) {
  'use strict';
     
  return Marionette.CollectionView.extend({

    itemView: ItemView,

    initialize: function () {
      //this.listenTo(this.collection, 'sync', this.render);
    }

  });
});