Template.hero.helpers({
	'about': function() {
    return app.collections.about.findOne();
  }
});