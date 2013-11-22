/**
 * search bar view - AMD sugared syntax
 * @param  {[type]} require
 * @return {[type]}
 */
define(function(require) {
   
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    var template = require('stache!templates/search/searchBar');
    var vent = require('eventAggregators/searchEventAggregator');

    require('stickit');

    var Model = Backbone.Model.extend({
      defaults: {
        searchTerm: ''
      }
    });

    return Marionette.ItemView.extend({
      template: template,

      events: {
        'keyup #searchTerm': 'onSearchKeyUp',
        'click .icon-search': 'search'
      },

      /**
       * backbone.stickit declarative model bindings
       * @type {Object}
       */
      bindings: {
        '#searchTerm': 'searchTerm'
      },

      /**
       * called when new instance created
       * @return {[type]}
       */
      initialize: function () {
        this.model = new Model();
        this.listenTo(vent, 'search:searchTermChanged', this.onSearchTermChanged);
      },

      /**
       * Marionette hook for post-render functionality
       * @return {none}
       */
      onRender: function () {
        this.stickit();
      },

      /**
       * DOM event handler
       * @param  {Object} e
       * @return {none}
       */
      onSearchKeyUp: function (e) {
        if (e.which === 13)  {
          // this.$(e.currentTarget).change();
          this.search();
        }
      },

      /**
       * event handler foor associated event aggregator
       * @param  {string} searchTerm
       * @return {none}
       */
      onSearchTermChanged: function (searchTerm) {
        if (this.model.get('searchTerm') !== searchTerm) {
          this.model.set({searchTerm: searchTerm});
        }
      },
  
      /**
       * trigger an event through the aggregator with the current search term
       * @return {none}
       */
      search: function () {
        var searchTerm = this.model.get('searchTerm');

        //use the event aggregatorto emit a global route event
        vent.trigger('global:route', 'search/' + searchTerm);
        //this.sandbox.emit('search.search', searchTerm);
      },

    });
   
});