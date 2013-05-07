(function() {
  Bumpyride.Views.Photos.PhotoView = Backbone.View.extend({

    template: JST["backbone/templates/photos/photo"],
    tagName: "li",
    className: "asset",
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

  Bumpyride.Views.Photos.PhotoView = (function(_super) {

    __extends(PhotoView, _super);

    function PhotoView() {
      return PhotoView.__super__.constructor.apply(this, arguments);
    }

    PhotoView.prototype.template = JST["backbone/templates/photos/photo"];

    PhotoView.prototype.events = {
      "click .destroy": "destroy"
    };

    PhotoView.prototype.tagName = "span";

    PhotoView.prototype.destroy = function() {
      this.model.destroy();
      this.remove();
      return false;
    };

    PhotoView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    return PhotoView;

  })(Backbone.View);

}).call(this);


Bumpyride.Views.Photos ||= {}

class Bumpyride.Views.Photos.PhotoView extends Backbone.View
  template: JST["backbone/templates/photos/photo"]

  events:
    "click .destroy" : "destroy"

  tagName: "span"

  destroy: () ->
    @model.destroy()
    this.remove()

    return false

  render: ->
    $(@el).html(@template(@model.toJSON() ))
    return this

*/
