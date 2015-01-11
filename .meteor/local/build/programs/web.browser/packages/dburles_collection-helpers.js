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
var Mongo = Package.mongo.Mongo;

(function () {

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/dburles:collection-helpers/collection-helpers.js                   //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
var Document = {};                                                             // 1
Mongo.Collection.prototype.helpers = function(helpers) {                       // 2
  var self = this;                                                             // 3
                                                                               // 4
  if (self._transform && ! self._hasCollectionHelpers)                         // 5
    throw new Meteor.Error("Can't apply helpers to '" +                        // 6
      self._name + "' a transform function already exists!");                  // 7
                                                                               // 8
  if (! self._hasCollectionHelpers) {                                          // 9
    Document[self._name] = function(doc) { return _.extend(this, doc); };      // 10
    self._transform = function(doc) { return new Document[self._name](doc); }; // 11
    self._hasCollectionHelpers = true;                                         // 12
  }                                                                            // 13
                                                                               // 14
  _.each(helpers, function(helper, key) {                                      // 15
    Document[self._name].prototype[key] = helper;                              // 16
  });                                                                          // 17
};                                                                             // 18
                                                                               // 19
/////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['dburles:collection-helpers'] = {};

})();
