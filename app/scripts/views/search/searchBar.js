/**
 * search bar view - AMD sugared syntax
 * @param  {[type]} require
 * @return {[type]}
 */
define(function(require) {
   
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

      bindings: {
        '#searchTerm': 'searchTerm'
      },

      initialize: function () {
        this.model = new Model();
        this.listenTo(vent, 'search:searchTermChanged', this.onSearchTermChanged);
        // this.listenTo(this.model, 'change', this.search);
      },

      /**
       * Marionette hook for post-render functionality
       */
      onRender: function () {
        this.stickit();
      },

      onSearchKeyUp: function (e) {
        if (e.which === 13)  {
          // this.$(e.currentTarget).change();
          this.search();
        }
      },

      onSearchTermChanged: function (searchTerm) {
        if (this.model.get('searchTerm') !== searchTerm) {
          this.model.set({searchTerm: searchTerm});
        }
      },
  
      search: function () {
        var searchTerm = this.model.get('searchTerm');

        //use the event aggregatorto emit a global route event
        vent.trigger('global:route', 'search/' + searchTerm);
        //this.sandbox.emit('search.search', searchTerm);
      },

    });
   
});