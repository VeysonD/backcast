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

    //new VideoListEntryView({
    // el: this.$('.video-list'),
    // collection: this.videos,
    //}).render();

    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
