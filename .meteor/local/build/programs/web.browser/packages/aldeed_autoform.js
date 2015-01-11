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
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var check = Package.check.check;
var Match = Package.check.Match;
var DDP = Package.ddp.DDP;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var moment = Package['mrt:moment'].moment;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var AutoForm, Utility, FormPreserve, res, Hooks, defaultInputValueHandlers, expectsArray, getInputType, FormData, ArrayTracker, defaultFormId, formPreserve, formData, templatesById, formValues, formDeps, fd, arrayTracker, customInputValueHandlers, defaultTemplate, defaultTypeTemplates, deps, getFieldValue, getFormValues, getInputValue, getInputData, getInputTemplateType, updateTrackedFieldValue, updateAllTrackedFieldValues, invalidateFormContext, _validateForm, validateFormDoc, _validateField, validateField, preventQueuedValidation, selectFirstInvalidField, hook;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/autoform-common.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// This is the only file that is run on the server, too                                                                // 1
                                                                                                                       // 2
// Extend the schema options allowed by SimpleSchema                                                                   // 3
SimpleSchema.extendOptions({                                                                                           // 4
  autoform: Match.Optional(Object)                                                                                     // 5
});                                                                                                                    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/bootstrap3/template.bootstrap3.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("quickForm_bootstrap3");                                                                          // 2
Template["quickForm_bootstrap3"] = new Template("Template.quickForm_bootstrap3", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return Spacebars.call(Spacebars.dot(view.lookup("."), "qfAutoFormContext"));                                       // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 8
      return [ "\n    ", Blaze._TemplateWith(function() {                                                              // 9
        return {                                                                                                       // 10
          fields: Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "fields")),                                  // 11
          omitFields: Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "omitFields"))                           // 12
        };                                                                                                             // 13
      }, function() {                                                                                                  // 14
        return Spacebars.include(view.lookupTemplate("afQuickFields"));                                                // 15
      }), "\n    ", Blaze.If(function() {                                                                              // 16
        return Spacebars.call(view.lookup("qfShouldRenderButton"));                                                    // 17
      }, function() {                                                                                                  // 18
        return [ "\n    ", HTML.DIV("\n      ", HTML.BUTTON(HTML.Attrs(function() {                                    // 19
          return Spacebars.attrMustache(view.lookup("submitButtonAtts"));                                              // 20
        }), "\n      ", Spacebars.With(function() {                                                                    // 21
          return Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "buttonContent"));                            // 22
        }, function() {                                                                                                // 23
          return [ "\n      ", Blaze.View(function() {                                                                 // 24
            return Spacebars.mustache(view.lookup("."));                                                               // 25
          }), "\n      " ];                                                                                            // 26
        }, function() {                                                                                                // 27
          return "\n      Submit\n      ";                                                                             // 28
        }), "\n      "), "\n    "), "\n    " ];                                                                        // 29
      }), "\n  " ];                                                                                                    // 30
    });                                                                                                                // 31
  });                                                                                                                  // 32
}));                                                                                                                   // 33
                                                                                                                       // 34
Template.__checkName("afFieldLabel_bootstrap3");                                                                       // 35
Template["afFieldLabel_bootstrap3"] = new Template("Template.afFieldLabel_bootstrap3", (function() {                   // 36
  var view = this;                                                                                                     // 37
  return HTML.LABEL(HTML.Attrs(function() {                                                                            // 38
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 39
  }), Blaze.View(function() {                                                                                          // 40
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 41
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 42
    }));                                                                                                               // 43
  }));                                                                                                                 // 44
}));                                                                                                                   // 45
                                                                                                                       // 46
Template.__checkName("afCheckbox_bootstrap3");                                                                         // 47
Template["afCheckbox_bootstrap3"] = new Template("Template.afCheckbox_bootstrap3", (function() {                       // 48
  var view = this;                                                                                                     // 49
  return HTML.DIV({                                                                                                    // 50
    "class": "checkbox"                                                                                                // 51
  }, "\n    ", HTML.LABEL("\n      ", HTML.INPUT(HTML.Attrs({                                                          // 52
    type: "checkbox",                                                                                                  // 53
    value: function() {                                                                                                // 54
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 55
    }                                                                                                                  // 56
  }, function() {                                                                                                      // 57
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 58
  })), "\n      ", Blaze.View(function() {                                                                             // 59
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 60
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 61
    }));                                                                                                               // 62
  }), "\n    "), "\n  ");                                                                                              // 63
}));                                                                                                                   // 64
                                                                                                                       // 65
Template.__checkName("afCheckboxGroup_bootstrap3");                                                                    // 66
Template["afCheckboxGroup_bootstrap3"] = new Template("Template.afCheckboxGroup_bootstrap3", (function() {             // 67
  var view = this;                                                                                                     // 68
  return Blaze.Each(function() {                                                                                       // 69
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 70
  }, function() {                                                                                                      // 71
    return [ "\n    ", HTML.DIV({                                                                                      // 72
      "class": "checkbox"                                                                                              // 73
    }, "\n      ", HTML.LABEL("\n        ", HTML.INPUT(HTML.Attrs({                                                    // 74
      type: "checkbox",                                                                                                // 75
      value: function() {                                                                                              // 76
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 77
      }                                                                                                                // 78
    }, function() {                                                                                                    // 79
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 80
    })), "\n        ", Blaze.View(function() {                                                                         // 81
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 82
    }), "\n      "), "\n    "), "\n  " ];                                                                              // 83
  });                                                                                                                  // 84
}));                                                                                                                   // 85
                                                                                                                       // 86
Template.__checkName("afRadio_bootstrap3");                                                                            // 87
Template["afRadio_bootstrap3"] = new Template("Template.afRadio_bootstrap3", (function() {                             // 88
  var view = this;                                                                                                     // 89
  return HTML.DIV({                                                                                                    // 90
    "class": "radio"                                                                                                   // 91
  }, "\n    ", HTML.LABEL("\n      ", HTML.INPUT(HTML.Attrs({                                                          // 92
    type: "radio",                                                                                                     // 93
    value: function() {                                                                                                // 94
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 95
    }                                                                                                                  // 96
  }, function() {                                                                                                      // 97
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 98
  })), "\n      ", Blaze.View(function() {                                                                             // 99
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 100
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 101
    }));                                                                                                               // 102
  }), "\n    "), "\n  ");                                                                                              // 103
}));                                                                                                                   // 104
                                                                                                                       // 105
Template.__checkName("afRadioGroup_bootstrap3");                                                                       // 106
Template["afRadioGroup_bootstrap3"] = new Template("Template.afRadioGroup_bootstrap3", (function() {                   // 107
  var view = this;                                                                                                     // 108
  return Blaze.Each(function() {                                                                                       // 109
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 110
  }, function() {                                                                                                      // 111
    return [ "\n    ", HTML.DIV({                                                                                      // 112
      "class": "radio"                                                                                                 // 113
    }, "\n      ", HTML.LABEL("\n        ", HTML.INPUT(HTML.Attrs({                                                    // 114
      type: "radio",                                                                                                   // 115
      value: function() {                                                                                              // 116
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 117
      }                                                                                                                // 118
    }, function() {                                                                                                    // 119
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 120
    })), "\n        ", Blaze.View(function() {                                                                         // 121
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 122
    }), "\n      "), "\n    "), "\n  " ];                                                                              // 123
  });                                                                                                                  // 124
}));                                                                                                                   // 125
                                                                                                                       // 126
Template.__checkName("afContenteditable_bootstrap3");                                                                  // 127
Template["afContenteditable_bootstrap3"] = new Template("Template.afContenteditable_bootstrap3", (function() {         // 128
  var view = this;                                                                                                     // 129
  return Spacebars.include(view.lookupTemplate("afContenteditable_plain"));                                            // 130
}));                                                                                                                   // 131
                                                                                                                       // 132
Template.__checkName("afFieldSelect_bootstrap3");                                                                      // 133
Template["afFieldSelect_bootstrap3"] = new Template("Template.afFieldSelect_bootstrap3", (function() {                 // 134
  var view = this;                                                                                                     // 135
  return HTML.SELECT(HTML.Attrs(function() {                                                                           // 136
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 137
  }), "\n    ", Spacebars.With(function() {                                                                            // 138
    return Spacebars.call(Spacebars.dot(view.lookup("."), "contentBlockContext"));                                     // 139
  }, function() {                                                                                                      // 140
    return [ "\n    ", Spacebars.include(function() {                                                                  // 141
      return Spacebars.call(Spacebars.dot(view.lookup(".."), "contentBlock"));                                         // 142
    }), "\n    " ];                                                                                                    // 143
  }), "\n  ");                                                                                                         // 144
}));                                                                                                                   // 145
                                                                                                                       // 146
Template.__checkName("afSelect_bootstrap3");                                                                           // 147
Template["afSelect_bootstrap3"] = new Template("Template.afSelect_bootstrap3", (function() {                           // 148
  var view = this;                                                                                                     // 149
  return HTML.SELECT(HTML.Attrs(function() {                                                                           // 150
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 151
  }), "\n    ", Blaze.Each(function() {                                                                                // 152
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 153
  }, function() {                                                                                                      // 154
    return [ "\n      ", HTML.OPTION(HTML.Attrs(function() {                                                           // 155
      return Spacebars.attrMustache(view.lookup("optionAtts"));                                                        // 156
    }), Blaze.View(function() {                                                                                        // 157
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 158
    })), "\n    " ];                                                                                                   // 159
  }), "\n  ");                                                                                                         // 160
}));                                                                                                                   // 161
                                                                                                                       // 162
Template.__checkName("afTextarea_bootstrap3");                                                                         // 163
Template["afTextarea_bootstrap3"] = new Template("Template.afTextarea_bootstrap3", (function() {                       // 164
  var view = this;                                                                                                     // 165
  return HTML.TEXTAREA(HTML.Attrs(function() {                                                                         // 166
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 167
  }, {                                                                                                                 // 168
    value: function() {                                                                                                // 169
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 170
    }                                                                                                                  // 171
  }));                                                                                                                 // 172
}));                                                                                                                   // 173
                                                                                                                       // 174
Template.__checkName("afInput_bootstrap3");                                                                            // 175
Template["afInput_bootstrap3"] = new Template("Template.afInput_bootstrap3", (function() {                             // 176
  var view = this;                                                                                                     // 177
  return HTML.INPUT(HTML.Attrs({                                                                                       // 178
    type: function() {                                                                                                 // 179
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "type"));                                              // 180
    },                                                                                                                 // 181
    value: function() {                                                                                                // 182
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 183
    }                                                                                                                  // 184
  }, function() {                                                                                                      // 185
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 186
  }));                                                                                                                 // 187
}));                                                                                                                   // 188
                                                                                                                       // 189
Template.__checkName("afFormGroup_bootstrap3");                                                                        // 190
Template["afFormGroup_bootstrap3"] = new Template("Template.afFormGroup_bootstrap3", (function() {                     // 191
  var view = this;                                                                                                     // 192
  return HTML.DIV({                                                                                                    // 193
    "class": function() {                                                                                              // 194
      return [ "form-group ", Blaze.If(function() {                                                                    // 195
        return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                  // 196
          name: Spacebars.dot(view.lookup("."), "atts", "name")                                                        // 197
        }));                                                                                                           // 198
      }, function() {                                                                                                  // 199
        return "has-error";                                                                                            // 200
      }) ];                                                                                                            // 201
    }                                                                                                                  // 202
  }, "\n    ", Blaze.Unless(function() {                                                                               // 203
    return Spacebars.call(view.lookup("skipLabel"));                                                                   // 204
  }, function() {                                                                                                      // 205
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 206
      return Spacebars.call(Spacebars.dot(view.lookup("."), "afFieldLabelAtts"));                                      // 207
    }, function() {                                                                                                    // 208
      return Spacebars.include(view.lookupTemplate("afFieldLabel"));                                                   // 209
    }), "\n    " ];                                                                                                    // 210
  }), "\n    ", Blaze._TemplateWith(function() {                                                                       // 211
    return Spacebars.call(Spacebars.dot(view.lookup("."), "afFieldInputAtts"));                                        // 212
  }, function() {                                                                                                      // 213
    return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                     // 214
  }), "\n    ", HTML.SPAN({                                                                                            // 215
    "class": "help-block"                                                                                              // 216
  }, Blaze.View(function() {                                                                                           // 217
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                          // 218
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 219
    })));                                                                                                              // 220
  })), "\n  ");                                                                                                        // 221
}));                                                                                                                   // 222
                                                                                                                       // 223
Template.__checkName("afObjectField_bootstrap3");                                                                      // 224
Template["afObjectField_bootstrap3"] = new Template("Template.afObjectField_bootstrap3", (function() {                 // 225
  var view = this;                                                                                                     // 226
  return HTML.DIV({                                                                                                    // 227
    "class": "panel panel-default"                                                                                     // 228
  }, "\n    ", HTML.DIV({                                                                                              // 229
    "class": "panel-heading"                                                                                           // 230
  }, "\n      ", HTML.H3({                                                                                             // 231
    "class": "panel-title"                                                                                             // 232
  }, Blaze.View(function() {                                                                                           // 233
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 234
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 235
    }));                                                                                                               // 236
  })), "\n    "), "\n    ", HTML.DIV({                                                                                 // 237
    "class": "panel-body"                                                                                              // 238
  }, "\n      ", Blaze.If(function() {                                                                                 // 239
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 240
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 241
    }));                                                                                                               // 242
  }, function() {                                                                                                      // 243
    return [ "\n      ", HTML.SPAN({                                                                                   // 244
      "class": "help-block"                                                                                            // 245
    }, Blaze.View(function() {                                                                                         // 246
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 247
        name: Spacebars.dot(view.lookup("."), "atts", "name")                                                          // 248
      })));                                                                                                            // 249
    })), "\n      " ];                                                                                                 // 250
  }), "\n      ", Blaze._TemplateWith(function() {                                                                     // 251
    return {                                                                                                           // 252
      name: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "name")),                                           // 253
      fields: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "fields")),                                       // 254
      omitFields: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "omitFields"))                                // 255
    };                                                                                                                 // 256
  }, function() {                                                                                                      // 257
    return Spacebars.include(view.lookupTemplate("afQuickFields"));                                                    // 258
  }), "\n    "), "\n  ");                                                                                              // 259
}));                                                                                                                   // 260
                                                                                                                       // 261
Template.__checkName("afArrayField_bootstrap3");                                                                       // 262
Template["afArrayField_bootstrap3"] = new Template("Template.afArrayField_bootstrap3", (function() {                   // 263
  var view = this;                                                                                                     // 264
  return HTML.DIV({                                                                                                    // 265
    "class": "panel panel-default"                                                                                     // 266
  }, "\n    ", HTML.DIV({                                                                                              // 267
    "class": "panel-heading"                                                                                           // 268
  }, Blaze.View(function() {                                                                                           // 269
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 270
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 271
    }));                                                                                                               // 272
  })), "\n    ", Blaze.If(function() {                                                                                 // 273
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 274
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 275
    }));                                                                                                               // 276
  }, function() {                                                                                                      // 277
    return [ "\n    ", HTML.DIV({                                                                                      // 278
      "class": "panel-body has-error"                                                                                  // 279
    }, "\n      ", HTML.SPAN({                                                                                         // 280
      "class": "help-block"                                                                                            // 281
    }, Blaze.View(function() {                                                                                         // 282
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 283
        name: Spacebars.dot(view.lookup("."), "atts", "name")                                                          // 284
      })));                                                                                                            // 285
    })), "\n    "), "\n    " ];                                                                                        // 286
  }), "\n    ", HTML.UL({                                                                                              // 287
    "class": "list-group"                                                                                              // 288
  }, "\n      ", Blaze._TemplateWith(function() {                                                                      // 289
    return {                                                                                                           // 290
      name: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "name")),                                           // 291
      minCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "minCount")),                                   // 292
      maxCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "maxCount"))                                    // 293
    };                                                                                                                 // 294
  }, function() {                                                                                                      // 295
    return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                      // 296
      return [ "\n      ", HTML.LI({                                                                                   // 297
        "class": "list-group-item autoform-array-item"                                                                 // 298
      }, "\n        ", HTML.DIV({                                                                                      // 299
        "class": "media"                                                                                               // 300
      }, "\n          ", Blaze.If(function() {                                                                         // 301
        return Spacebars.dataMustache(view.lookup("afArrayFieldHasMoreThanMinimum"), Spacebars.kw({                    // 302
          name: Spacebars.dot(view.lookup(".."), "atts", "name"),                                                      // 303
          minCount: Spacebars.dot(view.lookup(".."), "atts", "minCount"),                                              // 304
          maxCount: Spacebars.dot(view.lookup(".."), "atts", "maxCount")                                               // 305
        }));                                                                                                           // 306
      }, function() {                                                                                                  // 307
        return [ "\n          ", HTML.BUTTON({                                                                         // 308
          "class": "btn btn-primary autoform-remove-item pull-left"                                                    // 309
        }, HTML.SPAN({                                                                                                 // 310
          "class": "glyphicon glyphicon-minus"                                                                         // 311
        })), "\n          " ];                                                                                         // 312
      }), "\n          ", HTML.DIV({                                                                                   // 313
        "class": "media-body"                                                                                          // 314
      }, "\n            ", Blaze._TemplateWith(function() {                                                            // 315
        return {                                                                                                       // 316
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "name")),                                               // 317
          label: Spacebars.call(false),                                                                                // 318
          options: Spacebars.call("auto"),                                                                             // 319
          fields: Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "fields")),                                  // 320
          omitFields: Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "omitFields"))                           // 321
        };                                                                                                             // 322
      }, function() {                                                                                                  // 323
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 324
      }), "\n          "), "\n        "), "\n      "), "\n      " ];                                                   // 325
    });                                                                                                                // 326
  }), "\n      ", Blaze.If(function() {                                                                                // 327
    return Spacebars.dataMustache(view.lookup("afArrayFieldHasLessThanMaximum"), Spacebars.kw({                        // 328
      name: Spacebars.dot(view.lookup("."), "atts", "name"),                                                           // 329
      minCount: Spacebars.dot(view.lookup("."), "atts", "minCount"),                                                   // 330
      maxCount: Spacebars.dot(view.lookup("."), "atts", "maxCount")                                                    // 331
    }));                                                                                                               // 332
  }, function() {                                                                                                      // 333
    return [ "\n      ", HTML.LI({                                                                                     // 334
      "class": "list-group-item"                                                                                       // 335
    }, "\n        ", HTML.BUTTON({                                                                                     // 336
      "class": "btn btn-primary autoform-add-item",                                                                    // 337
      "data-autoform-field": function() {                                                                              // 338
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "name"));                                    // 339
      },                                                                                                               // 340
      "data-autoform-mincount": function() {                                                                           // 341
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "minCount"));                                // 342
      },                                                                                                               // 343
      "data-autoform-maxcount": function() {                                                                           // 344
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "maxCount"));                                // 345
      }                                                                                                                // 346
    }, HTML.SPAN({                                                                                                     // 347
      "class": "glyphicon glyphicon-plus"                                                                              // 348
    })), "\n      "), "\n      " ];                                                                                    // 349
  }), "\n    "), "\n  ");                                                                                              // 350
}));                                                                                                                   // 351
                                                                                                                       // 352
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/bootstrap3/bootstrap3.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Template helpers for "bootstrap3" template                                                                          // 2
 */                                                                                                                    // 3
                                                                                                                       // 4
Template['afFieldLabel_bootstrap3'].helpers({                                                                          // 5
  atts: function bsFieldLabelAtts() {                                                                                  // 6
    var atts = (this || {}).atts;                                                                                      // 7
    var labelAtts = _.omit(atts, 'name', 'autoform', 'template');                                                      // 8
    // Add bootstrap class if necessary                                                                                // 9
    if (typeof labelAtts['class'] === "string") {                                                                      // 10
      labelAtts['class'] += " control-label"; //might be added twice but that shouldn't hurt anything                  // 11
    } else {                                                                                                           // 12
      labelAtts['class'] = "control-label";                                                                            // 13
    }                                                                                                                  // 14
    // Add "for" attribute if missing                                                                                  // 15
    labelAtts['for'] = labelAtts['for'] || atts['name'];                                                               // 16
    return labelAtts;                                                                                                  // 17
  }                                                                                                                    // 18
});                                                                                                                    // 19
                                                                                                                       // 20
Template['quickForm_bootstrap3'].helpers({                                                                             // 21
  submitButtonAtts: function bsQuickFormSubmitButtonAtts() {                                                           // 22
    var qfAtts = this.atts;                                                                                            // 23
    var atts = {type: "submit"};                                                                                       // 24
    if (typeof qfAtts.buttonClasses === "string") {                                                                    // 25
      atts['class'] = qfAtts.buttonClasses;                                                                            // 26
    } else {                                                                                                           // 27
      atts['class'] = 'btn btn-primary';                                                                               // 28
    }                                                                                                                  // 29
    return atts;                                                                                                       // 30
  }                                                                                                                    // 31
});                                                                                                                    // 32
                                                                                                                       // 33
Template['afFormGroup_bootstrap3'].helpers({                                                                           // 34
  skipLabel: function bsFormGroupSkipLabel() {                                                                         // 35
    var self = this;                                                                                                   // 36
                                                                                                                       // 37
    var type = AutoForm.getInputType(self.afFieldInputAtts);                                                           // 38
    return (self.skipLabel || type === "boolean-checkbox");                                                            // 39
  }                                                                                                                    // 40
});                                                                                                                    // 41
                                                                                                                       // 42
function addFormControlAtts() {                                                                                        // 43
  var atts = _.clone(this.atts);                                                                                       // 44
  if (typeof atts["class"] === "string") {                                                                             // 45
    atts["class"] += " form-control";                                                                                  // 46
  } else {                                                                                                             // 47
    atts["class"] = "form-control";                                                                                    // 48
  }                                                                                                                    // 49
  return atts;                                                                                                         // 50
}                                                                                                                      // 51
                                                                                                                       // 52
Template["afFieldSelect_bootstrap3"].helpers({                                                                         // 53
  atts: addFormControlAtts                                                                                             // 54
});                                                                                                                    // 55
                                                                                                                       // 56
Template["afSelect_bootstrap3"].helpers({                                                                              // 57
  atts: addFormControlAtts                                                                                             // 58
});                                                                                                                    // 59
                                                                                                                       // 60
Template["afTextarea_bootstrap3"].helpers({                                                                            // 61
  atts: addFormControlAtts                                                                                             // 62
});                                                                                                                    // 63
                                                                                                                       // 64
Template["afInput_bootstrap3"].helpers({                                                                               // 65
  atts: addFormControlAtts                                                                                             // 66
});                                                                                                                    // 67
                                                                                                                       // 68
function selectedAttsAdjust() {                                                                                        // 69
  var atts = _.clone(this.atts);                                                                                       // 70
  if (this.selected) {                                                                                                 // 71
    atts.checked = "";                                                                                                 // 72
  }                                                                                                                    // 73
  return atts;                                                                                                         // 74
}                                                                                                                      // 75
                                                                                                                       // 76
Template["afCheckbox_bootstrap3"].helpers({                                                                            // 77
  atts: selectedAttsAdjust                                                                                             // 78
});                                                                                                                    // 79
                                                                                                                       // 80
Template["afRadio_bootstrap3"].helpers({                                                                               // 81
  atts: selectedAttsAdjust                                                                                             // 82
});                                                                                                                    // 83
                                                                                                                       // 84
Template["afCheckboxGroup_bootstrap3"].helpers({                                                                       // 85
  atts: selectedAttsAdjust                                                                                             // 86
});                                                                                                                    // 87
                                                                                                                       // 88
Template["afRadioGroup_bootstrap3"].helpers({                                                                          // 89
  atts: selectedAttsAdjust                                                                                             // 90
});                                                                                                                    // 91
                                                                                                                       // 92
Template["afSelect_bootstrap3"].helpers({                                                                              // 93
  optionAtts: function afSelectOptionAtts() {                                                                          // 94
    var item = this;                                                                                                   // 95
    var atts = {                                                                                                       // 96
      value: item.value                                                                                                // 97
    };                                                                                                                 // 98
    if (item.selected) {                                                                                               // 99
      atts.selected = "";                                                                                              // 100
    }                                                                                                                  // 101
    return atts;                                                                                                       // 102
  }                                                                                                                    // 103
});                                                                                                                    // 104
                                                                                                                       // 105
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/bootstrap3-span/template.bootstrap3-span.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afFieldLabel_bootstrap3-span");                                                                  // 2
Template["afFieldLabel_bootstrap3-span"] = new Template("Template.afFieldLabel_bootstrap3-span", (function() {         // 3
  var view = this;                                                                                                     // 4
  return HTML.SPAN(HTML.Attrs(function() {                                                                             // 5
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 6
  }), Blaze.View(function() {                                                                                          // 7
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 8
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 9
    }));                                                                                                               // 10
  }));                                                                                                                 // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/bootstrap3-span/bootstrap3-span.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Template helpers for "bootstrap3-span" template                                                                     // 2
 */                                                                                                                    // 3
                                                                                                                       // 4
Template['afFieldLabel_bootstrap3-span'].helpers({                                                                     // 5
  atts: function bssAfFieldLabelAtts() {                                                                               // 6
    var atts = (_.clone(this || {})).atts;                                                                             // 7
    var spanAtts = _.omit(atts, 'name', 'autoform', 'template');                                                       // 8
    // Add bootstrap class if necessary; TODO use custom templates                                                     // 9
    if (typeof spanAtts['class'] === "string") {                                                                       // 10
      spanAtts['class'] += " control-label"; //might be added twice but that shouldn't hurt anything                   // 11
    } else {                                                                                                           // 12
      spanAtts['class'] = "control-label";                                                                             // 13
    }                                                                                                                  // 14
    return spanAtts;                                                                                                   // 15
  }                                                                                                                    // 16
});                                                                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/bootstrap3-horizontal/template.bootstrap3-horizontal.js                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("quickForm_bootstrap3-horizontal");                                                               // 2
Template["quickForm_bootstrap3-horizontal"] = new Template("Template.quickForm_bootstrap3-horizontal", (function() {   // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return Spacebars.call(view.lookup("qfAutoFormContext"));                                                           // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 8
      return [ "\n    ", Blaze._TemplateWith(function() {                                                              // 9
        return {                                                                                                       // 10
          fields: Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "fields")),                                  // 11
          omitFields: Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "omitFields")),                          // 12
          template: Spacebars.call("bootstrap3-horizontal"),                                                           // 13
          "input-col-class": Spacebars.call(view.lookup("inputClass")),                                                // 14
          "label-class": Spacebars.call(view.lookup("labelClass"))                                                     // 15
        };                                                                                                             // 16
      }, function() {                                                                                                  // 17
        return Spacebars.include(view.lookupTemplate("afQuickFields"));                                                // 18
      }), "\n    ", Blaze.If(function() {                                                                              // 19
        return Spacebars.call(view.lookup("qfShouldRenderButton"));                                                    // 20
      }, function() {                                                                                                  // 21
        return [ "\n    ", HTML.DIV({                                                                                  // 22
          "class": "form-group"                                                                                        // 23
        }, "\n      ", HTML.DIV({                                                                                      // 24
          "class": function() {                                                                                        // 25
            return Spacebars.mustache(view.lookup("labelClass"));                                                      // 26
          }                                                                                                            // 27
        }), "\n      ", HTML.DIV({                                                                                     // 28
          "class": function() {                                                                                        // 29
            return Spacebars.mustache(view.lookup("inputClass"));                                                      // 30
          }                                                                                                            // 31
        }, "\n        ", HTML.BUTTON(HTML.Attrs(function() {                                                           // 32
          return Spacebars.attrMustache(view.lookup("submitButtonAtts"));                                              // 33
        }), "\n        ", Spacebars.With(function() {                                                                  // 34
          return Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "buttonContent"));                            // 35
        }, function() {                                                                                                // 36
          return [ "\n        ", Blaze.View(function() {                                                               // 37
            return Spacebars.mustache(view.lookup("."));                                                               // 38
          }), "\n        " ];                                                                                          // 39
        }, function() {                                                                                                // 40
          return "\n        Submit\n        ";                                                                         // 41
        }), "\n        "), "\n      "), "\n    "), "\n    " ];                                                         // 42
      }), "\n  " ];                                                                                                    // 43
    });                                                                                                                // 44
  });                                                                                                                  // 45
}));                                                                                                                   // 46
                                                                                                                       // 47
Template.__checkName("afFormGroup_bootstrap3-horizontal");                                                             // 48
Template["afFormGroup_bootstrap3-horizontal"] = new Template("Template.afFormGroup_bootstrap3-horizontal", (function() {
  var view = this;                                                                                                     // 50
  return HTML.DIV({                                                                                                    // 51
    "class": function() {                                                                                              // 52
      return [ "form-group ", Blaze.If(function() {                                                                    // 53
        return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                  // 54
          name: Spacebars.dot(view.lookup("."), "atts", "name")                                                        // 55
        }));                                                                                                           // 56
      }, function() {                                                                                                  // 57
        return "has-error";                                                                                            // 58
      }) ];                                                                                                            // 59
    }                                                                                                                  // 60
  }, "\n    ", Blaze.If(function() {                                                                                   // 61
    return Spacebars.call(view.lookup("skipLabel"));                                                                   // 62
  }, function() {                                                                                                      // 63
    return [ "\n    \n    ", HTML.LABEL(HTML.Attrs(function() {                                                        // 64
      return Spacebars.attrMustache(view.lookup("afEmptyFieldLabelAtts"));                                             // 65
    })), "\n    " ];                                                                                                   // 66
  }, function() {                                                                                                      // 67
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 68
      return Spacebars.call(view.lookup("afFieldLabelAtts"));                                                          // 69
    }, function() {                                                                                                    // 70
      return Spacebars.include(view.lookupTemplate("afFieldLabel"));                                                   // 71
    }), "\n    " ];                                                                                                    // 72
  }), "\n    ", HTML.DIV({                                                                                             // 73
    "class": function() {                                                                                              // 74
      return Spacebars.mustache(view.lookup("rightColumnClass"));                                                      // 75
    }                                                                                                                  // 76
  }, "\n      ", Blaze._TemplateWith(function() {                                                                      // 77
    return Spacebars.call(view.lookup("afFieldInputAtts"));                                                            // 78
  }, function() {                                                                                                      // 79
    return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                     // 80
  }), "\n      ", HTML.SPAN({                                                                                          // 81
    "class": "help-block"                                                                                              // 82
  }, Blaze.View(function() {                                                                                           // 83
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                          // 84
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 85
    })));                                                                                                              // 86
  })), "\n    "), "\n  ");                                                                                             // 87
}));                                                                                                                   // 88
                                                                                                                       // 89
