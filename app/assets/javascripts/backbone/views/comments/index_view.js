/* 

(function() {
  var _base,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (_base = Bumpyride.Views).Comments || (_base.Comments = {});

  Bumpyride.Views.Comments.IndexView = (function(_super) {

    __extends(IndexView, _super);

    function IndexView() {
      this.render = __bind(this.render, this);

      this.addOne = __bind(this.addOne, this);

      this.addAll = __bind(this.addAll, this);
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype.template = JST["backbone/templates/comments/index"];

    IndexView.prototype.initialize = function() {
      return this.options.comments.bind('reset', this.addAll);
    };

    IndexView.prototype.addAll = function() {
      return this.options.comments.each(this.addOne);
    };

    IndexView.prototype.addOne = function(comment) {
      var view;
      view = new Bumpyride.Views.Comments.CommentView({
        model: comment
      });
      return this.$("tbody").append(view.render().el);
    };

    IndexView.prototype.render = function() {
      $(this.el).html(this.template({
        comments: this.options.comments.toJSON()
      }));
      this.addAll();
      return this;
    };

    return IndexView;

  })(Backbone.View);

}).call(this);


Bumpyride.Views.Comments ||= {}

class Bumpyride.Views.Comments.IndexView extends Backbone.View
  template: JST["backbone/templates/comments/index"]

  initialize: () ->
    @options.comments.bind('reset', @addAll)

  addAll: () =>
    @options.comments.each(@addOne)

  addOne: (comment) =>
    view = new Bumpyride.Views.Comments.CommentView({model : comment})
    @$("tbody").append(view.render().el)

  render: =>
    $(@el).html(@template(comments: @options.comments.toJSON() ))
    @addAll()

    return this

*/

