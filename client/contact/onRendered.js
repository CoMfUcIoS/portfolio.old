Template.contact.onRendered(function() {
  if (!Modernizr.input.placeholder) {
    $("[placeholder]").each(function() {
      if ($(this).val() === "" && $(this).attr("placeholder") !== "") {
        $(this).val($(this).attr("placeholder"));
        $(this).focus(function() {
          if ($(this).val() === $(this).attr("placeholder")) {
            $(this).val("");
          }
        });
        $(this).blur(function() {
          if ($(this).val() === "") {
            $(this).val($(this).attr("placeholder"));
          }
        });
      }
    });
  }
  $('.contactform').validate({
    form: ".contactform",
    borderColorOnError: "#c12728",
    scrollToTopOnError: false,
    validateOnBlur: false,
    onError: function() {
      $("#xhr").removeClass("xhr");
    },
    onSuccess: function() {
      $(".sendcontact").prop("disabled", true);
      $("p.error").html("Your message sent.");
      var e = $("form[name=contactform] input[name='send[name]']").val(),
        t = $("form[name=contactform] input[name='send[email]']").val(),
        n = $("form[name=contactform] textarea[name='send[message]']").val();

      Meteor.call('sendEmail',
        spearhead.personalEmail,
        t,
        'Hello from ' + e,
        n);
      $(".sendcontact").prop("disabled", true);
      $("p.error").html("Your message sent.");
    }
  });

  $('.sendcontact').click(function() {
    $(".contactform").valid();
  });
});