Template.__checkName("afObjectField_bootstrap3-horizontal");                                                           // 90
Template["afObjectField_bootstrap3-horizontal"] = new Template("Template.afObjectField_bootstrap3-horizontal", (function() {
  var view = this;                                                                                                     // 92
  return HTML.DIV({                                                                                                    // 93
    "class": function() {                                                                                              // 94
      return [ "form-group ", Blaze.If(function() {                                                                    // 95
        return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                  // 96
          name: Spacebars.dot(view.lookup("."), "atts", "name")                                                        // 97
        }));                                                                                                           // 98
      }, function() {                                                                                                  // 99
        return "has-error";                                                                                            // 100
      }) ];                                                                                                            // 101
    }                                                                                                                  // 102
  }, "\n    ", Blaze._TemplateWith(function() {                                                                        // 103
    return Spacebars.call(view.lookup("afFieldLabelAtts"));                                                            // 104
  }, function() {                                                                                                      // 105
    return Spacebars.include(view.lookupTemplate("afFieldLabel"));                                                     // 106
  }), "\n    ", HTML.DIV({                                                                                             // 107
    "class": function() {                                                                                              // 108
      return Spacebars.mustache(view.lookup("rightColumnClass"));                                                      // 109
    }                                                                                                                  // 110
  }, "\n      ", HTML.DIV({                                                                                            // 111
    "class": "panel panel-default autoform-padding-fix"                                                                // 112
  }, "\n        ", HTML.DIV({                                                                                          // 113
    "class": "panel-body"                                                                                              // 114
  }, "\n        ", Blaze._TemplateWith(function() {                                                                    // 115
    return {                                                                                                           // 116
      name: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "name")),                                           // 117
      fields: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "fields")),                                       // 118
      omitFields: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "omitFields")),                               // 119
      template: Spacebars.call("bootstrap3")                                                                           // 120
    };                                                                                                                 // 121
  }, function() {                                                                                                      // 122
    return Spacebars.include(view.lookupTemplate("afQuickFields"));                                                    // 123
  }), "\n        "), "\n      "), "\n    "), "\n  ");                                                                  // 124
}));                                                                                                                   // 125
                                                                                                                       // 126
Template.__checkName("afArrayField_bootstrap3-horizontal");                                                            // 127
Template["afArrayField_bootstrap3-horizontal"] = new Template("Template.afArrayField_bootstrap3-horizontal", (function() {
  var view = this;                                                                                                     // 129
  return HTML.DIV({                                                                                                    // 130
    "class": function() {                                                                                              // 131
      return [ "form-group ", Blaze.If(function() {                                                                    // 132
        return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                  // 133
          name: Spacebars.dot(view.lookup("."), "atts", "name")                                                        // 134
        }));                                                                                                           // 135
      }, function() {                                                                                                  // 136
        return "has-error";                                                                                            // 137
      }) ];                                                                                                            // 138
    }                                                                                                                  // 139
  }, "\n    ", Blaze._TemplateWith(function() {                                                                        // 140
    return Spacebars.call(view.lookup("afFieldLabelAtts"));                                                            // 141
  }, function() {                                                                                                      // 142
    return Spacebars.include(view.lookupTemplate("afFieldLabel"));                                                     // 143
  }), "\n    ", HTML.DIV({                                                                                             // 144
    "class": function() {                                                                                              // 145
      return Spacebars.mustache(view.lookup("rightColumnClass"));                                                      // 146
    }                                                                                                                  // 147
  }, "\n      ", HTML.DIV({                                                                                            // 148
    "class": "panel panel-default autoform-padding-fix"                                                                // 149
  }, "\n        ", Blaze.If(function() {                                                                               // 150
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 151
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 152
    }));                                                                                                               // 153
  }, function() {                                                                                                      // 154
    return [ "\n        ", HTML.DIV({                                                                                  // 155
      "class": "panel-body has-error"                                                                                  // 156
    }, "\n          ", HTML.SPAN({                                                                                     // 157
      "class": "help-block"                                                                                            // 158
    }, Blaze.View(function() {                                                                                         // 159
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 160
        name: Spacebars.dot(view.lookup("."), "atts", "name")                                                          // 161
      })));                                                                                                            // 162
    })), "\n        "), "\n        " ];                                                                                // 163
  }), "\n        ", HTML.UL({                                                                                          // 164
    "class": "list-group"                                                                                              // 165
  }, "\n          ", Blaze._TemplateWith(function() {                                                                  // 166
    return {                                                                                                           // 167
      name: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "name")),                                           // 168
      minCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "minCount")),                                   // 169
      maxCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "maxCount"))                                    // 170
    };                                                                                                                 // 171
  }, function() {                                                                                                      // 172
    return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                      // 173
      return [ "\n          ", HTML.LI({                                                                               // 174
        "class": "list-group-item autoform-array-item"                                                                 // 175
      }, "\n            ", HTML.DIV({                                                                                  // 176
        "class": "media"                                                                                               // 177
      }, "\n              ", Blaze.If(function() {                                                                     // 178
        return Spacebars.dataMustache(view.lookup("afArrayFieldHasMoreThanMinimum"), Spacebars.kw({                    // 179
          name: Spacebars.dot(view.lookup(".."), "atts", "name"),                                                      // 180
          minCount: Spacebars.dot(view.lookup(".."), "atts", "minCount"),                                              // 181
          maxCount: Spacebars.dot(view.lookup(".."), "atts", "maxCount")                                               // 182
        }));                                                                                                           // 183
      }, function() {                                                                                                  // 184
        return [ "\n              ", HTML.BUTTON({                                                                     // 185
          "class": "btn btn-primary autoform-remove-item pull-left"                                                    // 186
        }, HTML.SPAN({                                                                                                 // 187
          "class": "glyphicon glyphicon-minus"                                                                         // 188
        })), "\n              " ];                                                                                     // 189
      }), "\n              ", HTML.DIV({                                                                               // 190
        "class": "media-body"                                                                                          // 191
      }, "\n                ", Blaze._TemplateWith(function() {                                                        // 192
        return {                                                                                                       // 193
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "name")),                                               // 194
          label: Spacebars.call(false)                                                                                 // 195
        };                                                                                                             // 196
      }, function() {                                                                                                  // 197
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 198
      }), "\n              "), "\n            "), "\n          "), "\n          " ];                                   // 199
    });                                                                                                                // 200
  }), "\n          ", Blaze.If(function() {                                                                            // 201
    return Spacebars.dataMustache(view.lookup("afArrayFieldHasLessThanMaximum"), Spacebars.kw({                        // 202
      name: Spacebars.dot(view.lookup("."), "atts", "name"),                                                           // 203
      minCount: Spacebars.dot(view.lookup("."), "atts", "minCount"),                                                   // 204
      maxCount: Spacebars.dot(view.lookup("."), "atts", "maxCount")                                                    // 205
    }));                                                                                                               // 206
  }, function() {                                                                                                      // 207
    return [ "\n          ", HTML.LI({                                                                                 // 208
      "class": "list-group-item"                                                                                       // 209
    }, "\n            ", HTML.BUTTON({                                                                                 // 210
      "class": "btn btn-primary autoform-add-item",                                                                    // 211
      "data-autoform-field": function() {                                                                              // 212
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "name"));                                    // 213
      },                                                                                                               // 214
      "data-autoform-mincount": function() {                                                                           // 215
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "minCount"));                                // 216
      },                                                                                                               // 217
      "data-autoform-maxcount": function() {                                                                           // 218
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "maxCount"));                                // 219
      }                                                                                                                // 220
    }, HTML.SPAN({                                                                                                     // 221
      "class": "glyphicon glyphicon-plus"                                                                              // 222
    })), "\n          "), "\n          " ];                                                                            // 223
  }), "\n        "), "\n      "), "\n    "), "\n  ");                                                                  // 224
}));                                                                                                                   // 225
                                                                                                                       // 226
Template.__checkName("afCheckbox_bootstrap3-horizontal");                                                              // 227
Template["afCheckbox_bootstrap3-horizontal"] = new Template("Template.afCheckbox_bootstrap3-horizontal", (function() { // 228
  var view = this;                                                                                                     // 229
  return Blaze.If(function() {                                                                                         // 230
    return Spacebars.call(view.lookup("useLeftLabel"));                                                                // 231
  }, function() {                                                                                                      // 232
    return [ "\n  \n  ", HTML.DIV({                                                                                    // 233
      "class": "checkbox"                                                                                              // 234
    }, "\n    ", HTML.INPUT(HTML.Attrs({                                                                               // 235
      type: "checkbox",                                                                                                // 236
      value: function() {                                                                                              // 237
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 238
      }                                                                                                                // 239
    }, function() {                                                                                                    // 240
      return Spacebars.attrMustache(view.lookup("attsPlusSpecialClass"));                                              // 241
    })), "\n  "), "\n  " ];                                                                                            // 242
  }, function() {                                                                                                      // 243
    return [ "\n  ", HTML.DIV({                                                                                        // 244
      "class": "checkbox"                                                                                              // 245
    }, "\n    ", HTML.LABEL("\n      ", HTML.INPUT(HTML.Attrs({                                                        // 246
      type: "checkbox",                                                                                                // 247
      value: function() {                                                                                              // 248
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 249
      }                                                                                                                // 250
    }, function() {                                                                                                    // 251
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 252
    })), "\n      ", Blaze.View(function() {                                                                           // 253
      return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                        // 254
        name: Spacebars.dot(view.lookup("."), "name")                                                                  // 255
      }));                                                                                                             // 256
    }), "\n    "), "\n  "), "\n  " ];                                                                                  // 257
  });                                                                                                                  // 258
}));                                                                                                                   // 259
                                                                                                                       // 260
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/bootstrap3-horizontal/bootstrap3-horizontal.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function findAtts() {                                                                                                  // 1
  var c, n = 0;                                                                                                        // 2
  do {                                                                                                                 // 3
    c = UI._parentData(n++);                                                                                           // 4
  } while (c && !c.atts);                                                                                              // 5
  return c && c.atts;                                                                                                  // 6
}                                                                                                                      // 7
                                                                                                                       // 8
Template['quickForm_bootstrap3-horizontal'].helpers({                                                                  // 9
  inputClass: function inputClassHelper() {                                                                            // 10
    var atts = findAtts();                                                                                             // 11
    if (atts) {                                                                                                        // 12
      return atts["input-col-class"];                                                                                  // 13
    }                                                                                                                  // 14
  },                                                                                                                   // 15
  labelClass: function labelClassHelper() {                                                                            // 16
    var atts = findAtts();                                                                                             // 17
    if (atts) {                                                                                                        // 18
      return atts["label-class"];                                                                                      // 19
    }                                                                                                                  // 20
  },                                                                                                                   // 21
  submitButtonAtts: function bsQuickFormSubmitButtonAtts() {                                                           // 22
    var qfAtts = this.atts;                                                                                            // 23
    var atts = {type: "submit"};                                                                                       // 24
    if (typeof qfAtts.buttonClasses === "string") {                                                                    // 25
      atts['class'] = qfAtts.buttonClasses;                                                                            // 26
    } else {                                                                                                           // 27
      atts['class'] = 'btn btn-primary';                                                                               // 28
    }                                                                                                                  // 29
    return atts;                                                                                                       // 30
  },                                                                                                                   // 31
  qfAutoFormContext: function () {                                                                                     // 32
    var ctx = _.clone(this.qfAutoFormContext || {});                                                                   // 33
    if (typeof ctx["class"] === "string") {                                                                            // 34
      ctx["class"] += " form-horizontal";                                                                              // 35
    } else {                                                                                                           // 36
      ctx["class"] = "form-horizontal";                                                                                // 37
    }                                                                                                                  // 38
    if (ctx["input-col-class"])                                                                                        // 39
      delete ctx["input-col-class"];                                                                                   // 40
    if (ctx["label-class"])                                                                                            // 41
      delete ctx["label-class"];                                                                                       // 42
    return ctx;                                                                                                        // 43
  }                                                                                                                    // 44
});                                                                                                                    // 45
                                                                                                                       // 46
Template["afFormGroup_bootstrap3-horizontal"].helpers({                                                                // 47
  afFieldInputAtts: function () {                                                                                      // 48
    var atts = _.clone(this.afFieldInputAtts || {});                                                                   // 49
    if ('input-col-class' in atts) {                                                                                   // 50
      delete atts['input-col-class'];                                                                                  // 51
    }                                                                                                                  // 52
    // We have a special template for check boxes, but otherwise we                                                    // 53
    // want to use the same as those defined for bootstrap3 template.                                                  // 54
    if (AutoForm.getInputType(this.afFieldInputAtts) === "boolean-checkbox") {                                         // 55
      atts.template = "bootstrap3-horizontal";                                                                         // 56
    } else {                                                                                                           // 57
      atts.template = "bootstrap3";                                                                                    // 58
    }                                                                                                                  // 59
    return atts;                                                                                                       // 60
  },                                                                                                                   // 61
  afFieldLabelAtts: function () {                                                                                      // 62
    var atts = _.clone(this.afFieldLabelAtts || {});                                                                   // 63
    atts.template = "bootstrap3";                                                                                      // 64
    return atts;                                                                                                       // 65
  },                                                                                                                   // 66
  afEmptyFieldLabelAtts: function () {                                                                                 // 67
    var atts = _.clone(this.afFieldLabelAtts || {});                                                                   // 68
    var labelAtts = _.omit(atts, 'name', 'autoform', 'template');                                                      // 69
    // Add bootstrap class if necessary                                                                                // 70
    if (typeof labelAtts['class'] === "string") {                                                                      // 71
      labelAtts['class'] += " control-label"; //might be added twice but that shouldn't hurt anything                  // 72
    } else {                                                                                                           // 73
      labelAtts['class'] = "control-label";                                                                            // 74
    }                                                                                                                  // 75
    return labelAtts;                                                                                                  // 76
  },                                                                                                                   // 77
  rightColumnClass: function () {                                                                                      // 78
    var atts = this.afFieldInputAtts || {};                                                                            // 79
    return atts['input-col-class'] || "";                                                                              // 80
  },                                                                                                                   // 81
  skipLabel: function bshFormGroupSkipLabel() {                                                                        // 82
    var self = this;                                                                                                   // 83
                                                                                                                       // 84
    var type = AutoForm.getInputType(self.afFieldInputAtts);                                                           // 85
    return (self.skipLabel || (type === "boolean-checkbox" && !self.afFieldInputAtts.leftLabel));                      // 86
  }                                                                                                                    // 87
});                                                                                                                    // 88
                                                                                                                       // 89
Template["afObjectField_bootstrap3-horizontal"].helpers({                                                              // 90
  rightColumnClass: function () {                                                                                      // 91
    var atts = this.atts || {};                                                                                        // 92
    return atts['input-col-class'] || "";                                                                              // 93
  },                                                                                                                   // 94
  afFieldLabelAtts: function () {                                                                                      // 95
    var atts = this.atts;                                                                                              // 96
    return {                                                                                                           // 97
      template: "bootstrap3",                                                                                          // 98
      "class": atts["label-class"],                                                                                    // 99
      "name": atts.name                                                                                                // 100
    }                                                                                                                  // 101
  }                                                                                                                    // 102
});                                                                                                                    // 103
                                                                                                                       // 104
Template["afArrayField_bootstrap3-horizontal"].helpers({                                                               // 105
  rightColumnClass: function () {                                                                                      // 106
    var atts = this.atts || {};                                                                                        // 107
    return atts['input-col-class'] || "";                                                                              // 108
  },                                                                                                                   // 109
  afFieldLabelAtts: function () {                                                                                      // 110
    var atts = this.atts || {};                                                                                        // 111
    return {                                                                                                           // 112
      template: "bootstrap3",                                                                                          // 113
      "class": atts["label-class"],                                                                                    // 114
      "name": atts.name                                                                                                // 115
    };                                                                                                                 // 116
  }                                                                                                                    // 117
});                                                                                                                    // 118
                                                                                                                       // 119
Template["afCheckbox_bootstrap3-horizontal"].helpers({                                                                 // 120
  atts: function () {                                                                                                  // 121
    var atts = _.clone(this.atts);                                                                                     // 122
    if (this.selected) {                                                                                               // 123
      atts.checked = "";                                                                                               // 124
    }                                                                                                                  // 125
    return atts;                                                                                                       // 126
  },                                                                                                                   // 127
  attsPlusSpecialClass: function () {                                                                                  // 128
    var atts = _.clone(this.atts);                                                                                     // 129
    if (this.selected) {                                                                                               // 130
      atts.checked = "";                                                                                               // 131
    }                                                                                                                  // 132
    if (atts["class"]) {                                                                                               // 133
      atts["class"] += " autoform-checkbox-margin-fix";                                                                // 134
    } else {                                                                                                           // 135
      atts["class"] = "autoform-checkbox-margin-fix"                                                                   // 136
    }                                                                                                                  // 137
    return atts;                                                                                                       // 138
  },                                                                                                                   // 139
  useLeftLabel: function () {                                                                                          // 140
    return this.atts.leftLabel;                                                                                        // 141
  }                                                                                                                    // 142
});                                                                                                                    // 143
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/plain/template.plain.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("quickForm_plain");                                                                               // 2
Template["quickForm_plain"] = new Template("Template.quickForm_plain", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return Spacebars.call(Spacebars.dot(view.lookup("."), "qfAutoFormContext"));                                       // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 8
      return [ "\n    ", Blaze._TemplateWith(function() {                                                              // 9
        return {                                                                                                       // 10
          fields: Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "fields")),                                  // 11
          omitFields: Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "omitFields"))                           // 12
        };                                                                                                             // 13
      }, function() {                                                                                                  // 14
        return Spacebars.include(view.lookupTemplate("afQuickFields"));                                                // 15
      }), "\n    ", Blaze.If(function() {                                                                              // 16
        return Spacebars.call(view.lookup("qfShouldRenderButton"));                                                    // 17
      }, function() {                                                                                                  // 18
        return [ "\n    ", HTML.DIV("\n      ", HTML.BUTTON(HTML.Attrs(function() {                                    // 19
          return Spacebars.attrMustache(view.lookup("submitButtonAtts"));                                              // 20
        }), "\n      ", Spacebars.With(function() {                                                                    // 21
          return Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "buttonContent"));                            // 22
        }, function() {                                                                                                // 23
          return [ "\n      ", Blaze.View(function() {                                                                 // 24
            return Spacebars.mustache(view.lookup("."));                                                               // 25
          }), "\n      " ];                                                                                            // 26
        }, function() {                                                                                                // 27
          return "\n      Submit\n      ";                                                                             // 28
        }), "\n      "), "\n    "), "\n    " ];                                                                        // 29
      }), "\n  " ];                                                                                                    // 30
    });                                                                                                                // 31
  });                                                                                                                  // 32
}));                                                                                                                   // 33
                                                                                                                       // 34
Template.__checkName("afFieldLabel_plain");                                                                            // 35
Template["afFieldLabel_plain"] = new Template("Template.afFieldLabel_plain", (function() {                             // 36
  var view = this;                                                                                                     // 37
  return HTML.LABEL(HTML.Attrs(function() {                                                                            // 38
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 39
  }), Blaze.View(function() {                                                                                          // 40
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 41
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 42
    }));                                                                                                               // 43
  }));                                                                                                                 // 44
}));                                                                                                                   // 45
                                                                                                                       // 46
Template.__checkName("afCheckbox_plain");                                                                              // 47
Template["afCheckbox_plain"] = new Template("Template.afCheckbox_plain", (function() {                                 // 48
  var view = this;                                                                                                     // 49
  return HTML.DIV(HTML.INPUT(HTML.Attrs({                                                                              // 50
    type: "checkbox",                                                                                                  // 51
    value: function() {                                                                                                // 52
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 53
    }                                                                                                                  // 54
  }, function() {                                                                                                      // 55
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 56
  })), " ", HTML.LABEL({                                                                                               // 57
    "for": function() {                                                                                                // 58
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                              // 59
    }                                                                                                                  // 60
  }, Blaze.View(function() {                                                                                           // 61
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 62
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 63
    }));                                                                                                               // 64
  })));                                                                                                                // 65
}));                                                                                                                   // 66
                                                                                                                       // 67
Template.__checkName("afCheckboxGroup_plain");                                                                         // 68
Template["afCheckboxGroup_plain"] = new Template("Template.afCheckboxGroup_plain", (function() {                       // 69
  var view = this;                                                                                                     // 70
  return Blaze.Each(function() {                                                                                       // 71
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 72
  }, function() {                                                                                                      // 73
    return [ "\n    ", HTML.DIV(HTML.INPUT(HTML.Attrs({                                                                // 74
      type: "checkbox",                                                                                                // 75
      value: function() {                                                                                              // 76
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 77
      }                                                                                                                // 78
    }, function() {                                                                                                    // 79
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 80
    })), " ", HTML.LABEL({                                                                                             // 81
      "for": function() {                                                                                              // 82
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                            // 83
      }                                                                                                                // 84
    }, Blaze.View(function() {                                                                                         // 85
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 86
    }))), "\n  " ];                                                                                                    // 87
  });                                                                                                                  // 88
}));                                                                                                                   // 89
                                                                                                                       // 90
Template.__checkName("afRadio_plain");                                                                                 // 91
Template["afRadio_plain"] = new Template("Template.afRadio_plain", (function() {                                       // 92
  var view = this;                                                                                                     // 93
  return HTML.DIV(HTML.INPUT(HTML.Attrs({                                                                              // 94
    type: "checkbox",                                                                                                  // 95
    value: function() {                                                                                                // 96
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 97
    }                                                                                                                  // 98
  }, function() {                                                                                                      // 99
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 100
  })), " ", HTML.LABEL({                                                                                               // 101
    "for": function() {                                                                                                // 102
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                              // 103
    }                                                                                                                  // 104
  }, Blaze.View(function() {                                                                                           // 105
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 106
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 107
    }));                                                                                                               // 108
  })));                                                                                                                // 109
}));                                                                                                                   // 110
                                                                                                                       // 111
Template.__checkName("afRadioGroup_plain");                                                                            // 112
Template["afRadioGroup_plain"] = new Template("Template.afRadioGroup_plain", (function() {                             // 113
  var view = this;                                                                                                     // 114
  return Blaze.Each(function() {                                                                                       // 115
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 116
  }, function() {                                                                                                      // 117
    return [ "\n    ", HTML.DIV(HTML.INPUT(HTML.Attrs({                                                                // 118
      type: "checkbox",                                                                                                // 119
      value: function() {                                                                                              // 120
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 121
      }                                                                                                                // 122
    }, function() {                                                                                                    // 123
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 124
    })), " ", HTML.LABEL({                                                                                             // 125
      "for": function() {                                                                                              // 126
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                            // 127
      }                                                                                                                // 128
    }, Blaze.View(function() {                                                                                         // 129
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 130
    }))), "\n  " ];                                                                                                    // 131
  });                                                                                                                  // 132
}));                                                                                                                   // 133
                                                                                                                       // 134
Template.__checkName("afContenteditable_plain");                                                                       // 135
Template["afContenteditable_plain"] = new Template("Template.afContenteditable_plain", (function() {                   // 136
  var view = this;                                                                                                     // 137
  return HTML.DIV(HTML.Attrs({                                                                                         // 138
    contenteditable: "true"                                                                                            // 139
  }, function() {                                                                                                      // 140
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 141
  }), Blaze.View(function() {                                                                                          // 142
    return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(view.lookup("."), "value")));                            // 143
  }));                                                                                                                 // 144
}));                                                                                                                   // 145
                                                                                                                       // 146
Template.__checkName("afFieldSelect_plain");                                                                           // 147
Template["afFieldSelect_plain"] = new Template("Template.afFieldSelect_plain", (function() {                           // 148
  var view = this;                                                                                                     // 149
  return HTML.SELECT(HTML.Attrs(function() {                                                                           // 150
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 151
  }), "\n    ", Spacebars.With(function() {                                                                            // 152
    return Spacebars.call(Spacebars.dot(view.lookup("."), "contentBlockContext"));                                     // 153
  }, function() {                                                                                                      // 154
    return [ "\n    ", Spacebars.include(function() {                                                                  // 155
      return Spacebars.call(Spacebars.dot(view.lookup(".."), "contentBlock"));                                         // 156
    }), "\n    " ];                                                                                                    // 157
  }), "\n  ");                                                                                                         // 158
}));                                                                                                                   // 159
                                                                                                                       // 160
Template.__checkName("afSelect_plain");                                                                                // 161
Template["afSelect_plain"] = new Template("Template.afSelect_plain", (function() {                                     // 162
  var view = this;                                                                                                     // 163
  return HTML.SELECT(HTML.Attrs(function() {                                                                           // 164
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 165
  }), "\n    ", Blaze.Each(function() {                                                                                // 166
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 167
  }, function() {                                                                                                      // 168
    return [ "\n    ", HTML.OPTION(HTML.Attrs(function() {                                                             // 169
      return Spacebars.attrMustache(view.lookup("optionAtts"));                                                        // 170
    }), Blaze.View(function() {                                                                                        // 171
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 172
    })), "\n    " ];                                                                                                   // 173
  }), "\n  ");                                                                                                         // 174
}));                                                                                                                   // 175
                                                                                                                       // 176
Template.__checkName("afTextarea_plain");                                                                              // 177
Template["afTextarea_plain"] = new Template("Template.afTextarea_plain", (function() {                                 // 178
  var view = this;                                                                                                     // 179
  return HTML.TEXTAREA(HTML.Attrs(function() {                                                                         // 180
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 181
  }, {                                                                                                                 // 182
    value: function() {                                                                                                // 183
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 184
    }                                                                                                                  // 185
  }));                                                                                                                 // 186
}));                                                                                                                   // 187
                                                                                                                       // 188
Template.__checkName("afInput_plain");                                                                                 // 189
Template["afInput_plain"] = new Template("Template.afInput_plain", (function() {                                       // 190
  var view = this;                                                                                                     // 191
  return HTML.INPUT(HTML.Attrs({                                                                                       // 192
    type: function() {                                                                                                 // 193
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "type"));                                              // 194
    },                                                                                                                 // 195
    value: function() {                                                                                                // 196
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 197
    }                                                                                                                  // 198
  }, function() {                                                                                                      // 199
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 200
  }));                                                                                                                 // 201
}));                                                                                                                   // 202
                                                                                                                       // 203
Template.__checkName("afFormGroup_plain");                                                                             // 204
Template["afFormGroup_plain"] = new Template("Template.afFormGroup_plain", (function() {                               // 205
  var view = this;                                                                                                     // 206
  return HTML.DIV({                                                                                                    // 207
    "class": function() {                                                                                              // 208
      return Blaze.If(function() {                                                                                     // 209
        return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                  // 210
          name: Spacebars.dot(view.lookup("."), "atts", "name")                                                        // 211
        }));                                                                                                           // 212
      }, function() {                                                                                                  // 213
        return "has-error";                                                                                            // 214
      });                                                                                                              // 215
    }                                                                                                                  // 216
  }, "\n    ", Blaze.Unless(function() {                                                                               // 217
    return Spacebars.call(Spacebars.dot(view.lookup("."), "skipLabel"));                                               // 218
  }, function() {                                                                                                      // 219
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 220
      return Spacebars.call(Spacebars.dot(view.lookup("."), "afFieldLabelAtts"));                                      // 221
    }, function() {                                                                                                    // 222
      return Spacebars.include(view.lookupTemplate("afFieldLabel"));                                                   // 223
    }), "\n    " ];                                                                                                    // 224
  }), "\n    ", Blaze._TemplateWith(function() {                                                                       // 225
    return Spacebars.call(Spacebars.dot(view.lookup("."), "afFieldInputAtts"));                                        // 226
  }, function() {                                                                                                      // 227
    return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                     // 228
  }), "\n    ", HTML.SPAN(Blaze.View(function() {                                                                      // 229
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                          // 230
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 231
    })));                                                                                                              // 232
  })), "\n  ");                                                                                                        // 233
}));                                                                                                                   // 234
                                                                                                                       // 235
Template.__checkName("afObjectField_plain");                                                                           // 236
Template["afObjectField_plain"] = new Template("Template.afObjectField_plain", (function() {                           // 237
  var view = this;                                                                                                     // 238
  return HTML.FIELDSET("\n    ", HTML.LEGEND(Blaze.View(function() {                                                   // 239
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 240
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 241
    }));                                                                                                               // 242
  })), "\n    ", Blaze._TemplateWith(function() {                                                                      // 243
    return {                                                                                                           // 244
      name: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "name")),                                           // 245
      fields: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "fields")),                                       // 246
      omitFields: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "omitFields"))                                // 247
    };                                                                                                                 // 248
  }, function() {                                                                                                      // 249
    return Spacebars.include(view.lookupTemplate("afQuickFields"));                                                    // 250
  }), "\n  ");                                                                                                         // 251
}));                                                                                                                   // 252
                                                                                                                       // 253
Template.__checkName("afArrayField_plain");                                                                            // 254
Template["afArrayField_plain"] = new Template("Template.afArrayField_plain", (function() {                             // 255
  var view = this;                                                                                                     // 256
  return HTML.FIELDSET("\n    ", HTML.LEGEND(Blaze.View(function() {                                                   // 257
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 258
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 259
    }));                                                                                                               // 260
  })), "\n    ", Blaze.If(function() {                                                                                 // 261
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 262
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 263
    }));                                                                                                               // 264
  }, function() {                                                                                                      // 265
    return [ "\n    ", HTML.DIV({                                                                                      // 266
      "class": "autoform-array-field-error"                                                                            // 267
    }, "\n      ", Blaze.View(function() {                                                                             // 268
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 269
        name: Spacebars.dot(view.lookup("."), "atts", "name")                                                          // 270
      })));                                                                                                            // 271
    }), "\n    "), "\n    " ];                                                                                         // 272
  }), "\n    ", Blaze._TemplateWith(function() {                                                                       // 273
    return {                                                                                                           // 274
      name: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "name")),                                           // 275
      minCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "minCount")),                                   // 276
      maxCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "maxCount"))                                    // 277
    };                                                                                                                 // 278
  }, function() {                                                                                                      // 279
    return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                      // 280
      return [ "\n    ", HTML.DIV({                                                                                    // 281
        "class": "autoform-array-item"                                                                                 // 282
      }, "\n      ", Blaze._TemplateWith(function() {                                                                  // 283
        return {                                                                                                       // 284
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "name")),                                               // 285
          label: Spacebars.call(false)                                                                                 // 286
        };                                                                                                             // 287
      }, function() {                                                                                                  // 288
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 289
      }), "\n      ", Blaze.If(function() {                                                                            // 290
        return Spacebars.dataMustache(view.lookup("afArrayFieldHasMoreThanMinimum"), Spacebars.kw({                    // 291
          name: Spacebars.dot(view.lookup(".."), "atts", "name"),                                                      // 292
          minCount: Spacebars.dot(view.lookup(".."), "atts", "minCount"),                                              // 293
          maxCount: Spacebars.dot(view.lookup(".."), "atts", "maxCount")                                               // 294
        }));                                                                                                           // 295
      }, function() {                                                                                                  // 296
        return [ "\n      ", HTML.BUTTON({                                                                             // 297
          "class": "autoform-remove-item"                                                                              // 298
        }, "Remove"), "\n      " ];                                                                                    // 299
      }), "\n    "), "\n    " ];                                                                                       // 300
    });                                                                                                                // 301
  }), "\n    ", Blaze.If(function() {                                                                                  // 302
    return Spacebars.dataMustache(view.lookup("afArrayFieldHasLessThanMaximum"), Spacebars.kw({                        // 303
      name: Spacebars.dot(view.lookup("."), "atts", "name"),                                                           // 304
      minCount: Spacebars.dot(view.lookup("."), "atts", "minCount"),                                                   // 305
      maxCount: Spacebars.dot(view.lookup("."), "atts", "maxCount")                                                    // 306
    }));                                                                                                               // 307
  }, function() {                                                                                                      // 308
    return [ "\n    ", HTML.DIV({                                                                                      // 309
      style: "margin-top: 20px;"                                                                                       // 310
    }, "\n      ", HTML.BUTTON({                                                                                       // 311
      "class": "autoform-add-item",                                                                                    // 312
      "data-autoform-field": function() {                                                                              // 313
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "name"));                                    // 314
      },                                                                                                               // 315
      "data-autoform-mincount": function() {                                                                           // 316
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "minCount"));                                // 317
      },                                                                                                               // 318
      "data-autoform-maxcount": function() {                                                                           // 319
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "maxCount"));                                // 320
      }                                                                                                                // 321
    }, "Add"), "\n    "), "\n    " ];                                                                                  // 322
  }), "\n  ");                                                                                                         // 323
}));                                                                                                                   // 324
                                                                                                                       // 325
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/plain/plain.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Template helpers for "plain" template                                                                               // 2
 */                                                                                                                    // 3
                                                                                                                       // 4
