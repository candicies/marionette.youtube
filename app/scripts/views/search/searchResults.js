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

    onClose: function () {
      this.collection.reset();
    }

  });
});