var VideoListView = Backbone.View.extend({
//call render somewhere (maybe not even in this file)
  initialize: function() {
    this.collection.on('sync', function() {
      this.render();
    }, this);
    //this.listenTo('sync', this.render(), this);
  },

  render: function() {
    //console.log(this.collection.models);
    this.$el.children().detach();
    this.$el.html(this.template());

    this.$('.video-list').append(this.collection.map(function(video) {
      var videoListEntry = new VideoListEntryView({model: video});
      return videoListEntry.render().el;
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
