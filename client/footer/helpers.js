Template.footer.helpers({
  invokeAfterLoad: function() {
    Meteor.defer(function() {
      setTimeout(function() {
        $('.loader .inner').fadeOut(500, function() {
          $('.loader').fadeOut(750);
        });
      }, 3000);
    });
    return '';
  }
});