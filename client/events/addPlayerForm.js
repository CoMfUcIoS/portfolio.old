Template.addPlayerForm.events({
	'submit form': function() {
		event.preventDefault();
		var playerNameVar = event.target.playerName.value;
		Meteor.call('createPlayer', playerNameVar);
		event.target.playerName.value = "";
	}
});