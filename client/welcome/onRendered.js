Template.welcome.onRendered(function() {
  this.autorun(function() {
    Template.currentData();
    var about = app.collections.about.findOne(),
      loaderDisplay = document.getElementById('loader').style.display,
      whileTimeout = null;

    document.title = spearhead.objectGet(about, 'name') +
      ' - ' + spearhead.objectGet(about, 'title');
    superSlides.init();
  });
});
