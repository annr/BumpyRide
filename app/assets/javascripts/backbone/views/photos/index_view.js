/*
(function() {
  var _base,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (_base = Bumpyride.Views).Photos || (_base.Photos = {});

  Bumpyride.Views.Photos.IndexView = Backbone.View.extend({

    IndexView: function() {
      this.render = __bind(this.render, this);

      this.addOne = __bind(this.addOne, this);

      this.addAll = __bind(this.addAll, this);
      return IndexView.__super__.constructor.apply(this, arguments);
    },

    template: function() {
      return JST["backbone/templates/photos/index"];
    },

    initialize: function(options) {
      return this.options.photos.bind('reset', this.addAll);
    },

    addAll: function() {
      return this.options.photos.each(this.addOne);
    },

    addOne: function() {
      var view;
      view = new Bumpyride.Views.Photos.PhotoView({
        model: photo
      });
      return this.$("ul#photos-inline").append(view.render().el);
    },

    render: function() {
      $(this.el).html(this.template({
        photos: this.options.photos.toJSON()
      }));
      this.addAll();
      return this;
    }

  });

}).call(this);

*/

(function() {
  var _base,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (_base = Bumpyride.Views).Photos || (_base.Photos = {});

  Bumpyride.Views.Photos.IndexView = (function(_super) {

    __extends(IndexView, _super);

    function IndexView() {
      this.render = __bind(this.render, this);

      this.addOne = __bind(this.addOne, this);

      this.addAll = __bind(this.addAll, this);
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype.template = JST["backbone/templates/photos/index"];

    IndexView.prototype.initialize = function() {
      return this.options.photos.bind('reset', this.addAll);
    };

    IndexView.prototype.addAll = function() {
      return this.options.photos.each(this.addOne);
    };

    IndexView.prototype.addOne = function(photo) {
      var view;
      view = new Bumpyride.Views.Photos.PhotoView({
        model: photo
      });
      return this.$("ul#photos-inline").append(view.render().el);
    };

    IndexView.prototype.render = function() {
      $(this.el).html(this.template({
        photos: this.options.photos.toJSON()
      }));
      this.addAll();
      return this;
    };

    return IndexView;

  })(Backbone.View);

}).call(this);


