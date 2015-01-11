//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Users;

(function () {

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/perak:user-roles/both/collections/users.js                    //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
Users = Meteor.users;                                                     // 1
                                                                          // 2
Users.isInRole = function (userId, role) {                                // 3
  var user = Users.findOne({_id: userId});                                // 4
  return !!(user && user.roles && user.roles.indexOf(role) != -1);        // 5
};                                                                        // 6
                                                                          // 7
Users.isInRoles = function (userId, roleList) {                           // 8
	var user = Users.findOne({_id: userId});                                 // 9
	if(!user || !user.roles) {                                               // 10
		return false;                                                           // 11
	}                                                                        // 12
                                                                          // 13
	var granted = _.intersection(roleList, user.roles);                      // 14
	if(!granted || granted.length == 0) {                                    // 15
		return false;                                                           // 16
	}                                                                        // 17
	return true;                                                             // 18
};                                                                        // 19
                                                                          // 20
Users.isAdmin = function (userId) {                                       // 21
  return Users.isInRole(userId, "admin");                                 // 22
};                                                                        // 23
                                                                          // 24
Users.isAdminOrInRole = function (userId, role) {                         // 25
  return Users.isInRole(userId, "admin") || Users.isInRole(userId, role); // 26
};                                                                        // 27
                                                                          // 28
////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/perak:user-roles/client/helpers.js                            //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
var Helpers = {};                                                         // 1
                                                                          // 2
Helpers.isAdmin = function() {                                            // 3
  return Users.isAdmin(Meteor.userId());                                  // 4
};                                                                        // 5
                                                                          // 6
Helpers.isUserInRole = function (role, options) {                         // 7
  return Users.isInRole(Meteor.userId(), role);                           // 8
};                                                                        // 9
                                                                          // 10
Helpers.isUserInRoles = function (roleList, options) {                    // 11
  return Users.isInRoles(Meteor.userId(), roleList);                      // 12
};                                                                        // 13
                                                                          // 14
_.each(Helpers, function (helper, key) {                                  // 15
  Handlebars.registerHelper(key, helper)                                  // 16
});                                                                       // 17
////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['perak:user-roles'] = {
  Users: Users
};

})();
