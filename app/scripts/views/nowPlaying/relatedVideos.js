define(function (require) {

  'use strict';

  var Marionette = require('marionette');
  var ItemView = require('views/nowPlaying/relatedVideo');

  return Marionette.CollectionView.extend({
    itemView: ItemView,

    onClose: function () {
      this.collection.reset();
    }
  });
  
});