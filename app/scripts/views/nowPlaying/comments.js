/**
 * comments collection view - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette.CollectionView constuctor
 */
define(function (require) {

  'use strict';

  var Marionette = require('marionette');
  var ItemView = require('./commentItem');

  return Marionette.CollectionView.extend({
    itemView: ItemView,

    /**
     * Marionette event hook, called just before view is closed and removed
     * @return {none}
     */
    onClose: function () {
      this.collection.reset();
    }
  });
});