Template['afFieldLabel_plain'].helpers({                                                                               // 5
  atts: function plFieldLabelAtts() {                                                                                  // 6
    var atts = (_.clone(this || {})).atts;                                                                             // 7
    var labelAtts = _.omit(atts, 'name', 'autoform', 'template');                                                      // 8
    // Add "for" attribute if missing                                                                                  // 9
    labelAtts['for'] = labelAtts['for'] || atts['name'];                                                               // 10
    return labelAtts;                                                                                                  // 11
  }                                                                                                                    // 12
});                                                                                                                    // 13
                                                                                                                       // 14
Template['quickForm_plain'].helpers({                                                                                  // 15
  submitButtonAtts: function plQuickFormSubmitButtonAtts() {                                                           // 16
    var qfAtts = this.atts;                                                                                            // 17
    var atts = {type: "submit"};                                                                                       // 18
    if (typeof qfAtts.buttonClasses === "string") {                                                                    // 19
      atts['class'] = qfAtts.buttonClasses;                                                                            // 20
    }                                                                                                                  // 21
    return atts;                                                                                                       // 22
  }                                                                                                                    // 23
});                                                                                                                    // 24
                                                                                                                       // 25
function selectedAttsAdjust() {                                                                                        // 26
  var atts = _.clone(this.atts);                                                                                       // 27
  if (this.selected) {                                                                                                 // 28
    atts.checked = "";                                                                                                 // 29
  }                                                                                                                    // 30
  return atts;                                                                                                         // 31
}                                                                                                                      // 32
                                                                                                                       // 33
Template["afCheckbox_plain"].helpers({                                                                                 // 34
  atts: selectedAttsAdjust                                                                                             // 35
});                                                                                                                    // 36
                                                                                                                       // 37
Template["afRadio_plain"].helpers({                                                                                    // 38
  atts: selectedAttsAdjust                                                                                             // 39
});                                                                                                                    // 40
                                                                                                                       // 41
Template["afCheckboxGroup_plain"].helpers({                                                                            // 42
  atts: selectedAttsAdjust                                                                                             // 43
});                                                                                                                    // 44
                                                                                                                       // 45
Template["afRadioGroup_plain"].helpers({                                                                               // 46
  atts: selectedAttsAdjust                                                                                             // 47
});                                                                                                                    // 48
                                                                                                                       // 49
Template["afSelect_plain"].helpers({                                                                                   // 50
  optionAtts: function afSelectOptionAtts() {                                                                          // 51
    var item = this                                                                                                    // 52
    var atts = {                                                                                                       // 53
      value: item.value                                                                                                // 54
    };                                                                                                                 // 55
    if (item.selected) {                                                                                               // 56
      atts.selected = "";                                                                                              // 57
    }                                                                                                                  // 58
    return atts;                                                                                                       // 59
  }                                                                                                                    // 60
});                                                                                                                    // 61
                                                                                                                       // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/plain-fieldset/template.plain-fieldset.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("quickForm_plain-fieldset");                                                                      // 2
Template["quickForm_plain-fieldset"] = new Template("Template.quickForm_plain-fieldset", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return Spacebars.call(Spacebars.dot(view.lookup("."), "qfAutoFormContext"));                                       // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 8
      return [ "\n    ", HTML.FIELDSET("\n      ", Spacebars.With(function() {                                         // 9
        return Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "legend"));                                     // 10
      }, function() {                                                                                                  // 11
        return [ "\n      ", HTML.LEGEND(Blaze.View(function() {                                                       // 12
          return Spacebars.mustache(view.lookup("."));                                                                 // 13
        })), "\n      " ];                                                                                             // 14
      }), "\n      ", Blaze._TemplateWith(function() {                                                                 // 15
        return {                                                                                                       // 16
          fields: Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "fields")),                                  // 17
          omitFields: Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "omitFields"))                           // 18
        };                                                                                                             // 19
      }, function() {                                                                                                  // 20
        return Spacebars.include(view.lookupTemplate("afQuickFields"));                                                // 21
      }), "\n    "), "\n    ", Blaze.If(function() {                                                                   // 22
        return Spacebars.call(view.lookup("qfShouldRenderButton"));                                                    // 23
      }, function() {                                                                                                  // 24
        return [ "\n    ", HTML.DIV("\n      ", HTML.BUTTON(HTML.Attrs(function() {                                    // 25
          return Spacebars.attrMustache(view.lookup("submitButtonAtts"));                                              // 26
        }), "\n        ", Spacebars.With(function() {                                                                  // 27
          return Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "buttonContent"));                            // 28
        }, function() {                                                                                                // 29
          return [ "\n        ", Blaze.View(function() {                                                               // 30
            return Spacebars.mustache(view.lookup("."));                                                               // 31
          }), "\n        " ];                                                                                          // 32
        }, function() {                                                                                                // 33
          return "\n        Submit\n        ";                                                                         // 34
        }), "\n      "), "\n    "), "\n    " ];                                                                        // 35
      }), "\n  " ];                                                                                                    // 36
    });                                                                                                                // 37
  });                                                                                                                  // 38
}));                                                                                                                   // 39
                                                                                                                       // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/plain-fieldset/plain-fieldset.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template['quickForm_plain-fieldset'].helpers({                                                                         // 1
  submitButtonAtts: function plfsQuickFormSubmitButtonAtts() {                                                         // 2
    var qfAtts = this.atts;                                                                                            // 3
    var atts = {type: "submit"};                                                                                       // 4
    if (typeof qfAtts.buttonClasses === "string") {                                                                    // 5
      atts['class'] = qfAtts.buttonClasses;                                                                            // 6
    }                                                                                                                  // 7
    return atts;                                                                                                       // 8
  }                                                                                                                    // 9
});                                                                                                                    // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/plain-span/template.plain-span.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afFieldLabel_plain-span");                                                                       // 2
Template["afFieldLabel_plain-span"] = new Template("Template.afFieldLabel_plain-span", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.SPAN(HTML.Attrs(function() {                                                                             // 5
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 6
  }), Blaze.View(function() {                                                                                          // 7
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 8
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 9
    }));                                                                                                               // 10
  }));                                                                                                                 // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/templates/plain-span/plain-span.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Template helpers for "plain-span" template                                                                          // 2
 */                                                                                                                    // 3
                                                                                                                       // 4
Template['afFieldLabel_plain-span'].helpers({                                                                          // 5
  atts: function afFieldLabelAtts() {                                                                                  // 6
    var atts = (this || {}).atts;                                                                                      // 7
    return _.omit(atts, 'name', 'autoform', 'template');                                                               // 8
  }                                                                                                                    // 9
});                                                                                                                    // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/utility.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Utility = {                                                                                                            // 1
  /**                                                                                                                  // 2
   * @method Utility.cleanNulls                                                                                        // 3
   * @private                                                                                                          // 4
   * @param {Object} doc - Source object                                                                               // 5
   * @returns {Object}                                                                                                 // 6
   *                                                                                                                   // 7
   * Returns an object in which all properties with null, undefined, or empty                                          // 8
   * string values have been removed, recursively.                                                                     // 9
   */                                                                                                                  // 10
  cleanNulls: function cleanNulls(doc, isArray, keepEmptyStrings) {                                                    // 11
    var newDoc = isArray ? [] : {};                                                                                    // 12
    _.each(doc, function(val, key) {                                                                                   // 13
      if (!_.isArray(val) && isBasicObject(val)) {                                                                     // 14
        val = cleanNulls(val, false, keepEmptyStrings); //recurse into plain objects                                   // 15
        if (!_.isEmpty(val)) {                                                                                         // 16
          newDoc[key] = val;                                                                                           // 17
        }                                                                                                              // 18
      } else if (_.isArray(val)) {                                                                                     // 19
        val = cleanNulls(val, true, keepEmptyStrings); //recurse into non-typed arrays                                 // 20
        if (!_.isEmpty(val)) {                                                                                         // 21
          newDoc[key] = val;                                                                                           // 22
        }                                                                                                              // 23
      } else if (!Utility.isNullUndefinedOrEmptyString(val)) {                                                         // 24
        newDoc[key] = val;                                                                                             // 25
      } else if (keepEmptyStrings && typeof val === "string" && val.length === 0) {                                    // 26
        newDoc[key] = val;                                                                                             // 27
      }                                                                                                                // 28
    });                                                                                                                // 29
    return newDoc;                                                                                                     // 30
  },                                                                                                                   // 31
  /**                                                                                                                  // 32
   * @method Utility.reportNulls                                                                                       // 33
   * @private                                                                                                          // 34
   * @param {Object} flatDoc - An object with no properties that are also objects.                                     // 35
   * @returns {Object} An object in which the keys represent the keys in the                                           // 36
   * original object that were null, undefined, or empty strings, and the value                                        // 37
   * of each key is "".                                                                                                // 38
   */                                                                                                                  // 39
  reportNulls: function reportNulls(flatDoc, keepEmptyStrings) {                                                       // 40
    var nulls = {};                                                                                                    // 41
    // Loop through the flat doc                                                                                       // 42
    _.each(flatDoc, function(val, key) {                                                                               // 43
      // If value is undefined, null, or an empty string, report this as null so it will be unset                      // 44
      if (val === null) {                                                                                              // 45
        nulls[key] = "";                                                                                               // 46
      } else if (val === void 0) {                                                                                     // 47
        nulls[key] = "";                                                                                               // 48
      } else if (!keepEmptyStrings && typeof val === "string" && val.length === 0) {                                   // 49
        nulls[key] = "";                                                                                               // 50
      }                                                                                                                // 51
      // If value is an array in which all the values recursively are undefined, null, or an empty string, report this as null so it will be unset
      else if (_.isArray(val) && Utility.cleanNulls(val, true, keepEmptyStrings).length === 0) {                       // 53
        nulls[key] = "";                                                                                               // 54
      }                                                                                                                // 55
    });                                                                                                                // 56
    return nulls;                                                                                                      // 57
  },                                                                                                                   // 58
  /**                                                                                                                  // 59
   * @method Utility.docToModifier                                                                                     // 60
   * @private                                                                                                          // 61
   * @param {Object} doc - An object to be converted into a MongoDB modifier                                           // 62
   * @returns {Object} A MongoDB modifier.                                                                             // 63
   *                                                                                                                   // 64
   * Converts an object into a modifier by flattening it, putting keys with                                            // 65
   * null, undefined, and empty string values into `modifier.$unset`, and                                              // 66
   * putting the rest of the keys into `modifier.$set`.                                                                // 67
   */                                                                                                                  // 68
  docToModifier: function docToModifier(doc, keepEmptyStrings) {                                                       // 69
    var modifier = {};                                                                                                 // 70
                                                                                                                       // 71
    // Flatten doc                                                                                                     // 72
    var mDoc = new MongoObject(doc);                                                                                   // 73
    var flatDoc = mDoc.getFlatObject({keepArrays: true});                                                              // 74
    mDoc = null;                                                                                                       // 75
    // Get a list of null, undefined, and empty string values so we can unset them instead                             // 76
    var nulls = Utility.reportNulls(flatDoc, keepEmptyStrings);                                                        // 77
    flatDoc = Utility.cleanNulls(flatDoc, false, keepEmptyStrings);                                                    // 78
                                                                                                                       // 79
    if (!_.isEmpty(flatDoc)) {                                                                                         // 80
      modifier.$set = flatDoc;                                                                                         // 81
    }                                                                                                                  // 82
    if (!_.isEmpty(nulls)) {                                                                                           // 83
      modifier.$unset = nulls;                                                                                         // 84
    }                                                                                                                  // 85
    return modifier;                                                                                                   // 86
  },                                                                                                                   // 87
  /**                                                                                                                  // 88
   * @method Utility.getSelectValues                                                                                   // 89
   * @private                                                                                                          // 90
   * @param {Element} select - DOM Element from which to get current values                                            // 91
   * @returns {string[]}                                                                                               // 92
   *                                                                                                                   // 93
   * Gets a string array of all the selected values in a given `select` DOM element.                                   // 94
   */                                                                                                                  // 95
  getSelectValues: function getSelectValues(select) {                                                                  // 96
    var result = [];                                                                                                   // 97
    var options = select && select.options || [];                                                                      // 98
    var opt;                                                                                                           // 99
                                                                                                                       // 100
    for (var i = 0, ln = options.length; i < ln; i++) {                                                                // 101
      opt = options[i];                                                                                                // 102
                                                                                                                       // 103
      if (opt.selected) {                                                                                              // 104
        result.push(opt.value || opt.text);                                                                            // 105
      }                                                                                                                // 106
    }                                                                                                                  // 107
    return result;                                                                                                     // 108
  },                                                                                                                   // 109
  /**                                                                                                                  // 110
   * @method Utility.maybeNum                                                                                          // 111
   * @private                                                                                                          // 112
   * @param {string} val                                                                                               // 113
   * @returns {String|Number}                                                                                          // 114
   *                                                                                                                   // 115
   * If the given string can be converted to a number, returns the number.                                             // 116
   * Otherwise returns the string.                                                                                     // 117
   */                                                                                                                  // 118
  maybeNum: function maybeNum(val) {                                                                                   // 119
    // Convert val to a number if possible; otherwise, just use the value                                              // 120
    var floatVal = parseFloat(val);                                                                                    // 121
    if (!isNaN(floatVal)) {                                                                                            // 122
      return floatVal;                                                                                                 // 123
    } else {                                                                                                           // 124
      return val;                                                                                                      // 125
    }                                                                                                                  // 126
  },                                                                                                                   // 127
  /**                                                                                                                  // 128
   * @method Utility.lookup                                                                                            // 129
   * @private                                                                                                          // 130
   * @param {Any} obj                                                                                                  // 131
   * @returns {Any}                                                                                                    // 132
   *                                                                                                                   // 133
   * If `obj` is a string, returns the value of the property with that                                                 // 134
   * name on the `window` object. Otherwise returns `obj`.                                                             // 135
   */                                                                                                                  // 136
  lookup: function lookup(obj) {                                                                                       // 137
    var ref = window, arr;                                                                                             // 138
    if (typeof obj === "string") {                                                                                     // 139
      arr = obj.split(".");                                                                                            // 140
      while(arr.length && (ref = ref[arr.shift()]));                                                                   // 141
      if (!ref) {                                                                                                      // 142
        throw new Error(obj + " is not in the window scope");                                                          // 143
      }                                                                                                                // 144
      return ref;                                                                                                      // 145
    }                                                                                                                  // 146
    return obj;                                                                                                        // 147
  },                                                                                                                   // 148
  /**                                                                                                                  // 149
   * @method Utility.getDefs                                                                                           // 150
   * @private                                                                                                          // 151
   * @param {SimpleSchema} ss                                                                                          // 152
   * @param {String} name                                                                                              // 153
   * @return {Object} Schema definitions object                                                                        // 154
   *                                                                                                                   // 155
   * Returns the schema definitions object from a SimpleSchema instance. Equivalent to calling                         // 156
   * `ss.schema(name)` but handles throwing errors if `name` is not a string or is not a valid                         // 157
   * field name for this SimpleSchema instance.                                                                        // 158
   */                                                                                                                  // 159
  getDefs: function getDefs(ss, name) {                                                                                // 160
    if (typeof name !== "string") {                                                                                    // 161
      throw new Error("Invalid field name: (not a string)");                                                           // 162
    }                                                                                                                  // 163
                                                                                                                       // 164
    var defs = ss.schema(name);                                                                                        // 165
    if (!defs)                                                                                                         // 166
      throw new Error("Invalid field name: " + name);                                                                  // 167
    return defs;                                                                                                       // 168
  },                                                                                                                   // 169
  /**                                                                                                                  // 170
   * @method Utility.objAffectsKey                                                                                     // 171
   * @private                                                                                                          // 172
   * @param  {Object} obj                                                                                              // 173
   * @param  {String} key                                                                                              // 174
   * @return {Boolean}                                                                                                 // 175
   * @todo should make this a static method in MongoObject                                                             // 176
   */                                                                                                                  // 177
  objAffectsKey: function objAffectsKey(obj, key) {                                                                    // 178
    var mDoc = new MongoObject(obj);                                                                                   // 179
    return mDoc.affectsKey(key);                                                                                       // 180
  },                                                                                                                   // 181
  /**                                                                                                                  // 182
   * @method Utility.expandObj                                                                                         // 183
   * @private                                                                                                          // 184
   * @param  {Object} doc                                                                                              // 185
   * @return {Object}                                                                                                  // 186
   *                                                                                                                   // 187
   * Takes a flat object and returns an expanded version of it.                                                        // 188
   */                                                                                                                  // 189
  expandObj: function expandObj(doc) {                                                                                 // 190
    var newDoc = {}, subkeys, subkey, subkeylen, nextPiece, current;                                                   // 191
    _.each(doc, function(val, key) {                                                                                   // 192
      subkeys = key.split(".");                                                                                        // 193
      subkeylen = subkeys.length;                                                                                      // 194
      current = newDoc;                                                                                                // 195
      for (var i = 0; i < subkeylen; i++) {                                                                            // 196
        subkey = subkeys[i];                                                                                           // 197
        if (typeof current[subkey] !== "undefined" && !_.isObject(current[subkey])) {                                  // 198
          break; //already set for some reason; leave it alone                                                         // 199
        }                                                                                                              // 200
        if (i === subkeylen - 1) {                                                                                     // 201
          //last iteration; time to set the value                                                                      // 202
          current[subkey] = val;                                                                                       // 203
        } else {                                                                                                       // 204
          //see if the next piece is a number                                                                          // 205
          nextPiece = subkeys[i + 1];                                                                                  // 206
          nextPiece = parseInt(nextPiece, 10);                                                                         // 207
          if (isNaN(nextPiece) && !_.isObject(current[subkey])) {                                                      // 208
            current[subkey] = {};                                                                                      // 209
          } else if (!isNaN(nextPiece) && !_.isArray(current[subkey])) {                                               // 210
            current[subkey] = [];                                                                                      // 211
          }                                                                                                            // 212
        }                                                                                                              // 213
        current = current[subkey];                                                                                     // 214
      }                                                                                                                // 215
    });                                                                                                                // 216
    return newDoc;                                                                                                     // 217
  },                                                                                                                   // 218
  /**                                                                                                                  // 219
   * @method Utility.compactArrays                                                                                     // 220
   * @private                                                                                                          // 221
   * @param  {Object} obj                                                                                              // 222
   * @return {undefined}                                                                                               // 223
   *                                                                                                                   // 224
   * Edits the object by reference, compacting any arrays at any level recursively.                                    // 225
   */                                                                                                                  // 226
  compactArrays: function compactArrays(obj) {                                                                         // 227
    if (_.isObject(obj)) {                                                                                             // 228
      _.each(obj, function (val, key) {                                                                                // 229
        if (_.isArray(val)) {                                                                                          // 230
          obj[key] = _.without(val, void 0, null);                                                                     // 231
          _.each(obj[key], function (arrayItem) {                                                                      // 232
            compactArrays(arrayItem);                                                                                  // 233
          });                                                                                                          // 234
        } else if (!(val instanceof Date) && _.isObject(val)) {                                                        // 235
          //recurse into objects                                                                                       // 236
          compactArrays(val);                                                                                          // 237
        }                                                                                                              // 238
      });                                                                                                              // 239
    }                                                                                                                  // 240
  },                                                                                                                   // 241
  /**                                                                                                                  // 242
   * @method Utility.bubbleEmpty                                                                                       // 243
   * @private                                                                                                          // 244
   * @param  {Object} obj                                                                                              // 245
   * @return {undefined}                                                                                               // 246
   *                                                                                                                   // 247
   * Edits the object by reference.                                                                                    // 248
   */                                                                                                                  // 249
  bubbleEmpty: function bubbleEmpty(obj, keepEmptyStrings) {                                                           // 250
    if (_.isObject(obj)) {                                                                                             // 251
      _.each(obj, function (val, key) {                                                                                // 252
        if (_.isArray(val)) {                                                                                          // 253
          _.each(val, function (arrayItem) {                                                                           // 254
            bubbleEmpty(arrayItem);                                                                                    // 255
          });                                                                                                          // 256
        } else if (isBasicObject(val)) {                                                                               // 257
          var allEmpty = _.all(val, function (prop) {                                                                  // 258
            return (prop === void 0 || prop === null || (!keepEmptyStrings && typeof prop === "string" && prop.length === 0));
          });                                                                                                          // 260
          if (_.isEmpty(val) || allEmpty) {                                                                            // 261
            obj[key] = null;                                                                                           // 262
          } else {                                                                                                     // 263
            //recurse into objects                                                                                     // 264
            bubbleEmpty(val);                                                                                          // 265
          }                                                                                                            // 266
        }                                                                                                              // 267
      });                                                                                                              // 268
    }                                                                                                                  // 269
  },                                                                                                                   // 270
  /**                                                                                                                  // 271
   * @method Utility.getSimpleSchemaFromContext                                                                        // 272
   * @private                                                                                                          // 273
   * @param  {Object} context                                                                                          // 274
   * @return {SimpleSchema}                                                                                            // 275
   *                                                                                                                   // 276
   * Given a context object that may or may not have schema and collection properties,                                 // 277
   * returns a SimpleSchema instance or throws an error if one cannot be obtained.                                     // 278
   */                                                                                                                  // 279
  getSimpleSchemaFromContext: function getSimpleSchemaFromContext(context, formId) {                                   // 280
    // If schema attribute, use that                                                                                   // 281
    var ss = Utility.lookup(context.schema);                                                                           // 282
    if (ss) {                                                                                                          // 283
      if (ss instanceof SimpleSchema) {                                                                                // 284
        return ss;                                                                                                     // 285
      } else {                                                                                                         // 286
        throw new Error('AutoForm: schema attribute for form with id "' + formId + '" is not a SimpleSchema instance');
      }                                                                                                                // 288
    }                                                                                                                  // 289
    // If no schema attribute, use the schema attached to the collection                                               // 290
    var collection = Utility.lookup(context.collection);                                                               // 291
    if (collection) {                                                                                                  // 292
      if (typeof collection.simpleSchema === 'function') {                                                             // 293
        return collection.simpleSchema();                                                                              // 294
      } else {                                                                                                         // 295
        throw new Error('AutoForm: collection attribute for form with id "' + formId + '" refers to a collection that does not have a schema, or is not a collection. You might have forgotten to attach a schema to the collection or you might need to add the collection2 package to your app.');
      }                                                                                                                // 297
    }                                                                                                                  // 298
    // If we got this far, we have no schema so throw an error                                                         // 299
    throw new Error('AutoForm: form with id "' + formId + '" needs either "schema" or "collection" attribute');        // 300
  },                                                                                                                   // 301
  /**                                                                                                                  // 302
   * @method Utility.isNullUndefinedOrEmptyString                                                                      // 303
   * @private                                                                                                          // 304
   * @param  {Any} val                                                                                                 // 305
   * @return {Boolean}                                                                                                 // 306
   *                                                                                                                   // 307
   * Returns `true` if the value is null, undefined, or an empty string                                                // 308
   */                                                                                                                  // 309
  isNullUndefinedOrEmptyString: function isNullUndefinedOrEmptyString(val) {                                           // 310
    return (val === void 0 || val === null || (typeof val === "string" && val.length === 0));                          // 311
  },                                                                                                                   // 312
  /**                                                                                                                  // 313
   * @method Utility.isValidDateString                                                                                 // 314
   * @private                                                                                                          // 315
   * @param  {String}  dateString                                                                                      // 316
   * @return {Boolean}                                                                                                 // 317
   *                                                                                                                   // 318
   * Returns `true` if dateString is a "valid date string"                                                             // 319
   */                                                                                                                  // 320
  isValidDateString: function isValidDateString(dateString) {                                                          // 321
    var m = moment(dateString, 'YYYY-MM-DD', true);                                                                    // 322
    return m && m.isValid();                                                                                           // 323
  },                                                                                                                   // 324
  /**                                                                                                                  // 325
   * @method Utility.isValidTimeString                                                                                 // 326
   * @private                                                                                                          // 327
   * @param  {String}  timeString                                                                                      // 328
   * @return {Boolean}                                                                                                 // 329
   *                                                                                                                   // 330
   * Returns `true` if timeString is a "valid time string"                                                             // 331
   */                                                                                                                  // 332
  isValidTimeString: function isValidTimeString(timeString) {                                                          // 333
    if (typeof timeString !== "string")                                                                                // 334
      return false;                                                                                                    // 335
                                                                                                                       // 336
    //this reg ex actually allows a few invalid hours/minutes/seconds, but                                             // 337
    //we can catch that when parsing                                                                                   // 338
    var regEx = /^[0-2][0-9]:[0-5][0-9](:[0-5][0-9](\.[0-9]{1,3})?)?$/;                                                // 339
    return regEx.test(timeString);                                                                                     // 340
  },                                                                                                                   // 341
  /**                                                                                                                  // 342
   * @method  Utility.dateToDateString                                                                                 // 343
   * @private                                                                                                          // 344
   * @param  {Date} date                                                                                               // 345
   * @return {String}                                                                                                  // 346
   *                                                                                                                   // 347
   * Returns a "valid date string" representing the local date.                                                        // 348
   */                                                                                                                  // 349
  dateToDateString: function dateToDateString(date) {                                                                  // 350
    var m = (date.getMonth() + 1);                                                                                     // 351
    if (m < 10) {                                                                                                      // 352
      m = "0" + m;                                                                                                     // 353
    }                                                                                                                  // 354
    var d = date.getDate();                                                                                            // 355
    if (d < 10) {                                                                                                      // 356
      d = "0" + d;                                                                                                     // 357
    }                                                                                                                  // 358
    return date.getFullYear() + '-' + m + '-' + d;                                                                     // 359
  },                                                                                                                   // 360
  /**                                                                                                                  // 361
   * @method  Utility.dateToDateStringUTC                                                                              // 362
   * @private                                                                                                          // 363
   * @param  {Date} date                                                                                               // 364
   * @return {String}                                                                                                  // 365
   *                                                                                                                   // 366
   * Returns a "valid date string" representing the date converted to the UTC time zone.                               // 367
   */                                                                                                                  // 368
  dateToDateStringUTC: function dateToDateStringUTC(date) {                                                            // 369
    var m = (date.getUTCMonth() + 1);                                                                                  // 370
    if (m < 10) {                                                                                                      // 371
      m = "0" + m;                                                                                                     // 372
    }                                                                                                                  // 373
    var d = date.getUTCDate();                                                                                         // 374
    if (d < 10) {                                                                                                      // 375
      d = "0" + d;                                                                                                     // 376
    }                                                                                                                  // 377
    return date.getUTCFullYear() + '-' + m + '-' + d;                                                                  // 378
  },                                                                                                                   // 379
  /**                                                                                                                  // 380
   * @method  Utility.dateToNormalizedForcedUtcGlobalDateAndTimeString                                                 // 381
   * @private                                                                                                          // 382
   * @param  {Date} date                                                                                               // 383
   * @return {String}                                                                                                  // 384
   *                                                                                                                   // 385
   * Returns a "valid normalized forced-UTC global date and time string" representing the time                         // 386
   * converted to the UTC time zone and expressed as the shortest possible string for the given                        // 387
   * time (e.g. omitting the seconds component entirely if the given time is zero seconds past the minute).            // 388
   *                                                                                                                   // 389
   * http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#date-and-time-state-(type=datetime)
   * http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#valid-normalized-forced-utc-global-date-and-time-string
   */                                                                                                                  // 392
  dateToNormalizedForcedUtcGlobalDateAndTimeString: function dateToNormalizedForcedUtcGlobalDateAndTimeString(date) {  // 393
    return moment(date).utc().format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");                                                  // 394
  },                                                                                                                   // 395
  /**                                                                                                                  // 396
   * @method  Utility.isValidNormalizedForcedUtcGlobalDateAndTimeString                                                // 397
   * @private                                                                                                          // 398
   * @param  {String} dateString                                                                                       // 399
   * @return {Boolean}                                                                                                 // 400
   *                                                                                                                   // 401
   * Returns true if dateString is a "valid normalized forced-UTC global date and time string"                         // 402
   */                                                                                                                  // 403
  isValidNormalizedForcedUtcGlobalDateAndTimeString: function isValidNormalizedForcedUtcGlobalDateAndTimeString(dateString) {
    if (typeof dateString !== "string")                                                                                // 405
      return false;                                                                                                    // 406
                                                                                                                       // 407
    var datePart = dateString.substring(0, 10);                                                                        // 408
    var tPart = dateString.substring(10, 11);                                                                          // 409
    var timePart = dateString.substring(11, dateString.length - 1);                                                    // 410
    var zPart = dateString.substring(dateString.length - 1);                                                           // 411
    return Utility.isValidDateString(datePart) && tPart === "T" && Utility.isValidTimeString(timePart) && zPart === "Z";
  },                                                                                                                   // 413
  /**                                                                                                                  // 414
   * @method Utility.dateToNormalizedLocalDateAndTimeString                                                            // 415
   * @private                                                                                                          // 416
   * @param {Date} date The Date object                                                                                // 417
   * @param {String} [timezoneId] A valid timezoneId that moment-timezone understands, e.g., "America/Los_Angeles"     // 418
   * @return {String}                                                                                                  // 419
   *                                                                                                                   // 420
   * Returns a "valid normalized local date and time string".                                                          // 421
   */                                                                                                                  // 422
  dateToNormalizedLocalDateAndTimeString: function dateToNormalizedLocalDateAndTimeString(date, timezoneId) {          // 423
    var m = moment(date);                                                                                              // 424
    // by default, we assume local timezone; add moment-timezone to app and pass timezoneId                            // 425
    // to use a different timezone                                                                                     // 426
    if (typeof timezoneId === "string") {                                                                              // 427
      if (typeof m.tz !== "function") {                                                                                // 428
        throw new Error("If you specify a timezoneId, make sure that you've added a moment-timezone package to your app");
      }                                                                                                                // 430
      m.tz(timezoneId);                                                                                                // 431
    }                                                                                                                  // 432
    return m.format("YYYY-MM-DD[T]HH:mm:ss.SSS");                                                                      // 433
  },                                                                                                                   // 434
  /**                                                                                                                  // 435
   * @method  Utility.isValidNormalizedLocalDateAndTimeString                                                          // 436
   * @private                                                                                                          // 437
   * @param  {String} dtString                                                                                         // 438
   * @return {Boolean}                                                                                                 // 439
   *                                                                                                                   // 440
   * Returns true if dtString is a "valid normalized local date and time string"                                       // 441
   */                                                                                                                  // 442
  isValidNormalizedLocalDateAndTimeString: function isValidNormalizedLocalDateAndTimeString(dtString) {                // 443
    if (typeof dtString !== "string")                                                                                  // 444
      return false;                                                                                                    // 445
                                                                                                                       // 446
    var datePart = dtString.substring(0, 10);                                                                          // 447
    var tPart = dtString.substring(10, 11);                                                                            // 448
    var timePart = dtString.substring(11, dtString.length);                                                            // 449
    return Utility.isValidDateString(datePart) && tPart === "T" && Utility.isValidTimeString(timePart);                // 450
  },                                                                                                                   // 451
  /**                                                                                                                  // 452
   * @method Utility.normalizeContext                                                                                  // 453
   * @private                                                                                                          // 454
   * @param  {Object} context A context object, potentially with an `atts` or `autoform` property.                     // 455
   * @param {String} name The name of the helper or component we're calling from, for in a potential error message.    // 456
   * @return {Object} Normalized context object                                                                        // 457
   *                                                                                                                   // 458
   * Returns an object with `afc`, `af`, and `atts` properties, normalized from whatever object is passed in.          // 459
   * This helps deal with the fact that we have to pass the ancestor autoform's context to different                   // 460
   * helpers and components in different ways, but in all cases we want to get access to it and throw                  // 461
   * an error if we can't find an autoform context.                                                                    // 462
   */                                                                                                                  // 463
  normalizeContext: function autoFormNormalizeContext(context, name) {                                                 // 464
    context = context || {};                                                                                           // 465
    var atts = context.atts || context;                                                                                // 466
    var autoform = AutoForm.find(name);                                                                                // 467
    var defs = Utility.getDefs(autoform.ss, atts.name); //defs will not be undefined                                   // 468
                                                                                                                       // 469
    // For array fields, `allowedValues` is on the array item definition                                               // 470
    if (defs.type === Array) {                                                                                         // 471
      var itemDefs = Utility.getDefs(autoform.ss, atts.name + ".$");                                                   // 472
      var allowedValues = itemDefs.allowedValues;                                                                      // 473
    } else {                                                                                                           // 474
      var allowedValues = defs.allowedValues;                                                                          // 475
    }                                                                                                                  // 476
                                                                                                                       // 477
    var defaultAttributes = defs.autoform || {};                                                                       // 478
                                                                                                                       // 479
    // This is where we add default attributes specified in                                                            // 480
    // defs.autoform. We don't add them for afFieldLabel.                                                              // 481
    if (name === "afFieldLabel") {                                                                                     // 482
      if (_.has(atts, "options")) {                                                                                    // 483
        delete atts.options;                                                                                           // 484
      }                                                                                                                // 485
    } else {                                                                                                           // 486
      // If options="auto", we want to use defs.autoform.options                                                       // 487
      // if specified and otherwise fall back to "allowed"                                                             // 488
      if (defaultAttributes.options && atts.options === "auto")                                                        // 489
        delete atts.options;                                                                                           // 490
      // "autoform" option in the schema provides default atts                                                         // 491
      atts = _.extend({}, defaultAttributes, atts);                                                                    // 492
      // If still set to "auto", then there were no options in defs, so we use "allowed"                               // 493
      if (atts.options === "auto") {                                                                                   // 494
        if (allowedValues) {                                                                                           // 495
          atts.options = "allowed";                                                                                    // 496
        } else {                                                                                                       // 497
          delete atts.options;                                                                                         // 498
        }                                                                                                              // 499
      }                                                                                                                // 500
    }                                                                                                                  // 501
                                                                                                                       // 502
    return {                                                                                                           // 503
      af: autoform,                                                                                                    // 504
      atts: atts,                                                                                                      // 505
      defs: defs                                                                                                       // 506
    };                                                                                                                 // 507
  },                                                                                                                   // 508
  /**                                                                                                                  // 509
   * @method Utility.stringToArray                                                                                     // 510
   * @private                                                                                                          // 511
   * @param {String|Array} A variable that might be a string or an array.                                              // 512
   * @return {Array} The array, building it from a comma-delimited string if necessary.                                // 513
   */                                                                                                                  // 514
  stringToArray: function stringToArray(s, errorMessage) {                                                             // 515
    if (typeof s === "string") {                                                                                       // 516
      return s.replace(/ /g, '').split(',');                                                                           // 517
    } else if (!_.isArray(s)) {                                                                                        // 518
      throw new Error(errorMessage);                                                                                   // 519
    } else {                                                                                                           // 520
      return s;                                                                                                        // 521
    }                                                                                                                  // 522
  }                                                                                                                    // 523
};                                                                                                                     // 524
                                                                                                                       // 525
                                                                                                                       // 526
