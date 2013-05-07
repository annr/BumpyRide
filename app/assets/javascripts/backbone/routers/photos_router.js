(function() {
Bumpyride.Routers.PhotosRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.photos = new Bumpyride.Collections.PhotosCollection();
    return this.photos.reset(options.photos);
  },
  routes: {
      //"new": "newPhoto",
      "index": "index",
      //":id/edit": "edit",
      ":id": "show",
      ".*": "index"
  },

  show: function(id) {
      var photo;
      photo = this.photos.get(id);
      //this.view = new Bumpyride.Views.Photos.ShowView({
      //  model: photo
      //});
      //return $(".photo_detail").html(this.view.render().el);
      var detail = new Bumpyride.Views.Photos.ShowDetailView({ model: photo });
      if(window.screen.width == 320) {
        detail = new Bumpyride.Views.Photos.ShowView({ model: photo });
      } 
      detail.render();

  },

  index: function() {
      this.view = new Bumpyride.Views.Photos.IndexView({
        photos: this.photos
      });

      //vent.trigger("dialog.close"); 

      return $("#photos").html(this.view.render().el);
  }

});


}).call(this);

//var vent = _.extend({}, Backbone.Events);

/*
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Bumpyride.Routers.PhotosRouter = (function(_super) {

    __extends(PhotosRouter, _super);

    function PhotosRouter() {
      return PhotosRouter.__super__.constructor.apply(this, arguments);
    }

    PhotosRouter.prototype.initialize = function(options) {
      this.photos = new Bumpyride.Collections.PhotosCollection();
      return this.photos.reset(options.photos);
    };

    PhotosRouter.prototype.routes = {
      "new": "newPhoto",
      "index": "index",
      ":id/edit": "edit",
      ":id": "show",
      ".*": "index"
    };

    PhotosRouter.prototype.newPhoto = function() {
      this.view = new Bumpyride.Views.Photos.NewView({
        collection: this.photos
      });
      return $("#photos").html(this.view.render().el);
    };

    PhotosRouter.prototype.index = function() {
      this.view = new Bumpyride.Views.Photos.IndexView({
        photos: this.photos
      });
      return $("#photos").html(this.view.render().el);
    };

    PhotosRouter.prototype.show = function(id) {
      var photo;
      photo = this.photos.get(id);
      this.view = new Bumpyride.Views.Photos.ShowView({
        model: photo
      });
      return $("#photos").html(this.view.render().el);
    };

    PhotosRouter.prototype.edit = function(id) {
      var photo;
      photo = this.photos.get(id);
      this.view = new Bumpyride.Views.Photos.EditView({
        model: photo
      });
      return $("#photos").html(this.view.render().el);
    };

    return PhotosRouter;

  })(Backbone.Router);

}).call(this);
*/
