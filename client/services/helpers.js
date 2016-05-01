Template.services.helpers({
	'about': function() {
		return About.findOne();
	},
	'service': function() {
		return Services
			.find({}, {
				sort: {
					rank: 1
				}
			})
			.fetch();
	}
});