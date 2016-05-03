app = {
  collections: {
    playersList : new Mongo.Collection('players'),
    slidesList: new Mongo.Collection("slides"),
    about: new Mongo.Collection("about"),
    services: new Mongo.Collection("services"),
    experience: new Mongo.Collection("experience")
  }
};

Meteor.subscribe('thePlayers');
Meteor.subscribe('theSlides');
Meteor.subscribe('aboutMe');
Meteor.subscribe('theServices');
Meteor.subscribe('theExperience');