app = {
  collections: {
    playersList : new Mongo.Collection('players'),
    slidesList: new Mongo.Collection("slides"),
    about: new Mongo.Collection("about"),
    services: new Mongo.Collection("services")
  }
};

Meteor.subscribe('thePlayers');
Meteor.subscribe('theSlides');
Meteor.subscribe('aboutMe');
Meteor.subscribe('theServices');