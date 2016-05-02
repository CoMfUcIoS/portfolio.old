/**
 * About Database
 */

var About = new Mongo.Collection('about');


Meteor.publish('aboutMe', function() {
  return About.find({
    createdBy: spearhead.getCurrentUserId(this.userId)
  });
});

Meteor.methods({
  /**
   * Updates the about object
   * 
   * @method  updateAbout
   */
  'updateAbout': function(object) {
    check(object, Object);
    Object.keys(object).forEach(function(key) {
      check(object[key], String);
    });
    var currentUserId = spearhead.getCurrentUserId(this.userId);
    if (currentUserId) {
      object.createdBy = currentUserId;
      About.upsert({
        createdBy: currentUserId
      }, {
        $set: object
      });
    }
  },

});
