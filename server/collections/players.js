 /**
  * Players Database
  */
 
 var PlayersList = new Mongo.Collection('players');


 Meteor.publish('thePlayers', function() {
  return PlayersList.find({
    createdBy: lib.getCurrentUserId(this.userId)
  });
});

Meteor.methods({
  'createPlayer': function(playerNameVar) {
    check(playerNameVar, String);
    var currentUserId = lib.getCurrentUserId(this.userId);
    if (currentUserId) {
      PlayersList.insert({
        name: playerNameVar,
        score: 0,
        createdBy: currentUserId
      });
    }
  },
  'removePlayer': function(selectedPlayer) {
    check(selectedPlayer, String);
    var currentUserId = lib.getCurrentUserId(this.userId);
    if (currentUserId) {
      PlayersList.remove({
        _id: selectedPlayer,
        createdBy: currentUserId
      });
    }
  },
  'updateScore': function(selectedPlayer, scoreValue) {
    var currentUserId = lib.getCurrentUserId(Meteor.userId());
    if (currentUserId) {
      check(selectedPlayer, String);
      check(scoreValue, Number);
      PlayersList.update({
        _id: selectedPlayer,
        createdBy: currentUserId
      }, {
        $inc: {
          score: scoreValue
        }
      });
    }
  }
});