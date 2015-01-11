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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package.templating.Template;
var Session = Package.session.Session;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Helpers = Package['raix:handlebar-helpers'].Helpers;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/yogiben:autoform-modals/lib/client/template.modals.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("autoformModals");                                                                          // 2
Template["autoformModals"] = new Template("Template.autoformModals", (function() {                               // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "modal fade",                                                                                       // 6
    id: "afModal"                                                                                                // 7
  }, "\n		", HTML.DIV({                                                                                          // 8
    "class": "modal-dialog"                                                                                      // 9
  }, "\n			", HTML.DIV({                                                                                         // 10
    "class": "modal-content"                                                                                     // 11
  }, "\n				", HTML.DIV({                                                                                        // 12
    "class": "modal-header"                                                                                      // 13
  }, "\n					", HTML.Raw('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'), "\n					", HTML.H4({
    "class": "modal-title"                                                                                       // 15
  }, Blaze.View(function() {                                                                                     // 16
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("cmTitle")));                                        // 17
  })), "\n				"), "\n				", HTML.DIV({                                                                           // 18
    "class": "modal-body"                                                                                        // 19
  }, "\n					", Blaze.If(function() {                                                                            // 20
    return Spacebars.dataMustache(view.lookup("$and"), view.lookup("cmCollection"), view.lookup("cmOperation")); // 21
  }, function() {                                                                                                // 22
    return [ "\n					", HTML.P(Blaze.View(function() {                                                           // 23
      return Spacebars.mustache(view.lookup("cmPrompt"));                                                        // 24
    })), "\n					", Blaze.If(function() {                                                                        // 25
      return Spacebars.dataMustache(view.lookup("$neq"), view.lookup("cmOperation"), "remove");                  // 26
    }, function() {                                                                                              // 27
      return [ "\n					", Blaze._TemplateWith(function() {                                                       // 28
        return {                                                                                                 // 29
          title: Spacebars.call("Update your post"),                                                             // 30
          id: Spacebars.call("cmForm"),                                                                          // 31
          collection: Spacebars.call(view.lookup("cmCollection")),                                               // 32
          doc: Spacebars.call(view.lookup("cmDoc")),                                                             // 33
          type: Spacebars.call(view.lookup("cmOperation")),                                                      // 34
          buttonContent: Spacebars.call(view.lookup("cmButtonContent")),                                         // 35
          fields: Spacebars.call(view.lookup("cmFields")),                                                       // 36
          omitFields: Spacebars.call(view.lookup("cmOmitFields")),                                               // 37
          buttonClasses: Spacebars.call(view.lookup("cmButtonClasses"))                                          // 38
        };                                                                                                       // 39
      }, function() {                                                                                            // 40
        return Spacebars.include(view.lookupTemplate("quickForm"));                                              // 41
      }), "\n					" ];                                                                                           // 42
    }), "\n					" ];                                                                                             // 43
  }), "\n				"), "\n				", Blaze.If(function() {                                                                 // 44
    return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("cmOperation"), "remove");                     // 45
  }, function() {                                                                                                // 46
    return [ "\n				", HTML.DIV({                                                                                // 47
      "class": "modal-footer"                                                                                    // 48
    }, "\n					", HTML.BUTTON({                                                                                  // 49
      "class": function() {                                                                                      // 50
        return Spacebars.mustache(view.lookup("cmButtonClasses"));                                               // 51
      }                                                                                                          // 52
    }, Blaze.View(function() {                                                                                   // 53
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("cmButtonContent")));                              // 54
    })), "\n				"), "\n				" ];                                                                                  // 55
  }), "\n			"), "\n		"), "\n	");                                                                                 // 56
}));                                                                                                             // 57
                                                                                                                 // 58
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/yogiben:autoform-modals/lib/client/modals.coffee.js                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.autoformModals.events({
  'click button:not(.close)': function() {
    var collection, operation, _id;
    collection = Session.get('cmCollection');
    _id = Session.get('cmDoc')._id;
    operation = Session.get('cmOperation');
    if (operation === 'remove') {
      return window[collection].remove(_id, function(e) {
        if (e) {
          return alert('Sorry, this could not be deleted.');
        } else {
          return $('#afModal').modal('hide');
        }
      });
    }
  }
});

Template.autoformModals.helpers({
  cmCollection: function() {
    return Session.get('cmCollection');
  },
  cmOperation: function() {
    return Session.get('cmOperation');
  },
  cmDoc: function() {
    return Session.get('cmDoc');
  },
  cmButtonHtml: function() {
    return Session.get('cmButtonHtml');
  },
  cmFields: function() {
    return Session.get('cmFields');
  },
  cmOmitFields: function() {
    return Session.get('cmOmitFields');
  },
  cmButtonContent: function() {
    return Session.get('cmButtonContent');
  },
  cmTitle: function() {
    return Session.get('cmTitle');
  },
  cmButtonClasses: function() {
    return Session.get('cmButtonClasses');
  },
  cmPrompt: function() {
    return Session.get('cmPrompt');
  }
});

Template.autoformModals.destroyed = function() {
  return $('body').unbind('click');
};

Template.autoformModals.rendered = function() {
  return $('body').on("click", function(e) {
    var buttonClasses, buttonContent, collection, doc, fields, html, omitFields, operation, prompt, title, _id;
    if ($(e.target).attr('href') === '#afModal') {
      collection = $(e.target).attr('collection');
      operation = $(e.target).attr('operation');
      _id = $(e.target).attr('doc');
      html = $(e.target).html();
      if ($(e.target).attr('fields')) {
        fields = $(e.target).attr('fields');
      } else {
        omitFields = null;
      }
      if ($(e.target).attr('omitFields')) {
        omitFields = $(e.target).attr('omitFields');
      } else {
        omitFields = null;
      }
      if ($(e.target).attr('buttonClasses')) {
        buttonClasses = $(e.target).attr('buttonClasses');
      } else if (operation === 'remove') {
        buttonClasses = 'btn btn-danger';
      } else {
        buttonClasses = 'btn btn-primary';
      }
      if ($(e.target).attr('title')) {
        title = $(e.target).attr('title');
      } else {
        title = html;
      }
      if ($(e.target).attr('buttonContent')) {
        buttonContent = $(e.target).attr('buttonContent');
      } else if (operation === 'insert') {
        buttonContent = 'Create';
      } else if (operation === 'update') {
        buttonContent = 'Update';
      } else if (operation === 'remove') {
        buttonContent = 'Delete';
      }
      if ($(e.target).attr('prompt')) {
        prompt = $(e.target).attr('prompt');
      } else if (operation === 'remove') {
        prompt = 'Are you sure?';
      } else {
        prompt = '';
      }
      if (_id) {
        doc = window[collection].findOne({
          _id: _id
        });
      }
      Session.set('cmCollection', collection);
      Session.set('cmOperation', operation);
      Session.set('cmDoc', doc);
      Session.set('cmButtonHtml', html);
      Session.set('cmFields', fields);
      Session.set('cmOmitFields', omitFields);
      Session.set('cmTitle', title);
      Session.set('cmButtonContent', buttonContent);
      Session.set('cmButtonClasses', buttonClasses);
      return Session.set('cmPrompt', prompt);
    }
  });
};

AutoForm.hooks({
  cmForm: {
    onSuccess: function(operation, result, template) {
      return $('#afModal').modal('hide');
    }
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['yogiben:autoform-modals'] = {};

})();
