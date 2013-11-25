define(function(require) {
  'use strict';
  
  var wreqr = require('backbone.wreqr');

  return new wreqr.EventAggregator();
});