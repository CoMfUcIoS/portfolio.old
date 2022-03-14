Template.footer.helpers({
  invokeAfterLoad: function() {
    Meteor.defer(function() {
      setTimeout(function() {
        $('.loader .inner').fadeOut(500, function() {
          $('.loader').fadeOut(750);
        });
        $('#slides').superslides({
          animation: 'fade',
          play: 5e3
        });
      }, 2000);
    });
    return '';
  }
});