/**
 * search controller - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette Controller constructor
 */
define(function (require) {
  'use strict';

  var Marionette = require('marionette'); 
  var app = require('app'); 
  var ContactView = require('views/contact/contact');

  return Marionette.Controller.extend({

    /**
     * called when instance is created
     * @return {none}
     */
    initialize: function () {
      this.contactView = new ContactView();
    },

    /**
     * route handler for associated router
     * @return {none}
     */
    contact: function () {
      app.layout.mainContent.show(this.contactView);
    }
  });
});