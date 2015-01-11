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

/* Package-scope variables */
var PaginatedSubscriptionHandle;

(function () {

//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
// packages/tmeasday:paginated-subscription/paginated_subscription.js               //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
                                                                                    //
PaginatedSubscriptionHandle = function(perPage) {                                   // 1
  this.perPage = perPage;                                                           // 2
  this._limit = perPage;                                                            // 3
  this._limitListeners = new Deps.Dependency();                                     // 4
  this._loaded = 0;                                                                 // 5
  this._loadedListeners = new Deps.Dependency();                                    // 6
}                                                                                   // 7
                                                                                    // 8
PaginatedSubscriptionHandle.prototype.loaded = function() {                         // 9
  this._loadedListeners.depend();                                                   // 10
  return this._loaded;                                                              // 11
}                                                                                   // 12
                                                                                    // 13
PaginatedSubscriptionHandle.prototype.limit = function() {                          // 14
  this._limitListeners.depend();                                                    // 15
  return this._limit;                                                               // 16
}                                                                                   // 17
                                                                                    // 18
PaginatedSubscriptionHandle.prototype.ready = function() {                          // 19
  return this.loaded() === this.limit();                                            // 20
}                                                                                   // 21
                                                                                    // 22
// deprecated                                                                       // 23
PaginatedSubscriptionHandle.prototype.loading = function() {                        // 24
  return ! this.ready();                                                            // 25
}                                                                                   // 26
                                                                                    // 27
PaginatedSubscriptionHandle.prototype.loadNextPage = function() {                   // 28
  this._limit += this.perPage;                                                      // 29
  this._limitListeners.changed();                                                   // 30
}                                                                                   // 31
                                                                                    // 32
PaginatedSubscriptionHandle.prototype.done = function() {                           // 33
  this._loaded = this._limit;                                                       // 34
  this._loadedListeners.changed();                                                  // 35
}                                                                                   // 36
                                                                                    // 37
PaginatedSubscriptionHandle.prototype.reset = function() {                          // 38
  this._limit = this.perPage;                                                       // 39
  this._limitListeners.changed();                                                   // 40
}                                                                                   // 41
                                                                                    // 42
                                                                                    // 43
// XXX: deal with last argument being a callback                                    // 44
Meteor.subscribeWithPagination = function (/*name, arguments, perPage */) {         // 45
  var args = Array.prototype.slice.call(arguments, 0);                              // 46
  var perPage = args.pop();                                                         // 47
                                                                                    // 48
  var handle = new PaginatedSubscriptionHandle(perPage);                            // 49
                                                                                    // 50
  var argAutorun = Meteor.autorun(function() {                                      // 51
    var ourArgs = _.map(args, function(arg) {                                       // 52
      return _.isFunction(arg) ? arg() : arg;                                       // 53
    });                                                                             // 54
                                                                                    // 55
    var subHandle = Meteor.subscribe.apply(this, ourArgs.concat([handle.limit()])); // 56
                                                                                    // 57
    // whenever the sub becomes ready, we are done. This may happen right away      // 58
    // if we are re-subscribing to an already ready subscription.                   // 59
    Meteor.autorun(function() {                                                     // 60
      if (subHandle.ready())                                                        // 61
        handle.done();                                                              // 62
    });                                                                             // 63
  });                                                                               // 64
                                                                                    // 65
  // this will stop the subHandle, and the done autorun                             // 66
  handle.stop = argAutorun.stop;                                                    // 67
                                                                                    // 68
  return handle;                                                                    // 69
}                                                                                   // 70
//////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['tmeasday:paginated-subscription'] = {};

})();
