
"use strict";
APP.NotePruebaView = Backbone.View.extend({
  // the constructor
  initialize: function (options) {
    this.note  = options.note;
    this.template = _.template($('#pruebaTemplate').html());
    alert("alert sucks");
  },

  // populate the html to the dom
  render: function () {
    this.$el.html(
      this.template(this.note.toJSON())
    );
    return this;
  }
});

