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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Session = Package.session.Session;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Helpers, UI;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/raix:handlebar-helpers/helpers.operators.js                                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// Forward compability                                                                                          // 1
if (typeof UI === 'undefined' || typeof UI.registerHelper !== 'function') {                                     // 2
  UI = {                                                                                                        // 3
    registerHelper: function(name, f) {                                                                         // 4
      if (typeof Handlebars !== 'undefined') {                                                                  // 5
        return Handlebars.registerHelper(name, f);                                                              // 6
      } else {                                                                                                  // 7
        throw new Error('No UI or Handlebars found');                                                           // 8
      }                                                                                                         // 9
    }                                                                                                           // 10
  };                                                                                                            // 11
}                                                                                                               // 12
                                                                                                                // 13
// Helper scope                                                                                                 // 14
if (typeof Helpers === 'undefined') {                                                                           // 15
    Helpers = {};                                                                                               // 16
}                                                                                                               // 17
                                                                                                                // 18
if (typeof UI !== 'undefined') {                                                                                // 19
    UI.registerHelper('getLength', function (a) {                                                               // 20
      return a && a.length;                                                                                     // 21
    });                                                                                                         // 22
                                                                                                                // 23
    UI.registerHelper('isSelected', function (a, b) {                                                           // 24
      return (a === b)?' selected': '';                                                                         // 25
    });                                                                                                         // 26
                                                                                                                // 27
    UI.registerHelper('isChecked', function (a, b) {                                                            // 28
      return (a === b)?' checked': '';                                                                          // 29
    });                                                                                                         // 30
                                                                                                                // 31
    UI.registerHelper('cutString', function (str, len) {                                                        // 32
      return (str.length > len)?str.substr(0, Math.max(len-3, 0))+'...':str;                                    // 33
    });                                                                                                         // 34
                                                                                                                // 35
    UI.registerHelper('$eq', function (a, b) {                                                                  // 36
      return (a === b); //Only text, numbers, boolean - not array & objects                                     // 37
    });                                                                                                         // 38
                                                                                                                // 39
    UI.registerHelper('$neq', function (a, b) {                                                                 // 40
      return (a !== b); //Only text, numbers, boolean - not array & objects                                     // 41
    });                                                                                                         // 42
                                                                                                                // 43
    UI.registerHelper('$in', function (a, b, c, d) {                                                            // 44
      return ( a === b || a === c || a === d);                                                                  // 45
    });                                                                                                         // 46
                                                                                                                // 47
    UI.registerHelper('$nin', function (a, b, c, d) {                                                           // 48
      return ( a !== b && a !== c && a !== d);                                                                  // 49
    });                                                                                                         // 50
                                                                                                                // 51
    UI.registerHelper('$exists', function (a) {                                                                 // 52
      return ( a !== undefined);                                                                                // 53
    });                                                                                                         // 54
                                                                                                                // 55
    UI.registerHelper('$lt', function (a, b) {                                                                  // 56
      return (a < b);                                                                                           // 57
    });                                                                                                         // 58
                                                                                                                // 59
    UI.registerHelper('$gt', function (a, b) {                                                                  // 60
      return (a > b);                                                                                           // 61
    });                                                                                                         // 62
                                                                                                                // 63
    UI.registerHelper('$lte', function (a, b) {                                                                 // 64
      return (a <= b);                                                                                          // 65
    });                                                                                                         // 66
                                                                                                                // 67
    UI.registerHelper('$gte', function (a, b) {                                                                 // 68
      return (a >= b);                                                                                          // 69
    });                                                                                                         // 70
                                                                                                                // 71
                                                                                                                // 72
    UI.registerHelper('$and', function (a, b) {                                                                 // 73
      return (a && b);                                                                                          // 74
    });                                                                                                         // 75
                                                                                                                // 76
    UI.registerHelper('$or', function (a, b) {                                                                  // 77
      return (a || b);                                                                                          // 78
    });                                                                                                         // 79
                                                                                                                // 80
    UI.registerHelper('$not', function (a) {                                                                    // 81
      return (!a);                                                                                              // 82
    });                                                                                                         // 83
                                                                                                                // 84
    UI.registerHelper('getText', function (text) { // Deprecating                                               // 85
      return Helpers.getText(text);                                                                             // 86
    });                                                                                                         // 87
                                                                                                                // 88
    // UI.registerHelper('userRole', function ( /* arguments */) {                                              // 89
    //   var role = Session.get('currentRole');                                                                 // 90
    //   return _.any(arguments, function(value) { return (value == role); });                                  // 91
    // });                                                                                                      // 92
                                                                                                                // 93
    // expects an array: languageText['say.hello.to.me']['en'] = 'Say hello to me:)';                           // 94
    // ex.:                                                                                                     // 95
    // getText('Say.Hello.To.Me') == 'say hello to me:)'; // lowercase                                          // 96
    // getText('SAY.HELLO.TO.ME') == 'SAY HELLO TO ME:)'; // uppercase                                          // 97
    // getText('Say.hello.to.me') == 'Say hello to me:)'; // uppercase first letter, rest lowercase             // 98
    // getText('Say.Hello.To.Me') == 'Say Hello To Me:)'; // camelCase                                          // 99
                                                                                                                // 100
    var _languageDeps = new Deps.Dependency();                                                                  // 101
    var currentLanguage = 'en';                                                                                 // 102
                                                                                                                // 103
    // language = 'en'                                                                                          // 104
    Helpers.setLanguage = function(language) {                                                                  // 105
      if (language && language !== currentLanguage) {                                                           // 106
        currentLanguage = language;                                                                             // 107
        _languageDeps.changed();                                                                                // 108
      }                                                                                                         // 109
    };                                                                                                          // 110
                                                                                                                // 111
    Helpers.language = function() {                                                                             // 112
      _languageDeps.depend();                                                                                   // 113
      return currentLanguage;                                                                                   // 114
    };                                                                                                          // 115
                                                                                                                // 116
    Helpers.getText = function(text) {                                                                          // 117
      // handleCase will mimic text Case making src same case as text                                           // 118
      function handleCase(text, src) {                                                                          // 119
        // Return lowercase                                                                                     // 120
        if (text == text.toLowerCase())                                                                         // 121
          return src.toLowerCase();                                                                             // 122
        // Return uppercase                                                                                     // 123
        if (text == text.toUpperCase())                                                                         // 124
          return src.toUpperCase();                                                                             // 125
        // Return uppercase first letter, rest lowercase                                                        // 126
        if (text.substr(1) == text.substr(1).toLowerCase() )                                                    // 127
          return src.substr(0, 1).toUpperCase()+src.substr(1).toLowerCase();                                    // 128
        // Return CamelCase                                                                                     // 129
        return src.replace(/( [a-z])/g, function($1){                                                           // 130
          return $1.toUpperCase();                                                                              // 131
        });                                                                                                     // 132
      }                                                                                                         // 133
      var txt = text.toLowerCase();                                                                             // 134
      // TODO: Tidy the return line - kinda messy                                                               // 135
      return handleCase(text, (languageText && languageText[txt])?( (languageText[txt][Helpers.language()])?languageText[txt][Helpers.language()]: languageText[txt].en):'['+text+']' );
    };                                                                                                          // 137
                                                                                                                // 138
    /*                                                                                                          // 139
        Then $uper helper - Credit goes to @belisarius222 aka Ted Blackman for sparking an idear for a solution // 140
    */                                                                                                          // 141
    Helpers.superScope = {};                                                                                    // 142
                                                                                                                // 143
    Helpers.addScope = function(name, obj) {                                                                    // 144
      // TODO: Get rid of underscore                                                                            // 145
      Helpers.superScope[name] = _.bind(function() { return this; }, obj);                                      // 146
    };                                                                                                          // 147
                                                                                                                // 148
    Helpers.removeScope = function(name) {                                                                      // 149
      delete UI._globalHelpers[name];                                                                           // 150
      delete Helpers.superScope[name];                                                                          // 151
    };                                                                                                          // 152
                                                                                                                // 153
    Helpers.addScope('Session', Session);                                                                       // 154
    Helpers.addScope('Meteor', Meteor);                                                                         // 155
                                                                                                                // 156
    UI.registerHelper('$', function() {                                                                         // 157
      return Helpers.superScope;                                                                                // 158
    });                                                                                                         // 159
}                                                                                                               // 160
                                                                                                                // 161
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['raix:handlebar-helpers'] = {
  Helpers: Helpers
};

})();
