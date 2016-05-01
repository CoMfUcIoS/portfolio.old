 /**
  * Services Database
  */

 var Services = new Mongo.Collection('services');

 Meteor.publish('theServices', function() {
   return Services.find({
     createdBy: lib.getCurrentUserId(this.userId)
   });
 });

 Meteor.methods({
   /**
    * Updates a service
    * 
    * @method  updateAbout
    */
   'updateService': function(object) {
     var serviceId = lib.objectGet(object, 'serviceId', null),
       currentUserId;
     if (!serviceId) {
       return false;
     }
     delete object.serviceId;
     check(serviceId, String);
     currentUserId = lib.getCurrentUserId(this.userId);
     if (currentUserId) {
       object.createdBy = currentUserId;
       Services.upsert({
         createdBy: currentUserId,
         _id: (serviceId === 'new') ? null : serviceId
       }, {
         $set: object
       });
     }
   }
 });
