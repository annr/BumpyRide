(function() {
  Bumpyride.Views.Photos.ShowView = Backbone.View.extend({

    template: JST["backbone/templates/photos/show"],
    el: '#photos',
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });

}).call(this);


/*
(function() {
  var _base,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (_base = Bumpyride.Views).Photos || (_base.Photos = {});

  Bumpyride.Views.Photos.ShowView = (function(_super) {

    __extends(ShowView, _super);

    function ShowView() {
      return ShowView.__super__.constructor.apply(this, arguments);
    }

    ShowView.prototype.template = JST["backbone/templates/photos/show"];

    ShowView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    return ShowView;

  })(Backbone.View);

}).call(this);

*/


/*

Bumpyride.Views.Photos ||= {}

class Bumpyride.Views.Photos.ShowView extends Backbone.View
  template: JST["backbone/templates/photos/show"]

  render: ->
    $(@el).html(@template(@model.toJSON() ))
    return this

*/
