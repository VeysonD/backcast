var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videoPlayer = new VideoPlayerView();
    this.videoList = new VideoListView();

    this.render();
    this.videoList.render();
    this.videoPlayer.render();

    console.log(this);
  },


  render: function() {
    console.log('rendering');
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
