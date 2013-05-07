/*

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Bumpyride.Routers.CommentsRouter = (function(_super) {

    __extends(CommentsRouter, _super);

    function CommentsRouter() {
      return CommentsRouter.__super__.constructor.apply(this, arguments);
    }

    CommentsRouter.prototype.initialize = function(options) {
      this.comments = new Bumpyride.Collections.CommentsCollection();
      return this.comments.reset(options.comments);
    };

    CommentsRouter.prototype.routes = {
      "new": "newComment",
      "index": "index",
      ":id/edit": "edit",
      ":id": "show",
      ".*": "index"
    };

    CommentsRouter.prototype.newComment = function() {
      this.view = new Bumpyride.Views.Comments.NewView({
        collection: this.comments
      });
      return $("#comments").html(this.view.render().el);
    };

    CommentsRouter.prototype.index = function() {
      this.view = new Bumpyride.Views.Comments.IndexView({
        comments: this.comments
      });
      return $("#comments").html(this.view.render().el);
    };

    CommentsRouter.prototype.show = function(id) {
      var comment;
      comment = this.comments.get(id);
      this.view = new Bumpyride.Views.Comments.ShowView({
        model: comment
      });
      return $("#comments").html(this.view.render().el);
    };

    CommentsRouter.prototype.edit = function(id) {
      var comment;
      comment = this.comments.get(id);
      this.view = new Bumpyride.Views.Comments.EditView({
        model: comment
      });
      return $("#comments").html(this.view.render().el);
    };

    return CommentsRouter;

  })(Backbone.Router);

}).call(this);

*/