// getPrototypeOf polyfill                                                                                             // 527
if (typeof Object.getPrototypeOf !== "function") {                                                                     // 528
  if (typeof "".__proto__ === "object") {                                                                              // 529
    Object.getPrototypeOf = function(object) {                                                                         // 530
      return object.__proto__;                                                                                         // 531
    };                                                                                                                 // 532
  } else {                                                                                                             // 533
    Object.getPrototypeOf = function(object) {                                                                         // 534
      // May break if the constructor has been tampered with                                                           // 535
      return object.constructor.prototype;                                                                             // 536
    };                                                                                                                 // 537
  }                                                                                                                    // 538
}                                                                                                                      // 539
                                                                                                                       // 540
/* Tests whether "obj" is an Object as opposed to                                                                      // 541
 * something that inherits from Object                                                                                 // 542
 *                                                                                                                     // 543
 * @param {any} obj                                                                                                    // 544
 * @returns {Boolean}                                                                                                  // 545
 */                                                                                                                    // 546
var isBasicObject = function(obj) {                                                                                    // 547
  return _.isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype;                                           // 548
};                                                                                                                     // 549
                                                                                                                       // 550
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/form-preserve.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * @constructor                                                                                                        // 2
 * @private                                                                                                            // 3
 * @param {String} migrationName                                                                                       // 4
 *                                                                                                                     // 5
 * Internal helper object to preserve form inputs across Hot Code Push                                                 // 6
 * and across "pages" navigation if the option is enabled.                                                             // 7
 */                                                                                                                    // 8
FormPreserve = function formPreserveConstructor(migrationName) {                                                       // 9
  var self = this;                                                                                                     // 10
  if (! _.isString(migrationName))                                                                                     // 11
    throw Error("You must define an unique migration name of type String");                                            // 12
  self.registeredForms = {};                                                                                           // 13
  self.retrievedDocuments = {};                                                                                        // 14
  if (Package.reload) {                                                                                                // 15
    var Reload = Package.reload.Reload;                                                                                // 16
    self.retrievedDocuments = Reload._migrationData(migrationName) || {};                                              // 17
    Reload._onMigrate(migrationName, function () {                                                                     // 18
      return [true, self._retrieveRegisteredDocuments()];                                                              // 19
    });                                                                                                                // 20
  }                                                                                                                    // 21
};                                                                                                                     // 22
                                                                                                                       // 23
FormPreserve.prototype.getDocument = function (formId) {                                                               // 24
  var self = this;                                                                                                     // 25
  if (! _.has(self.retrievedDocuments, formId))                                                                        // 26
    return false;                                                                                                      // 27
  else                                                                                                                 // 28
    return self.retrievedDocuments[formId];                                                                            // 29
};                                                                                                                     // 30
                                                                                                                       // 31
FormPreserve.prototype.registerForm = function (formId, retrieveFunc) {                                                // 32
  this.registeredForms[formId] = retrieveFunc;                                                                         // 33
};                                                                                                                     // 34
                                                                                                                       // 35
FormPreserve.prototype.unregisterForm = function (formId) {                                                            // 36
  delete this.registeredForms[formId];                                                                                 // 37
  delete this.retrievedDocuments[formId];                                                                              // 38
};                                                                                                                     // 39
                                                                                                                       // 40
FormPreserve.prototype.unregisterAllForms = function () {                                                              // 41
  var self = this;                                                                                                     // 42
  self.registeredForms = {};                                                                                           // 43
  self.retrievedDocuments = {};                                                                                        // 44
};                                                                                                                     // 45
                                                                                                                       // 46
FormPreserve.prototype._retrieveRegisteredDocuments = function () {                                                    // 47
  var self = this;                                                                                                     // 48
  res = {};                                                                                                            // 49
  _.each(self.registeredForms, function (retrieveFunc, formId) {                                                       // 50
    res[formId] = retrieveFunc();                                                                                      // 51
  });                                                                                                                  // 52
  return res;                                                                                                          // 53
};                                                                                                                     // 54
                                                                                                                       // 55
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/autoform-hooks.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Manages all hooks, supporting append/replace, get                                                                   // 1
                                                                                                                       // 2
Hooks = {                                                                                                              // 3
  form: {},                                                                                                            // 4
  global: {                                                                                                            // 5
    before: {},                                                                                                        // 6
    after: {},                                                                                                         // 7
    formToDoc: [],                                                                                                     // 8
    docToForm: [],                                                                                                     // 9
    onSubmit: [],                                                                                                      // 10
    onSuccess: [],                                                                                                     // 11
    onError: [],                                                                                                       // 12
    beginSubmit: [],                                                                                                   // 13
    endSubmit: []                                                                                                      // 14
  }                                                                                                                    // 15
};                                                                                                                     // 16
                                                                                                                       // 17
Hooks.addHooksToList = function addHooksToList(hooksList, hooks, replace) {                                            // 18
  // Add before hooks                                                                                                  // 19
  hooks.before && _.each(hooks.before, function autoFormBeforeHooksEach(func, type) {                                  // 20
    if (typeof func !== "function") {                                                                                  // 21
      throw new Error("AutoForm before hook must be a function, not " + typeof func);                                  // 22
    }                                                                                                                  // 23
    hooksList.before[type] = (!replace && hooksList.before[type]) ? hooksList.before[type] : [];                       // 24
    hooksList.before[type].push(func);                                                                                 // 25
  });                                                                                                                  // 26
                                                                                                                       // 27
  // Add after hooks                                                                                                   // 28
  hooks.after && _.each(hooks.after, function autoFormAfterHooksEach(func, type) {                                     // 29
    if (typeof func !== "function") {                                                                                  // 30
      throw new Error("AutoForm after hook must be a function, not " + typeof func);                                   // 31
    }                                                                                                                  // 32
    hooksList.after[type] = (!replace && hooksList.after[type]) ? hooksList.after[type] : [];                          // 33
    hooksList.after[type].push(func);                                                                                  // 34
  });                                                                                                                  // 35
                                                                                                                       // 36
  // Add all other hooks                                                                                               // 37
  _.each(['formToDoc', 'docToForm', 'onSubmit', 'onSuccess', 'onError', 'beginSubmit', 'endSubmit'], function autoFormHooksEach(name) {
    if (hooks[name]) {                                                                                                 // 39
      if (typeof hooks[name] !== "function") {                                                                         // 40
        throw new Error("AutoForm " + name + " hook must be a function, not " + typeof hooks[name]);                   // 41
      }                                                                                                                // 42
                                                                                                                       // 43
      if(replace) {                                                                                                    // 44
          hooksList[name] = [];                                                                                        // 45
      }                                                                                                                // 46
                                                                                                                       // 47
      hooksList[name].push(hooks[name]);                                                                               // 48
    }                                                                                                                  // 49
  });                                                                                                                  // 50
};                                                                                                                     // 51
                                                                                                                       // 52
Hooks.getHooks = function getHooks(formId, type, subtype) {                                                            // 53
  var f, g;                                                                                                            // 54
  if (subtype) {                                                                                                       // 55
    f = Hooks.form[formId] && Hooks.form[formId][type] && Hooks.form[formId][type][subtype] || [];                     // 56
    g = Hooks.global[type] && Hooks.global[type][subtype] || [];                                                       // 57
  } else {                                                                                                             // 58
    f = Hooks.form[formId] && Hooks.form[formId][type] || [];                                                          // 59
    g = Hooks.global[type] || [];                                                                                      // 60
  }                                                                                                                    // 61
  return f.concat(g);                                                                                                  // 62
};                                                                                                                     // 63
                                                                                                                       // 64
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/autoform-inputs.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Default Handlers                                                                                                    // 1
defaultInputValueHandlers = {                                                                                          // 2
	'select.autoform-boolean': function () {                                                                              // 3
		var val = this.val();                                                                                                // 4
		if (val === "true") {                                                                                                // 5
			return true;                                                                                                        // 6
		} else if (val === "false") {                                                                                        // 7
			return false;                                                                                                       // 8
		}                                                                                                                    // 9
	},                                                                                                                    // 10
	'select[multiple]': function () {                                                                                     // 11
		return Utility.getSelectValues(this[0]);                                                                             // 12
	},                                                                                                                    // 13
	'select': function () {                                                                                               // 14
		return this.val();                                                                                                   // 15
	},                                                                                                                    // 16
	'input.autoform-boolean[type=checkbox]': function () {                                                                // 17
		// boolean checkbox                                                                                                  // 18
		return this.is(":checked");                                                                                          // 19
	},                                                                                                                    // 20
	'input.autoform-array-item[type=checkbox]': function () {                                                             // 21
		// array checkbox                                                                                                    // 22
		if (this.is(":checked")) {                                                                                           // 23
			return this.val();                                                                                                  // 24
		}                                                                                                                    // 25
	},                                                                                                                    // 26
	'input.autoform-boolean[type=radio]': function () {                                                                   // 27
		//boolean radio                                                                                                      // 28
		var val = this.val();                                                                                                // 29
		if (this.is(":checked")) {                                                                                           // 30
			if (val === "true") {                                                                                               // 31
	        	return true;                                                                                                 // 32
	        } else if (val === "false") {                                                                                 // 33
	         	return false;                                                                                               // 34
	        }                                                                                                             // 35
		}                                                                                                                    // 36
	},                                                                                                                    // 37
	'input[type=radio]': function () {                                                                                    // 38
		if (this.is(":checked")) {                                                                                           // 39
			return this.val();                                                                                                  // 40
		}                                                                                                                    // 41
	},                                                                                                                    // 42
	'input.autoform-boolean[type=hidden]': function () {                                                                  // 43
		// type overridden to hidden, but schema expects boolean                                                             // 44
		var val = this.val();                                                                                                // 45
		if (val === "true") {                                                                                                // 46
			return true;                                                                                                        // 47
		} else if (val === "false") {                                                                                        // 48
			return false;                                                                                                       // 49
		}                                                                                                                    // 50
	},                                                                                                                    // 51
	'[type=select]': function () {                                                                                        // 52
		return Utility.maybeNum(this.val());                                                                                 // 53
	},                                                                                                                    // 54
	'input[type=date]': function () {                                                                                     // 55
		var val = this.val();                                                                                                // 56
		if (Utility.isValidDateString(val)) {                                                                                // 57
			//Date constructor will interpret val as UTC and create                                                             // 58
			//date at mignight in the morning of val date in UTC time zone                                                      // 59
			return new Date(val);                                                                                               // 60
		} else {                                                                                                             // 61
			return null;                                                                                                        // 62
		}                                                                                                                    // 63
	},                                                                                                                    // 64
	'input[type=datetime]': function () {                                                                                 // 65
		var val = this.val();                                                                                                // 66
		val = (typeof val === "string") ? val.replace(/ /g, "T") : val;                                                      // 67
		if (Utility.isValidNormalizedForcedUtcGlobalDateAndTimeString(val)) {                                                // 68
			//Date constructor will interpret val as UTC due to ending "Z"                                                      // 69
			return new Date(val);                                                                                               // 70
		} else {                                                                                                             // 71
			return null;                                                                                                        // 72
		}                                                                                                                    // 73
	},                                                                                                                    // 74
	'input[type=datetime-local]': function () {                                                                           // 75
		var val = this.val();                                                                                                // 76
		val = (typeof val === "string") ? val.replace(/ /g, "T") : val;                                                      // 77
		if (Utility.isValidNormalizedLocalDateAndTimeString(val)) {                                                          // 78
			var timezoneId = this.attr("data-timezone-id");                                                                     // 79
			// default is local, but if there's a timezoneId, we use that                                                       // 80
			if (typeof timezoneId === "string") {                                                                               // 81
				if (typeof moment.tz !== "function") {                                                                             // 82
	        throw new Error("If you specify a timezoneId, make sure that you've added a moment-timezone package to your app");
	      }                                                                                                               // 84
	      return moment.tz(val, timezoneId).toDate();                                                                     // 85
			} else {                                                                                                            // 86
				return moment(val).toDate();                                                                                       // 87
			}                                                                                                                   // 88
		} else {                                                                                                             // 89
			return null;                                                                                                        // 90
		}                                                                                                                    // 91
	},                                                                                                                    // 92
	'[contenteditable]': function () {                                                                                    // 93
		return this.html();                                                                                                  // 94
	},                                                                                                                    // 95
	'[data-null-value]': function () {                                                                                    // 96
		return null;                                                                                                         // 97
	},                                                                                                                    // 98
	'[data-schema-key]': function () {                                                                                    // 99
		// fallback                                                                                                          // 100
		return this.val();                                                                                                   // 101
	}                                                                                                                     // 102
};                                                                                                                     // 103
                                                                                                                       // 104
// must be used in a template helper                                                                                   // 105
expectsArray = function expectsArray(inputAtts) {                                                                      // 106
	// If the user overrides the type to anything,                                                                        // 107
  // then we won't be using a select box and                                                                           // 108
  // we won't be expecting an array for the current value.                                                             // 109
  // This logic should probably be more robust. The idea is that                                                       // 110
  // the user should be able to specify any type of control to use                                                     // 111
  // to override the default logic, and then she can use either a custom input                                         // 112
  // handler or formToDoc hook to change the value into the expected array.                                            // 113
	return (AutoForm.getSchemaForField(inputAtts.name).type === Array && !inputAtts.type);                                // 114
};                                                                                                                     // 115
                                                                                                                       // 116
// Determines based on different options what type of input/control should be used                                     // 117
getInputType = function getInputType(atts) {                                                                           // 118
	// Does the schema/form expect the value of the field to be an array?                                                 // 119
	var expectsArray = AutoForm.expectsArray(atts);                                                                       // 120
                                                                                                                       // 121
	// What is the `type` in the schema definition?                                                                       // 122
	var defs = AutoForm.getSchemaForField(atts.name);                                                                     // 123
  var schemaType = defs.type;                                                                                          // 124
  if (schemaType === Array) {                                                                                          // 125
    schemaType = AutoForm.find().ss.schema(atts.name + ".$");                                                          // 126
  }                                                                                                                    // 127
                                                                                                                       // 128
  // Based on the `type` attribute, the `type` from the schema, and/or                                                 // 129
  // other characteristics such as regEx and whether an array is expected,                                             // 130
  // choose which type string to return.                                                                               // 131
  // TODO allow outside packages to extend/override this logic.                                                        // 132
  var type = "text";                                                                                                   // 133
  if (atts.type) {                                                                                                     // 134
    type = atts.type;                                                                                                  // 135
  } else if (atts.options) {                                                                                           // 136
    if (atts.noselect) {                                                                                               // 137
      if (expectsArray) {                                                                                              // 138
        type = "select-checkbox";                                                                                      // 139
      } else {                                                                                                         // 140
        type = "select-radio";                                                                                         // 141
      }                                                                                                                // 142
    } else {                                                                                                           // 143
      type = "select";                                                                                                 // 144
    }                                                                                                                  // 145
  } else if (schemaType === String && defs.regEx === SimpleSchema.RegEx.Email) {                                       // 146
    type = "email";                                                                                                    // 147
  } else if (schemaType === String && defs.regEx === SimpleSchema.RegEx.Url) {                                         // 148
    type = "url";                                                                                                      // 149
  } else if (schemaType === String && atts.rows) {                                                                     // 150
    type = "textarea";                                                                                                 // 151
  } else if (schemaType === Number) {                                                                                  // 152
    type = "number";                                                                                                   // 153
  } else if (schemaType === Date) {                                                                                    // 154
    type = "date";                                                                                                     // 155
  } else if (schemaType === Boolean) {                                                                                 // 156
    if (atts.radio) {                                                                                                  // 157
      type = "boolean-radios";                                                                                         // 158
    } else if (atts.select) {                                                                                          // 159
      type = "boolean-select";                                                                                         // 160
    } else {                                                                                                           // 161
      type = "boolean-checkbox";                                                                                       // 162
    }                                                                                                                  // 163
  }                                                                                                                    // 164
  return type;                                                                                                         // 165
};                                                                                                                     // 166
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/autoform-formdata.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Tracks form data; particularly needed to track the number of items in arrays in the doc                             // 1
                                                                                                                       // 2
FormData = function afFormData() {                                                                                     // 3
	var self = this;                                                                                                      // 4
	self.forms = {};                                                                                                      // 5
};                                                                                                                     // 6
                                                                                                                       // 7
FormData.prototype.initForm = function fdInitForm(formId) {                                                            // 8
	var self = this;                                                                                                      // 9
                                                                                                                       // 10
	if (self.forms[formId])                                                                                               // 11
		return;                                                                                                              // 12
                                                                                                                       // 13
	self.forms[formId] = {                                                                                                // 14
		sourceDoc: null,                                                                                                     // 15
		deps: {                                                                                                              // 16
			sourceDoc: new Deps.Dependency                                                                                      // 17
		}                                                                                                                    // 18
	};                                                                                                                    // 19
};                                                                                                                     // 20
                                                                                                                       // 21
FormData.prototype.sourceDoc = function fdSourceDoc(formId, sourceDoc) {                                               // 22
	var self = this;                                                                                                      // 23
	self.initForm(formId);                                                                                                // 24
                                                                                                                       // 25
	if (sourceDoc) {                                                                                                      // 26
		//setter                                                                                                             // 27
		self.forms[formId].sourceDoc = sourceDoc;                                                                            // 28
		self.forms[formId].deps.sourceDoc.changed();                                                                         // 29
	} else {                                                                                                              // 30
		//getter                                                                                                             // 31
		self.forms[formId].deps.sourceDoc.depend();                                                                          // 32
		return self.forms[formId].sourceDoc;                                                                                 // 33
	}                                                                                                                     // 34
};                                                                                                                     // 35
                                                                                                                       // 36
FormData.prototype.getDocCountForField = function fdGetDocCountForField(formId, field) {                               // 37
	var self = this;                                                                                                      // 38
	var mDoc = self.sourceDoc(formId);                                                                                    // 39
	var docCount;                                                                                                         // 40
	if (mDoc) {                                                                                                           // 41
		var keyInfo = mDoc.getInfoForKey(field);                                                                             // 42
		if (keyInfo && _.isArray(keyInfo.value)) {                                                                           // 43
			docCount = keyInfo.value.length                                                                                     // 44
		}                                                                                                                    // 45
	}                                                                                                                     // 46
	return docCount;                                                                                                      // 47
};                                                                                                                     // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/autoform-arrays.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Track arrays; this allows us to add/remove fields or groups of fields for an array                                  // 1
// but still easily respect minCount and maxCount, and properly add/remove the same                                    // 2
// items from the database once the form is submitted.                                                                 // 3
                                                                                                                       // 4
ArrayTracker = function afArrayTracker() {                                                                             // 5
  var self = this;                                                                                                     // 6
  self.info = {};                                                                                                      // 7
};                                                                                                                     // 8
                                                                                                                       // 9
ArrayTracker.prototype.getMinMax = function atGetMinMax(ss, field, overrideMinCount, overrideMaxCount) {               // 10
  var defs = Utility.getDefs(ss, field);                                                                               // 11
                                                                                                                       // 12
  // minCount is set by the schema, but can be set higher on the field attribute                                       // 13
  overrideMinCount = overrideMinCount || 0;                                                                            // 14
  var minCount = defs.minCount || 0;                                                                                   // 15
  minCount = Math.max(overrideMinCount, minCount);                                                                     // 16
                                                                                                                       // 17
  // maxCount is set by the schema, but can be set lower on the field attribute                                        // 18
  overrideMaxCount = overrideMaxCount || Infinity;                                                                     // 19
  var maxCount = defs.maxCount || Infinity;                                                                            // 20
  maxCount = Math.min(overrideMaxCount, maxCount);                                                                     // 21
                                                                                                                       // 22
  return {minCount: minCount, maxCount: maxCount};                                                                     // 23
};                                                                                                                     // 24
                                                                                                                       // 25
ArrayTracker.prototype.initForm = function atInitForm(formId) {                                                        // 26
	var self = this;                                                                                                      // 27
                                                                                                                       // 28
	if (self.info[formId])                                                                                                // 29
		return;                                                                                                              // 30
                                                                                                                       // 31
	self.info[formId] = {};                                                                                               // 32
};                                                                                                                     // 33
                                                                                                                       // 34
ArrayTracker.prototype.getForm = function atInitForm(formId) {                                                         // 35
	var self = this;                                                                                                      // 36
	self.initForm(formId);                                                                                                // 37
	return self.info[formId];                                                                                             // 38
};                                                                                                                     // 39
                                                                                                                       // 40
ArrayTracker.prototype.ensureField = function atEnsureField(formId, field) {                                           // 41
	var self = this;                                                                                                      // 42
	self.initForm(formId);                                                                                                // 43
                                                                                                                       // 44
	if (!self.info[formId][field]) {                                                                                      // 45
		self.resetField(formId, field);                                                                                      // 46
	}                                                                                                                     // 47
};                                                                                                                     // 48
                                                                                                                       // 49
ArrayTracker.prototype.initField = function atInitField(formId, field, ss, docCount, overrideMinCount, overrideMaxCount) {
	var self = this;                                                                                                      // 51
	self.ensureField(formId, field);                                                                                      // 52
                                                                                                                       // 53
	if (self.info[formId][field].array != null)                                                                           // 54
		return;                                                                                                              // 55
                                                                                                                       // 56
	// If we have a doc: The count should be the maximum of docCount or schema minCount or field minCount or 1.           // 57
	// If we don't have a doc: The count should be the maximum of schema minCount or field minCount or 1.                 // 58
	var range = self.getMinMax(ss, field, overrideMinCount, overrideMaxCount);                                            // 59
	var arrayCount = Math.max(range.minCount, (docCount == null) ? 1 : docCount);                                         // 60
                                                                                                                       // 61
	// If this is an array of objects, collect names of object props                                                      // 62
	var childKeys = [];                                                                                                   // 63
	if (ss.schema(field + '.$').type === Object) {                                                                        // 64
    childKeys = ss.objectKeys(SimpleSchema._makeGeneric(field) + '.$');                                                // 65
	}                                                                                                                     // 66
                                                                                                                       // 67
	var loopArray = [];                                                                                                   // 68
	for (var i = 0; i < arrayCount; i++) {                                                                                // 69
		var loopCtx = createLoopCtx(formId, field, i, childKeys, overrideMinCount, overrideMaxCount);                        // 70
		loopArray.push(loopCtx);                                                                                             // 71
	};                                                                                                                    // 72
                                                                                                                       // 73
	self.info[formId][field].array = loopArray;                                                                           // 74
	var count = loopArray.length;                                                                                         // 75
	self.info[formId][field].count = count;                                                                               // 76
	self.info[formId][field].visibleCount = count;                                                                        // 77
	self.info[formId][field].deps.changed();                                                                              // 78
};                                                                                                                     // 79
                                                                                                                       // 80
ArrayTracker.prototype.resetField = function atResetField(formId, field) {                                             // 81
	var self = this;                                                                                                      // 82
	self.initForm(formId);                                                                                                // 83
                                                                                                                       // 84
	if (!self.info[formId][field]) {                                                                                      // 85
		self.info[formId][field] = {                                                                                         // 86
			deps: new Deps.Dependency                                                                                           // 87
		};                                                                                                                   // 88
	}                                                                                                                     // 89
                                                                                                                       // 90
	self.info[formId][field].array = null;                                                                                // 91
	self.info[formId][field].count = 0;                                                                                   // 92
	self.info[formId][field].visibleCount = 0;                                                                            // 93
	self.info[formId][field].deps.changed();                                                                              // 94
};                                                                                                                     // 95
                                                                                                                       // 96
ArrayTracker.prototype.resetForm = function atResetForm(formId) {                                                      // 97
	var self = this;                                                                                                      // 98
	_.each(self.info[formId], function (info, field) {                                                                    // 99
		self.resetField(formId, field);                                                                                      // 100
	});                                                                                                                   // 101
};                                                                                                                     // 102
                                                                                                                       // 103
ArrayTracker.prototype.untrackForm = function atUntrackForm(formId) {                                                  // 104
	var self = this;                                                                                                      // 105
	self.info[formId] = {};                                                                                               // 106
};                                                                                                                     // 107
                                                                                                                       // 108
ArrayTracker.prototype.tracksField = function atTracksField(formId, field) {                                           // 109
	var self = this;                                                                                                      // 110
	self.ensureField(formId, field);                                                                                      // 111
	self.info[formId][field].deps.depend();                                                                               // 112
	return !!self.info[formId][field].array;                                                                              // 113
};                                                                                                                     // 114
                                                                                                                       // 115
ArrayTracker.prototype.getField = function atGetField(formId, field) {                                                 // 116
	var self = this;                                                                                                      // 117
	self.ensureField(formId, field);                                                                                      // 118
	self.info[formId][field].deps.depend();                                                                               // 119
	return self.info[formId][field].array;                                                                                // 120
};                                                                                                                     // 121
                                                                                                                       // 122
ArrayTracker.prototype.getCount = function atGetCount(formId, field) {                                                 // 123
	var self = this;                                                                                                      // 124
	self.ensureField(formId, field);                                                                                      // 125
	self.info[formId][field].deps.depend();                                                                               // 126
	return self.info[formId][field].count;                                                                                // 127
};                                                                                                                     // 128
                                                                                                                       // 129
ArrayTracker.prototype.getVisibleCount = function atGetVisibleCount(formId, field) {                                   // 130
	var self = this;                                                                                                      // 131
	self.ensureField(formId, field);                                                                                      // 132
	self.info[formId][field].deps.depend();                                                                               // 133
	return self.info[formId][field].visibleCount;                                                                         // 134
};                                                                                                                     // 135
                                                                                                                       // 136
ArrayTracker.prototype.isFirstFieldlVisible = function atIsFirstFieldlVisible(formId, field, currentIndex) {           // 137
	var self = this;                                                                                                      // 138
	self.ensureField(formId, field);                                                                                      // 139
	self.info[formId][field].deps.depend();                                                                               // 140
	var firstVisibleField = _.find(self.info[formId][field].array, function(currentField) {                               // 141
		return !currentField.removed;                                                                                        // 142
	});                                                                                                                   // 143
	return (firstVisibleField && firstVisibleField.index === currentIndex);                                               // 144
};                                                                                                                     // 145
                                                                                                                       // 146
ArrayTracker.prototype.isLastFieldlVisible = function atIsLastFieldlVisible(formId, field, currentIndex) {             // 147
	var self = this;                                                                                                      // 148
	self.ensureField(formId, field);                                                                                      // 149
	self.info[formId][field].deps.depend();                                                                               // 150
	var lastVisibleField = _.last(_.filter(self.info[formId][field].array, function(currentField) {                       // 151
		return !currentField.removed;                                                                                        // 152
	}));                                                                                                                  // 153
	return (lastVisibleField && lastVisibleField.index === currentIndex);                                                 // 154
};                                                                                                                     // 155
                                                                                                                       // 156
ArrayTracker.prototype.addOneToField = function atAddOneToField(formId, field, ss, overrideMinCount, overrideMaxCount) {
  var self = this;                                                                                                     // 158
  self.ensureField(formId, field);                                                                                     // 159
                                                                                                                       // 160
  if (!self.info[formId][field].array) {                                                                               // 161
  	return;                                                                                                             // 162
  }                                                                                                                    // 163
                                                                                                                       // 164
  var currentCount = self.info[formId][field].visibleCount                                                             // 165
  var maxCount = self.getMinMax(ss, field, overrideMinCount, overrideMaxCount).maxCount;                               // 166
                                                                                                                       // 167
  if (currentCount < maxCount) {                                                                                       // 168
	  var i = self.info[formId][field].array.length;                                                                      // 169
                                                                                                                       // 170
	  // If this is an array of objects, collect names of object props                                                    // 171
	  var childKeys = [];                                                                                                 // 172
	  if (ss.schema(field + '.$').type === Object) {                                                                      // 173
      childKeys = ss.objectKeys(SimpleSchema._makeGeneric(field) + '.$');                                              // 174
	  }                                                                                                                   // 175
                                                                                                                       // 176
	  var loopCtx = createLoopCtx(formId, field, i, childKeys, overrideMinCount, overrideMaxCount);                       // 177
                                                                                                                       // 178
	  self.info[formId][field].array.push(loopCtx);                                                                       // 179
	  self.info[formId][field].count++;                                                                                   // 180
	  self.info[formId][field].visibleCount++;                                                                            // 181
	  self.info[formId][field].deps.changed();                                                                            // 182
  }                                                                                                                    // 183
};                                                                                                                     // 184
                                                                                                                       // 185
