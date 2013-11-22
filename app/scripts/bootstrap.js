/**
 * configure the Marionette application routers/controllers
 * @param  {Object} require
 * @return {Object} bootstrap object
 */
define(function (require) {

  'use strict';

  var app = require('app');
  var AppRouter = require('routers/appRouter');
  var SearchRouter = require('routers/searchRouter');
  var NowPlayingRouter = require('routers/nowPlayingRouter');
  var ContactRouter = require('routers/contactRouter');
  var AppController = require('controllers/appController');
  var SearchController = require('controllers/searchController');
  var NowPlayingController = require('controllers/nowPlayingController');
  var ContactController = require('controllers/contactController');

  return {

    /**
     * attach routers and associated controllers to the Marionette application, and start the app
     * @return {none}
     */
    init: function () {
      app.appRouter = new AppRouter({
        controller: new AppController()
      });

      app.searchRouter = new SearchRouter({
        controller: new SearchController()
      });

      app.nowPlayingRouter = new NowPlayingRouter({
        controller: new NowPlayingController()
      });

      app.contactRouter = new ContactRouter({
        controller: new ContactController()
      });

      app.start();
    }
  };
});