/*globals define*/

define( [
    'jquery', 'lodash',
    'src/views/BaseView',
    'text!src/views/layout/layout.html'
  ], function(
    $, _,
    BaseView,
    layoutTemplate
  ) {

'use strict';

var LayoutView = BaseView.extend({

  initialize: function(options) {
    options = options || {};

    this.tagName = 'div';

    _.extend(this, options);

    BaseView.prototype.initialize.call(this, options);

    this.el = this.el || undefined;
    this.template = this.layoutTemplate || this.template;
    
    if (!this.el) throw new Error('View.el not specified!');

    this.template = this.compileTemplate(this.template || layoutTemplate);

    this.$el = $(this.el);
  },

  render: function() {

    this.$el.append(this.template());

    return this;
  }

});

  return LayoutView;
});
