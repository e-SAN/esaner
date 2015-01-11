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

/* Package-scope variables */
var EventEmitter;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/raix:eventemitter/eventemitter.client.js                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
EventEmitter = function(options) {                                                                                    // 1
  var self = this;                                                                                                    // 2
  // Check that the user uses "new" keyword for api consistency                                                       // 3
  if (! (self instanceof EventEmitter))                                                           // 6                // 4
    throw new Error('use "new" to construct an EventEmitter');                                                        // 5
                                                                                                                      // 6
  options = options || {};                                                                                            // 7
                                                                                                                      // 8
  // Hidden scope                                                                                                     // 9
  self._eventEmitter = {                                                                                              // 10
    onListeners: {},                                                                                                  // 11
    onceListeners: {},                                                                                                // 12
    maxListeners: options.maxListeners || 10                                                                          // 13
  };                                                                                                                  // 14
};                                                                                                                    // 15
                                                                                                                      // 16
var _checkListenerLimit = function(eventName, listenerCount) {                                                        // 17
  var self = this;                                                                                                    // 18
  // Check if we are to send a warning                                                                                // 19
  if (self._eventEmitter.maxListeners && listenerCount > self._eventEmitter.maxListeners) {                           // 20
    // Return string                                                                                                  // 21
    return 'warning: possible EventEmitter memory leak detected. ' +                                                  // 22
        listenerCount + ' listeners added on event "' + eventName +                                                   // 23
        '". Use emitter.setMaxListeners() to increase limit. (' +                                                     // 24
        self._eventEmitter.maxListeners + ')';                                                                        // 25
                                                                                                                      // 26
  }                                                                                                                   // 27
};                                                                                                                    // 28
                                                                                                                      // 29
// By default EventEmitters will print a warning if more than 10 listeners are                                        // 30
// added for a particular event. This is a useful default which helps finding                                         // 31
// memory leaks. Obviously not all Emitters should be limited to 10. This function                                    // 32
// allows that to be increased. Set to zero for unlimited.                                                            // 33
EventEmitter.prototype.setMaxListeners = function(n) {                                                                // 34
  this._eventEmitter.maxListeners = n;                                                                                // 35
};                                                                                                                    // 36
                                                                                                                      // 37
var _addToList = function(list, eventName, listener) {                                                                // 38
  var self = this;                                                                                                    // 39
  // Check that we have a container for the event, Create listener array                                              // 40
  if (typeof list[eventName] == 'undefined') list[eventName] = [];                                                    // 41
                                                                                                                      // 42
  // Make sure the listener is not in there already?                                                                  // 43
  // We have to comment this to be compliant with node.js                                                             // 44
  // list[eventName] = _.without(list[eventName], listener);                                                          // 45
                                                                                                                      // 46
  // Add the listener and Check the limit                                                                             // 47
  return _checkListenerLimit.apply(this, [eventName, list[eventName].push(listener)]);                                // 48
};                                                                                                                    // 49
                                                                                                                      // 50
// Adds a listener to the end of the listeners array for the specified event.                                         // 51
// server.on('connection', function (stream) {                                                                        // 52
//   console.log('someone connected!');                                                                               // 53
// });                                                                                                                // 54
// Returns emitter, so calls can be chained.                                                                          // 55
EventEmitter.prototype.on = function(eventName, listener) {                                                           // 56
  var warn = _addToList.apply(this, [this._eventEmitter.onListeners, eventName, listener]);                           // 57
                                                                                                                      // 58
  // Warn if needed                                                                                                   // 59
  if (warn) console.warn((new Error(warn)).stack);                                                                    // 60
                                                                                                                      // 61
  // Return the emitter                                                                                               // 62
  return self;                                                                                                        // 63
};                                                                                                                    // 64
                                                                                                                      // 65
// Adds a one time listener for the event. This listener is invoked                                                   // 66
// only the next time the event is fired, after which it is removed.                                                  // 67
EventEmitter.prototype.once = function(eventName, listener) {                                                         // 68
  var warn = _addToList.apply(this, [this._eventEmitter.onceListeners, eventName, listener]);                         // 69
                                                                                                                      // 70
  // Warn if needed                                                                                                   // 71
  if (warn) console.warn((new Error(warn)).stack);                                                                    // 72
                                                                                                                      // 73
  // Return the emitter                                                                                               // 74
  return self;                                                                                                        // 75
};                                                                                                                    // 76
                                                                                                                      // 77
var _runCallbacks = function(listenerArray, args) {                                                                   // 78
  // count of listeners triggered                                                                                     // 79
  var count = 0;                                                                                                      // 80
  // Check if we have anything to work with                                                                           // 81
  if (typeof listenerArray !== 'undefined') {                                                                         // 82
    // Try to iterate over the listeners                                                                              // 83
    _.each(listenerArray, function(listener) {                                                                        // 84
      // Count listener calls                                                                                         // 85
      count++;                                                                                                        // 86
      // Send the job to the eventloop                                                                                // 87
      Meteor.setTimeout(function emittedEvent() {                                                                     // 88
        // We'll let the event loop call the listener                                                                 // 89
        listener.apply(window, args);                                                                                 // 90
      }, 0);                                                                                                          // 91
    });                                                                                                               // 92
  }                                                                                                                   // 93
                                                                                                                      // 94
  // Return the count                                                                                                 // 95
  return count;                                                                                                       // 96
};                                                                                                                    // 97
                                                                                                                      // 98
