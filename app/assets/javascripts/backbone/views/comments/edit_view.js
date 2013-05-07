/*

(function() {
  var _base,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (_base = Bumpyride.Views).Comments || (_base.Comments = {});

  Bumpyride.Views.Comments.EditView = (function(_super) {

    __extends(EditView, _super);

    function EditView() {
      return EditView.__super__.constructor.apply(this, arguments);
    }

    EditView.prototype.template = JST["backbone/templates/comments/edit"];

    EditView.prototype.events = {
      "submit #edit-comment": "update"
    };

    EditView.prototype.update = function(e) {
      var _this = this;
      e.preventDefault();
      e.stopPropagation();
      return this.model.save(null, {
        success: function(comment) {
          _this.model = comment;
          return window.location.hash = "/" + _this.model.id;
        }
      });
    };

    EditView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      this.$("form").backboneLink(this.model);
      return this;
    };

    return EditView;

  })(Backbone.View);

}).call(this);


Bumpyride.Views.Comments ||= {}

class Bumpyride.Views.Comments.EditView extends Backbone.View
  template : JST["backbone/templates/comments/edit"]

  events :
    "submit #edit-comment" : "update"

  update : (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.save(null,
      success : (comment) =>
        @model = comment
        window.location.hash = "/#{@model.id}"
    )

  render : ->
    $(@el).html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this

*/
