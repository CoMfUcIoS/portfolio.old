Template.services.helpers({
	'about': function() {
		return app.collections.about.findOne();
	},
	'service': function() {
		return app.collections.services
			.find({}, {
				sort: {
					rank: 1
				}
			})
			.fetch();
	}
});