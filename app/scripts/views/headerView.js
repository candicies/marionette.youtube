define(
  [
  'marionette',
  'stache!templates/headerView'
  ], function (
    Marionette,
    template
  ) {
  'use strict';

  return Marionette.ItemView.extend({
    template: template
  }); 
});