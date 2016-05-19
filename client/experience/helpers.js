Template.experience.helpers({
  experience: function() {
    var exp = app.collections.experience.find({}, {
      sort: {
        rank: 1
      }
    });
    return exp.map(function(experience, index) {
      experience._index = index++;
      return experience;
    });
  },
  odd: function() {
    return !((this._index % 2) === 0);
  }
});

/*
Template.experience.helpers({
    experience: function() {
        var index = 0,
            exp = app.collections.experience.find({}, {
                sort: {
                    rank: 1
                }
            });
        return exp.map(function(experience, index, cursor) {
            experience._index = index++;
            return experience;
        });
    },
    odd: function() {
        return !((this._index % 2) === 0);
    }
});
 */