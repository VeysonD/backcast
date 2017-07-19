var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    //this.videoPlayer = new VideoPlayerView();
    //this.videoListView = new VideoListView();
    //this.videoListEntry = new VideoListEntry();

    this.render();
    //this.videoPlayer.render();
    //this.videoListView.render();
    //this.videoListEntry.render();
  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos,
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.at(0),
      collection: this.videos,
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
