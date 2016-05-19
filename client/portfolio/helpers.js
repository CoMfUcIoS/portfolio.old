Template.portfolio.helpers({
  portfolio: function() {
    return app.collections.portfolio.find().fetch();
  },
  filter: function() {
    var filters = [],
        portfolioRes = app.collections.portfolio.find().fetch() || [];

    portfolioRes.forEach(function(pf) {
      if (filters.indexOf(pf.filter) === -1) {
        filters.push(pf.filter);
      }
    });
    return filters;
  }
});