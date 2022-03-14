Template.welcome.helpers({
  slide: function() {
    return app.collections.slidesList.find().fetch();
  },
  about: function() {
    return app.collections.about.findOne();
  }
});