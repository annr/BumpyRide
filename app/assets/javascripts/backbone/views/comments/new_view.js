/* 

(function() {
  var _base,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (_base = Bumpyride.Views).Comments || (_base.Comments = {});

  Bumpyride.Views.Comments.NewView = (function(_super) {

    __extends(NewView, _super);

    NewView.prototype.template = JST["backbone/templates/comments/new"];

    NewView.prototype.events = {
      "submit #new-comment": "save"
    };

    function NewView(options) {
      var _this = this;
      NewView.__super__.constructor.call(this, options);
      this.model = new this.collection.model();
      this.model.bind("change:errors", function() {
        return _this.render();
      });
    }

    NewView.prototype.save = function(e) {
      var _this = this;
      e.preventDefault();
      e.stopPropagation();
      this.model.unset("errors");
      return this.collection.create(this.model.toJSON(), {
        success: function(comment) {
          _this.model = comment;
          return window.location.hash = "/" + _this.model.id;
        },
        error: function(comment, jqXHR) {
          return _this.model.set({
            errors: $.parseJSON(jqXHR.responseText)
          });
        }
      });
    };

    NewView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      this.$("form").backboneLink(this.model);
      return this;
    };

    return NewView;

  })(Backbone.View);

}).call(this);

Bumpyride.Views.Comments ||= {}

class Bumpyride.Views.Comments.NewView extends Backbone.View
  template: JST["backbone/templates/comments/new"]

  events:
    "submit #new-comment": "save"

  constructor: (options) ->
    super(options)
    @model = new @collection.model()

    @model.bind("change:errors", () =>
      this.render()
    )

  save: (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.unset("errors")

    @collection.create(@model.toJSON(),
      success: (comment) =>
        @model = comment
        window.location.hash = "/#{@model.id}"

      error: (comment, jqXHR) =>
        @model.set({errors: $.parseJSON(jqXHR.responseText)})
    )

  render: ->
    $(@el).html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this

*/

