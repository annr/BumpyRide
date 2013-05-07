(function(){

  Bumpyride.Models.Photo = Backbone.Model.extend({
    paramRoot: 'photo',
    defaults: {
      title: null,
      image: null,
      user_id: null,
      comments: null
    }
  });

  Bumpyride.Collections.PhotosCollection = Backbone.Collection.extend({
    model: Bumpyride.Models.Photo,
    url: '/photos'
  });

}());

/*

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Bumpyride.Models.Photo = (function(_super) {

    __extends(Photo, _super);

    function Photo() {
      return Photo.__super__.constructor.apply(this, arguments);
    }

    Photo.prototype.paramRoot = 'photo';

    Photo.prototype.defaults = {
      title: null,
      image: null,
      user_id: null,
      comments: null
    };

    return Photo;

  })(Backbone.Model);

  Bumpyride.Collections.PhotosCollection = (function(_super) {

    __extends(PhotosCollection, _super);

    function PhotosCollection() {
      return PhotosCollection.__super__.constructor.apply(this, arguments);
    }

    PhotosCollection.prototype.model = Bumpyride.Models.Photo;

    PhotosCollection.prototype.url = '/photos';

    return PhotosCollection;

  })(Backbone.Collection);

}).call(this);

*/

