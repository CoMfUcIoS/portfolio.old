Template.welcome.helpers({
  'slide': function() {
    return SlidesList.find().fetch();
  },
  'about': function() {
    return About.findOne();
  }
});

Template.registerHelper('initSuperSlides', function() {
	$('#slides').superslides({
	  animation: "fade",
	  play: 5e3
	});
});