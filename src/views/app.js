var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
    console.log(this);
  },


  render: function() {
    console.log('rendering');
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
