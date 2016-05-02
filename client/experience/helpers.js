Template.experience.helpers({
    experience: function() {
        var index = 0,
            exp = app.collections.experience.find(); // TODO: change this to method call ( you need to add the collection first)
        return exp.map(function(experience, index, cursor) {
            experience._index = index++;
            return experience;
        });
    },
    odd: function() {
        return !((this._index % 2) === 0);
    }
});