ArrayTracker.prototype.removeFromFieldAtIndex = function atRemoveFromFieldAtIndex(formId, field, index, ss, overrideMinCount, overrideMaxCount) {
  var self = this;                                                                                                     // 187
  self.ensureField(formId, field);                                                                                     // 188
                                                                                                                       // 189
  if (!self.info[formId][field].array) {                                                                               // 190
  	return;                                                                                                             // 191
  }                                                                                                                    // 192
                                                                                                                       // 193
  var currentCount = self.info[formId][field].visibleCount                                                             // 194
  var minCount = self.getMinMax(ss, field, overrideMinCount, overrideMaxCount).minCount;                               // 195
                                                                                                                       // 196
  if (currentCount > minCount) {                                                                                       // 197
    self.info[formId][field].array[index].removed = true;                                                              // 198
    self.info[formId][field].count--;                                                                                  // 199
    self.info[formId][field].visibleCount--;                                                                           // 200
    self.info[formId][field].deps.changed();                                                                           // 201
  }                                                                                                                    // 202
}                                                                                                                      // 203
                                                                                                                       // 204
/*                                                                                                                     // 205
 * PRIVATE                                                                                                             // 206
 */                                                                                                                    // 207
var createLoopCtx = function(formId, field, index, childKeys, overrideMinCount, overrideMaxCount) {                    // 208
  var loopCtx = {                                                                                                      // 209
  	formId:         formId,                                                                                             // 210
  	arrayFieldName: field,                                                                                              // 211
  	name:           field + '.' + index,                                                                                // 212
  	index:          index,                                                                                              // 213
  	minCount:       overrideMinCount,                                                                                   // 214
  	maxCount:       overrideMaxCount                                                                                    // 215
  };                                                                                                                   // 216
                                                                                                                       // 217
  // If this is an array of objects, add child key names under loopCtx.current[childName] = fullKeyName                // 218
  if (childKeys.length) {                                                                                              // 219
    loopCtx.current = {};                                                                                              // 220
	_.each(childKeys, function (k) {                                                                                      // 221
	  loopCtx.current[k] = field + '.' + index + '.' + k;                                                                 // 222
    });                                                                                                                // 223
  }                                                                                                                    // 224
                                                                                                                       // 225
  return loopCtx;                                                                                                      // 226
}                                                                                                                      // 227
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/autoform.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
defaultFormId = "_afGenericID";                                                                                        // 1
formPreserve = new FormPreserve("autoforms");                                                                          // 2
formData = {}; //for looking up autoform data by form ID                                                               // 3
templatesById = {}; //keep a reference of autoForm templates by form `id` for AutoForm.getFormValues                   // 4
formValues = {}; //for reactive show/hide based on current value of a field                                            // 5
formDeps = {}; //for invalidating the form inner context and causing rerender                                          // 6
fd = new FormData();                                                                                                   // 7
arrayTracker = new ArrayTracker();                                                                                     // 8
customInputValueHandlers = {};                                                                                         // 9
defaultTemplate = "bootstrap3";                                                                                        // 10
// All use global template by default                                                                                  // 11
defaultTypeTemplates = {                                                                                               // 12
  quickForm: null,                                                                                                     // 13
  afFieldLabel: null,                                                                                                  // 14
  afFieldSelect: null,                                                                                                 // 15
  afCheckboxGroup: null,                                                                                               // 16
  afRadioGroup: null,                                                                                                  // 17
  afSelect: null,                                                                                                      // 18
  afTextarea: null,                                                                                                    // 19
  afContenteditable: null,                                                                                             // 20
  afCheckbox: null,                                                                                                    // 21
  afRadio: null,                                                                                                       // 22
  afInput: null,                                                                                                       // 23
  afFormGroup: null,                                                                                                   // 24
  afObjectField: null,                                                                                                 // 25
  afArrayField: null                                                                                                   // 26
};                                                                                                                     // 27
                                                                                                                       // 28
deps = {                                                                                                               // 29
  defaultTemplate: new Deps.Dependency,                                                                                // 30
  defaultTypeTemplates: {                                                                                              // 31
    quickForm: new Deps.Dependency,                                                                                    // 32
    afFieldLabel: new Deps.Dependency,                                                                                 // 33
    afFieldSelect: new Deps.Dependency,                                                                                // 34
    afCheckboxGroup: new Deps.Dependency,                                                                              // 35
    afRadioGroup: new Deps.Dependency,                                                                                 // 36
    afSelect: new Deps.Dependency,                                                                                     // 37
    afTextarea: new Deps.Dependency,                                                                                   // 38
    afContenteditable: new Deps.Dependency,                                                                            // 39
    afCheckbox: new Deps.Dependency,                                                                                   // 40
    afRadio: new Deps.Dependency,                                                                                      // 41
    afInput: new Deps.Dependency,                                                                                      // 42
    afFormGroup: new Deps.Dependency,                                                                                  // 43
    afObjectField: new Deps.Dependency,                                                                                // 44
    afArrayField: new Deps.Dependency                                                                                  // 45
  }                                                                                                                    // 46
};                                                                                                                     // 47
                                                                                                                       // 48
/*                                                                                                                     // 49
 * Private Helper Functions                                                                                            // 50
 */                                                                                                                    // 51
                                                                                                                       // 52
function getFieldsValues(fields) {                                                                                     // 53
  var doc = {};                                                                                                        // 54
  fields.each(function formValuesEach() {                                                                              // 55
    var field = $(this);                                                                                               // 56
    var fieldName = field.attr("data-schema-key");                                                                     // 57
                                                                                                                       // 58
    // use custom handlers first, and then use built-in handlers                                                       // 59
    _.every([customInputValueHandlers, defaultInputValueHandlers], function (handlerList) {                            // 60
      return _.every(handlerList, function (handler, selector) {                                                       // 61
        if (field.filter(selector).length === 1) {                                                                     // 62
          // Special handling for checkboxes that create arrays                                                        // 63
          // XXX maybe there is a way to do this better                                                                // 64
          var isArrayCheckBox = (field.hasClass("autoform-array-item"));                                               // 65
          if (isArrayCheckBox) {                                                                                       // 66
            // Add empty array no matter what,                                                                         // 67
            // to ensure that unchecking all boxes                                                                     // 68
            // will empty the array.                                                                                   // 69
            if (!_.isArray(doc[fieldName])) {                                                                          // 70
              doc[fieldName] = [];                                                                                     // 71
            }                                                                                                          // 72
          }                                                                                                            // 73
          var val = handler.call(field);                                                                               // 74
          if (val !== void 0) {                                                                                        // 75
            if (isArrayCheckBox) {                                                                                     // 76
              doc[fieldName].push(val);                                                                                // 77
            } else {                                                                                                   // 78
              doc[fieldName] = val;                                                                                    // 79
            }                                                                                                          // 80
          }                                                                                                            // 81
          return false;                                                                                                // 82
        }                                                                                                              // 83
        return true;                                                                                                   // 84
      });                                                                                                              // 85
    });                                                                                                                // 86
  });                                                                                                                  // 87
                                                                                                                       // 88
  return doc;                                                                                                          // 89
}                                                                                                                      // 90
                                                                                                                       // 91
getFieldValue = function getFieldValue(template, key) {                                                                // 92
  var doc = getFieldsValues(template.$('[data-schema-key="' + key + '"], [data-schema-key^="' + key + '."]'));         // 93
  return doc && doc[key];                                                                                              // 94
};                                                                                                                     // 95
                                                                                                                       // 96
getFormValues = function getFormValues(template, formId, ss) {                                                         // 97
  var formInfo = formData[formId];                                                                                     // 98
  // By default, we do not keep empty strings                                                                          // 99
  var keepEmptyStrings = false;                                                                                        // 100
  if (formInfo.removeEmptyStrings === false) {                                                                         // 101
    keepEmptyStrings = true;                                                                                           // 102
  }                                                                                                                    // 103
  // By default, we do filter                                                                                          // 104
  var filter = true;                                                                                                   // 105
  if (formInfo.filter === false) {                                                                                     // 106
    filter = false;                                                                                                    // 107
  }                                                                                                                    // 108
  // By default, we do autoConvert                                                                                     // 109
  var autoConvert = true;                                                                                              // 110
  if (formInfo.autoConvert === false) {                                                                                // 111
    autoConvert = false;                                                                                               // 112
  }                                                                                                                    // 113
  // By default, we do trimStrings                                                                                     // 114
  var trimStrings = true;                                                                                              // 115
  if (formInfo.trimStrings === false) {                                                                                // 116
    trimStrings = false;                                                                                               // 117
  }                                                                                                                    // 118
                                                                                                                       // 119
  // Build doc from field values                                                                                       // 120
  var doc = getFieldsValues(template.$("[data-schema-key]").not("[disabled]"));                                        // 121
                                                                                                                       // 122
  // Expand the object                                                                                                 // 123
  doc = Utility.expandObj(doc);                                                                                        // 124
                                                                                                                       // 125
  // As array items are removed, gaps can appear in the numbering,                                                     // 126
  // which results in arrays that have undefined items. Here we                                                        // 127
  // remove any array items that are undefined.                                                                        // 128
  Utility.compactArrays(doc);                                                                                          // 129
                                                                                                                       // 130
  // When all fields that comprise a sub-object are empty, we should unset                                             // 131
  // the whole subobject and not complain about required fields in it. For example,                                    // 132
  // if `profile.address` has several properties but they are all null or undefined,                                   // 133
  // we will set `profile.address=null`. This ensures that we don't get incorrect validation                           // 134
  // errors about required fields that are children of optional objects.                                               // 135
  Utility.bubbleEmpty(doc, keepEmptyStrings);                                                                          // 136
                                                                                                                       // 137
  // Pass expanded doc through formToDoc hooks                                                                         // 138
  var hookCtx = {                                                                                                      // 139
    template: template,                                                                                                // 140
    formId: formId                                                                                                     // 141
  };                                                                                                                   // 142
  var transforms = Hooks.getHooks(formId, 'formToDoc');                                                                // 143
  _.each(transforms, function formValuesTransform(transform) {                                                         // 144
    doc = transform.call(hookCtx, doc, ss, formId);                                                                    // 145
  });                                                                                                                  // 146
                                                                                                                       // 147
  // We return doc, insertDoc, and updateDoc.                                                                          // 148
  // For insertDoc, delete any properties that are null, undefined, or empty strings.                                  // 149
  // For updateDoc, convert to modifier object with $set and $unset.                                                   // 150
  // Do not add auto values to either.                                                                                 // 151
  var result = {                                                                                                       // 152
    insertDoc: ss.clean(Utility.cleanNulls(doc, false, keepEmptyStrings), {                                            // 153
      isModifier: false,                                                                                               // 154
      getAutoValues: false,                                                                                            // 155
      filter: filter,                                                                                                  // 156
      autoConvert: autoConvert,                                                                                        // 157
      trimStrings: trimStrings                                                                                         // 158
    }),                                                                                                                // 159
    updateDoc: ss.clean(Utility.docToModifier(doc, keepEmptyStrings), {                                                // 160
      isModifier: true,                                                                                                // 161
      getAutoValues: false,                                                                                            // 162
      filter: filter,                                                                                                  // 163
      autoConvert: autoConvert,                                                                                        // 164
      trimStrings: trimStrings                                                                                         // 165
    })                                                                                                                 // 166
  };                                                                                                                   // 167
  return result;                                                                                                       // 168
};                                                                                                                     // 169
                                                                                                                       // 170
/*                                                                                                                     // 171
 * Gets the value that should be shown/selected in the input. Returns                                                  // 172
 * a string, a boolean, or an array of strings. The value used,                                                        // 173
 * in order of preference, is one of:                                                                                  // 174
 * * The `value` attribute provided                                                                                    // 175
 * * The value that is set in the `doc` provided on the containing autoForm                                            // 176
 * * The `defaultValue` from the schema                                                                                // 177
 */                                                                                                                    // 178
getInputValue = function getInputValue(name, atts, expectsArray, inputType, value, mDoc, defaultValue) {               // 179
  if (typeof value === "undefined") {                                                                                  // 180
    // Get the value for this key in the current document                                                              // 181
    if (mDoc) {                                                                                                        // 182
      var valueInfo = mDoc.getInfoForKey(name);                                                                        // 183
      if (valueInfo) {                                                                                                 // 184
        value = valueInfo.value;                                                                                       // 185
      }                                                                                                                // 186
    }                                                                                                                  // 187
                                                                                                                       // 188
    // Only if there is no current document, use the schema defaultValue                                               // 189
    else if (defaultValue !== null && defaultValue !== undefined) {                                                    // 190
      value = defaultValue;                                                                                            // 191
    }                                                                                                                  // 192
  }                                                                                                                    // 193
                                                                                                                       // 194
  // Change null or undefined to an empty string                                                                       // 195
  value = (value == null) ? '' : value;                                                                                // 196
                                                                                                                       // 197
  function stringValue(val) {                                                                                          // 198
    if (val instanceof Date) {                                                                                         // 199
      //convert Dates to string value based on field inputType                                                         // 200
      if (value instanceof Date) {                                                                                     // 201
        if (inputType === "datetime") {                                                                                // 202
          return Utility.dateToNormalizedForcedUtcGlobalDateAndTimeString(val);                                        // 203
        } else if (inputType === "datetime-local") {                                                                   // 204
          return Utility.dateToNormalizedLocalDateAndTimeString(val, atts.timezoneId);                                 // 205
        } else {                                                                                                       // 206
          // This fallback will be used for type="date" as well                                                        // 207
          // as for select arrays, since it would not make much                                                        // 208
          // sense to do anything other than the date portion                                                          // 209
          // in select controls.                                                                                       // 210
          return Utility.dateToDateStringUTC(val);                                                                     // 211
        }                                                                                                              // 212
      }                                                                                                                // 213
    } else if (val.toString) {                                                                                         // 214
      return val.toString();                                                                                           // 215
    } else {                                                                                                           // 216
      return val;                                                                                                      // 217
    }                                                                                                                  // 218
  }                                                                                                                    // 219
                                                                                                                       // 220
  // If we're expecting value to be an array, and it's not, make it one                                                // 221
  if (expectsArray && !_.isArray(value)) {                                                                             // 222
    if (typeof value === "string") {                                                                                   // 223
      value = value.split(',');                                                                                        // 224
    } else {                                                                                                           // 225
      value = [value];                                                                                                 // 226
    }                                                                                                                  // 227
  }                                                                                                                    // 228
                                                                                                                       // 229
  // Convert to strings                                                                                                // 230
  if (_.isArray(value)) {                                                                                              // 231
    value = _.map(value, function (v) {                                                                                // 232
      return stringValue(v);                                                                                           // 233
    });                                                                                                                // 234
  } else {                                                                                                             // 235
    value = stringValue(value);                                                                                        // 236
  }                                                                                                                    // 237
                                                                                                                       // 238
  // Switch to a boolean value for boolean fields                                                                      // 239
  if (inputType === "boolean-radios" || inputType === "boolean-select" || inputType === "boolean-checkbox") {          // 240
    value = (value === "true") ? true : false;                                                                         // 241
  }                                                                                                                    // 242
                                                                                                                       // 243
  // We return either a string, a boolean, or an array of strings                                                      // 244
  return value;                                                                                                        // 245
};                                                                                                                     // 246
                                                                                                                       // 247
getInputData = function getInputData(defs, hash, value, inputType, label, expectsArray, submitType, _af) {             // 248
  var schemaType = defs.type;                                                                                          // 249
                                                                                                                       // 250
  // We don't want to alter the original hash, so we clone it and                                                      // 251
  // remove some stuff that should not be HTML attributes                                                              // 252
  // XXX It would be better to use a whitelist of allowed attributes                                                   // 253
  var inputAtts = _.omit(hash,                                                                                         // 254
          "autoform",                                                                                                  // 255
          "value",                                                                                                     // 256
          "firstOption",                                                                                               // 257
          "radio",                                                                                                     // 258
          "select",                                                                                                    // 259
          "noselect",                                                                                                  // 260
          "trueLabel",                                                                                                 // 261
          "falseLabel",                                                                                                // 262
          "options",                                                                                                   // 263
          "offset", //deprecated attr, but we'll remove it for now                                                     // 264
          "timezoneId",                                                                                                // 265
          "template");                                                                                                 // 266
                                                                                                                       // 267
  // Add required to every type of element, if required                                                                // 268
  if (typeof inputAtts.required === "undefined" && !defs.optional) {                                                   // 269
    inputAtts.required = "";                                                                                           // 270
  }                                                                                                                    // 271
                                                                                                                       // 272
  // Add disabled or readonly if the form has that submit type                                                         // 273
  if (submitType === "disabled") {                                                                                     // 274
    inputAtts.disabled = "";                                                                                           // 275
  } else if (submitType === "readonly") {                                                                              // 276
    inputAtts.readonly = "";                                                                                           // 277
  }                                                                                                                    // 278
                                                                                                                       // 279
  var min = (typeof defs.min === "function") ? defs.min() : defs.min;                                                  // 280
  var max = (typeof defs.max === "function") ? defs.max() : defs.max;                                                  // 281
                                                                                                                       // 282
  if (inputType === "datetime-local") {                                                                                // 283
    if (typeof hash.timezoneId === "string") {                                                                         // 284
      inputAtts["data-timezone-id"] = hash.timezoneId;                                                                 // 285
    }                                                                                                                  // 286
  }                                                                                                                    // 287
                                                                                                                       // 288
  // Extract settings from hash                                                                                        // 289
  var firstOption = hash.firstOption;                                                                                  // 290
  var radio = hash.radio;                                                                                              // 291
  var select = hash.select;                                                                                            // 292
  var noselect = hash.noselect;                                                                                        // 293
  var trueLabel = hash.trueLabel || "True";                                                                            // 294
  var falseLabel = hash.falseLabel || "False";                                                                         // 295
  var selectOptions = hash.options;                                                                                    // 296
                                                                                                                       // 297
  // Handle options="allowed"                                                                                          // 298
  if (selectOptions === "allowed") {                                                                                   // 299
    selectOptions = _.map(defs.allowedValues, function(v) {                                                            // 300
      var label = v;                                                                                                   // 301
      if (hash.capitalize && v.length > 0 && schemaType === String) {                                                  // 302
        label = v.charAt(0).toUpperCase() + v.slice(1).toLowerCase();                                                  // 303
      }                                                                                                                // 304
                                                                                                                       // 305
      return {label: label, value: v};                                                                                 // 306
    });                                                                                                                // 307
  }                                                                                                                    // 308
  // If options are specified in the schema, they may be a function                                                    // 309
  // that has not yet been evaluated.                                                                                  // 310
  else if (typeof selectOptions === "function") {                                                                      // 311
    selectOptions = selectOptions();                                                                                   // 312
  }                                                                                                                    // 313
                                                                                                                       // 314
  // Set placeholder to label from schema if requested                                                                 // 315
  if (hash.placeholder === "schemaLabel") {                                                                            // 316
    inputAtts.placeholder = label;                                                                                     // 317
  }                                                                                                                    // 318
                                                                                                                       // 319
  // To enable reactively toggling boolean attributes                                                                  // 320
  // in a simple way, we add the attributes to the HTML                                                                // 321
  // only if their value is `true`. That is, unlike in                                                                 // 322
  // HTML, their mere presence does not matter.                                                                        // 323
  _.each(["disabled", "readonly", "checked", "required", "autofocus"], function (booleanProp) {                        // 324
    if (!_.has(hash, booleanProp))                                                                                     // 325
      return;                                                                                                          // 326
                                                                                                                       // 327
    // For historical reasons, we treat the string "true" and an empty string as `true`, too.                          // 328
    // But an empty string value results in the cleanest rendered output for boolean props,                            // 329
    // so we standardize as that.                                                                                      // 330
    if (hash[booleanProp] === true || hash[booleanProp] === "true" || hash[booleanProp] === "") {                      // 331
      inputAtts[booleanProp] = "";                                                                                     // 332
    } else {                                                                                                           // 333
      // If the value is anything else, we don't render it                                                             // 334
      delete inputAtts[booleanProp];                                                                                   // 335
    }                                                                                                                  // 336
  });                                                                                                                  // 337
                                                                                                                       // 338
  // Add data-schema-key to every type of element                                                                      // 339
  inputAtts['data-schema-key'] = inputAtts['name'];                                                                    // 340
                                                                                                                       // 341
  // Determine what options to use                                                                                     // 342
  var data = {};                                                                                                       // 343
                                                                                                                       // 344
  data.name = inputAtts['name'];                                                                                       // 345
  data.expectsArray = expectsArray;                                                                                    // 346
                                                                                                                       // 347
  if (selectOptions) {                                                                                                 // 348
    // Build anything that should be a select, which is anything with options                                          // 349
    data.items = [];                                                                                                   // 350
    // For check boxes, we add the "autoform-array-item" class                                                         // 351
    if (noselect && expectsArray) {                                                                                    // 352
      inputAtts["class"] = (inputAtts["class"] || "") + " autoform-array-item";                                        // 353
    }                                                                                                                  // 354
    // If rendering a select element                                                                                   // 355
    if (!noselect) {                                                                                                   // 356
      inputAtts.autocomplete = "off"; //can fix issues with some browsers selecting the firstOption instead of the selected option
      if (expectsArray) {                                                                                              // 358
        inputAtts.multiple = "";                                                                                       // 359
      }                                                                                                                // 360
      // If a firstOption was provided, add that to the items list first                                               // 361
      if (firstOption && !expectsArray) {                                                                              // 362
        data.items.push({                                                                                              // 363
          name: data.name,                                                                                             // 364
          label: firstOption,                                                                                          // 365
          value: "",                                                                                                   // 366
          // _id must be included because it is a special property that                                                // 367
          // #each uses to track unique list items when adding and removing them                                       // 368
          // See https://github.com/meteor/meteor/issues/2174                                                          // 369
          _id: "",                                                                                                     // 370
          selected: false,                                                                                             // 371
          atts: inputAtts                                                                                              // 372
        });                                                                                                            // 373
      }                                                                                                                // 374
    }                                                                                                                  // 375
    // Add all defined options                                                                                         // 376
    _.each(selectOptions, function(opt) {                                                                              // 377
      var selected = expectsArray ? _.contains(value, opt.value.toString()) : (opt.value.toString() === value.toString());
      data.items.push({                                                                                                // 379
        name: data.name,                                                                                               // 380
        label: opt.label,                                                                                              // 381
        value: opt.value,                                                                                              // 382
        // _id must be included because it is a special property that                                                  // 383
        // #each uses to track unique list items when adding and removing them                                         // 384
        // See https://github.com/meteor/meteor/issues/2174                                                            // 385
        _id: opt.value,                                                                                                // 386
        selected: selected,                                                                                            // 387
        atts: inputAtts                                                                                                // 388
      });                                                                                                              // 389
    });                                                                                                                // 390
  } else if (inputType === "textarea") {                                                                               // 391
    if (typeof inputAtts.maxlength === "undefined" && typeof max === "number") {                                       // 392
      inputAtts.maxlength = max;                                                                                       // 393
    }                                                                                                                  // 394
    data.value = value;                                                                                                // 395
  } else if (inputType === "contenteditable") {                                                                        // 396
    if (typeof inputAtts['data-maxlength'] === "undefined" && typeof max === "number") {                               // 397
      inputAtts['data-maxlength'] = max;                                                                               // 398
    }                                                                                                                  // 399
    data.value = value;                                                                                                // 400
  } else if (inputType === "boolean-radios" || inputType === "boolean-select" || inputType === "boolean-checkbox") {   // 401
                                                                                                                       // 402
    // add autoform-boolean class, which we use when building object                                                   // 403
    // from form values later                                                                                          // 404
    inputAtts["class"] = (inputAtts["class"] || "") + " autoform-boolean";                                             // 405
                                                                                                                       // 406
    function getItems() {                                                                                              // 407
      return [                                                                                                         // 408
        {                                                                                                              // 409
          name: data.name,                                                                                             // 410
          value: "false",                                                                                              // 411
          // _id must be included because it is a special property that                                                // 412
          // #each uses to track unique list items when adding and removing them                                       // 413
          // See https://github.com/meteor/meteor/issues/2174                                                          // 414
          _id: "false",                                                                                                // 415
          selected: !value,                                                                                            // 416
          label: falseLabel,                                                                                           // 417
          atts: inputAtts                                                                                              // 418
        },                                                                                                             // 419
        {                                                                                                              // 420
          name: data.name,                                                                                             // 421
          value: "true",                                                                                               // 422
          // _id must be included because it is a special property that                                                // 423
          // #each uses to track unique list items when adding and removing them                                       // 424
          // See https://github.com/meteor/meteor/issues/2174                                                          // 425
          _id: "true",                                                                                                 // 426
          selected: value,                                                                                             // 427
          label: trueLabel,                                                                                            // 428
          atts: inputAtts                                                                                              // 429
        }                                                                                                              // 430
      ];                                                                                                               // 431
    }                                                                                                                  // 432
                                                                                                                       // 433
    if (inputType === "boolean-radios" || inputType === "boolean-select") {                                            // 434
      data.items = getItems();                                                                                         // 435
    } else {                                                                                                           // 436
      //don't add required attribute to checkboxes because some browsers assume that to mean that it must be checked, which is not what we mean by "required"
      delete inputAtts.required;                                                                                       // 438
      data.value = "true";                                                                                             // 439
      data.selected = value;                                                                                           // 440
    }                                                                                                                  // 441
  } else {                                                                                                             // 442
    // All other inputTypes                                                                                            // 443
    switch (inputType) {                                                                                               // 444
      case "number":                                                                                                   // 445
        if (typeof inputAtts.max === "undefined" && typeof max === "number") {                                         // 446
          inputAtts.max = max;                                                                                         // 447
        }                                                                                                              // 448
        if (typeof inputAtts.min === "undefined" && typeof min === "number") {                                         // 449
          inputAtts.min = min;                                                                                         // 450
        }                                                                                                              // 451
        if (typeof inputAtts.step === "undefined" && defs.decimal) {                                                   // 452
          inputAtts.step = '0.01';                                                                                     // 453
        }                                                                                                              // 454
        break;                                                                                                         // 455
      case "date":                                                                                                     // 456
        if (typeof inputAtts.max === "undefined" && max instanceof Date) {                                             // 457
          inputAtts.max = Utility.dateToDateStringUTC(max);                                                            // 458
        }                                                                                                              // 459
        if (typeof inputAtts.min === "undefined" && min instanceof Date) {                                             // 460
          inputAtts.min = Utility.dateToDateStringUTC(min);                                                            // 461
        }                                                                                                              // 462
        break;                                                                                                         // 463
      case "datetime":                                                                                                 // 464
        if (typeof inputAtts.max === "undefined" && max instanceof Date) {                                             // 465
          inputAtts.max = Utility.dateToNormalizedForcedUtcGlobalDateAndTimeString(max);                               // 466
        }                                                                                                              // 467
        if (typeof inputAtts.min === "undefined" && min instanceof Date) {                                             // 468
          inputAtts.min = Utility.dateToNormalizedForcedUtcGlobalDateAndTimeString(min);                               // 469
        }                                                                                                              // 470
        break;                                                                                                         // 471
      case "datetime-local":                                                                                           // 472
        if (typeof inputAtts.max === "undefined" && max instanceof Date) {                                             // 473
          inputAtts.max = Utility.dateToNormalizedLocalDateAndTimeString(max, inputAtts["data-timezone-id"]);          // 474
        }                                                                                                              // 475
        if (typeof inputAtts.min === "undefined" && min instanceof Date) {                                             // 476
          inputAtts.min = Utility.dateToNormalizedLocalDateAndTimeString(min, inputAtts["data-timezone-id"]);          // 477
        }                                                                                                              // 478
        break;                                                                                                         // 479
      case "hidden":                                                                                                   // 480
        if (schemaType === Boolean) {                                                                                  // 481
          // add autoform-boolean class, which we use when building object                                             // 482
          // from form values later                                                                                    // 483
          inputAtts["class"] = (inputAtts["class"] || "") + " autoform-boolean";                                       // 484
        }                                                                                                              // 485
    }                                                                                                                  // 486
                                                                                                                       // 487
    if (typeof inputAtts.maxlength === "undefined"                                                                     // 488
            && typeof max === "number"                                                                                 // 489
            && _.contains(["text", "email", "search", "password", "tel", "url"], inputType)                            // 490
            ) {                                                                                                        // 491
      inputAtts.maxlength = max;                                                                                       // 492
    }                                                                                                                  // 493
                                                                                                                       // 494
    data.type = inputType;                                                                                             // 495
    data.value = value;                                                                                                // 496
  }                                                                                                                    // 497
                                                                                                                       // 498
  // We set this one down here because some of the code paths above alter inputAtts                                    // 499
  data.atts = inputAtts;                                                                                               // 500
                                                                                                                       // 501
  return data;                                                                                                         // 502
};                                                                                                                     // 503
                                                                                                                       // 504
getInputTemplateType = function getInputTemplateType(type) {                                                           // 505
  // Special types                                                                                                     // 506
  var typeMap = {                                                                                                      // 507
    "select": "afSelect",                                                                                              // 508
    "select-checkbox": "afCheckboxGroup",                                                                              // 509
    "select-radio": "afRadioGroup",                                                                                    // 510
    "textarea": "afTextarea",                                                                                          // 511
    "contenteditable": "afContenteditable",                                                                            // 512
    "boolean-radios": "afRadioGroup",                                                                                  // 513
    "boolean-select": "afSelect",                                                                                      // 514
    "boolean-checkbox": "afCheckbox",                                                                                  // 515
  };                                                                                                                   // 516
                                                                                                                       // 517
  // All other input types                                                                                             // 518
  var defaultTemplateType = "afInput";                                                                                 // 519
                                                                                                                       // 520
  return typeMap[type] || defaultTemplateType;                                                                         // 521
};                                                                                                                     // 522
                                                                                                                       // 523
updateTrackedFieldValue = function updateTrackedFieldValue(formId, key, val) {                                         // 524
  formValues[formId] = formValues[formId] || {};                                                                       // 525
  formValues[formId][key] = formValues[formId][key] || {_deps: new Deps.Dependency};                                   // 526
  formValues[formId][key]._val = val;                                                                                  // 527
  formValues[formId][key]._deps.changed();                                                                             // 528
};                                                                                                                     // 529
                                                                                                                       // 530
updateAllTrackedFieldValues = function updateAllTrackedFieldValues(formId) {                                           // 531
  var template = templatesById[formId];                                                                                // 532
  if (!template)                                                                                                       // 533
    return;                                                                                                            // 534
  _.each(formValues[formId], function (o, key) {                                                                       // 535
    updateTrackedFieldValue(formId, key, getFieldValue(template, key));                                                // 536
  });                                                                                                                  // 537
};                                                                                                                     // 538
                                                                                                                       // 539
