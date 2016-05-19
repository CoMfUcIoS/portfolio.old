Template.welcome.helpers({
  slide: function() {
    return app.collections.slidesList.find().fetch();
  },
  about: function() {
    return app.collections.about.findOne();
  }
});

Template.registerHelper('initSuperSlides', function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 5e3
  });
});