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
  var ContactView = require('views/contact/contact');

  return Marionette.Controller.extend({
    initialize: function () {
      this.contactView = new ContactView();
    },

  /**
   * [search description]
   * @param  {[type]} id
   * @return {[type]}
   */
    contact: function () {
      app.layout.mainContent.show(this.contactView);
    }
  });
});