invalidateFormContext = function invalidateFormContext(formId) {                                                       // 540
  formDeps[formId] = formDeps[formId] || new Deps.Dependency;                                                          // 541
  formDeps[formId].changed();                                                                                          // 542
};                                                                                                                     // 543
                                                                                                                       // 544
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/autoForm/template.autoForm.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("autoForm");                                                                                      // 2
Template["autoForm"] = new Template("Template.autoForm", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.FORM(HTML.Attrs(function() {                                                                             // 5
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 6
  }), "\n    ", Spacebars.With(function() {                                                                            // 7
    return Spacebars.dataMustache(view.lookup("innerContext"), view.lookup(".."));                                     // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", Blaze._InOuterTemplateScope(view, function() {                                                  // 10
      return Blaze._TemplateWith(function() {                                                                          // 11
        return Spacebars.call(view.lookup("."));                                                                       // 12
      }, function() {                                                                                                  // 13
        return Spacebars.include(function() {                                                                          // 14
          return Spacebars.call(view.templateContentBlock);                                                            // 15
        });                                                                                                            // 16
      });                                                                                                              // 17
    }), "\n    " ];                                                                                                    // 18
  }), "\n  ");                                                                                                         // 19
}));                                                                                                                   // 20
                                                                                                                       // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/autoForm/autoForm.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.autoForm.helpers({                                                                                            // 1
  atts: function autoFormTplAtts() {                                                                                   // 2
    var context = _.clone(this);                                                                                       // 3
                                                                                                                       // 4
    // By default, we add the `novalidate="novalidate"` attribute to our form,                                         // 5
    // unless the user passes `validation="browser"`.                                                                  // 6
    if (context.validation !== "browser" && !context.novalidate) {                                                     // 7
      context.novalidate = "novalidate";                                                                               // 8
    }                                                                                                                  // 9
    // After removing all of the props we know about, everything else should                                           // 10
    // become a form attribute.                                                                                        // 11
    // XXX Would be better to use a whitelist of HTML attributes allowed on form elements                              // 12
    return _.omit(context, "schema", "collection", "validation", "doc", "resetOnSuccess",                              // 13
        "type", "template", "autosave", "meteormethod", "filter", "autoConvert", "removeEmptyStrings", "trimStrings"); // 14
  },                                                                                                                   // 15
  innerContext: function autoFormTplContext(outerContext) {                                                            // 16
    var context = this;                                                                                                // 17
    var formId = context.id || defaultFormId;                                                                          // 18
    var collection = Utility.lookup(context.collection);                                                               // 19
    var ss = Utility.getSimpleSchemaFromContext(context, formId);                                                      // 20
                                                                                                                       // 21
    // Retain doc values after a "hot code push", if possible                                                          // 22
    var retrievedDoc = formPreserve.getDocument(formId);                                                               // 23
    if (retrievedDoc !== false) {                                                                                      // 24
      // Ensure we keep the _id property which may not be present in retrievedDoc.                                     // 25
      context.doc = _.extend({}, context.doc || {}, retrievedDoc);                                                     // 26
    }                                                                                                                  // 27
                                                                                                                       // 28
    var mDoc;                                                                                                          // 29
    if (context.doc && !_.isEmpty(context.doc)) {                                                                      // 30
      // Clone doc                                                                                                     // 31
      var copy = _.clone(context.doc);                                                                                 // 32
      var hookCtx = {formId: formId};                                                                                  // 33
      // Pass doc through docToForm hooks                                                                              // 34
      _.each(Hooks.getHooks(formId, 'docToForm'), function autoFormEachDocToForm(hook) {                               // 35
        copy = hook.call(hookCtx, copy, ss, formId);                                                                   // 36
      });                                                                                                              // 37
      // Create a "flat doc" that can be used to easily get values for corresponding                                   // 38
      // form fields.                                                                                                  // 39
      mDoc = new MongoObject(copy);                                                                                    // 40
      fd.sourceDoc(formId, mDoc);                                                                                      // 41
    } else {                                                                                                           // 42
      fd.sourceDoc(formId, null);                                                                                      // 43
    }                                                                                                                  // 44
                                                                                                                       // 45
    // Check autosave                                                                                                  // 46
    var autosave, resetOnSuccess;                                                                                      // 47
    if (context.autosave === true && context.type === "update") {                                                      // 48
      // Autosave and never reset on success                                                                           // 49
      autosave = true;                                                                                                 // 50
      resetOnSuccess = false;                                                                                          // 51
    } else {                                                                                                           // 52
      autosave = false;                                                                                                // 53
      resetOnSuccess = context.resetOnSuccess;                                                                         // 54
    }                                                                                                                  // 55
                                                                                                                       // 56
    // Set up the context to be used for everything within the autoform.                                               // 57
    var innerContext = {_af: {                                                                                         // 58
      formId: formId,                                                                                                  // 59
      collection: collection,                                                                                          // 60
      ss: ss,                                                                                                          // 61
      ssIsOverride: !!collection && !!context.schema,                                                                  // 62
      doc: context.doc || null,                                                                                        // 63
      mDoc: mDoc,                                                                                                      // 64
      validationType: (context.validation == null ? "submitThenKeyup" : context.validation),                           // 65
      submitType: context.type,                                                                                        // 66
      submitMethod: context.meteormethod,                                                                              // 67
      resetOnSuccess: resetOnSuccess,                                                                                  // 68
      autosave: autosave,                                                                                              // 69
      filter: context.filter,                                                                                          // 70
      autoConvert: context.autoConvert,                                                                                // 71
      removeEmptyStrings: context.removeEmptyStrings,                                                                  // 72
      trimStrings: context.trimStrings                                                                                 // 73
    }};                                                                                                                // 74
                                                                                                                       // 75
    // Cache context for lookup by formId                                                                              // 76
    formData[formId] = innerContext._af;                                                                               // 77
                                                                                                                       // 78
    // When we change the form, loading a different doc, reloading the current doc, etc.,                              // 79
    // we also want to reset the array counts for the form                                                             // 80
    arrayTracker.resetForm(formId);                                                                                    // 81
                                                                                                                       // 82
    // Preserve outer context, allowing access within autoForm block without needing ..                                // 83
    _.extend(innerContext, outerContext);                                                                              // 84
    return innerContext;                                                                                               // 85
  }                                                                                                                    // 86
});                                                                                                                    // 87
                                                                                                                       // 88
Template.autoForm.created = function autoFormCreated() {                                                               // 89
  var self = this;                                                                                                     // 90
  var formId = self.data.id || defaultFormId;                                                                          // 91
  // Add to templatesById list                                                                                         // 92
  templatesById[formId] = self;                                                                                        // 93
};                                                                                                                     // 94
                                                                                                                       // 95
Template.autoForm.destroyed = function autoFormDestroyed() {                                                           // 96
  var self = this;                                                                                                     // 97
  self._notInDOM = true;                                                                                               // 98
  var formId = self.data.id || defaultFormId;                                                                          // 99
                                                                                                                       // 100
  // Remove from templatesById list                                                                                    // 101
  if (templatesById[formId]) {                                                                                         // 102
    delete templatesById[formId];                                                                                      // 103
  }                                                                                                                    // 104
                                                                                                                       // 105
  // Remove from data list                                                                                             // 106
  if (formData[formId]) {                                                                                              // 107
    delete formData[formId];                                                                                           // 108
  }                                                                                                                    // 109
                                                                                                                       // 110
  // Remove from array fields list                                                                                     // 111
  arrayTracker.untrackForm(formId);                                                                                    // 112
                                                                                                                       // 113
  // Remove from field values                                                                                          // 114
  if (formValues[formId]) {                                                                                            // 115
    delete formValues[formId];                                                                                         // 116
  }                                                                                                                    // 117
                                                                                                                       // 118
  // Unregister form preservation                                                                                      // 119
  formPreserve.unregisterForm(formId);                                                                                 // 120
};                                                                                                                     // 121
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/quickForm/template.quickForm.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("quickForm");                                                                                     // 2
Template["quickForm"] = new Template("Template.quickForm", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return Spacebars.With(function() {                                                                                   // 5
    return Spacebars.dataMustache(view.lookup("innerContext"), view.lookup("."));                                      // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Spacebars.With(function() {                                                                     // 8
      return Spacebars.dataMustache(view.lookup("afTemplateName"), "quickForm", Spacebars.dot(view.lookup(".."), "template"));
    }, function() {                                                                                                    // 10
      return [ "\n      ", Blaze._TemplateWith(function() {                                                            // 11
        return {                                                                                                       // 12
          template: Spacebars.call(view.lookup(".")),                                                                  // 13
          data: Spacebars.call(view.lookup(".."))                                                                      // 14
        };                                                                                                             // 15
      }, function() {                                                                                                  // 16
        return Spacebars.include(function() {                                                                          // 17
          return Spacebars.call(Template.__dynamic);                                                                   // 18
        });                                                                                                            // 19
      }), "\n    " ];                                                                                                  // 20
    }), "\n  " ];                                                                                                      // 21
  });                                                                                                                  // 22
}));                                                                                                                   // 23
                                                                                                                       // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/quickForm/quickForm.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.quickForm.helpers({                                                                                           // 1
  innerContext: function quickFormContext(atts) {                                                                      // 2
    // Pass along quickForm context to autoForm context, minus a few                                                   // 3
    // properties that are specific to quickForms.                                                                     // 4
    var qfAutoFormContext = _.omit(atts, "buttonContent", "buttonClasses", "fields", "omitFields");                    // 5
                                                                                                                       // 6
    return {                                                                                                           // 7
      qfAutoFormContext: qfAutoFormContext,                                                                            // 8
      atts: atts,                                                                                                      // 9
      // qfShouldRenderButton helper                                                                                   // 10
      qfShouldRenderButton: function qfShouldRenderButton() {                                                          // 11
        var self = this;                                                                                               // 12
        var qfAtts = self.atts;                                                                                        // 13
        var submitType = self._af.submitType;                                                                          // 14
        return (qfAtts.buttonContent !== false && submitType !== "readonly" && submitType !== "disabled");             // 15
      }                                                                                                                // 16
    };                                                                                                                 // 17
  }                                                                                                                    // 18
});                                                                                                                    // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afArrayField/template.afArrayField.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afArrayField");                                                                                  // 2
Template["afArrayField"] = new Template("Template.afArrayField", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return Spacebars.With(function() {                                                                                   // 5
    return Spacebars.dataMustache(view.lookup("innerContext"), Spacebars.kw({                                          // 6
      atts: view.lookup(".")                                                                                           // 7
    }));                                                                                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", Spacebars.With(function() {                                                                     // 10
      return Spacebars.dataMustache(view.lookup("afTemplateName"), "afArrayField", Spacebars.dot(view.lookup(".."), "template"));
    }, function() {                                                                                                    // 12
      return [ "\n      ", Blaze._TemplateWith(function() {                                                            // 13
        return {                                                                                                       // 14
          template: Spacebars.call(view.lookup(".")),                                                                  // 15
          data: Spacebars.call(view.lookup(".."))                                                                      // 16
        };                                                                                                             // 17
      }, function() {                                                                                                  // 18
        return Spacebars.include(function() {                                                                          // 19
          return Spacebars.call(Template.__dynamic);                                                                   // 20
        });                                                                                                            // 21
      }), "\n    " ];                                                                                                  // 22
    }), "\n  " ];                                                                                                      // 23
  });                                                                                                                  // 24
}));                                                                                                                   // 25
                                                                                                                       // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afArrayField/afArrayField.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afArrayField.helpers({                                                                                        // 1
  innerContext: function afArrayFieldContext(options) {                                                                // 2
    var c = Utility.normalizeContext(options.hash, "afArrayField");                                                    // 3
    var name = c.atts.name;                                                                                            // 4
    var fieldMinCount = c.atts.minCount || 0;                                                                          // 5
    var fieldMaxCount = c.atts.maxCount || Infinity;                                                                   // 6
    var ss = c.af.ss;                                                                                                  // 7
    var formId = c.af.formId;                                                                                          // 8
                                                                                                                       // 9
    // Init the array tracking for this field                                                                          // 10
    var docCount = fd.getDocCountForField(formId, name);                                                               // 11
    if (docCount == null) {                                                                                            // 12
      docCount = c.atts.initialCount;                                                                                  // 13
    }                                                                                                                  // 14
    arrayTracker.initField(formId, name, ss, docCount, fieldMinCount, fieldMaxCount);                                  // 15
                                                                                                                       // 16
    return {                                                                                                           // 17
      atts: c.atts                                                                                                     // 18
    };                                                                                                                 // 19
  }                                                                                                                    // 20
});                                                                                                                    // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afEachArrayItem/template.afEachArrayItem.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afEachArrayItem");                                                                               // 2
Template["afEachArrayItem"] = new Template("Template.afEachArrayItem", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return [ "\n  ", Spacebars.With(function() {                                                                         // 5
    return Spacebars.dataMustache(view.lookup("innerContext"), Spacebars.kw({                                          // 6
      atts: view.lookup(".")                                                                                           // 7
    }));                                                                                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", Blaze.Each(function() {                                                                         // 10
      return Spacebars.call(view.lookup("."));                                                                         // 11
    }, function() {                                                                                                    // 12
      return [ "\n    ", Blaze.If(function() {                                                                         // 13
        return Spacebars.call(Spacebars.dot(view.lookup("."), "removed"));                                             // 14
      }, function() {                                                                                                  // 15
        return [ "\n    ", HTML.INPUT({                                                                                // 16
          type: "hidden",                                                                                              // 17
          name: function() {                                                                                           // 18
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                        // 19
          },                                                                                                           // 20
          "data-schema-key": function() {                                                                              // 21
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                        // 22
          },                                                                                                           // 23
          "data-null-value": "true",                                                                                   // 24
          value: ""                                                                                                    // 25
        }), "\n    " ];                                                                                                // 26
      }, function() {                                                                                                  // 27
        return [ "\n    ", Blaze._InOuterTemplateScope(view, function() {                                              // 28
          return Blaze._TemplateWith(function() {                                                                      // 29
            return Spacebars.call(view.lookup("."));                                                                   // 30
          }, function() {                                                                                              // 31
            return Spacebars.include(function() {                                                                      // 32
              return Spacebars.call(view.templateContentBlock);                                                        // 33
            });                                                                                                        // 34
          });                                                                                                          // 35
        }), "\n    " ];                                                                                                // 36
      }), "\n    " ];                                                                                                  // 37
    }), "\n  " ];                                                                                                      // 38
  }) ];                                                                                                                // 39
}));                                                                                                                   // 40
                                                                                                                       // 41
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afEachArrayItem/afEachArrayItem.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afEachArrayItem.helpers({                                                                                     // 1
  innerContext: function afEachArrayItemContext(options) {                                                             // 2
    var c = Utility.normalizeContext(options.hash, "afEachArrayItem");                                                 // 3
    var formId = c.af.formId;                                                                                          // 4
    var name = c.atts.name;                                                                                            // 5
                                                                                                                       // 6
    var docCount = fd.getDocCountForField(formId, name);                                                               // 7
    if (docCount == null) {                                                                                            // 8
      docCount = c.atts.initialCount;                                                                                  // 9
    }                                                                                                                  // 10
    arrayTracker.initField(formId, name, c.af.ss, docCount, c.atts.minCount, c.atts.maxCount);                         // 11
                                                                                                                       // 12
    return arrayTracker.getField(formId, name);                                                                        // 13
  }                                                                                                                    // 14
});                                                                                                                    // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afFieldInput/template.afFieldInput.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afFieldInput");                                                                                  // 2
Template["afFieldInput"] = new Template("Template.afFieldInput", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return Spacebars.With(function() {                                                                                   // 5
    return Spacebars.dataMustache(view.lookup("innerContext"), Spacebars.kw({                                          // 6
      atts: view.lookup(".")                                                                                           // 7
    }));                                                                                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", Spacebars.With(function() {                                                                     // 10
      return Spacebars.dataMustache(view.lookup("afTemplateName"), view.lookup("getTemplateType"), Spacebars.dot(view.lookup(".."), "template"));
    }, function() {                                                                                                    // 12
      return [ "\n      ", Blaze._TemplateWith(function() {                                                            // 13
        return {                                                                                                       // 14
          template: Spacebars.call(view.lookup(".")),                                                                  // 15
          data: Spacebars.call(view.lookup(".."))                                                                      // 16
        };                                                                                                             // 17
      }, function() {                                                                                                  // 18
        return Spacebars.include(function() {                                                                          // 19
          return Spacebars.call(Template.__dynamic);                                                                   // 20
        });                                                                                                            // 21
      }), "\n    " ];                                                                                                  // 22
    }), "\n  " ];                                                                                                      // 23
  });                                                                                                                  // 24
}));                                                                                                                   // 25
                                                                                                                       // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afFieldInput/afFieldInput.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afFieldInput.helpers({                                                                                        // 1
  getTemplateType: function afFieldInputGetTemplateType() {                                                            // 2
    return getInputTemplateType(this.type);                                                                            // 3
  },                                                                                                                   // 4
  innerContext: function afFieldInputContext(options) {                                                                // 5
    var c = Utility.normalizeContext(options.hash, "afFieldInput and afFieldSelect");                                  // 6
    var contentBlock = options.hash.contentBlock; // applies only to afFieldSelect                                     // 7
    var contentBlockContext = options.hash.contentBlockContext; // applies only to afFieldSelect                       // 8
                                                                                                                       // 9
    // Set up deps, allowing us to re-render the form                                                                  // 10
    formDeps[c.af.formId] = formDeps[c.af.formId] || new Deps.Dependency;                                              // 11
    formDeps[c.af.formId].depend();                                                                                    // 12
                                                                                                                       // 13
    var ss = c.af.ss;                                                                                                  // 14
    var defs = c.defs;                                                                                                 // 15
                                                                                                                       // 16
    var fieldExpectsArray = AutoForm.expectsArray(c.atts);                                                             // 17
                                                                                                                       // 18
    // Adjust for array fields if necessary                                                                            // 19
    var defaultValue = defs.defaultValue; //make sure to use pre-adjustment defaultValue for arrays                    // 20
    if (defs.type === Array) {                                                                                         // 21
      defs = ss.schema(c.atts.name + ".$");                                                                            // 22
    }                                                                                                                  // 23
                                                                                                                       // 24
    // Get inputType                                                                                                   // 25
    var inputType = AutoForm.getInputType(c.atts);                                                                     // 26
                                                                                                                       // 27
    // Get input value                                                                                                 // 28
    var value = getInputValue(c.atts.name, c.atts, fieldExpectsArray, inputType, c.atts.value, c.af.mDoc, defaultValue);
                                                                                                                       // 30
    // Track field's value for reactive show/hide of other fields by value                                             // 31
    updateTrackedFieldValue(c.af.formId, c.atts.name, value);                                                          // 32
                                                                                                                       // 33
    // Get input data context                                                                                          // 34
    var iData = getInputData(defs, c.atts, value, inputType, ss.label(c.atts.name), fieldExpectsArray, c.af.submitType, c.af);
                                                                                                                       // 36
    // Return input data context                                                                                       // 37
    return _.extend({_af: c.af, contentBlock: contentBlock, contentBlockContext: contentBlockContext, type: inputType}, iData);
  }                                                                                                                    // 39
});                                                                                                                    // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afFieldLabel/template.afFieldLabel.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afFieldLabel");                                                                                  // 2
Template["afFieldLabel"] = new Template("Template.afFieldLabel", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return Spacebars.With(function() {                                                                                   // 5
    return {                                                                                                           // 6
      atts: Spacebars.call(view.lookup("."))                                                                           // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", Spacebars.With(function() {                                                                     // 10
      return Spacebars.dataMustache(view.lookup("afTemplateName"), "afFieldLabel", Spacebars.dot(view.lookup(".."), "template"));
    }, function() {                                                                                                    // 12
      return [ "\n      ", Blaze._TemplateWith(function() {                                                            // 13
        return {                                                                                                       // 14
          template: Spacebars.call(view.lookup(".")),                                                                  // 15
          data: Spacebars.call(view.lookup(".."))                                                                      // 16
        };                                                                                                             // 17
      }, function() {                                                                                                  // 18
        return Spacebars.include(function() {                                                                          // 19
          return Spacebars.call(Template.__dynamic);                                                                   // 20
        });                                                                                                            // 21
      }), "\n    " ];                                                                                                  // 22
    }), "\n  " ];                                                                                                      // 23
  });                                                                                                                  // 24
}));                                                                                                                   // 25
                                                                                                                       // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afFieldSelect/template.afFieldSelect.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afFieldSelect");                                                                                 // 2
Template["afFieldSelect"] = new Template("Template.afFieldSelect", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Spacebars.With(function() {                                                                                   // 5
    return Spacebars.dataMustache(view.lookup("innerContext"), Spacebars.kw({                                          // 6
      atts: view.lookup("."),                                                                                          // 7
      contentBlock: view.templateContentBlock,                                                                         // 8
      contentBlockContext: view.lookup("..")                                                                           // 9
    }));                                                                                                               // 10
  }, function() {                                                                                                      // 11
    return [ "\n    ", Spacebars.With(function() {                                                                     // 12
      return Spacebars.dataMustache(view.lookup("afTemplateName"), "afFieldSelect", Spacebars.dot(view.lookup(".."), "template"));
    }, function() {                                                                                                    // 14
      return [ "\n      ", Blaze._TemplateWith(function() {                                                            // 15
        return {                                                                                                       // 16
          template: Spacebars.call(view.lookup(".")),                                                                  // 17
          data: Spacebars.call(view.lookup(".."))                                                                      // 18
        };                                                                                                             // 19
      }, function() {                                                                                                  // 20
        return Spacebars.include(function() {                                                                          // 21
          return Spacebars.call(Template.__dynamic);                                                                   // 22
        });                                                                                                            // 23
      }), "\n    " ];                                                                                                  // 24
    }), "\n  " ];                                                                                                      // 25
  });                                                                                                                  // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afFieldSelect/afFieldSelect.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afFieldSelect.helpers({                                                                                       // 1
  innerContext: Template.afFieldInput.innerContext                                                                     // 2
});                                                                                                                    // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afFormGroup/template.afFormGroup.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afFormGroup");                                                                                   // 2
Template["afFormGroup"] = new Template("Template.afFormGroup", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return Spacebars.With(function() {                                                                                   // 5
    return Spacebars.dataMustache(view.lookup("innerContext"), Spacebars.kw({                                          // 6
      atts: view.lookup(".")                                                                                           // 7
    }));                                                                                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", Spacebars.With(function() {                                                                     // 10
      return Spacebars.dataMustache(view.lookup("afTemplateName"), "afFormGroup", Spacebars.dot(view.lookup(".."), "template"));
    }, function() {                                                                                                    // 12
      return [ "\n      ", Blaze._TemplateWith(function() {                                                            // 13
        return {                                                                                                       // 14
          template: Spacebars.call(view.lookup(".")),                                                                  // 15
          data: Spacebars.call(view.lookup(".."))                                                                      // 16
        };                                                                                                             // 17
      }, function() {                                                                                                  // 18
        return Spacebars.include(function() {                                                                          // 19
          return Spacebars.call(Template.__dynamic);                                                                   // 20
        });                                                                                                            // 21
      }), "\n    " ];                                                                                                  // 22
    }), "\n  " ];                                                                                                      // 23
  });                                                                                                                  // 24
}));                                                                                                                   // 25
                                                                                                                       // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afFormGroup/afFormGroup.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afFormGroup.helpers({                                                                                         // 1
  innerContext: function afFormGroupContext(options) {                                                                 // 2
    var c = Utility.normalizeContext(options.hash, "afFormGroup");                                                     // 3
    return {                                                                                                           // 4
      skipLabel: (c.atts.label === false),                                                                             // 5
      afFieldLabelAtts: formGroupLabelAtts(c.atts),                                                                    // 6
      afFieldInputAtts: formGroupInputAtts(c.atts),                                                                    // 7
      atts: {name: c.atts.name}                                                                                        // 8
    };                                                                                                                 // 9
  }                                                                                                                    // 10
});                                                                                                                    // 11
                                                                                                                       // 12
/*                                                                                                                     // 13
 * Private                                                                                                             // 14
 */                                                                                                                    // 15
                                                                                                                       // 16
function formGroupLabelAtts(atts) {                                                                                    // 17
  // Separate label options from input options; label items begin with "label-"                                        // 18
  var labelAtts = {                                                                                                    // 19
    name: atts.name,                                                                                                   // 20
    template: atts.template                                                                                            // 21
  };                                                                                                                   // 22
  _.each(atts, function autoFormLabelAttsEach(val, key) {                                                              // 23
    if (key.indexOf("label-") === 0) {                                                                                 // 24
      labelAtts[key.substring(6)] = val;                                                                               // 25
    }                                                                                                                  // 26
  });                                                                                                                  // 27
                                                                                                                       // 28
  return labelAtts;                                                                                                    // 29
}                                                                                                                      // 30
                                                                                                                       // 31
function formGroupInputAtts(atts) {                                                                                    // 32
  // Separate label options from input options; label items begin with "label-"                                        // 33
  // We also don't want the "label" option                                                                             // 34
  return _.omit(atts, function (val, key) {                                                                            // 35
    return (key === "label" || key.indexOf("label-") === 0);                                                           // 36
  });                                                                                                                  // 37
}                                                                                                                      // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afObjectField/template.afObjectField.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afObjectField");                                                                                 // 2
Template["afObjectField"] = new Template("Template.afObjectField", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Spacebars.With(function() {                                                                                   // 5
    return {                                                                                                           // 6
      atts: Spacebars.call(view.lookup("."))                                                                           // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", Spacebars.With(function() {                                                                     // 10
      return Spacebars.dataMustache(view.lookup("afTemplateName"), "afObjectField", Spacebars.dot(view.lookup(".."), "template"));
    }, function() {                                                                                                    // 12
      return [ "\n      ", Blaze._TemplateWith(function() {                                                            // 13
        return {                                                                                                       // 14
          template: Spacebars.call(view.lookup(".")),                                                                  // 15
          data: Spacebars.call(view.lookup(".."))                                                                      // 16
        };                                                                                                             // 17
      }, function() {                                                                                                  // 18
        return Spacebars.include(function() {                                                                          // 19
          return Spacebars.call(Template.__dynamic);                                                                   // 20
        });                                                                                                            // 21
      }), "\n    " ];                                                                                                  // 22
    }), "\n  " ];                                                                                                      // 23
  });                                                                                                                  // 24
}));                                                                                                                   // 25
                                                                                                                       // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afQuickField/template.afQuickField.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afQuickField");                                                                                  // 2
Template["afQuickField"] = new Template("Template.afQuickField", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.dataMustache(view.lookup("isGroup"), Spacebars.kw({                                               // 6
      atts: view.lookup(".")                                                                                           // 7
    }));                                                                                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", Spacebars.include(view.lookupTemplate("afObjectField")), "\n  " ];                              // 10
  }, function() {                                                                                                      // 11
    return [ "\n    ", Blaze.If(function() {                                                                           // 12
      return Spacebars.dataMustache(view.lookup("isFieldArray"), Spacebars.kw({                                        // 13
        atts: view.lookup(".")                                                                                         // 14
      }));                                                                                                             // 15
    }, function() {                                                                                                    // 16
      return [ "\n      ", Spacebars.include(view.lookupTemplate("afArrayField")), "\n    " ];                         // 17
    }, function() {                                                                                                    // 18
      return [ "\n      ", Spacebars.include(view.lookupTemplate("afFormGroup")), "\n    " ];                          // 19
    }), "\n  " ];                                                                                                      // 20
  });                                                                                                                  // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afQuickField/afQuickField.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afQuickField.helpers({                                                                                        // 1
  isGroup: function afQuickFieldIsGroup(options) {                                                                     // 2
    var c = Utility.normalizeContext(options.hash, "afQuickField");                                                    // 3
    // Render an array of fields if we expect an Object and we don't have options                                      // 4
    // and we have not overridden the type                                                                             // 5
    return (c.defs.type === Object && !c.atts.options && !c.atts.type);                                                // 6
  },                                                                                                                   // 7
  isFieldArray: function afQuickFieldIsFieldArray(options) {                                                           // 8
    var c = Utility.normalizeContext(options.hash, "afQuickField");                                                    // 9
    // Render an array of fields if we expect an Array and we don't have options                                       // 10
    // and we have not overridden the type                                                                             // 11
    return (c.defs.type === Array && !c.atts.options && !c.atts.type);                                                 // 12
  }                                                                                                                    // 13
});                                                                                                                    // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afQuickFields/template.afQuickFields.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afQuickFields");                                                                                 // 2
Template["afQuickFields"] = new Template("Template.afQuickFields", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return Spacebars.dataMustache(view.lookup("afFieldNames"), Spacebars.kw({                                          // 6
      name: Spacebars.dot(view.lookup("."), "name"),                                                                   // 7
      fields: Spacebars.dot(view.lookup("."), "fields"),                                                               // 8
      omitFields: Spacebars.dot(view.lookup("."), "omitFields")                                                        // 9
    }));                                                                                                               // 10
  }, function() {                                                                                                      // 11
    return [ "\n    ", Spacebars.With(function() {                                                                     // 12
      return {                                                                                                         // 13
        name: Spacebars.call(view.lookup("."))                                                                         // 14
      };                                                                                                               // 15
    }, function() {                                                                                                    // 16
      return [ "\n    ", Blaze._TemplateWith(function() {                                                              // 17
        return Spacebars.call(view.lookup("quickFieldAtts"));                                                          // 18
      }, function() {                                                                                                  // 19
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 20
      }), "\n    " ];                                                                                                  // 21
    }), "\n  " ];                                                                                                      // 22
  });                                                                                                                  // 23
}));                                                                                                                   // 24
                                                                                                                       // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/components/afQuickFields/afQuickFields.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afQuickFields.helpers({                                                                                       // 1
  quickFieldAtts: function afQuickFieldsQuickFieldAtts() {                                                             // 2
    return _.extend({options: "auto"}, UI._parentData(2), this);                                                       // 3
  }                                                                                                                    // 4
});                                                                                                                    // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/autoform-helpers.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Global template helpers (exported)                                                                                  // 1
                                                                                                                       // 2
var regHelper = Template.registerHelper;                                                                               // 3
if (typeof regHelper !== "function") {                                                                                 // 4
  regHelper = UI.registerHelper;                                                                                       // 5
}                                                                                                                      // 6
                                                                                                                       // 7
/*                                                                                                                     // 8
 * afFieldMessage                                                                                                      // 9
 */                                                                                                                    // 10
regHelper('afFieldMessage', function autoFormFieldMessage(options) {                                                   // 11
  options = parseOptions(options, 'afFieldMessage');                                                                   // 12
                                                                                                                       // 13
  return options.ss.namedContext(options.formId).keyErrorMessage(options.name);                                        // 14
});                                                                                                                    // 15
                                                                                                                       // 16
/*                                                                                                                     // 17
 * afFieldIsInvalid                                                                                                    // 18
 */                                                                                                                    // 19
regHelper('afFieldIsInvalid', function autoFormFieldIsInvalid(options) {                                               // 20
  options = parseOptions(options, 'afFieldIsInvalid');                                                                 // 21
                                                                                                                       // 22
  return options.ss.namedContext(options.formId).keyIsInvalid(options.name);                                           // 23
});                                                                                                                    // 24
                                                                                                                       // 25
/*                                                                                                                     // 26
 * afArrayFieldHasMoreThanMinimum                                                                                      // 27
 */                                                                                                                    // 28
regHelper('afArrayFieldHasMoreThanMinimum', function autoFormArrayFieldHasMoreThanMinimum(options) {                   // 29
  options = parseOptions(options, 'afArrayFieldHasMoreThanMinimum');                                                   // 30
                                                                                                                       // 31
  var range = arrayTracker.getMinMax(options.ss, options.name, options.minCount, options.maxCount);                    // 32
  var visibleCount = arrayTracker.getVisibleCount(options.formId, options.name);                                       // 33
  return (visibleCount > range.minCount);                                                                              // 34
});                                                                                                                    // 35
                                                                                                                       // 36
