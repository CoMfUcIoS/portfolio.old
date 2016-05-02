/**
 * Slide Database
 */

var SlidesList = new Mongo.Collection('slides');

Meteor.publish('theSlides', function() {
  return SlidesList.find({
    createdBy: spearhead.getCurrentUserId(this.userId)
  });
});

Meteor.methods({
  /**
   * Adds to the slides database the given slide
   *
   * @method  addSlide
   * @param  {String} filename File name of the slide
   */
  'addSlide': function(filename) {
    check(filename, String);
    var currentUserId = spearhead.getCurrentUserId(this.userId);
    if (currentUserId) {
      SlidesList.insert({
        name: filename,
        createdBy: currentUserId
      });
    }
  },
  /**
   * Removes the given slide from the database
   * 
   * @param  {String} selectedSlide Slide _id 
   */
  'removeSlide': function(selectedSlide) {
    check(selectedSlide, String);
    var currentUserId = spearhead.getCurrentUserId(this.userId);
    if (currentUserId) {
      SlidesList.insert({
        _id: selectedSlide,
        createdBy: currentUserId
      });
    }
  },
  'console': function() {
  	console.log('this method is called :D ');
  }
});