// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See spearhead-tests.js for an example of importing.
 export const name = 'spearhead';


 spearhead = (function() {
   var _myUserId     = 'LnuqDdYd9XwxZTX99',
       _contactEmail = 'jkarasavvaidis@gmail.com',
       _siteEmail    = 'webContactForm@studio110.eu';

   return {
    /**
     * My personal email to sent messages from the contact form
     *
     * @variable
     * @type {String}
     */
     personalEmail: _contactEmail,

    /**
     * Websites email address
     *
     * @variable
     * @type {String}
     */
     websiteEmail: _siteEmail,

    /**
     * //TODO: docs needed
     * [log description]
     *
     * @param  {[type]} string [description]
     * @return {[type]}        [description]
     */
     log: function(string) {
      //TODO: implement this function
       console.log(string);
     },

    /**
     * Deep search inside an object
     *
     * @method  objectGet
     * @param  {Object} obj          Object to search
     * @param  {String} path         Desired path
     * @param  {*}      defaultValue Default value if path is not defined
     * @param  {String} delimiter    Path delimiter. If it is different than .
     *                               then you must specify it here
     * @return {*}                   Value found on that Path or
     *                               default value specified. or undefined.
     */
     objectGet: function(obj, path, defaultValue, delimiter) {
       var arr,
           i;
       if (typeof path === 'string') {
         arr = path.split(delimiter || '.');
         for (i = 0; i < arr.length; i++) {
           if (obj && (obj.hasOwnProperty(arr[i]) || obj[arr[i]])) {
             obj = obj[arr[i]];
           } else {
             return defaultValue;
           }
         }
         return obj;
       } else {
         return defaultValue;
       }
     },

    /**
     * Returns the userID currently login or if it is undefined
     * returns the default. also checks if i am login to so i can edit
     * the default site.
     *
     * @method getCurrentUserId
     * @param  {String} userId User id from db
     * @return {String}        The userId from db or 'default'
     */
     getCurrentUserId: function(userId) {
       return (!userId ||
          userId === _myUserId ||
          typeof userId === 'undefined') ?
        'default' : this.userId;
     },
    /**
     * Waits for an element to be displayed and after that
     * executes the callback
     *
     * @method  waitForElement
     * @param  {String}   elementPath Element's path ex. '#loader'.
     * @param  {Function} callBack    Call back function
     */
     waitForElement: function(elementPath, callBack) {
       if (typeof elementPath !== 'string') {
         this.log('spearhead : ERROR : waitForElement : elementPath is not a string');
         return;
       }
       var id = (elementPath.indexOf('#') > -1),
           element = (id) ?
        document.getElementById(elementPath.substring(1)) :
        document.getElementsByClassName(elementPath.substring(1))[0];

       if (typeof callBack !== 'function') {
         this.log('spearhead : ERROR : waitForElement : callBack is not a function');
         return;
       }
       if (!element) {
         this.log('spearhead : ERROR : waitForElement : element doesn\'t exist');
         return;
       }
       if (element.style.display !== 'none') {
         callBack(elementPath, element);
       } else {
         this.waitForElement(elementPath, callBack);
       }
     }
   };
 })();