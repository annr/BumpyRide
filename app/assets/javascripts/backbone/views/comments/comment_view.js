/*

(function() {
  var _base,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (_base = Bumpyride.Views).Comments || (_base.Comments = {});

  Bumpyride.Views.Comments.CommentView = (function(_super) {

    __extends(CommentView, _super);

    function CommentView() {
      return CommentView.__super__.constructor.apply(this, arguments);
    }

    CommentView.prototype.template = JST["backbone/templates/comments/comment"];

    CommentView.prototype.events = {
      "click .destroy": "destroy"
    };

    CommentView.prototype.tagName = "tr";

    CommentView.prototype.destroy = function() {
      this.model.destroy();
      this.remove();
      return false;
    };

    CommentView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    return CommentView;

  })(Backbone.View);

}).call(this);


Bumpyride.Views.Comments ||= {}

class Bumpyride.Views.Comments.CommentView extends Backbone.View
  template: JST["backbone/templates/comments/comment"]

  events:
    "click .destroy" : "destroy"

  tagName: "tr"

  destroy: () ->
    @model.destroy()
    this.remove()

    return false

  render: ->
    $(@el).html(@template(@model.toJSON() ))
    return this

    */
