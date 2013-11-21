require.config({
	paths: {
		backbone: '../bower_components/backbone/backbone-min',
		underscore: '../bower_components/underscore/underscore-min',
		jquery: '../bower_components/jquery/jquery.min',
		marionette: '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
		'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
		'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
		mustache: '../bower_components/mustache/mustache',
		text: '../bower_components/requirejs-text/text',
		stache: '../bower_components/requirejs-mustache/stache',
		stickit: '../bower_components/backbone.stickit/backbone.stickit',
    templates: '../templates'
	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		},
		stickit: {
			deps: ['backbone']
		}
	}
});

require(
  [
	  'app',
	  'routers/appRouter',
	  'routers/searchRouter',
	  'routers/nowPlayingRouter',
    'routers/contactRouter',
	  'controllers/appController',
	  'controllers/searchController',
	  'controllers/nowPlayingController',
    'controllers/contactController'
  ], function (
    app,
    AppRouter,
    SearchRouter,
    NowPlayingRouter,
    ContactRouter,
    AppController,
    SearchController,
    NowPlayingController,
    ContactController
  ) {

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
});