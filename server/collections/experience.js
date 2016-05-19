/**
 * Experience Database
 */

var Experience = new Mongo.Collection('experience');


Meteor.publish('theExperience', function() {
  return Experience.find({
    createdBy: spearhead.getCurrentUserId(this.userId)
  });
});

Meteor.methods({
  /**
   * Updates the Experience object
   *
   * @method  updateExperience
   * @param {Object} object Object containing data to be saved in database.
   * @returns {Boolean} If database updated returns true.
   */
  updateExperience: function(object) {
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
      return true;
    }
    return false;
  }

});
