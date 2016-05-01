Template.addSlideForm.events({
  'submit form': function() {
    event.preventDefault();
    Meteor.call('addSlide', event.target.filename.value);
    event.target.filename.value = "";
  }
});
