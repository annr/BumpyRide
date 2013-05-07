(function(){
Bumpyride.Models.Comment = Backbone.Model.extend({
  paramRoot: 'comment',
  defaults: {
    body: null,
    references: null
  }
});

Bumpyride.Collections.CommentsCollection = Backbone.Collection.extend({
  model: Bumpyride.Models.Comment,
  url: '/comments'
});

}());

/*

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Bumpyride.Models.Comment = (function(_super) {

    __extends(Comment, _super);

    function Comment() {
      return Comment.__super__.constructor.apply(this, arguments);
    }

    Comment.prototype.paramRoot = 'comment';

    Comment.prototype.defaults = {
      body: null,
      references: null
    };

    return Comment;

  })(Backbone.Model);

  Bumpyride.Collections.CommentsCollection = (function(_super) {

    __extends(CommentsCollection, _super);

    function CommentsCollection() {
      return CommentsCollection.__super__.constructor.apply(this, arguments);
    }

    CommentsCollection.prototype.model = Bumpyride.Models.Comment;

    CommentsCollection.prototype.url = '/comments';

    return CommentsCollection;

  })(Backbone.Collection);

}).call(this);
*/