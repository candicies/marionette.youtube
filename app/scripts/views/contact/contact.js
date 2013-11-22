/**
 * contact view - AMD sugared syntax
 * @param  {Object} require
 * @return {Object} Marionette.ItemView constructor
 */
define(function (require) {

  'use strict';

  var Backbone = require('backbone');
  var Marionette = require('marionette');
  var template = require('stache!templates/contact/contact');

  return Marionette.ItemView.extend({
    template: template,
    
    /**
     * call when instance created
     * @return {none}
     */
    initialize: function () {
      this.model = new Backbone.Model({
        avatar: 'https://fbexternal-a.akamaihd.net/safe_image.php?d=AQDAacwkOhqzeWDH&w=155&h=114&url=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F481d556f479c71e5cc06f1493d4f6613%3Fs%3D420%26d%3Dhttps%253A%252F%252Fa248.e.akamai.net%252Fassets.github.com%252Fimages%252Fgravatars%252Fgravatar-user-420.png',
        links: [
          { text: 'Linkedin', target: '_blank', url: 'http://www.linkedin.com/in/timdoherty'},
          { text: 'Blog', target: '_blank', url: 'http://blog.dohertycomputing.com'},
          { text: 'Underwater Photos', target: '_blank', url: 'http://www.flickr.com/photos/hawaiidiveadventures/sets/72157622322603331/'},
          { text: 'Website', target: '_blank', url: 'http://dohertycomputing.com'},
          { text: 'Email', target: '', url: 'mailto:tim@dohertycomputing.com'}
        ]
      });
    }
  });
});