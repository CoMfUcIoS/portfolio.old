/**
 * Portfolio Database
 */

var Portfolio = new Mongo.Collection('portfolio');


Meteor.publish('thePortfolio', function() {
  return Portfolio.find({
    createdBy: spearhead.getCurrentUserId(this.userId)
  });
});

Meteor.methods({
  /**
   * Updates the Experience object
   *
   * @method  updateExperience
   * @param   {Object} object Object containing data to be saved in database.
   * @returns {Boolean}       If database updated returns true.
   */
  updatePortfolio: function(object) {
    var portfolioId = spearhead.objectGet(object, 'portfolioId', null),
        currentUserId;
    if (!portfolioId) {
      return false;
    }
    delete object.portfolioId;
    check(portfolioId, String);
    currentUserId = spearhead.getCurrentUserId(this.userId);
    if (currentUserId) {
      object.createdBy = currentUserId;
      Portfolio.upsert({
        createdBy: currentUserId,
        _id: (portfolioId === 'new') ? null : portfolioId
      }, {
        $set: object
      });
      return true;
    }
    return false;
  }

});
