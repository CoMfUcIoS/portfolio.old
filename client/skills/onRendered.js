Template.skills.onRendered(function() {
  this.autorun(function() {
    Template.currentData();
    $('#skills-slide').owlCarousel({
      autoPlay: true,
      items: 4,
      itemsDesktop: [1e3, 4],
      itemsDesktopSmall: [900, 3],
      itemsTablet: [600, 2],
      itemsMobile: [480, 1]
    });
  });
});