/*                                                                                                                     // 37
 * afArrayFieldHasLessThanMaximum                                                                                      // 38
 */                                                                                                                    // 39
regHelper('afArrayFieldHasLessThanMaximum', function autoFormArrayFieldHasLessThanMaximum(options) {                   // 40
  options = parseOptions(options, 'afArrayFieldHasLessThanMaximum');                                                   // 41
                                                                                                                       // 42
  var range = arrayTracker.getMinMax(options.ss, options.name, options.minCount, options.maxCount);                    // 43
  var visibleCount = arrayTracker.getVisibleCount(options.formId, options.name);                                       // 44
  return (visibleCount < range.maxCount);                                                                              // 45
});                                                                                                                    // 46
                                                                                                                       // 47
/*                                                                                                                     // 48
 * afFieldValueIs                                                                                                      // 49
 */                                                                                                                    // 50
regHelper('afFieldValueIs', function autoFormFieldValueIs(options) {                                                   // 51
  options = parseOptions(options, 'afFieldValueIs');                                                                   // 52
                                                                                                                       // 53
  var currentValue = AutoForm.getFieldValue(options.formId, options.name);                                             // 54
  return currentValue === options.value;                                                                               // 55
});                                                                                                                    // 56
                                                                                                                       // 57
/*                                                                                                                     // 58
 * afArrayFieldIsFirstVisible                                                                                          // 59
 */                                                                                                                    // 60
regHelper('afArrayFieldIsFirstVisible', function autoFormArrayFieldIsFirstVisible() {                                  // 61
  var context = this;                                                                                                  // 62
  return arrayTracker.isFirstFieldlVisible(context.formId, context.arrayFieldName, context.index);                     // 63
});                                                                                                                    // 64
                                                                                                                       // 65
/*                                                                                                                     // 66
 * afArrayFieldIsLastVisible                                                                                           // 67
 */                                                                                                                    // 68
regHelper('afArrayFieldIsLastVisible', function autoFormArrayFieldIsLastVisible() {                                    // 69
  var context = this;                                                                                                  // 70
  return arrayTracker.isLastFieldlVisible(context.formId, context.arrayFieldName, context.index);                      // 71
});                                                                                                                    // 72
                                                                                                                       // 73
/*                                                                                                                     // 74
 * afFieldValueContains                                                                                                // 75
 */                                                                                                                    // 76
regHelper('afFieldValueContains', function autoFormFieldValueContains(options) {                                       // 77
  options = parseOptions(options, 'afFieldValueContains');                                                             // 78
                                                                                                                       // 79
  var currentValue = AutoForm.getFieldValue(options.formId, options.name);                                             // 80
  return _.isArray(currentValue) && _.contains(currentValue, options.value);                                           // 81
});                                                                                                                    // 82
                                                                                                                       // 83
/*                                                                                                                     // 84
 * afFieldLabelText                                                                                                    // 85
 */                                                                                                                    // 86
regHelper('afFieldLabelText', function autoFormFieldLabelText(options) {                                               // 87
  options = parseOptions(options, 'afFieldLabelText');                                                                 // 88
                                                                                                                       // 89
  return options.ss.label(options.name);                                                                               // 90
});                                                                                                                    // 91
                                                                                                                       // 92
/*                                                                                                                     // 93
 * afFieldNames                                                                                                        // 94
 */                                                                                                                    // 95
regHelper("afFieldNames", function autoFormFieldNames(options) {                                                       // 96
  options = parseOptions(options, 'afFieldNames');                                                                     // 97
  var ss = options.ss;                                                                                                 // 98
  var name = options.name;                                                                                             // 99
                                                                                                                       // 100
  // Get the list of fields we want included                                                                           // 101
  var fieldList = options.fields;                                                                                      // 102
  if (fieldList) {                                                                                                     // 103
    fieldList = Utility.stringToArray(fieldList, 'AutoForm: fields attribute must be an array or a string containing a comma-delimited list of fields');
  } else if (name) {                                                                                                   // 105
    // If we weren't given a fieldList but were given a field name, use subfields by default                           // 106
                                                                                                                       // 107
    // Get list of field names that are descendants of this field's name                                               // 108
    fieldList = ss.objectKeys(SimpleSchema._makeGeneric(name));                                                        // 109
                                                                                                                       // 110
    // Tack child field name on to end of parent field name. This                                                      // 111
    // ensures that we keep the desired array index for array items.                                                   // 112
    fieldList = _.map(fieldList, function (field) {                                                                    // 113
      return name + "." + field;                                                                                       // 114
    });                                                                                                                // 115
  } else {                                                                                                             // 116
    // If we weren't given a fieldList or a field name, use all first level schema keys by default                     // 117
    fieldList = ss.objectKeys() || [];                                                                                 // 118
  }                                                                                                                    // 119
                                                                                                                       // 120
  // If user wants to omit some fields, remove those from the array                                                    // 121
  var omitFields = options.omitFields;                                                                                 // 122
  if (omitFields) {                                                                                                    // 123
    omitFields = Utility.stringToArray(omitFields, 'AutoForm: omitFields attribute must be an array or a string containing a comma-delimited list of fields');
    fieldList = _.difference(fieldList, omitFields);                                                                   // 125
    // If omitFields contains generic field names (with $) we omit those too                                           // 126
    fieldList = _.reject(fieldList, function (f) {                                                                     // 127
      return _.contains(omitFields, SimpleSchema._makeGeneric(f));                                                     // 128
    });                                                                                                                // 129
  }                                                                                                                    // 130
                                                                                                                       // 131
  // Filter out fields we never want                                                                                   // 132
  fieldList = _.filter(fieldList, function shouldIncludeField(field) {                                                 // 133
    var fieldDefs = ss.schema(field);                                                                                  // 134
                                                                                                                       // 135
    // Don't include fields with autoform.omit=true                                                                    // 136
    if (fieldDefs.autoform && fieldDefs.autoform.omit === true)                                                        // 137
      return false;                                                                                                    // 138
                                                                                                                       // 139
    // Don't include fields with denyInsert=true when it's an insert form                                              // 140
    if (fieldDefs.denyInsert && options.submitType === "insert")                                                       // 141
      return false;                                                                                                    // 142
                                                                                                                       // 143
    // Don't include fields with denyUpdate=true when it's an update form                                              // 144
    if (fieldDefs.denyUpdate && options.submitType === "update")                                                       // 145
      return false;                                                                                                    // 146
                                                                                                                       // 147
    return true;                                                                                                       // 148
  });                                                                                                                  // 149
                                                                                                                       // 150
  // Ensure fields are not added more than once                                                                        // 151
  fieldList = _.unique(fieldList);                                                                                     // 152
                                                                                                                       // 153
  return fieldList;                                                                                                    // 154
});                                                                                                                    // 155
                                                                                                                       // 156
/*                                                                                                                     // 157
 * afTemplateName                                                                                                      // 158
 */                                                                                                                    // 159
regHelper('afTemplateName', function afTemplateNameHelper(templateType, templateName) {                                // 160
  var self = this;                                                                                                     // 161
                                                                                                                       // 162
  // Template may be specified in schema.                                                                              // 163
  // Skip for quickForm because it renders a form and not a field.                                                     // 164
  if (!templateName && templateType !== 'quickForm') {                                                                 // 165
    var autoform = AutoForm.find(templateType);                                                                        // 166
    var fieldName = self.name;                                                                                         // 167
                                                                                                                       // 168
    if (fieldName && autoform) {                                                                                       // 169
      var defs = Utility.getDefs(autoform.ss, fieldName); //defs will not be undefined                                 // 170
      templateName = (defs.autoform && defs.autoform.template);                                                        // 171
    }                                                                                                                  // 172
  }                                                                                                                    // 173
                                                                                                                       // 174
  // Determine default template                                                                                        // 175
  var defaultTemplate = AutoForm.getDefaultTemplateForType(templateType) || AutoForm.getDefaultTemplate();             // 176
                                                                                                                       // 177
  // Determine template name                                                                                           // 178
  var result;                                                                                                          // 179
  if (templateName) {                                                                                                  // 180
    result = templateType + '_' + templateName;                                                                        // 181
    if (!Template[result]) {                                                                                           // 182
      result = null;                                                                                                   // 183
      AutoForm._debug && console.warn(templateType + ': "' + templateName + '" is not a valid template name. Falling back to default template, "' + defaultTemplate + '".');
    }                                                                                                                  // 185
  }                                                                                                                    // 186
                                                                                                                       // 187
  if (!result) {                                                                                                       // 188
    result = templateType + '_' + defaultTemplate;                                                                     // 189
    if (!Template[result]) {                                                                                           // 190
      throw new Error(templateType + ': "' + defaultTemplate + '" is not a valid template name');                      // 191
    }                                                                                                                  // 192
  }                                                                                                                    // 193
                                                                                                                       // 194
  // Return the template name that we want to use                                                                      // 195
  return result;                                                                                                       // 196
});                                                                                                                    // 197
                                                                                                                       // 198
/*                                                                                                                     // 199
 * PRIVATE                                                                                                             // 200
 */                                                                                                                    // 201
                                                                                                                       // 202
function parseOptions(options, helperName) {                                                                           // 203
  var hash = (options || {}).hash || {};                                                                               // 204
  // Find the autoform context                                                                                         // 205
  var afContext = AutoForm.find(helperName);                                                                           // 206
  // Call getDefs for side effect of throwing errors when name is not in schema                                        // 207
  hash.name && Utility.getDefs(afContext.ss, hash.name);                                                               // 208
  return _.extend({}, afContext, hash);                                                                                // 209
}                                                                                                                      // 210
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/autoform-validation.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// all form validation logic is here                                                                                   // 1
                                                                                                                       // 2
_validateForm = function _validateForm(formId, formDetails, formDocs, useCollectionSchema) {                           // 3
  if (formDetails.validationType === 'none')                                                                           // 4
    return true;                                                                                                       // 5
                                                                                                                       // 6
  // We use the schema for the `schema` attribute if present,                                                          // 7
  // else the schema for the collection. If there is a `schema`                                                        // 8
  // attribute but you want to force validation against the                                                            // 9
  // collection's schema instead, pass useCollectionSchema=true                                                        // 10
  var ss = (useCollectionSchema && formDetails.collection) ? formDetails.collection.simpleSchema() : formDetails.ss;   // 11
                                                                                                                       // 12
  var docId = formDetails.doc && formDetails.doc._id || null;                                                          // 13
                                                                                                                       // 14
  // Perform validation                                                                                                // 15
  if (formDetails.submitType === "update") {                                                                           // 16
    // For a type="update" form, we validate the modifier. We don't want to throw                                      // 17
    // errors about missing required fields, etc.                                                                      // 18
    return validateFormDoc(formDocs.updateDoc, true, formId, ss, docId);                                               // 19
  } else {                                                                                                             // 20
    // For any other type of form, we validate the document.                                                           // 21
    return validateFormDoc(formDocs.insertDoc, false, formId, ss, docId);                                              // 22
  }                                                                                                                    // 23
};                                                                                                                     // 24
                                                                                                                       // 25
validateFormDoc = function validateFormDoc(doc, isModifier, formId, ss, docId, key) {                                  // 26
  var ec = {                                                                                                           // 27
    userId: (Meteor.userId && Meteor.userId()) || null,                                                                // 28
    isInsert: !isModifier,                                                                                             // 29
    isUpdate: !!isModifier,                                                                                            // 30
    isUpsert: false,                                                                                                   // 31
    isFromTrustedCode: false,                                                                                          // 32
    docId: docId                                                                                                       // 33
  };                                                                                                                   // 34
                                                                                                                       // 35
  // Get a version of the doc that has auto values to validate here. We                                                // 36
  // don't want to actually send any auto values to the server because                                                 // 37
  // we ultimately want them generated on the server                                                                   // 38
  var docForValidation = ss.clean(_.clone(doc), {                                                                      // 39
    isModifier: isModifier,                                                                                            // 40
    filter: false,                                                                                                     // 41
    autoConvert: false,                                                                                                // 42
    trimStrings: false,                                                                                                // 43
    extendAutoValueContext: ec                                                                                         // 44
  });                                                                                                                  // 45
                                                                                                                       // 46
  // Validate                                                                                                          // 47
  // If `key` is provided, we validate that key/field only                                                             // 48
  if (key) {                                                                                                           // 49
    return ss.namedContext(formId).validateOne(docForValidation, key, {                                                // 50
      modifier: isModifier,                                                                                            // 51
      extendedCustomContext: ec                                                                                        // 52
    });                                                                                                                // 53
  } else {                                                                                                             // 54
    return ss.namedContext(formId).validate(docForValidation, {                                                        // 55
      modifier: isModifier,                                                                                            // 56
      extendedCustomContext: ec                                                                                        // 57
    });                                                                                                                // 58
  }                                                                                                                    // 59
};                                                                                                                     // 60
                                                                                                                       // 61
_validateField = function _validateField(key, template, skipEmpty, onlyIfAlreadyInvalid) {                             // 62
  if (!template || template._notInDOM) {                                                                               // 63
    return; //skip validation                                                                                          // 64
  }                                                                                                                    // 65
                                                                                                                       // 66
  var context = template.data;                                                                                         // 67
  var formId = context.id || defaultFormId;                                                                            // 68
  var formDetails = formData[formId];                                                                                  // 69
  var docId = formDetails.doc && formDetails.doc._id || null;                                                          // 70
  var ss = formDetails.ss;                                                                                             // 71
                                                                                                                       // 72
  if (onlyIfAlreadyInvalid && ss.namedContext(formId).isValid()) {                                                     // 73
    return; //skip validation                                                                                          // 74
  }                                                                                                                    // 75
                                                                                                                       // 76
  // Create a document based on all the values of all the inputs on the form                                           // 77
  var formDocs = getFormValues(template, formId, ss);                                                                  // 78
                                                                                                                       // 79
  // Clean and validate doc                                                                                            // 80
  if (formDetails.submitType === "update") {                                                                           // 81
    var docToValidate = formDocs.updateDoc;                                                                            // 82
    var isModifier = true;                                                                                             // 83
  } else {                                                                                                             // 84
    var docToValidate = formDocs.insertDoc;                                                                            // 85
    var isModifier = false;                                                                                            // 86
  }                                                                                                                    // 87
                                                                                                                       // 88
  // Skip validation if skipEmpty is true and the field we're validating                                               // 89
  // has no value.                                                                                                     // 90
  if (skipEmpty && !Utility.objAffectsKey(docToValidate, key))                                                         // 91
    return true; //skip validation                                                                                     // 92
                                                                                                                       // 93
  return validateFormDoc(docToValidate, isModifier, formId, ss, docId, key);                                           // 94
};                                                                                                                     // 95
                                                                                                                       // 96
//throttling function that calls out to _validateField                                                                 // 97
var vok = {}, tm = {}, _prevent = false;                                                                               // 98
validateField = function validateField(key, template, skipEmpty, onlyIfAlreadyInvalid) {                               // 99
  if (vok[key] === false) {                                                                                            // 100
    Meteor.clearTimeout(tm[key]);                                                                                      // 101
    tm[key] = Meteor.setTimeout(function() {                                                                           // 102
      vok[key] = true;                                                                                                 // 103
      if (!_prevent) {                                                                                                 // 104
        _validateField(key, template, skipEmpty, onlyIfAlreadyInvalid);                                                // 105
      }                                                                                                                // 106
    }, 300);                                                                                                           // 107
    return;                                                                                                            // 108
  }                                                                                                                    // 109
  vok[key] = false;                                                                                                    // 110
  if (!_prevent) {                                                                                                     // 111
    _validateField(key, template, skipEmpty, onlyIfAlreadyInvalid);                                                    // 112
  }                                                                                                                    // 113
};                                                                                                                     // 114
                                                                                                                       // 115
// To prevent issues with keyup validation firing right after we've                                                    // 116
// invalidated due to submission, we can quickly and temporarily stop                                                  // 117
// field validation.                                                                                                   // 118
preventQueuedValidation = function preventQueuedValidation() {                                                         // 119
  _prevent = true;                                                                                                     // 120
  Meteor.setTimeout(function() {                                                                                       // 121
    _prevent = false;                                                                                                  // 122
  }, 500);                                                                                                             // 123
};                                                                                                                     // 124
                                                                                                                       // 125
// Prep function to select the focus the first field with an error                                                     // 126
selectFirstInvalidField = function selectFirstInvalidField(formId, ss, template) {                                     // 127
  var ctx = ss.namedContext(formId);                                                                                   // 128
  if (!ctx.isValid()) {                                                                                                // 129
    // Exclude fields in sub-forms, since they will belong to a different AutoForm and schema.                         // 130
    var fields = template.$('[data-schema-key]').not(template.$('form form [data-schema-key]'));                       // 131
    fields.each(function () {                                                                                          // 132
      var f = $(this);                                                                                                 // 133
      if (ctx.keyIsInvalid(f.attr('data-schema-key'))) {                                                               // 134
        f.focus();                                                                                                     // 135
        return false;                                                                                                  // 136
      }                                                                                                                // 137
    });                                                                                                                // 138
  }                                                                                                                    // 139
};                                                                                                                     // 140
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/autoform-events.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// all form events handled here                                                                                        // 1
var lastAutoSaveElement = null;                                                                                        // 2
                                                                                                                       // 3
function beginSubmit(formId, template) {                                                                               // 4
  if (!template || template._notInDOM)                                                                                 // 5
    return;                                                                                                            // 6
  // Get user-defined hooks                                                                                            // 7
  var hooks = Hooks.getHooks(formId, 'beginSubmit');                                                                   // 8
  if (hooks.length) {                                                                                                  // 9
    _.each(hooks, function beginSubmitHooks(hook) {                                                                    // 10
      hook(formId, template);                                                                                          // 11
    });                                                                                                                // 12
  } else {                                                                                                             // 13
    // If there are no user-defined hooks, by default we disable the submit button during submission                   // 14
    var submitButton = template.find("button[type=submit]") || template.find("input[type=submit]");                    // 15
    if (submitButton) {                                                                                                // 16
      submitButton.disabled = true;                                                                                    // 17
    }                                                                                                                  // 18
  }                                                                                                                    // 19
}                                                                                                                      // 20
                                                                                                                       // 21
function endSubmit(formId, template) {                                                                                 // 22
  if (!template || template._notInDOM)                                                                                 // 23
    return;                                                                                                            // 24
  // Try to avoid incorrect reporting of which input caused autosave                                                   // 25
  lastAutoSaveElement = null;                                                                                          // 26
  // Get user-defined hooks                                                                                            // 27
  var hooks = Hooks.getHooks(formId, 'endSubmit');                                                                     // 28
  if (hooks.length) {                                                                                                  // 29
    _.each(hooks, function endSubmitHooks(hook) {                                                                      // 30
      hook(formId, template);                                                                                          // 31
    });                                                                                                                // 32
  } else {                                                                                                             // 33
    // If there are no user-defined hooks, by default we disable the submit button during submission                   // 34
    var submitButton = template.find("button[type=submit]") || template.find("input[type=submit]");                    // 35
    if (submitButton) {                                                                                                // 36
      submitButton.disabled = false;                                                                                   // 37
    }                                                                                                                  // 38
  }                                                                                                                    // 39
}                                                                                                                      // 40
                                                                                                                       // 41
