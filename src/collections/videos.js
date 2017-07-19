var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  initialize: function() {
    //console.log(this);
  },

  search: function(searchItem) {
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: searchItem,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true
      }
    });
  },

  parse: function(response) {
    return response.items;
  }

});