// emitter.emit(event, [arg1], [arg2], [...])#                                                                        // 99
// Execute each of the listeners in order with the supplied arguments.                                                // 100
EventEmitter.prototype.emit = function(eventName /* arguments */) {                                                   // 101
  var self = this;                                                                                                    // 102
  // make argument list to pass on to listeners                                                                       // 103
  var args = _.rest(arguments);                                                                                       // 104
                                                                                                                      // 105
  // Count listeners triggered                                                                                        // 106
  var count = 0;                                                                                                      // 107
                                                                                                                      // 108
  // Swap once list                                                                                                   // 109
  var onceList = self._eventEmitter.onceListeners[eventName];                                                         // 110
                                                                                                                      // 111
  // Empty the once list                                                                                              // 112
  self._eventEmitter.onceListeners[eventName] = [];                                                                   // 113
                                                                                                                      // 114
  // Trigger on listeners                                                                                             // 115
  count += _runCallbacks(self._eventEmitter.onListeners[eventName], args);                                            // 116
                                                                                                                      // 117
  // Trigger once listeners                                                                                           // 118
  count += _runCallbacks(onceList, args);                                                                             // 119
                                                                                                                      // 120
  // Returns true if event had listeners, false otherwise.                                                            // 121
  return (count > 0);                                                                                                 // 122
};                                                                                                                    // 123
                                                                                                                      // 124
// XXX: When removing a listener in node js it only removes one - not all.                                            // 125
var _withoutOne = function(list, obj) {                                                                               // 126
  var found = false;                                                                                                  // 127
  var result = [];                                                                                                    // 128
                                                                                                                      // 129
  // Iterate over listeners                                                                                           // 130
  for (var i = 0; i < list.length; i++)                                                                               // 131
    // Check if we found one...                                                                                       // 132
    if (!found && list[i] === obj) found = true; else result.push(list[i]);                                           // 133
                                                                                                                      // 134
  // return the new array                                                                                             // 135
  return result;                                                                                                      // 136
};                                                                                                                    // 137
                                                                                                                      // 138
// Removes all listeners, or those of the specified event. It's not a                                                 // 139
// good idea to remove listeners that were added elsewhere in the code,                                               // 140
// especially when it's on an emitter that you didn't create (e.g. sockets                                            // 141
// or file streams).                                                                                                  // 142
// Returns emitter, so calls can be chained.                                                                          // 143
EventEmitter.prototype.off = function(eventName, listener) {                                                          // 144
  var self = this;                                                                                                    // 145
  if (eventName) {                                                                                                    // 146
    if (typeof listener == 'function') {                                                                              // 147
      // its a bit more tricky - we have to iterate over the arrays and only                                          // 148
      // clone listeners not equal to                                                                                 // 149
      if (typeof self._eventEmitter.onListeners[eventName] !== 'undefined') {                                         // 150
        self._eventEmitter.onListeners[eventName] = _withoutOne(self._eventEmitter.onListeners[eventName], listener); // 151
                                                                                                                      // 152
      }                                                                                                               // 153
      if (typeof self._eventEmitter.onceListeners[eventName] !== 'undefined') {                                       // 154
        self._eventEmitter.onceListeners[eventName] = _withoutOne(self._eventEmitter.onceListeners[eventName], listener);
                                                                                                                      // 156
      }                                                                                                               // 157
    } else {                                                                                                          // 158
      // Remove all listeners for eventName                                                                           // 159
      self._eventEmitter.onListeners[eventName] = [];                                                                 // 160
      self._eventEmitter.onceListeners[eventName] = [];                                                               // 161
    }                                                                                                                 // 162
                                                                                                                      // 163
  } else {                                                                                                            // 164
    // Remove all listeners                                                                                           // 165
    self._eventEmitter.onListeners = {};                                                                              // 166
    self._eventEmitter.onceListeners = {};                                                                            // 167
  }                                                                                                                   // 168
};                                                                                                                    // 169
                                                                                                                      // 170
// Add api helpers                                                                                                    // 171
EventEmitter.prototype.addListener = EventEmitter.prototype.on;                                                       // 172
EventEmitter.prototype.removeListener = EventEmitter.prototype.off;                                                   // 173
EventEmitter.prototype.removeAllListeners = EventEmitter.prototype.off;                                               // 174
                                                                                                                      // 175
// Add jquery like helpers                                                                                            // 176
EventEmitter.prototype.one = EventEmitter.prototype.once;                                                             // 177
EventEmitter.prototype.trigger = EventEmitter.prototype.emit;                                                         // 178
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['raix:eventemitter'] = {
  EventEmitter: EventEmitter
};

})();
