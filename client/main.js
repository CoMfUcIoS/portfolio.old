PlayersList = new Mongo.Collection('players');
SlidesList = new Mongo.Collection("slides");
About = new Mongo.Collection("about");
Services = new Mongo.Collection("services");

Meteor.subscribe('thePlayers');
Meteor.subscribe('theSlides');
Meteor.subscribe('aboutMe');
Meteor.subscribe('theServices'); 