Template.autoForm.events({                                                                                             // 42
  'submit form': function autoFormSubmitHandler(event, template) {                                                     // 43
    // Gather necessary form info                                                                                      // 44
    var formId = this.id || defaultFormId;                                                                             // 45
    var data = formData[formId];                                                                                       // 46
    var isInsert = (data.submitType === "insert");                                                                     // 47
    var isUpdate = (data.submitType === "update");                                                                     // 48
    var isMethod = (data.submitType === "method");                                                                     // 49
    var method = data.submitMethod;                                                                                    // 50
    var isNormalSubmit = (!isInsert && !isUpdate && !isMethod);                                                        // 51
    // ss will be the schema for the `schema` attribute if present,                                                    // 52
    // else the schema for the collection                                                                              // 53
    var ss = data.ss;                                                                                                  // 54
    var ssIsOverride = data.ssIsOverride;                                                                              // 55
    var collection = data.collection;                                                                                  // 56
    var currentDoc = data.doc;                                                                                         // 57
    var docId = currentDoc ? currentDoc._id : null;                                                                    // 58
    var isValid;                                                                                                       // 59
                                                                                                                       // 60
    // Make sure we have a collection if we need one for the requested submit type                                     // 61
    if (!collection) {                                                                                                 // 62
      if (isInsert)                                                                                                    // 63
        throw new Error("AutoForm: You must specify a collection when form type is insert.");                          // 64
      else if (isUpdate)                                                                                               // 65
        throw new Error("AutoForm: You must specify a collection when form type is update.");                          // 66
    }                                                                                                                  // 67
                                                                                                                       // 68
    // Prevent browser form submission if we're planning to do our own thing                                           // 69
    if (!isNormalSubmit) {                                                                                             // 70
      event.preventDefault();                                                                                          // 71
    }                                                                                                                  // 72
                                                                                                                       // 73
    // Gather hooks                                                                                                    // 74
    var onSuccess = Hooks.getHooks(formId, 'onSuccess');                                                               // 75
    var onError = Hooks.getHooks(formId, 'onError');                                                                   // 76
                                                                                                                       // 77
    // Prep haltSubmission function                                                                                    // 78
    function haltSubmission() {                                                                                        // 79
      event.preventDefault();                                                                                          // 80
      event.stopPropagation();                                                                                         // 81
      // Run endSubmit hooks (re-enabled submit button or form, etc.)                                                  // 82
      endSubmit(formId, template);                                                                                     // 83
    }                                                                                                                  // 84
                                                                                                                       // 85
    function failedValidation() {                                                                                      // 86
      selectFirstInvalidField(formId, ss, template);                                                                   // 87
      var ec = ss.namedContext(formId);                                                                                // 88
      var ik = ec.invalidKeys(), err;                                                                                  // 89
      if (ik) {                                                                                                        // 90
        if (ik.length) {                                                                                               // 91
          // We add `message` prop to the invalidKeys.                                                                 // 92
          // Maybe SS pkg should just add that property back in?                                                       // 93
          ik = _.map(ik, function (o) {                                                                                // 94
            return _.extend({message: ec.keyErrorMessage(o.name)}, o);                                                 // 95
          });                                                                                                          // 96
          err = new Error(ik[0].message);                                                                              // 97
        } else {                                                                                                       // 98
          err = new Error('form failed validation');                                                                   // 99
        }                                                                                                              // 100
        err.invalidKeys = ik;                                                                                          // 101
      } else {                                                                                                         // 102
        err = new Error('form failed validation');                                                                     // 103
      }                                                                                                                // 104
      _.each(onError, function onErrorEach(hook) {                                                                     // 105
        hook('pre-submit validation', err, template);                                                                  // 106
      });                                                                                                              // 107
      haltSubmission();                                                                                                // 108
    }                                                                                                                  // 109
                                                                                                                       // 110
    // Prep callback creator function                                                                                  // 111
    function makeCallback(name) {                                                                                      // 112
      var cbCtx = {                                                                                                    // 113
        event: event,                                                                                                  // 114
        template: template,                                                                                            // 115
        formId: formId,                                                                                                // 116
        docId: docId,                                                                                                  // 117
        autoSaveChangedElement: lastAutoSaveElement,                                                                   // 118
        resetForm: function () {                                                                                       // 119
          AutoForm.resetForm(formId, template);                                                                        // 120
        }                                                                                                              // 121
      };                                                                                                               // 122
      var afterHooks = Hooks.getHooks(formId, 'after', name);                                                          // 123
      return function autoFormActionCallback(error, result) {                                                          // 124
        if (error) {                                                                                                   // 125
          preventQueuedValidation();                                                                                   // 126
          selectFirstInvalidField(formId, ss, template);                                                               // 127
          if (onError && onError.length) {                                                                             // 128
            _.each(onError, function onErrorEach(hook) {                                                               // 129
              hook.call(cbCtx, name, error, template);                                                                 // 130
            });                                                                                                        // 131
          } else if ((!afterHooks || !afterHooks.length) && ss.namedContext(formId).isValid()) {                       // 132
            // if there are no onError or "after" hooks or validation errors, throw the error                          // 133
            // because it must be some other error from the server                                                     // 134
            endSubmit(formId, template);                                                                               // 135
            throw error;                                                                                               // 136
          }                                                                                                            // 137
        } else {                                                                                                       // 138
          // By default, we reset form after successful submit, but                                                    // 139
          // you can opt out.                                                                                          // 140
          if (data.resetOnSuccess !== false) {                                                                         // 141
            AutoForm.resetForm(formId, template);                                                                      // 142
          }                                                                                                            // 143
          _.each(onSuccess, function onSuccessEach(hook) {                                                             // 144
            hook.call(cbCtx, name, result, template);                                                                  // 145
          });                                                                                                          // 146
        }                                                                                                              // 147
        _.each(afterHooks, function afterHooksEach(hook) {                                                             // 148
          hook.call(cbCtx, error, result, template);                                                                   // 149
        });                                                                                                            // 150
        // Run endSubmit hooks (re-enabled submit button or form, etc.)                                                // 151
        endSubmit(formId, template);                                                                                   // 152
      };                                                                                                               // 153
    }                                                                                                                  // 154
                                                                                                                       // 155
    // Prep function that calls before hooks.                                                                          // 156
    // We pass the template instance in case the hook                                                                  // 157
    // needs the data context.                                                                                         // 158
    function doBefore(docId, doc, hooks, name, next) {                                                                 // 159
      // We call the hooks recursively, in order added,                                                                // 160
      // passing the result of the first hook to the                                                                   // 161
      // second hook, etc.                                                                                             // 162
      function runHook(i, doc) {                                                                                       // 163
        hook = hooks[i];                                                                                               // 164
                                                                                                                       // 165
        if (!hook) {                                                                                                   // 166
          // We've run all hooks; continue submission                                                                  // 167
          next(doc);                                                                                                   // 168
          return;                                                                                                      // 169
        }                                                                                                              // 170
                                                                                                                       // 171
        // Set up before hook context                                                                                  // 172
        var cb = function (d) {                                                                                        // 173
          // If the hook returns false, we cancel                                                                      // 174
          if (d === false) {                                                                                           // 175
            // Run endSubmit hooks (re-enabled submit button or form, etc.)                                            // 176
            endSubmit(formId, template);                                                                               // 177
          } else {                                                                                                     // 178
            if (!_.isObject(d)) {                                                                                      // 179
              throw new Error(name + " must return an object");                                                        // 180
            }                                                                                                          // 181
            runHook(i+1, d);                                                                                           // 182
          }                                                                                                            // 183
        };                                                                                                             // 184
        var ctx = {                                                                                                    // 185
          event: event,                                                                                                // 186
          template: template,                                                                                          // 187
          formId: formId,                                                                                              // 188
          docId: docId,                                                                                                // 189
          autoSaveChangedElement: lastAutoSaveElement,                                                                 // 190
          resetForm: function () {                                                                                     // 191
            AutoForm.resetForm(formId, template);                                                                      // 192
          },                                                                                                           // 193
          result: _.once(cb)                                                                                           // 194
        };                                                                                                             // 195
                                                                                                                       // 196
        var result;                                                                                                    // 197
        if (docId) {                                                                                                   // 198
          result = hook.call(ctx, docId, doc, template);                                                               // 199
        } else {                                                                                                       // 200
          result = hook.call(ctx, doc, template);                                                                      // 201
        }                                                                                                              // 202
        // If the hook returns undefined, we wait for it                                                               // 203
        // to call this.result()                                                                                       // 204
        if (result !== void 0) {                                                                                       // 205
          ctx.result(result);                                                                                          // 206
        }                                                                                                              // 207
      }                                                                                                                // 208
                                                                                                                       // 209
      runHook(0, doc);                                                                                                 // 210
    }                                                                                                                  // 211
                                                                                                                       // 212
    // Prep function that calls onSubmit hooks.                                                                        // 213
    // We pass the template instance in case the hook                                                                  // 214
    // needs the data context, and event in case they                                                                  // 215
    // need to prevent default, etc.                                                                                   // 216
    function doOnSubmit(hooks, insertDoc, updateDoc, currentDoc) {                                                     // 217
      // These are called differently from the before hooks because                                                    // 218
      // they run async, but they can run in parallel and we need the                                                  // 219
      // result of all of them immediately because they can return                                                     // 220
      // false to stop normal form submission.                                                                         // 221
                                                                                                                       // 222
      var hookCount = hooks.length, doneCount = 0;                                                                     // 223
                                                                                                                       // 224
      if (hookCount === 0) {                                                                                           // 225
        // Run endSubmit hooks (re-enabled submit button or form, etc.)                                                // 226
        endSubmit(formId, template);                                                                                   // 227
        return;                                                                                                        // 228
      }                                                                                                                // 229
                                                                                                                       // 230
      // Set up onSubmit hook context                                                                                  // 231
      var ctx = {                                                                                                      // 232
        event: event,                                                                                                  // 233
        template: template,                                                                                            // 234
        formId: formId,                                                                                                // 235
        docId: docId,                                                                                                  // 236
        autoSaveChangedElement: lastAutoSaveElement,                                                                   // 237
        resetForm: function () {                                                                                       // 238
          AutoForm.resetForm(formId, template);                                                                        // 239
        },                                                                                                             // 240
        done: function () {                                                                                            // 241
          doneCount++;                                                                                                 // 242
          if (doneCount === hookCount) {                                                                               // 243
            // Run endSubmit hooks (re-enabled submit button or form, etc.)                                            // 244
            endSubmit(formId, template);                                                                               // 245
          }                                                                                                            // 246
        }                                                                                                              // 247
      };                                                                                                               // 248
                                                                                                                       // 249
      // Call all hooks at once.                                                                                       // 250
      // Pass both types of doc plus the doc attached to the form.                                                     // 251
      // If any return false, we stop normal submission, but we don't                                                  // 252
      // run endSubmit hooks until they all call this.done().                                                          // 253
      var shouldStop = false;                                                                                          // 254
      _.each(hooks, function eachOnSubmit(hook) {                                                                      // 255
        var result = hook.call(ctx, insertDoc, updateDoc, currentDoc);                                                 // 256
        if (shouldStop === false && result === false) {                                                                // 257
          shouldStop = true;                                                                                           // 258
        }                                                                                                              // 259
      });                                                                                                              // 260
      if (shouldStop) {                                                                                                // 261
        event.preventDefault();                                                                                        // 262
        event.stopPropagation();                                                                                       // 263
      }                                                                                                                // 264
    }                                                                                                                  // 265
                                                                                                                       // 266
    // Gather all form values                                                                                          // 267
    var formDocs = getFormValues(template, formId, ss);                                                                // 268
    var insertDoc = formDocs.insertDoc;                                                                                // 269
    var updateDoc = formDocs.updateDoc;                                                                                // 270
                                                                                                                       // 271
    // Pre-validate                                                                                                    // 272
    // For inserts and updates, which have their                                                                       // 273
    // own validation, we validate here only if                                                                        // 274
    // there is a `schema` attribute on the form.                                                                      // 275
    // Otherwise we let collection2 do the validation                                                                  // 276
    // after before hooks have run.                                                                                    // 277
    if (data.validationType !== 'none' && (ssIsOverride || isMethod || isNormalSubmit)) {                              // 278
      // Catch exceptions in validation functions which will bubble up here, cause a form with                         // 279
      // onSubmit() to submit prematurely and prevent the error from being reported                                    // 280
      // (due to a page refresh).                                                                                      // 281
      try {                                                                                                            // 282
        isValid = _validateForm(formId, data, formDocs);                                                               // 283
      } catch (e) {                                                                                                    // 284
        console.error('Validation error', e);                                                                          // 285
        isValid = false;                                                                                               // 286
      }                                                                                                                // 287
      // If we failed pre-submit validation, we stop submission.                                                       // 288
      if (isValid === false) {                                                                                         // 289
        return failedValidation();                                                                                     // 290
      }                                                                                                                // 291
      // NOTE: For method forms when ssIsOverride, we will validate again, later, after before hooks                   // 292
      // but before calling the method, against the collection schema                                                  // 293
    }                                                                                                                  // 294
                                                                                                                       // 295
    // Run beginSubmit hooks (disable submit button or form, etc.)                                                     // 296
    // NOTE: This needs to stay after getFormValues in case a                                                          // 297
    // beginSubmit hook disables inputs. We don't get values for                                                       // 298
    // disabled inputs, but if they are just disabling during submission,                                              // 299
    // then we actually do want the values.                                                                            // 300
    beginSubmit(formId, template);                                                                                     // 301
                                                                                                                       // 302
    // Now we will do the requested insert, update, method, or normal                                                  // 303
    // browser form submission. Even though we may have already validated above,                                       // 304
    // we do it again upon insert or update                                                                            // 305
    // because collection2 validation catches additional stuff like unique and                                         // 306
    // because our form schema need not be the same as our collection schema.                                          // 307
    var validationOptions = {                                                                                          // 308
      validationContext: formId,                                                                                       // 309
      filter: data.filter,                                                                                             // 310
      autoConvert: data.autoConvert,                                                                                   // 311
      removeEmptyStrings: data.removeEmptyStrings,                                                                     // 312
      trimStrings: data.trimStrings                                                                                    // 313
    };                                                                                                                 // 314
                                                                                                                       // 315
    // INSERT FORM SUBMIT                                                                                              // 316
    if (isInsert) {                                                                                                    // 317
      // Get "before.insert" hooks                                                                                     // 318
      var beforeInsertHooks = Hooks.getHooks(formId, 'before', 'insert');                                              // 319
      // Run "before.insert" hooks                                                                                     // 320
      doBefore(null, insertDoc, beforeInsertHooks, 'before.insert hook', function (doc) {                              // 321
        // Make callback for insert                                                                                    // 322
        var insertCallback = makeCallback('insert');                                                                   // 323
        // Perform insert                                                                                              // 324
        if (typeof collection.simpleSchema === "function" && collection.simpleSchema() != null) {                      // 325
          // If the collection2 pkg is used and a schema is attached, we pass a validationContext                      // 326
          collection.insert(doc, validationOptions, insertCallback);                                                   // 327
        } else {                                                                                                       // 328
          // If the collection2 pkg is not used or no schema is attached, we don't pass options                        // 329
          // because core Meteor's `insert` function does not accept                                                   // 330
          // an options argument.                                                                                      // 331
          collection.insert(doc, insertCallback);                                                                      // 332
        }                                                                                                              // 333
      });                                                                                                              // 334
    }                                                                                                                  // 335
                                                                                                                       // 336
    // UPDATE FORM SUBMIT                                                                                              // 337
    else if (isUpdate) {                                                                                               // 338
      // Get "before.update" hooks                                                                                     // 339
      var beforeUpdateHooks = Hooks.getHooks(formId, 'before', 'update');                                              // 340
      // Run "before.update" hooks                                                                                     // 341
      doBefore(docId, updateDoc, beforeUpdateHooks, 'before.update hook', function (modifier) {                        // 342
        // Make callback for update                                                                                    // 343
        var updateCallback = makeCallback('update');                                                                   // 344
        if (_.isEmpty(modifier)) { // make sure this check stays after the before hooks                                // 345
          // Nothing to update. Just treat it as a successful update.                                                  // 346
          updateCallback(null, 0);                                                                                     // 347
        }                                                                                                              // 348
        // Perform update                                                                                              // 349
        collection.update(docId, modifier, validationOptions, updateCallback);                                         // 350
      });                                                                                                              // 351
    }                                                                                                                  // 352
                                                                                                                       // 353
    // METHOD FORM SUBMIT                                                                                              // 354
    else if (isMethod) {                                                                                               // 355
      // Get "before.methodName" hooks                                                                                 // 356
      if (!method) {                                                                                                   // 357
        throw new Error('When form type is "method", you must also provide a "meteormethod" attribute');               // 358
      }                                                                                                                // 359
      var beforeMethodHooks = Hooks.getHooks(formId, 'before', method);                                                // 360
      // Run "before.methodName" hooks                                                                                 // 361
      doBefore(null, insertDoc, beforeMethodHooks, 'before.method hook', function (doc) {                              // 362
        // When both `schema` and `collection` are supplied, we do a                                                   // 363
        // second validation now, against the collection schema,                                                       // 364
        // before calling the method.                                                                                  // 365
        if (ssIsOverride) {                                                                                            // 366
          isValid = _validateForm(formId, data, formDocs, true);                                                       // 367
          if (isValid === false) {                                                                                     // 368
            return failedValidation();                                                                                 // 369
          }                                                                                                            // 370
        }                                                                                                              // 371
        // Make callback for Meteor.call                                                                               // 372
        var methodCallback = makeCallback(method);                                                                     // 373
        // Call the method                                                                                             // 374
        Meteor.call(method, doc, updateDoc, docId, methodCallback);                                                    // 375
      });                                                                                                              // 376
    }                                                                                                                  // 377
                                                                                                                       // 378
    // NORMAL FORM SUBMIT                                                                                              // 379
    else if (isNormalSubmit) {                                                                                         // 380
      // Get onSubmit hooks                                                                                            // 381
      var onSubmitHooks = Hooks.getHooks(formId, 'onSubmit');                                                          // 382
      doOnSubmit(onSubmitHooks, insertDoc, updateDoc, currentDoc);                                                     // 383
    }                                                                                                                  // 384
  },                                                                                                                   // 385
  'keyup [data-schema-key]': function autoFormKeyUpHandler(event, template) {                                          // 386
    var validationType = template.data.validation || 'submitThenKeyup';                                                // 387
    var onlyIfAlreadyInvalid = (validationType === 'submitThenKeyup');                                                 // 388
    var skipEmpty = !(event.keyCode === 8 || event.keyCode === 46); //if deleting or backspacing, don't skip empty     // 389
    if ((validationType === 'keyup' || validationType === 'submitThenKeyup')) {                                        // 390
      validateField(event.currentTarget.getAttribute("data-schema-key"), template, skipEmpty, onlyIfAlreadyInvalid);   // 391
    }                                                                                                                  // 392
  },                                                                                                                   // 393
  'blur [data-schema-key]': function autoFormBlurHandler(event, template) {                                            // 394
    var validationType = template.data.validation || 'submitThenKeyup';                                                // 395
    var onlyIfAlreadyInvalid = (validationType === 'submitThenKeyup' || validationType === 'submitThenBlur');          // 396
    if (validationType === 'keyup' || validationType === 'blur' || validationType === 'submitThenKeyup' || validationType === 'submitThenBlur') {
      validateField(event.currentTarget.getAttribute("data-schema-key"), template, false, onlyIfAlreadyInvalid);       // 398
    }                                                                                                                  // 399
  },                                                                                                                   // 400
  'change form': function autoFormChangeHandler(event, template) {                                                     // 401
    var self = this;                                                                                                   // 402
                                                                                                                       // 403
    var key = event.target.getAttribute("data-schema-key");                                                            // 404
    if (!key)                                                                                                          // 405
      return;                                                                                                          // 406
                                                                                                                       // 407
    var formId = self.id || defaultFormId;                                                                             // 408
    var data = formData[formId];                                                                                       // 409
    if (!data)                                                                                                         // 410
      return;                                                                                                          // 411
                                                                                                                       // 412
    // Update cached form values for hot code reload persistence                                                       // 413
    if (self.preserveForm !== false) {                                                                                 // 414
      formPreserve.registerForm(formId, function autoFormRegFormCallback() {                                           // 415
        return getFormValues(template, formId, data.ss).insertDoc;                                                     // 416
      });                                                                                                              // 417
    }                                                                                                                  // 418
                                                                                                                       // 419
    // Update field's value for reactive show/hide of other fields by value                                            // 420
    updateTrackedFieldValue(formId, key, getFieldValue(template, key));                                                // 421
                                                                                                                       // 422
    // If the form should be auto-saved whenever updated, we do that on field                                          // 423
    // changes instead of validating the field                                                                         // 424
    if (data.autosave) {                                                                                               // 425
      lastAutoSaveElement = event.currentTarget;                                                                       // 426
      $(event.currentTarget).submit();                                                                                 // 427
      return;                                                                                                          // 428
    }                                                                                                                  // 429
                                                                                                                       // 430
    var validationType = data.validationType || 'submitThenKeyup';                                                     // 431
    var onlyIfAlreadyInvalid = (validationType === 'submitThenKeyup' || validationType === 'submitThenBlur');          // 432
    if (validationType === 'keyup' || validationType === 'blur' || validationType === 'submitThenKeyup' || validationType === 'submitThenBlur') {
      validateField(key, template, false, onlyIfAlreadyInvalid);                                                       // 434
    }                                                                                                                  // 435
  },                                                                                                                   // 436
  'reset form': function autoFormResetHandler(event, template) {                                                       // 437
    var formId = this.id || defaultFormId;                                                                             // 438
                                                                                                                       // 439
    formPreserve.unregisterForm(formId);                                                                               // 440
                                                                                                                       // 441
    // Reset array counts                                                                                              // 442
    arrayTracker.resetForm(formId);                                                                                    // 443
                                                                                                                       // 444
    var fd = formData[formId];                                                                                         // 445
                                                                                                                       // 446
    if (!fd)                                                                                                           // 447
      return;                                                                                                          // 448
                                                                                                                       // 449
    if (fd.ss) {                                                                                                       // 450
      fd.ss.namedContext(formId).resetValidation();                                                                    // 451
      // If simpleSchema is undefined, we haven't yet rendered the form, and therefore                                 // 452
      // there is no need to reset validation for it. No error need be thrown.                                         // 453
    }                                                                                                                  // 454
                                                                                                                       // 455
    //XXX We should ideally be able to call invalidateFormContext                                                      // 456
    // in all cases and that's it, but we need to figure out how                                                       // 457
    // to make Blaze forget about any changes the user made to the form                                                // 458
    if (this.doc) {                                                                                                    // 459
      event.preventDefault();                                                                                          // 460
      invalidateFormContext(formId);                                                                                   // 461
      template.$("[autofocus]").focus();                                                                               // 462
    } else {                                                                                                           // 463
      // Update tracked field values                                                                                   // 464
      // This must be done after we allow this event handler to return                                                 // 465
      // because we have to let the browser reset all fields before we                                                 // 466
      // update their values for deps.                                                                                 // 467
      Meteor.setTimeout(function () {                                                                                  // 468
        updateAllTrackedFieldValues(formId);                                                                           // 469
        if (template && !template._notInDOM) {                                                                         // 470
          template.$("[autofocus]").focus();                                                                           // 471
        }                                                                                                              // 472
      }, 0);                                                                                                           // 473
    }                                                                                                                  // 474
                                                                                                                       // 475
  },                                                                                                                   // 476
  'keydown .autoform-array-item input': function (event, template) {                                                   // 477
    // When enter is pressed in an array item field, default behavior                                                  // 478
    // seems to be to "click" the remove item button. This doesn't make                                                // 479
    // sense so we stop it.                                                                                            // 480
    if (event.keyCode === 13) {                                                                                        // 481
      event.preventDefault();                                                                                          // 482
    }                                                                                                                  // 483
  },                                                                                                                   // 484
  'click .autoform-remove-item': function autoFormClickRemoveItem(event, template) {                                   // 485
    var self = this; // This type of button must be used within an afEachArrayItem block, so we know the context       // 486
                                                                                                                       // 487
    event.preventDefault();                                                                                            // 488
                                                                                                                       // 489
    var name = self.arrayFieldName;                                                                                    // 490
    var minCount = self.minCount; // optional, overrides schema                                                        // 491
    var maxCount = self.maxCount; // optional, overrides schema                                                        // 492
    var index = self.index;                                                                                            // 493
    var data = template.data;                                                                                          // 494
    var formId = data && data.id || defaultFormId;                                                                     // 495
    var ss = formData[formId].ss;                                                                                      // 496
                                                                                                                       // 497
    // remove the item we clicked                                                                                      // 498
    arrayTracker.removeFromFieldAtIndex(formId, name, index, ss, minCount, maxCount);                                  // 499
  },                                                                                                                   // 500
  'click .autoform-add-item': function autoFormClickAddItem(event, template) {                                         // 501
    event.preventDefault();                                                                                            // 502
                                                                                                                       // 503
    // We pull from data attributes because the button could be manually                                               // 504
    // added anywhere, so we don't know the data context.                                                              // 505
    var btn = $(event.currentTarget);                                                                                  // 506
    var name = btn.attr("data-autoform-field");                                                                        // 507
    var minCount = btn.attr("data-autoform-minCount"); // optional, overrides schema                                   // 508
    var maxCount = btn.attr("data-autoform-maxCount"); // optional, overrides schema                                   // 509
    var data = template.data;                                                                                          // 510
    var formId = data && data.id || defaultFormId;                                                                     // 511
    var ss = formData[formId].ss;                                                                                      // 512
                                                                                                                       // 513
    arrayTracker.addOneToField(formId, name, ss, minCount, maxCount);                                                  // 514
  }                                                                                                                    // 515
});                                                                                                                    // 516
                                                                                                                       // 517
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aldeed:autoform/autoform-api.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// This file defines the public, exported API                                                                          // 1
                                                                                                                       // 2
AutoForm = AutoForm || {}; //exported                                                                                  // 3
                                                                                                                       // 4
AutoForm.formPreserve = formPreserve;                                                                                  // 5
                                                                                                                       // 6
/**                                                                                                                    // 7
 * @method AutoForm.addHooks                                                                                           // 8
 * @public                                                                                                             // 9
 * @param {String[]|String|null} formIds Form `id` or array of form IDs to which these hooks apply. Specify `null` to add hooks that will run for every form.
 * @param {Object} hooks Hooks to add, where supported names are "before", "after", "formToDoc", "docToForm", "onSubmit", "onSuccess", and "onError".
 * @returns {undefined}                                                                                                // 12
 *                                                                                                                     // 13
 * Defines hooks to be used by one or more forms. Extends hooks lists if called multiple times for the same            // 14
 * form.                                                                                                               // 15
 */                                                                                                                    // 16
AutoForm.addHooks = function autoFormAddHooks(formIds, hooks, replace) {                                               // 17
  if (typeof formIds === "string") {                                                                                   // 18
    formIds = [formIds];                                                                                               // 19
  }                                                                                                                    // 20
                                                                                                                       // 21
  // If formIds is null, add global hooks                                                                              // 22
  if (!formIds) {                                                                                                      // 23
    Hooks.addHooksToList(Hooks.global, hooks, replace);                                                                // 24
  } else {                                                                                                             // 25
    _.each(formIds, function (formId) {                                                                                // 26
                                                                                                                       // 27
      // Init the hooks object if not done yet                                                                         // 28
      Hooks.form[formId] = Hooks.form[formId] || {                                                                     // 29
        before: {},                                                                                                    // 30
        after: {},                                                                                                     // 31
        formToDoc: [],                                                                                                 // 32
        docToForm: [],                                                                                                 // 33
        onSubmit: [],                                                                                                  // 34
        onSuccess: [],                                                                                                 // 35
        onError: [],                                                                                                   // 36
        beginSubmit: [],                                                                                               // 37
        endSubmit: []                                                                                                  // 38
      };                                                                                                               // 39
                                                                                                                       // 40
      Hooks.addHooksToList(Hooks.form[formId], hooks, replace);                                                        // 41
    });                                                                                                                // 42
  }                                                                                                                    // 43
};                                                                                                                     // 44
                                                                                                                       // 45
/**                                                                                                                    // 46
 * @method AutoForm.hooks                                                                                              // 47
 * @public                                                                                                             // 48
 * @param {Object} hooks                                                                                               // 49
 * @returns {undefined}                                                                                                // 50
 *                                                                                                                     // 51
 * Defines hooks by form id. Extends hooks lists if called multiple times for the same                                 // 52
 * form.                                                                                                               // 53
 */                                                                                                                    // 54
AutoForm.hooks = function autoFormHooks(hooks, replace) {                                                              // 55
  _.each(hooks, function(hooksObj, formId) {                                                                           // 56
    AutoForm.addHooks(formId, hooksObj, replace);                                                                      // 57
  });                                                                                                                  // 58
};                                                                                                                     // 59
                                                                                                                       // 60
/**                                                                                                                    // 61
 * @method AutoForm.resetForm                                                                                          // 62
 * @public                                                                                                             // 63
 * @param {String} formId                                                                                              // 64
 * @param {TemplateInstance} [template] Looked up if not provided. Pass in for efficiency.                             // 65
 * @returns {undefined}                                                                                                // 66
 *                                                                                                                     // 67
 * Resets an autoform, including resetting validation errors. The same as clicking the reset button for an autoform.   // 68
 */                                                                                                                    // 69
AutoForm.resetForm = function autoFormResetForm(formId, template) {                                                    // 70
  template = template || templatesById[formId];                                                                        // 71
  if (template && !template._notInDOM) {                                                                               // 72
    template.$("form")[0].reset();                                                                                     // 73
  }                                                                                                                    // 74
};                                                                                                                     // 75
                                                                                                                       // 76
/**                                                                                                                    // 77
 * @method AutoForm.setDefaultTemplate                                                                                 // 78
 * @public                                                                                                             // 79
 * @param {String} template                                                                                            // 80
 */                                                                                                                    // 81
AutoForm.setDefaultTemplate = function autoFormSetDefaultTemplate(template) {                                          // 82
  defaultTemplate = template;                                                                                          // 83
  deps.defaultTemplate.changed();                                                                                      // 84
};                                                                                                                     // 85
                                                                                                                       // 86
/**                                                                                                                    // 87
 * @method AutoForm.getDefaultTemplate                                                                                 // 88
 * @public                                                                                                             // 89
 *                                                                                                                     // 90
 * Reactive.                                                                                                           // 91
 */                                                                                                                    // 92
AutoForm.getDefaultTemplate = function autoFormGetDefaultTemplate() {                                                  // 93
  deps.defaultTemplate.depend();                                                                                       // 94
  return defaultTemplate;                                                                                              // 95
};                                                                                                                     // 96
                                                                                                                       // 97
/**                                                                                                                    // 98
 * @method AutoForm.setDefaultTemplateForType                                                                          // 99
 * @public                                                                                                             // 100
 * @param {String} type                                                                                                // 101
 * @param {String} template                                                                                            // 102
 */                                                                                                                    // 103
AutoForm.setDefaultTemplateForType = function autoFormSetDefaultTemplateForType(type, template) {                      // 104
  if (!deps.defaultTypeTemplates[type]) {                                                                              // 105
    throw new Error("invalid template type: " + type);                                                                 // 106
  }                                                                                                                    // 107
  if (template !== null && !Template[type + "_" + template]) {                                                         // 108
    throw new Error("setDefaultTemplateForType can't set default template to \"" + template + "\" for type \"" + type + "\" because there is no defined template with the name \"" + type + "_" + template + "\"");
  }                                                                                                                    // 110
  defaultTypeTemplates[type] = template;                                                                               // 111
  deps.defaultTypeTemplates[type].changed();                                                                           // 112
};                                                                                                                     // 113
                                                                                                                       // 114
/**                                                                                                                    // 115
 * @method AutoForm.getDefaultTemplateForType                                                                          // 116
 * @public                                                                                                             // 117
 * @param {String} type                                                                                                // 118
 * @return {String} Template name                                                                                      // 119
 *                                                                                                                     // 120
 * Reactive.                                                                                                           // 121
 */                                                                                                                    // 122
AutoForm.getDefaultTemplateForType = function autoFormGetDefaultTemplateForType(type) {                                // 123
  if (!deps.defaultTypeTemplates[type]) {                                                                              // 124
    throw new Error("invalid template type: " + type);                                                                 // 125
  }                                                                                                                    // 126
  deps.defaultTypeTemplates[type].depend();                                                                            // 127
  return defaultTypeTemplates[type];                                                                                   // 128
};                                                                                                                     // 129
                                                                                                                       // 130
/**                                                                                                                    // 131
 * @method AutoForm.getFormValues                                                                                      // 132
 * @public                                                                                                             // 133
 * @param {String} formId The `id` attribute of the `autoForm` you want current values for.                            // 134
 * @return {Object}                                                                                                    // 135
 *                                                                                                                     // 136
 * Returns an object representing the current values of all schema-based fields in the form.                           // 137
 * The returned object contains two properties, "insertDoc" and "updateDoc", which represent                           // 138
 * the field values as a normal object and as a MongoDB modifier, respectively.                                        // 139
 */                                                                                                                    // 140
AutoForm.getFormValues = function autoFormGetFormValues(formId) {                                                      // 141
  var template = templatesById[formId];                                                                                // 142
  if (!template || template._notInDOM) {                                                                               // 143
    throw new Error("getFormValues: There is currently no autoForm template rendered for the form with id " + formId); // 144
  }                                                                                                                    // 145
  // Get a reference to the SimpleSchema instance that should be used for                                              // 146
  // determining what types we want back for each field.                                                               // 147
  var context = template.data;                                                                                         // 148
  var ss = Utility.getSimpleSchemaFromContext(context, formId);                                                        // 149
  return getFormValues(template, formId, ss);                                                                          // 150
};                                                                                                                     // 151
                                                                                                                       // 152
/**                                                                                                                    // 153
 * @method AutoForm.getFieldValue                                                                                      // 154
 * @public                                                                                                             // 155
 * @param {String} formId The `id` attribute of the `autoForm` you want current values for.                            // 156
 * @param {String} fieldName The name of the field for which you want the current value.                               // 157
 * @return {Any}                                                                                                       // 158
 *                                                                                                                     // 159
 * Returns the value of the field (the value that would be used if the form were submitted right now).                 // 160
 * This is a reactive method that will rerun whenever the current value of the requested field changes.                // 161
 */                                                                                                                    // 162
AutoForm.getFieldValue = function autoFormGetFieldValue(formId, fieldName) {                                           // 163
  formValues[formId] = formValues[formId] || {};                                                                       // 164
  formValues[formId][fieldName] = formValues[formId][fieldName] || {_deps: new Deps.Dependency};                       // 165
  formValues[formId][fieldName]._deps.depend();                                                                        // 166
  return formValues[formId][fieldName]._val;                                                                           // 167
};                                                                                                                     // 168
                                                                                                                       // 169
/**                                                                                                                    // 170
 * @method AutoForm.inputValueHandlers                                                                                 // 171
 * @public                                                                                                             // 172
 * @param {Object} handlers An object defining one or more selectors with corresponding handler function.              // 173
 * @return {undefined}                                                                                                 // 174
 *                                                                                                                     // 175
 * Use this method to add custom input value handlers, which will be checked before                                    // 176
 * the built-in handlers.                                                                                              // 177
 */                                                                                                                    // 178
AutoForm.inputValueHandlers = function afInputValueHandlers(handlers) {                                                // 179
  _.extend(customInputValueHandlers, handlers);                                                                        // 180
};                                                                                                                     // 181
                                                                                                                       // 182
/**                                                                                                                    // 183
 * @method AutoForm.validateField                                                                                      // 184
 * @public                                                                                                             // 185
 * @param {String} formId The `id` attribute of the `autoForm` you want to validate.                                   // 186
 * @param {String} fieldName The name of the field within the `autoForm` you want to validate.                         // 187
 * @param {Boolean} [skipEmpty=false] Set to `true` to skip validation if the field has no value. Useful for preventing `required` errors in form fields that the user has not yet filled out.
 * @return {Boolean} Is it valid?                                                                                      // 189
 *                                                                                                                     // 190
 * In addition to returning a boolean that indicates whether the field is currently valid,                             // 191
 * this method causes the reactive validation messages to appear.                                                      // 192
 */                                                                                                                    // 193
AutoForm.validateField = function autoFormValidateField(formId, fieldName, skipEmpty) {                                // 194
  var template = templatesById[formId];                                                                                // 195
  if (!template || template._notInDOM) {                                                                               // 196
    throw new Error("validateField: There is currently no autoForm template rendered for the form with id " + formId); // 197
  }                                                                                                                    // 198
                                                                                                                       // 199
  return _validateField(fieldName, template, skipEmpty, false);                                                        // 200
};                                                                                                                     // 201
                                                                                                                       // 202
/**                                                                                                                    // 203
 * @method AutoForm.validateForm                                                                                       // 204
 * @public                                                                                                             // 205
 * @param {String} formId The `id` attribute of the `autoForm` you want to validate.                                   // 206
 * @return {Boolean} Is it valid?                                                                                      // 207
 *                                                                                                                     // 208
 * In addition to returning a boolean that indicates whether the form is currently valid,                              // 209
 * this method causes the reactive validation messages to appear.                                                      // 210
 */                                                                                                                    // 211
AutoForm.validateForm = function autoFormValidateForm(formId) {                                                        // 212
  var template = templatesById[formId];                                                                                // 213
  if (!template || template._notInDOM) {                                                                               // 214
    throw new Error("validateForm: There is currently no autoForm template rendered for the form with id " + formId);  // 215
  }                                                                                                                    // 216
                                                                                                                       // 217
  var data = formData[formId];                                                                                         // 218
  // ss will be the schema for the `schema` attribute if present,                                                      // 219
  // else the schema for the collection                                                                                // 220
  var ss = data.ss;                                                                                                    // 221
                                                                                                                       // 222
  // Gather all form values                                                                                            // 223
  var formDocs = getFormValues(template, formId, ss);                                                                  // 224
                                                                                                                       // 225
  var isValid = _validateForm(formId, data, formDocs);                                                                 // 226
                                                                                                                       // 227
  if (isValid === false) {                                                                                             // 228
    selectFirstInvalidField(formId, ss, template);                                                                     // 229
    return false;                                                                                                      // 230
  } else {                                                                                                             // 231
    return true;                                                                                                       // 232
  }                                                                                                                    // 233
};                                                                                                                     // 234
                                                                                                                       // 235
/**                                                                                                                    // 236
 * @method AutoForm.getValidationContext                                                                               // 237
 * @public                                                                                                             // 238
 * @param {String} formId The `id` attribute of the `autoForm` for which you want the validation context               // 239
 * @return {SimpleSchemaValidationContext} The SimpleSchema validation context object.                                 // 240
 *                                                                                                                     // 241
 * Use this method to get the validation context, which can be used to check                                           // 242
 * the current invalid fields, manually invalidate fields, etc.                                                        // 243
 */                                                                                                                    // 244
AutoForm.getValidationContext = function autoFormGetValidationContext(formId) {                                        // 245
  var data = formData[formId];                                                                                         // 246
  // ss will be the schema for the `schema` attribute if present,                                                      // 247
  // else the schema for the collection                                                                                // 248
  var ss = data.ss;                                                                                                    // 249
  return ss.namedContext(formId);                                                                                      // 250
};                                                                                                                     // 251
                                                                                                                       // 252
/**                                                                                                                    // 253
 * @method AutoForm.find                                                                                               // 254
 * @public                                                                                                             // 255
 * @return {Object} The data context for the closest autoform.                                                         // 256
 *                                                                                                                     // 257
 * Call this method from a UI helper to get the data context for the closest autoform. Always returns the context or throws an error.
 */                                                                                                                    // 259
AutoForm.find = function autoFormFind(type) {                                                                          // 260
  var n = 0, af;                                                                                                       // 261
  do {                                                                                                                 // 262
    af = UI._parentData(n++);                                                                                          // 263
  } while (af && !af._af);                                                                                             // 264
  if (!af || !af._af) {                                                                                                // 265
    throw new Error((type || "AutoForm.find") + " must be used within an autoForm block");                             // 266
  }                                                                                                                    // 267
  return af._af;                                                                                                       // 268
};                                                                                                                     // 269
                                                                                                                       // 270
/**                                                                                                                    // 271
 * @method AutoForm.debug                                                                                              // 272
 * @public                                                                                                             // 273
 *                                                                                                                     // 274
 * Call this method in client code while developing to turn on extra logging.                                          // 275
 */                                                                                                                    // 276
AutoForm.debug = function autoFormDebug() {                                                                            // 277
  SimpleSchema.debug = true;                                                                                           // 278
  AutoForm._debug = true;                                                                                              // 279
  AutoForm.addHooks(null, {                                                                                            // 280
    onError: function (operation, error, template) {                                                                   // 281
      console.log("Error in " + this.formId, operation, error);                                                        // 282
    }                                                                                                                  // 283
  });                                                                                                                  // 284
};                                                                                                                     // 285
                                                                                                                       // 286
/**                                                                                                                    // 287
 * @property AutoForm.arrayTracker                                                                                     // 288
 * @public                                                                                                             // 289
 * @param {Object} atts                                                                                                // 290
 * @param {Object} defs                                                                                                // 291
 * @param {Boolean} expectsArray                                                                                       // 292
 *                                                                                                                     // 293
 * @return {ArrayTracker}                                                                                              // 294
 */                                                                                                                    // 295
AutoForm.arrayTracker = arrayTracker;                                                                                  // 296
                                                                                                                       // 297
/**                                                                                                                    // 298
 * @method AutoForm.getInputType                                                                                       // 299
 * @param {Object} atts The attributes provided to afFieldInput.                                                       // 300
 * @public                                                                                                             // 301
 * @return {String} The input type. Most are the same as the `type` attributes for HTML input elements, but some are special strings that autoform interprets.
 *                                                                                                                     // 303
 * Call this method from a UI helper to get the type string for the input control.                                     // 304
 */                                                                                                                    // 305
AutoForm.getInputType = getInputType;                                                                                  // 306
                                                                                                                       // 307
/**                                                                                                                    // 308
 * @method AutoForm.getSchemaForField                                                                                  // 309
 * @public                                                                                                             // 310
 * @param {String} name The field name attribute / schema key.                                                         // 311
 * @param {Object} [autoform] The autoform context. Optionally pass this if you've already retrieved it using AutoForm.find as a performance enhancement.
 * @return {Object}                                                                                                    // 313
 *                                                                                                                     // 314
 * Call this method from a UI helper to get the field definitions based on the schema used by the closest containing autoForm.
 * Always throws an error or returns the schema object.                                                                // 316
 */                                                                                                                    // 317
AutoForm.getSchemaForField = function autoFormGetSchemaForField(name, autoform) {                                      // 318
  var ss;                                                                                                              // 319
  if (autoform) {                                                                                                      // 320
    ss = autoform.ss;                                                                                                  // 321
  }                                                                                                                    // 322
  if (!ss) {                                                                                                           // 323
    ss = AutoForm.find().ss;                                                                                           // 324
  }                                                                                                                    // 325
  return Utility.getDefs(ss, name);                                                                                    // 326
};                                                                                                                     // 327
                                                                                                                       // 328
/**                                                                                                                    // 329
 * @method AutoForm.expectsArray                                                                                       // 330
 * @public                                                                                                             // 331
 * @param {Object} atts The attributes provided to afFieldInput.                                                       // 332
 * @return {Boolean}                                                                                                   // 333
 *                                                                                                                     // 334
 * Call this method from a UI helper to determine whether the user is expecting the input control to produce an array value.
 */                                                                                                                    // 336
AutoForm.expectsArray = expectsArray;                                                                                  // 337
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:autoform'] = {
  AutoForm: AutoForm,
  Utility: Utility
};

})();
