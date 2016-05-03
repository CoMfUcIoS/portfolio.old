/**
 * About Database
 */

var Experience = new Mongo.Collection('experience');


Meteor.publish('theExperience', function() {
  return Experience.find({
    createdBy: spearhead.getCurrentUserId(this.userId)
  });
});

Meteor.methods({
  /**
   * Updates the about object
   * 
   * @method  updateAbout
   */
  'updateExperience': function(object) {
    var experienceId = spearhead.objectGet(object, 'experienceId', null),
         currentUserId;
     if (!experienceId) {
       return false;
     }
     delete object.experienceId;
     check(experienceId, String);
     currentUserId = spearhead.getCurrentUserId(this.userId);
     if (currentUserId) {
       object.createdBy = currentUserId;
       Experience.upsert({
         createdBy: currentUserId,
         _id: (experienceId === 'new') ? null : experienceId
       }, {
         $set: object
       });
     }
   }

});
