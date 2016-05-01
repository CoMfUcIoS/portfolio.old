Template.navbar.onRendered(function() {
  this.autorun(function() {
    Template.currentData();
    var i = $(".skills").offset().top,
      t = $(window).height();

    $(window).bind("resize", function() {
      t = $(window).height();
    });

    $(".hidethis").bind("inview", function(e, t) {
      if (t === true) {
        $(this).removeClass("hidethis");
      }
    });

    $(".scrollto").click(function(e) {
      var t = $(this).attr("href"),
        n = $(t).offset().top;
      e.preventDefault();
      $("html, body").animate({
        scrollTop: n - 50
      }, "slow");
    });

    $(window).scroll(function() {
      if (window.pageYOffset > t) {
        $(".navbar-flat").addClass("navbar-fixed-top");
        $(".firstSec").addClass("fixed");
      } else {
        $(".navbar-flat").removeClass("navbar-fixed-top");
        $(".firstSec").removeClass("fixed");
      }
      if (window.pageYOffset > i - t + 200) {
        $(".chart").easyPieChart({
          easing: "easeInOut",
          barColor: "#ffffff",
          trackColor: "#d82c2e",
          scaleColor: false,
          lineWidth: 4,
          size: 152,
          onStep: function(e, t, n) {
            $(this.el).find(".percent").text(Math.round(n));
          }
        });
      }
    });
  });
});