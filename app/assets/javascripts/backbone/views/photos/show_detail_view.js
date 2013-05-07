(function() {
  Bumpyride.Views.Photos.ShowDetailView = Backbone.View.extend({
    
    tagName: "div",
    //template: _.template($("#forecast-detail-template").html()),
    template: JST["backbone/templates/photos/showDetail"],
    events: {
        "click button.close": "close"
    },
    initialize: function() {
        _.bindAll(this, "render");
        //vent.on("dialog.close", this.remove, this);
    },
    render: function() {
        this.$dialog = $( this.template(this.model.toJSON()) );

        this.$dialog.modal().appendTo( this.$el );
        
        this.$el.appendTo( "body" );
        return this;      
    },
    close: function() {
        Backbone.history.navigate("/", false);
    },
    remove: function() {
        this.$dialog.modal("hide").remove();
        //vent.off("dialog.close");
    }

  });

}).call(this);
/*

(function() {
  var _base,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (_base = Bumpyride.Views).Photos || (_base.Photos = {});

  Bumpyride.Views.Photos.ShowView = (function(_super) {

    __extends(ShowView, _super);

    function ShowView() {
      return ShowView.__super__.constructor.apply(this, arguments);
    }

    ShowView.prototype.template = JST["backbone/templates/photos/show"];

    ShowView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    return ShowView;

  })(Backbone.View);

}).call(this);


Bumpyride.Views.Photos ||= {}

class Bumpyride.Views.Photos.ShowView extends Backbone.View
  template: JST["backbone/templates/photos/show"]

  render: ->
    $(@el).html(@template(@model.toJSON() ))
    return this

*/
