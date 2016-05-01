Template.map.onRendered(function() {
  var e = $(".portfolio-items");

  $("#filters a").click(function() {
    var t = $(this).attr("data-filter");
    $("#filters .current").removeClass("current");
    $(this).addClass("current");
    e.isotope({
      filter: t,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });
    return false;
  });
});
