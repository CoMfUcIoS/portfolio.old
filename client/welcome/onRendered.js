Template.welcome.onRendered(function() {
  this.autorun(function() {
    Template.currentData();
    var about = About.findOne(),
      loaderDisplay = document.getElementById('loader').style.display,
      whileTimeout = null;

    document.title = lib.objectGet(about, 'name') +
      ' - ' + lib.objectGet(about, 'title');
    superSlides.init();
  });
});
