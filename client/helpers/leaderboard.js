Template.leaderboard.helpers({
  player: function() {
    var currentUserId = Meteor.userId();
    return PlayersList.find({ createdBy: currentUserId }, { sort: { score: -1, name: 1 } });
  },
  selectedClass: function() {
    var playerId = this._id,
        selectedPlayer = Session.get('selectedPlayer');
    if (playerId === selectedPlayer) {
      return 'selected';
    }
  },
  selectedPlayer: function() {
    var selectedPlayer = Session.get('selectedPlayer');
    return PlayersList.findOne({ _id: selectedPlayer });
  }
});
