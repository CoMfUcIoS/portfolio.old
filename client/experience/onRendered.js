Template.experience.onRendered(function() {
	var t = $(window).height(),
			r = $(".timeline").offset().top;

  $(window).bind("resize", function() {
    t = $(window).height();
  });

  $(window).scroll(function() {
    if (window.pageYOffset > r - t + 200) {
      $(".timeline li").addClass("fadeInUp");
    }
  });
});