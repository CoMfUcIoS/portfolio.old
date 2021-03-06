 /**
  * Services Database
  */

 var Services = new Mongo.Collection('services');

 Meteor.publish('theServices', function() {
   return Services.find({
     createdBy: spearhead.getCurrentUserId(this.userId)
   });
 });

 Meteor.methods({
   /**
    * Updates a service
    *
    * @method  updateAbout
    * @param   {Object}  object Object containing data to be saved in database.
    * @returns {Boolean}        If database updated returns true.
    */
   updateService: function(object) {
     var serviceId = spearhead.objectGet(object, 'serviceId', null),
         currentUserId;
     if (!serviceId) {
       return false;
     }
     delete object.serviceId;
     check(serviceId, String);
     currentUserId = spearhead.getCurrentUserId(this.userId);
     if (currentUserId) {
       object.createdBy = currentUserId;
       Services.upsert({
         createdBy: currentUserId,
         _id: (serviceId === 'new') ? null : serviceId
       }, {
         $set: object
       });
       return true;
     }
     return false;
   }
 });
