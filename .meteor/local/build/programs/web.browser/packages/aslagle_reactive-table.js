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
var Template = Package.templating.Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var i18n = Package['anti:i18n'].i18n;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aslagle:reactive-table/lib/template.reactive_table.js                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("reactiveTable");                                                                               // 2
Template["reactiveTable"] = new Template("Template.reactiveTable", (function() {                                     // 3
  var view = this;                                                                                                   // 4
  return Spacebars.With(function() {                                                                                 // 5
    return Spacebars.call(view.lookup("generateSettings"));                                                          // 6
  }, function() {                                                                                                    // 7
    return [ "\n    ", Blaze.If(function() {                                                                         // 8
      return Spacebars.call(view.lookup("showFilter"));                                                              // 9
    }, function() {                                                                                                  // 10
      return [ "\n      ", HTML.DIV({                                                                                // 11
        "class": "form-group reactive-table-filter",                                                                 // 12
        "reactive-table-group": function() {                                                                         // 13
          return Spacebars.mustache(view.lookup("group"));                                                           // 14
        }                                                                                                            // 15
      }, "\n        ", HTML.DIV({                                                                                    // 16
        "class": "input-group col-sm-4 col-sm-offset-8"                                                              // 17
      }, "\n          ", HTML.SPAN({                                                                                 // 18
        "class": "input-group-addon"                                                                                 // 19
      }, "\n            ", Blaze.If(function() {                                                                     // 20
        return Spacebars.call(view.lookup("useFontAwesome"));                                                        // 21
      }, function() {                                                                                                // 22
        return [ "\n              ", HTML.I({                                                                        // 23
          "class": "fa fa-filter"                                                                                    // 24
        }), "\n            " ];                                                                                      // 25
      }, function() {                                                                                                // 26
        return [ "\n              ", Blaze.View(function() {                                                         // 27
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.filter");                                    // 28
        }), "\n            " ];                                                                                      // 29
      }), "\n          "), "\n          ", Blaze.If(function() {                                                     // 30
        return Spacebars.call(view.lookup("useFontAwesome"));                                                        // 31
      }, function() {                                                                                                // 32
        return [ "\n	        ", HTML.INPUT({                                                                         // 33
          "class": "reactive-table-input form-control",                                                              // 34
          type: "text",                                                                                              // 35
          value: function() {                                                                                        // 36
            return Spacebars.mustache(view.lookup("filter"));                                                        // 37
          },                                                                                                         // 38
          placeholder: function() {                                                                                  // 39
            return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.filter");                                  // 40
          }                                                                                                          // 41
        }), "\n          " ];                                                                                        // 42
      }, function() {                                                                                                // 43
        return [ "\n	        ", HTML.INPUT({                                                                         // 44
          "class": "reactive-table-input form-control",                                                              // 45
          type: "text",                                                                                              // 46
          value: function() {                                                                                        // 47
            return Spacebars.mustache(view.lookup("filter"));                                                        // 48
          }                                                                                                          // 49
        }), "\n          " ];                                                                                        // 50
      }), "\n        "), "\n      "), "\n    " ];                                                                    // 51
    }), "\n    ", HTML.TABLE({                                                                                       // 52
      "class": function() {                                                                                          // 53
        return [ Spacebars.mustache(view.lookup("hasClass"), view.lookup("..")), " reactive-table" ];                // 54
      },                                                                                                             // 55
      "reactive-table-group": function() {                                                                           // 56
        return Spacebars.mustache(view.lookup("group"));                                                             // 57
      }                                                                                                              // 58
    }, "\n      ", HTML.THEAD("\n        ", HTML.TR("\n          ", Blaze.Each(function() {                          // 59
      return Spacebars.call(view.lookup("fields"));                                                                  // 60
    }, function() {                                                                                                  // 61
      return [ "\n            ", Blaze.If(function() {                                                               // 62
        return Spacebars.dataMustache(view.lookup("isVisible"), view.lookup("."), Spacebars.dot(view.lookup(".."), "group"), Spacebars.dot(view.lookup(".."), "fields"));
      }, function() {                                                                                                // 64
        return [ "\n              ", Blaze.If(function() {                                                           // 65
          return Spacebars.dataMustache(view.lookup("isSortKey"), view.lookup("."), Spacebars.dot(view.lookup(".."), "group"), Spacebars.dot(view.lookup(".."), "fields"));
        }, function() {                                                                                              // 67
          return [ "\n                ", HTML.TH({                                                                   // 68
            "class": function() {                                                                                    // 69
              return [ Spacebars.mustache(view.lookup("getKey")), " sortable" ];                                     // 70
            },                                                                                                       // 71
            index: function() {                                                                                      // 72
              return Spacebars.mustache(view.lookup("getFieldIndex"), Spacebars.dot(view.lookup(".."), "fields"));   // 73
            }                                                                                                        // 74
          }, "\n                  ", Blaze.View(function() {                                                         // 75
            return Spacebars.mustache(view.lookup("getLabel"));                                                      // 76
          }), HTML.CharRef({                                                                                         // 77
            html: "&nbsp;",                                                                                          // 78
            str: " "                                                                                                 // 79
          }), HTML.CharRef({                                                                                         // 80
            html: "&nbsp;",                                                                                          // 81
            str: " "                                                                                                 // 82
          }), "\n                  ", Blaze.If(function() {                                                          // 83
            return Spacebars.dataMustache(view.lookup("isAscending"), Spacebars.dot(view.lookup(".."), "group"));    // 84
          }, function() {                                                                                            // 85
            return [ "\n                    ", Blaze.If(function() {                                                 // 86
              return Spacebars.call(Spacebars.dot(view.lookup(".."), "useFontAwesome"));                             // 87
            }, function() {                                                                                          // 88
              return [ "\n                      ", HTML.I({                                                          // 89
                "class": "fa fa-sort-asc"                                                                            // 90
              }), "\n                    " ];                                                                        // 91
            }, function() {                                                                                          // 92
              return [ "\n                      ", HTML.CharRef({                                                    // 93
                html: "&#x25BC;",                                                                                    // 94
                str: "▼"                                                                                             // 95
              }), "\n                    " ];                                                                        // 96
            }), "\n                  " ];                                                                            // 97
          }, function() {                                                                                            // 98
            return [ "\n                    ", Blaze.If(function() {                                                 // 99
              return Spacebars.call(Spacebars.dot(view.lookup(".."), "useFontAwesome"));                             // 100
            }, function() {                                                                                          // 101
              return [ "\n                      ", HTML.I({                                                          // 102
                "class": "fa fa-sort-desc"                                                                           // 103
              }), "\n                    " ];                                                                        // 104
            }, function() {                                                                                          // 105
              return [ "\n                      ", HTML.CharRef({                                                    // 106
                html: "&#x25B2;",                                                                                    // 107
                str: "▲"                                                                                             // 108
              }), "\n                    " ];                                                                        // 109
            }), "\n                  " ];                                                                            // 110
          }), "\n                "), "\n              " ];                                                           // 111
        }, function() {                                                                                              // 112
          return [ "\n                ", Blaze.If(function() {                                                       // 113
            return Spacebars.call(view.lookup("isSortable"));                                                        // 114
          }, function() {                                                                                            // 115
            return [ "\n                  ", HTML.TH({                                                               // 116
              "class": function() {                                                                                  // 117
                return [ Spacebars.mustache(view.lookup("getKey")), " sortable" ];                                   // 118
              },                                                                                                     // 119
              index: function() {                                                                                    // 120
                return Spacebars.mustache(view.lookup("getFieldIndex"), Spacebars.dot(view.lookup(".."), "fields")); // 121
              }                                                                                                      // 122
            }, Blaze.View(function() {                                                                               // 123
              return Spacebars.mustache(view.lookup("getLabel"));                                                    // 124
            })), "\n                " ];                                                                             // 125
          }, function() {                                                                                            // 126
            return [ "\n                  ", HTML.TH({                                                               // 127
              "class": function() {                                                                                  // 128
                return Spacebars.mustache(view.lookup("getKey"));                                                    // 129
              },                                                                                                     // 130
              index: function() {                                                                                    // 131
                return Spacebars.mustache(view.lookup("getFieldIndex"), Spacebars.dot(view.lookup(".."), "fields")); // 132
              }                                                                                                      // 133
            }, Blaze.View(function() {                                                                               // 134
              return Spacebars.mustache(view.lookup("getLabel"));                                                    // 135
            })), "\n                " ];                                                                             // 136
          }), "\n              " ];                                                                                  // 137
        }), "\n            " ];                                                                                      // 138
      }), "\n          " ];                                                                                          // 139
    }), "\n          ", Blaze.If(function() {                                                                        // 140
      return Spacebars.call(view.lookup("showColumnToggles"));                                                       // 141
    }, function() {                                                                                                  // 142
      return [ "\n              ", HTML.TH({                                                                         // 143
        "class": "reactive-table-add-column"                                                                         // 144
      }, "\n                ", HTML.DIV({                                                                            // 145
        "class": "dropdown"                                                                                          // 146
      }, "\n                  ", HTML.BUTTON({                                                                       // 147
        "class": "btn btn-default btn-xs dropdown-toggle",                                                           // 148
        id: function() {                                                                                             // 149
          return [ "reactive-table-add-column-", Spacebars.mustache(view.lookup("group")) ];                         // 150
        },                                                                                                           // 151
        "data-toggle": "dropdown"                                                                                    // 152
      }, "\n                    +/-\n                  "), "\n                  ", HTML.UL({                         // 153
        "class": "dropdown-menu dropdown-menu-right",                                                                // 154
        role: "menu",                                                                                                // 155
        "aria-labelledby": function() {                                                                              // 156
          return [ "reactive-table-add-column-", Spacebars.mustache(view.lookup("group")) ];                         // 157
        }                                                                                                            // 158
      }, "\n                    ", Blaze.Each(function() {                                                           // 159
        return Spacebars.call(view.lookup("fields"));                                                                // 160
      }, function() {                                                                                                // 161
        return [ "\n                      ", HTML.LI({                                                               // 162
          role: "presentation"                                                                                       // 163
        }, HTML.A({                                                                                                  // 164
          role: "menuitem",                                                                                          // 165
          tabindex: "-1",                                                                                            // 166
          "data-target": "#"                                                                                         // 167
        }, "\n                        ", HTML.LABEL("\n                          ", Blaze.If(function() {            // 168
          return Spacebars.dataMustache(view.lookup("isVisible"), view.lookup("."), Spacebars.dot(view.lookup(".."), "group"), Spacebars.dot(view.lookup(".."), "fields"));
        }, function() {                                                                                              // 170
          return [ "\n                            ", HTML.INPUT({                                                    // 171
            type: "checkbox",                                                                                        // 172
            checked: "",                                                                                             // 173
            index: function() {                                                                                      // 174
              return Spacebars.mustache(view.lookup("getFieldIndex"), Spacebars.dot(view.lookup(".."), "fields"));   // 175
            }                                                                                                        // 176
          }), "\n                          " ];                                                                      // 177
        }, function() {                                                                                              // 178
          return [ "\n                            ", HTML.INPUT({                                                    // 179
            type: "checkbox",                                                                                        // 180
            index: function() {                                                                                      // 181
              return Spacebars.mustache(view.lookup("getFieldIndex"), Spacebars.dot(view.lookup(".."), "fields"));   // 182
            }                                                                                                        // 183
          }), "\n                          " ];                                                                      // 184
        }), "\n                          ", Blaze.View(function() {                                                  // 185
          return Spacebars.mustache(view.lookup("getLabel"));                                                        // 186
        }), "\n                        "), "\n                      ")), "\n                    " ];                 // 187
      }), "\n                  "), "\n                "), "\n              "), "\n          " ];                     // 188
    }), "\n        "), "\n      "), "\n      ", HTML.TBODY("\n        ", Blaze.Each(function() {                     // 189
      return Spacebars.call(view.lookup("sortedRows"));                                                              // 190
    }, function() {                                                                                                  // 191
      return [ "\n          ", HTML.TR({                                                                             // 192
        "class": function() {                                                                                        // 193
          return Spacebars.mustache(Spacebars.dot(view.lookup(".."), "rowClass"), view.lookup("."));                 // 194
        }                                                                                                            // 195
      }, "\n            ", Blaze.Each(function() {                                                                   // 196
        return Spacebars.call(Spacebars.dot(view.lookup(".."), "fields"));                                           // 197
      }, function() {                                                                                                // 198
        return [ "\n              ", Blaze.If(function() {                                                           // 199
          return Spacebars.dataMustache(view.lookup("isVisible"), view.lookup("."), Spacebars.dot(view.lookup("..."), "group"), Spacebars.dot(view.lookup("..."), "fields"));
        }, function() {                                                                                              // 201
          return [ "\n                ", HTML.TD({                                                                   // 202
            "class": function() {                                                                                    // 203
              return Spacebars.mustache(view.lookup("key"));                                                         // 204
            }                                                                                                        // 205
          }, Blaze.If(function() {                                                                                   // 206
            return Spacebars.call(view.lookup("tmpl"));                                                              // 207
          }, function() {                                                                                            // 208
            return Spacebars.With(function() {                                                                       // 209
              return Spacebars.call(view.lookup(".."));                                                              // 210
            }, function() {                                                                                          // 211
              return Spacebars.include(function() {                                                                  // 212
                return Spacebars.call(Spacebars.dot(view.lookup(".."), "tmpl"));                                     // 213
              });                                                                                                    // 214
            });                                                                                                      // 215
          }, function() {                                                                                            // 216
            return Blaze.View(function() {                                                                           // 217
              return Spacebars.mustache(view.lookup("getField"), view.lookup(".."));                                 // 218
            });                                                                                                      // 219
          })), "\n              " ];                                                                                 // 220
        }), "\n            " ];                                                                                      // 221
      }), "\n          "), "\n        " ];                                                                           // 222
    }), "\n      "), "\n    "), "\n    ", Blaze.If(function() {                                                      // 223
      return Spacebars.call(view.lookup("showNavigation"));                                                          // 224
    }, function() {                                                                                                  // 225
      return [ "\n      ", HTML.DIV({                                                                                // 226
        "class": "reactive-table-navigation",                                                                        // 227
        "reactive-table-group": function() {                                                                         // 228
          return Spacebars.mustache(view.lookup("group"));                                                           // 229
        }                                                                                                            // 230
      }, "\n        ", Blaze.If(function() {                                                                         // 231
        return Spacebars.call(view.lookup("showNavigationRowsPerPage"));                                             // 232
      }, function() {                                                                                                // 233
        return [ "\n          ", HTML.DIV({                                                                          // 234
          "class": "form-inline form-group rows-per-page"                                                            // 235
        }, "\n            ", HTML.LABEL(Blaze.View(function() {                                                      // 236
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.show");                                      // 237
        }), HTML.CharRef({                                                                                           // 238
          html: "&nbsp;",                                                                                            // 239
          str: " "                                                                                                   // 240
        }), HTML.INPUT({                                                                                             // 241
          "class": "form-control",                                                                                   // 242
          type: "text",                                                                                              // 243
          value: function() {                                                                                        // 244
            return Spacebars.mustache(view.lookup("getRowsPerPage"));                                                // 245
          }                                                                                                          // 246
        }), HTML.CharRef({                                                                                           // 247
          html: "&nbsp;",                                                                                            // 248
          str: " "                                                                                                   // 249
        }), Blaze.View(function() {                                                                                  // 250
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.rowsPerPage");                               // 251
        })), "\n          "), "\n        " ];                                                                        // 252
      }), "\n        ", HTML.DIV({                                                                                   // 253
        "class": "form-inline form-group page-number"                                                                // 254
      }, "\n          ", Blaze.If(function() {                                                                       // 255
        return Spacebars.call(view.lookup("isntFirstPage"));                                                         // 256
      }, function() {                                                                                                // 257
        return [ "\n            ", HTML.LABEL({                                                                      // 258
          "class": "previous-page"                                                                                   // 259
        }, HTML.CharRef({                                                                                            // 260
          html: "&lt;",                                                                                              // 261
          str: "<"                                                                                                   // 262
        })), HTML.CharRef({                                                                                          // 263
          html: "&nbsp;",                                                                                            // 264
          str: " "                                                                                                   // 265
        }), HTML.CharRef({                                                                                           // 266
          html: "&nbsp;",                                                                                            // 267
          str: " "                                                                                                   // 268
        }), "\n          " ];                                                                                        // 269
      }), "\n          ", HTML.LABEL(Blaze.View(function() {                                                         // 270
        return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.page");                                        // 271
      }), HTML.CharRef({                                                                                             // 272
        html: "&nbsp;",                                                                                              // 273
        str: " "                                                                                                     // 274
      }), HTML.INPUT({                                                                                               // 275
        "class": "form-control",                                                                                     // 276
        type: "text",                                                                                                // 277
        value: function() {                                                                                          // 278
          return Spacebars.mustache(view.lookup("getCurrentPage"));                                                  // 279
        }                                                                                                            // 280
      }), HTML.CharRef({                                                                                             // 281
        html: "&nbsp;",                                                                                              // 282
        str: " "                                                                                                     // 283
      }), Blaze.View(function() {                                                                                    // 284
        return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.of");                                          // 285
      }), " ", Blaze.View(function() {                                                                               // 286
        return Spacebars.mustache(view.lookup("getPageCount"));                                                      // 287
      })), "\n          ", Blaze.If(function() {                                                                     // 288
        return Spacebars.call(view.lookup("isntLastPage"));                                                          // 289
      }, function() {                                                                                                // 290
        return [ "\n            ", HTML.LABEL({                                                                      // 291
          "class": "next-page"                                                                                       // 292
        }, HTML.CharRef({                                                                                            // 293
          html: "&nbsp;",                                                                                            // 294
          str: " "                                                                                                   // 295
        }), HTML.CharRef({                                                                                           // 296
          html: "&nbsp;",                                                                                            // 297
          str: " "                                                                                                   // 298
        }), HTML.CharRef({                                                                                           // 299
          html: "&gt;",                                                                                              // 300
          str: ">"                                                                                                   // 301
        })), "\n          " ];                                                                                       // 302
      }), "\n        "), "\n      "), "\n    " ];                                                                    // 303
    }), "\n  " ];                                                                                                    // 304
  });                                                                                                                // 305
}));                                                                                                                 // 306
                                                                                                                     // 307
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aslagle:reactive-table/lib/reactive_table_i18n.js                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
i18n.map('en', {                                                                                                     // 1
    reactiveTable: {                                                                                                 // 2
        filter: 'Filter',                                                                                            // 3
        show: 'Show',                                                                                                // 4
        rowsPerPage: 'rows per page',                                                                                // 5
        page: 'Page',                                                                                                // 6
        of: 'of'                                                                                                     // 7
    }                                                                                                                // 8
});                                                                                                                  // 9
                                                                                                                     // 10
i18n.map('fr', {                                                                                                     // 11
    reactiveTable: {                                                                                                 // 12
        filter: 'Filtre',                                                                                            // 13
        show: 'Voir',                                                                                                // 14
        rowsPerPage: 'lignes par page',                                                                              // 15
        page: 'page',                                                                                                // 16
        of: 'sur'                                                                                                    // 17
    }                                                                                                                // 18
});                                                                                                                  // 19
                                                                                                                     // 20
i18n.map('ru', {                                                                                                     // 21
    reactiveTable: {                                                                                                 // 22
        filter: 'Фильтр',                                                                                            // 23
        show: 'Показать',                                                                                            // 24
        rowsPerPage: 'линий на странице',                                                                            // 25
        page: 'Страница',                                                                                            // 26
        of: 'из'                                                                                                     // 27
    }                                                                                                                // 28
});                                                                                                                  // 29
                                                                                                                     // 30
i18n.map('es', {                                                                                                     // 31
    reactiveTable: {                                                                                                 // 32
        filter: 'Filtro',                                                                                            // 33
        show:   'Mostrar',                                                                                           // 34
        rowsPerPage: 'filas por página',                                                                             // 35
        page: 'Página',                                                                                              // 36
        of: 'de'                                                                                                     // 37
    }                                                                                                                // 38
});                                                                                                                  // 39
                                                                                                                     // 40
i18n.map('nl', {                                                                                                     // 41
    reactiveTable: {                                                                                                 // 42
        filter: 'Filter',                                                                                            // 43
        show:   'Toon',                                                                                              // 44
        rowsPerPage: 'regels per pagina',                                                                            // 45
        page: 'Pagina',                                                                                              // 46
        of: 'van'                                                                                                    // 47
    }                                                                                                                // 48
});                                                                                                                  // 49
                                                                                                                     // 50
i18n.map('pt-br', {                                                                                                  // 51
    reactiveTable: {                                                                                                 // 52
        filter: 'Filtro',                                                                                            // 53
        show: 'Mostrar',                                                                                             // 54
        rowsPerPage: 'linhas por página',                                                                            // 55
        page: 'Página',                                                                                              // 56
        of: 'de'                                                                                                     // 57
    }                                                                                                                // 58
});                                                                                                                  // 59
                                                                                                                     // 60
i18n.map('it', {                                                                                                     // 61
    reactiveTable: {                                                                                                 // 62
        filter: 'Filtra',                                                                                            // 63
        show: 'Mostra',                                                                                              // 64
        rowsPerPage: 'righe per pagina',                                                                             // 65
        page: 'Pagina',                                                                                              // 66
        of: 'di'                                                                                                     // 67
    }                                                                                                                // 68
});                                                                                                                  // 69
                                                                                                                     // 70
i18n.map('sv', {                                                                                                     // 71
    reactiveTable: {                                                                                                 // 72
        filter: 'Filter',                                                                                            // 73
        show: 'Visa',                                                                                                // 74
        rowsPerPage: 'rader per sida',                                                                               // 75
        page: 'Sida',                                                                                                // 76
        of: 'av'                                                                                                     // 77
    }                                                                                                                // 78
});                                                                                                                  // 79
                                                                                                                     // 80
i18n.map('ua', {                                                                                                     // 81
    reactiveTable: {                                                                                                 // 82
        filter: 'Фільтр',                                                                                            // 83
        show: 'Показати',                                                                                            // 84
        rowsPerPage: 'линій на страниці',                                                                            // 85
        page: 'Страниця',                                                                                            // 86
        of: 'з'                                                                                                      // 87
    }                                                                                                                // 88
});                                                                                                                  // 89
                                                                                                                     // 90
i18n.map('tr', {                                                                                                     // 91
    reactiveTable: {                                                                                                 // 92
        filter: 'Filtrele',                                                                                          // 93
        show: 'Göster',                                                                                              // 94
        rowsPerPage: 'sayfa başı',                                                                                   // 95
        page: 'Sayfa',                                                                                               // 96
        of: ' / '                                                                                                    // 97
    }                                                                                                                // 98
});                                                                                                                  // 99
                                                                                                                     // 100
i18n.map('sk', {                                                                                                     // 101
    reactiveTable: {                                                                                                 // 102
        filter: 'Filter',                                                                                            // 103
        show: 'Zobraz',                                                                                              // 104
        rowsPerPage: 'riadkov na stranu',                                                                            // 105
        page: 'Strana',                                                                                              // 106
        of: 'z'                                                                                                      // 107
    }                                                                                                                // 108
});                                                                                                                  // 109
                                                                                                                     // 110
i18n.map('cs', {                                                                                                     // 111
    reactiveTable: {                                                                                                 // 112
        filter: 'Filter',                                                                                            // 113
        show: 'Zobraz',                                                                                              // 114
        rowsPerPage: 'řádků na stranu',                                                                              // 115
        page: 'Strana',                                                                                              // 116
        of: 'z'                                                                                                      // 117
    }                                                                                                                // 118
});                                                                                                                  // 119
                                                                                                                     // 120
i18n.map('he', {                                                                                                     // 121
    reactiveTable: {                                                                                                 // 122
        filter: 'פילטר',                                                                                             // 123
        show: 'הצג',                                                                                                 // 124
        rowsPerPage: 'שורות לעמוד',                                                                                  // 125
        page: 'עמוד',                                                                                                // 126
        of: 'מתוך'                                                                                                   // 127
    }                                                                                                                // 128
});                                                                                                                  // 129
                                                                                                                     // 130
i18n.map('de', {                                                                                                     // 131
    reactiveTable: {                                                                                                 // 132
        filter: 'Filter',                                                                                            // 133
        show: 'Zeige',                                                                                               // 134
        rowsPerPage: 'Zeilen pro Seite',                                                                             // 135
        page: 'Seite',                                                                                               // 136
        of: 'von'                                                                                                    // 137
    }                                                                                                                // 138
});                                                                                                                  // 139
                                                                                                                     // 140
i18n.map('fi', {                                                                                                     // 141
    reactiveTable: {                                                                                                 // 142
        filter: 'Suodata',                                                                                           // 143
        show: 'Näytä',                                                                                               // 144
        rowsPerPage: 'riviä sivulla',                                                                                // 145
        page: 'Sivu',                                                                                                // 146
        of: ' / '                                                                                                    // 147
    }                                                                                                                // 148
});                                                                                                                  // 149
                                                                                                                     // 150
i18n.map('no', {                                                                                                     // 151
    reactiveTable: {                                                                                                 // 152
        filter: 'Filter',                                                                                            // 153
        show: 'Vis',                                                                                                 // 154
        rowsPerPage: 'rader per side',                                                                               // 155
        page: 'Side',                                                                                                // 156
        of: 'av'                                                                                                     // 157
    }                                                                                                                // 158
});                                                                                                                  // 159
                                                                                                                     // 160
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aslagle:reactive-table/lib/reactive_table.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var getSessionSortKey = function (group) {                                                                           // 1
    return group + '-reactive-table-sort';                                                                           // 2
};                                                                                                                   // 3
                                                                                                                     // 4
var getSessionSortDirectionKey = function (group) {                                                                  // 5
    return group + '-reactive-table-sort-direction';                                                                 // 6
};                                                                                                                   // 7
                                                                                                                     // 8
var getSessionRowsPerPageKey = function (group) {                                                                    // 9
    return group + '-reactive-table-rows-per-page';                                                                  // 10
};                                                                                                                   // 11
                                                                                                                     // 12
var getSessionCurrentPageKey = function (group) {                                                                    // 13
    return group + '-reactive-table-current-page';                                                                   // 14
};                                                                                                                   // 15
                                                                                                                     // 16
var getSessionFilterKey = function (group) {                                                                         // 17
    return group + '-reactive-table-filter';                                                                         // 18
};                                                                                                                   // 19
                                                                                                                     // 20
var getSessionShowNavigationRowsPerPageKey = function (group) {                                                      // 21
    return group + '-reactive-table-show-navigationrowsperpage';                                                     // 22
};                                                                                                                   // 23
                                                                                                                     // 24
var getSessionShowNavigationKey = function (group) {                                                                 // 25
    return group + '-reactive-table-show-navigation';                                                                // 26
};                                                                                                                   // 27
                                                                                                                     // 28
var getSessionVisibleFieldsKey = function (group) {                                                                  // 29
    return group + '-reactive-table-visible-fields';                                                                 // 30
};                                                                                                                   // 31
                                                                                                                     // 32
var get = function(obj, field) {                                                                                     // 33
  var keys = field.split('.');                                                                                       // 34
  var value = obj;                                                                                                   // 35
                                                                                                                     // 36
  _.each(keys, function (key) {                                                                                      // 37
      if (_.isObject(value) && _.isFunction(value[key])) {                                                           // 38
          value = value[key]();                                                                                      // 39
      } else if (_.isObject(value) && !_.isUndefined(value[key])) {                                                  // 40
          value = value[key];                                                                                        // 41
      } else {                                                                                                       // 42
          value = null;                                                                                              // 43
      }                                                                                                              // 44
  });                                                                                                                // 45
                                                                                                                     // 46
  return value;                                                                                                      // 47
};                                                                                                                   // 48
                                                                                                                     // 49
var generateSettings =  function () {                                                                                // 50
    var collection = this.collection || this;                                                                        // 51
    var settings = this.settings || {};                                                                              // 52
    var group = settings.group || 'reactive-table';                                                                  // 53
    if (!(collection instanceof Meteor.Collection)) {                                                                // 54
        if (_.isArray(collection)) {                                                                                 // 55
            // collection is an array                                                                                // 56
            // create a new collection from the data                                                                 // 57
            var data = collection;                                                                                   // 58
            collection = new Meteor.Collection(null);                                                                // 59
            _.each(data, function (doc) {                                                                            // 60
                collection.insert(doc);                                                                              // 61
            });                                                                                                      // 62
        } else if (_.isFunction(collection.fetch)) {                                                                 // 63
            // collection is a cursor                                                                                // 64
            // create a new collection that will reactively update                                                   // 65
            var cursor = collection;                                                                                 // 66
            collection = new Meteor.Collection(null);                                                                // 67
            var addedCallback = function (doc) {                                                                     // 68
                collection.insert(doc);                                                                              // 69
            };                                                                                                       // 70
            var changedCallback = function (doc, oldDoc) {                                                           // 71
                collection.update(oldDoc._id, doc);                                                                  // 72
            };                                                                                                       // 73
            var removedCallback = function (oldDoc) {                                                                // 74
                collection.remove(oldDoc._id);                                                                       // 75
            };                                                                                                       // 76
            cursor.observe({added: addedCallback, changed: changedCallback, removed: removedCallback});              // 77
        } else {                                                                                                     // 78
            console.log("reactiveTable error: argument is not an instance of Meteor.Collection, a cursor, or an array");
            collection = new Meteor.Collection(null);                                                                // 80
        }                                                                                                            // 81
    }                                                                                                                // 82
                                                                                                                     // 83
    var fields = settings.fields || {};                                                                              // 84
    if (_.keys(fields).length < 1 ||                                                                                 // 85
        (_.keys(fields).length === 1 &&                                                                              // 86
         _.keys(fields)[0] === 'hash')) {                                                                            // 87
        fields = _.without(_.keys(collection.findOne() || {}), '_id');                                               // 88
    }                                                                                                                // 89
                                                                                                                     // 90
    var normalizeField = function (field) {                                                                          // 91
        if (typeof field === 'string') {                                                                             // 92
            return {key: field, label: field};                                                                       // 93
        } else {                                                                                                     // 94
            return field;                                                                                            // 95
        }                                                                                                            // 96
    };                                                                                                               // 97
                                                                                                                     // 98
    var parseField = function (field, i) {                                                                           // 99
        if (field.sort) {                                                                                            // 100
            settings.sortKey = i;                                                                                    // 101
            if (field.sort === 'desc' || field.sort === 'descending'  || field.sort === -1) {                        // 102
                settings.sortDirectionKey = -1;                                                                      // 103
            }                                                                                                        // 104
        }                                                                                                            // 105
        return normalizeField(field);                                                                                // 106
    };                                                                                                               // 107
                                                                                                                     // 108
    fields = _.map(fields, parseField);                                                                              // 109
                                                                                                                     // 110
    var visibleFields = [];                                                                                          // 111
    _.each(fields, function (field, i) {                                                                             // 112
        if (!field.hidden || (_.isFunction(field.hidden) && !field.hidden())) {                                      // 113
          visibleFields.push(i);                                                                                     // 114
        }                                                                                                            // 115
    });                                                                                                              // 116
                                                                                                                     // 117
    Session.setDefault(getSessionSortKey(group), settings.sortKey || 0);                                             // 118
    Session.setDefault(getSessionSortDirectionKey(group), settings.sortDirectionKey || 1);                           // 119
    Session.setDefault(getSessionRowsPerPageKey(group), settings.rowsPerPage || 10);                                 // 120
    Session.setDefault(getSessionCurrentPageKey(group), 0);                                                          // 121
    Session.setDefault(getSessionShowNavigationRowsPerPageKey(group), (settings.showNavigationRowsPerPage === undefined) || settings.showNavigationRowsPerPage );
    Session.setDefault(getSessionShowNavigationKey(group), settings.showNavigation || 'always');                     // 123
    Session.setDefault(getSessionFilterKey(group), null);                                                            // 124
    if (visibleFields.length > 0) {                                                                                  // 125
        Session.setDefault(getSessionVisibleFieldsKey(group), visibleFields);                                        // 126
    }                                                                                                                // 127
    var showFilter = (typeof settings.showFilter === "undefined" ? true : settings.showFilter);                      // 128
                                                                                                                     // 129
    var rowClass = settings.rowClass || function() {return ''};                                                      // 130
    if (typeof rowClass === 'string') {                                                                              // 131
        var tmp = rowClass;                                                                                          // 132
        rowClass = function(obj) { return tmp; };                                                                    // 133
    }                                                                                                                // 134
                                                                                                                     // 135
    return {                                                                                                         // 136
        group: group,                                                                                                // 137
        collection: collection,                                                                                      // 138
        settings: settings,                                                                                          // 139
        fields: fields,                                                                                              // 140
        useFontAwesome: settings.useFontAwesome,                                                                     // 141
        showFilter: showFilter,                                                                                      // 142
        showColumnToggles: settings.showColumnToggles,                                                               // 143
        rowClass: rowClass                                                                                           // 144
    };                                                                                                               // 145
};                                                                                                                   // 146
                                                                                                                     // 147
var parseFilterString = function (filterString) {                                                                    // 148
    var startQuoteRegExp = /^[\'\"]/;                                                                                // 149
    var endQuoteRegExp = /[\'\"]$/;                                                                                  // 150
    var filters = [];                                                                                                // 151
    var words = filterString.split(' ');                                                                             // 152
                                                                                                                     // 153
    var inQuote = false;                                                                                             // 154
    var quotedWord = '';                                                                                             // 155
    _.each(words, function (word) {                                                                                  // 156
        if (inQuote) {                                                                                               // 157
            if (endQuoteRegExp.test(word)) {                                                                         // 158
                filters.push(quotedWord + ' ' + word.slice(0, word.length - 1));                                     // 159
                inQuote = false;                                                                                     // 160
                quotedWord = '';                                                                                     // 161
            } else {                                                                                                 // 162
                quotedWord = quotedWord + ' ' + word;                                                                // 163
            }                                                                                                        // 164
        } else if (startQuoteRegExp.test(word)) {                                                                    // 165
            if (endQuoteRegExp.test(word)) {                                                                         // 166
                filters.push(word.slice(1, word.length - 1));                                                        // 167
            } else {                                                                                                 // 168
                inQuote = true;                                                                                      // 169
                quotedWord = word.slice(1, word.length);                                                             // 170
            }                                                                                                        // 171
        } else {                                                                                                     // 172
            filters.push(word);                                                                                      // 173
        }                                                                                                            // 174
    });                                                                                                              // 175
    return filters;                                                                                                  // 176
};                                                                                                                   // 177
                                                                                                                     // 178
var getFilterQuery = function (group, fields) {                                                                      // 179
    var numberRegExp = /^\d+$/;                                                                                      // 180
    var filter = Session.get(getSessionFilterKey(group));                                                            // 181
    var queryList = [];                                                                                              // 182
    if (filter) {                                                                                                    // 183
        var filters = parseFilterString(filter);                                                                     // 184
        _.each(filters, function (filterWord) {                                                                      // 185
            var filterQueryList = [];                                                                                // 186
            _.each(fields, function (field) {                                                                        // 187
                var filterRegExp = new RegExp(filterWord, 'i');                                                      // 188
                var query = {};                                                                                      // 189
                query[field.key || field] = filterRegExp;                                                            // 190
                filterQueryList.push(query);                                                                         // 191
                                                                                                                     // 192
                if (numberRegExp.test(filterWord)) {                                                                 // 193
                    var numberQuery = {};                                                                            // 194
                    numberQuery[field.key || field] = parseInt(filterWord, 10);                                      // 195
                    filterQueryList.push(numberQuery)                                                                // 196
                }                                                                                                    // 197
            });                                                                                                      // 198
            if (filterQueryList.length) {                                                                            // 199
                var filterQuery = {'$or': filterQueryList};                                                          // 200
                queryList.push(filterQuery);                                                                         // 201
            }                                                                                                        // 202
        });                                                                                                          // 203
    }                                                                                                                // 204
    return queryList.length ? {'$and': queryList} : {};                                                              // 205
};                                                                                                                   // 206
                                                                                                                     // 207
Template.reactiveTable.getPageCount = function () {                                                                  // 208
    var rowsPerPage = Session.get(getSessionRowsPerPageKey(this.group));                                             // 209
    var filterQuery = getFilterQuery(this.group, this.fields);                                                       // 210
    var count = this.collection.find(filterQuery).count();                                                           // 211
    return Math.ceil(count / rowsPerPage);                                                                           // 212
};                                                                                                                   // 213
                                                                                                                     // 214
Template.reactiveTable.helpers({                                                                                     // 215
    'generateSettings': generateSettings,                                                                            // 216
                                                                                                                     // 217
    'getField': function (object) {                                                                                  // 218
        var fn = this.fn || function (value) { return value; };                                                      // 219
        var key = this.key || this;                                                                                  // 220
        var value = get(object, key);                                                                                // 221
        return fn(value, object);                                                                                    // 222
    },                                                                                                               // 223
                                                                                                                     // 224
    'getFieldIndex': function (fields) {                                                                             // 225
        return _.indexOf(fields, this);                                                                              // 226
    },                                                                                                               // 227
                                                                                                                     // 228
    'getKey': function () {                                                                                          // 229
        return this.key || this;                                                                                     // 230
    },                                                                                                               // 231
                                                                                                                     // 232
    'getLabel': function () {                                                                                        // 233
        return _.isString(this.label) ? this.label : this;                                                           // 234
    },                                                                                                               // 235
                                                                                                                     // 236
    'isSortKey': function (field, group, fields) {                                                                   // 237
        return Session.equals(getSessionSortKey(group), _.indexOf(fields, field));                                   // 238
    },                                                                                                               // 239
                                                                                                                     // 240
    'isSortable': function () {                                                                                      // 241
        return true;                                                                                                 // 242
    },                                                                                                               // 243
                                                                                                                     // 244
    'isVisible': function (field, group, fields) {                                                                   // 245
        return _.include(Session.get(getSessionVisibleFieldsKey(group)), _.indexOf(fields, field));                  // 246
    },                                                                                                               // 247
                                                                                                                     // 248
    'isAscending' : function (group) {                                                                               // 249
        var sortDirection = Session.get(getSessionSortDirectionKey(group));                                          // 250
        return (sortDirection === 1);                                                                                // 251
    },                                                                                                               // 252
                                                                                                                     // 253
    'sortedRows': function () {                                                                                      // 254
        var sortDirection = Session.get(getSessionSortDirectionKey(this.group));                                     // 255
        var sortKeyIndex = Session.get(getSessionSortKey(this.group));                                               // 256
        var sortKeyField = this.fields[sortKeyIndex] || {};                                                          // 257
                                                                                                                     // 258
        var limit = Session.get(getSessionRowsPerPageKey(this.group));                                               // 259
        var currentPage = Session.get(getSessionCurrentPageKey(this.group));                                         // 260
        var skip = currentPage * limit;                                                                              // 261
        var filterQuery = getFilterQuery(this.group, this.fields);                                                   // 262
                                                                                                                     // 263
        if (sortKeyField.fn && !sortKeyField.sortByValue) {                                                          // 264
            var data = this.collection.find(filterQuery).fetch();                                                    // 265
            var sorted =_.sortBy(data, function (object) {                                                           // 266
                return sortKeyField.fn(object[sortKeyField.key], object);                                            // 267
            });                                                                                                      // 268
            if (sortDirection === -1) {                                                                              // 269
                sorted = sorted.reverse();                                                                           // 270
            }                                                                                                        // 271
            return sorted.slice(skip, skip + limit);                                                                 // 272
        } else {                                                                                                     // 273
            var sortKey = sortKeyField.key || sortKeyField;                                                          // 274
            var sortQuery = {};                                                                                      // 275
            sortQuery[sortKey] = sortDirection;                                                                      // 276
                                                                                                                     // 277
            return this.collection.find(filterQuery, {                                                               // 278
                sort: sortQuery,                                                                                     // 279
                skip: skip,                                                                                          // 280
                limit: limit                                                                                         // 281
            });                                                                                                      // 282
        }                                                                                                            // 283
    },                                                                                                               // 284
                                                                                                                     // 285
    'filter' : function () {                                                                                         // 286
        return Session.get(getSessionFilterKey(this.group)) || '';                                                   // 287
    },                                                                                                               // 288
                                                                                                                     // 289
    'getRowsPerPage' : function () {                                                                                 // 290
        return Session.get(getSessionRowsPerPageKey(this.group));                                                    // 291
    },                                                                                                               // 292
                                                                                                                     // 293
    'getCurrentPage' : function () {                                                                                 // 294
        return 1 + Session.get(getSessionCurrentPageKey(this.group));                                                // 295
    },                                                                                                               // 296
                                                                                                                     // 297
    'isntFirstPage' : function () {                                                                                  // 298
        return Session.get(getSessionCurrentPageKey(this.group)) > 0;                                                // 299
    },                                                                                                               // 300
                                                                                                                     // 301
    'isntLastPage' : function () {                                                                                   // 302
        var currentPage = 1 + Session.get(getSessionCurrentPageKey(this.group));                                     // 303
        var rowsPerPage = Session.get(getSessionRowsPerPageKey(this.group));                                         // 304
        var filterQuery = getFilterQuery(this.group, this.fields);                                                   // 305
        var count = this.collection.find(filterQuery).count();                                                       // 306
        return currentPage < Math.ceil(count / rowsPerPage);                                                         // 307
    },                                                                                                               // 308
                                                                                                                     // 309
    'showNavigation' : function () {                                                                                 // 310
        if (Session.get(getSessionShowNavigationKey(this.group)) === 'always') return true;                          // 311
        if (Session.get(getSessionShowNavigationKey(this.group)) === 'never') return false;                          // 312
        return Template.reactiveTable.getPageCount.call(this) > 1;                                                   // 313
    },                                                                                                               // 314
                                                                                                                     // 315
    'showNavigationRowsPerPage' : function () {                                                                      // 316
        return Session.get(getSessionShowNavigationRowsPerPageKey(this.group));                                      // 317
    },                                                                                                               // 318
                                                                                                                     // 319
    'hasClass' : function (data) {                                                                                   // 320
        return data.class || 'table table-striped table-hover';                                                      // 321
    }                                                                                                                // 322
});                                                                                                                  // 323
                                                                                                                     // 324
Template.reactiveTable.events({                                                                                      // 325
    'click .reactive-table .sortable': function (event) {                                                            // 326
        var target = $(event.target).is('i') ? $(event.target).parent() : $(event.target);                           // 327
        var sortIndex = parseInt(target.attr('index'), 10);                                                          // 328
        var group = target.parents('.reactive-table').attr('reactive-table-group');                                  // 329
        var currentSortIndex = Session.get(getSessionSortKey(group));                                                // 330
        if (currentSortIndex === sortIndex) {                                                                        // 331
            var sortDirection = -1 * Session.get(getSessionSortDirectionKey(group));                                 // 332
            Session.set(getSessionSortDirectionKey(group), sortDirection);                                           // 333
        } else {                                                                                                     // 334
            Session.set(getSessionSortKey(group), sortIndex);                                                        // 335
        }                                                                                                            // 336
    },                                                                                                               // 337
                                                                                                                     // 338
    'change .reactive-table-add-column input': function (event) {                                                    // 339
        var target = $(event.target);                                                                                // 340
        var index = parseInt(target.attr('index'), 10);                                                              // 341
        var group = target.parents('.reactive-table').attr('reactive-table-group');                                  // 342
        var sessionVisibleFieldsKey = getSessionVisibleFieldsKey(group);                                             // 343
        var currentVisibleFields = Session.get(sessionVisibleFieldsKey);                                             // 344
        if (_.include(currentVisibleFields, index)) {                                                                // 345
            Session.set(sessionVisibleFieldsKey, _.without(currentVisibleFields, index));                            // 346
        } else {                                                                                                     // 347
            Session.set(sessionVisibleFieldsKey, currentVisibleFields.concat(index));                                // 348
        }                                                                                                            // 349
        event.stopPropagation();                                                                                     // 350
        return false;                                                                                                // 351
    },                                                                                                               // 352
                                                                                                                     // 353
    'keyup .reactive-table-filter .reactive-table-input, input .reactive-table-filter .reactive-table-input': _.debounce(function (event) {
        var filterText = $(event.target).val();                                                                      // 355
        var group = $(event.target).parents('.reactive-table-filter').attr('reactive-table-group');                  // 356
        Session.set(getSessionFilterKey(group), filterText);                                                         // 357
        Session.set(getSessionCurrentPageKey(this.group), 0);                                                        // 358
    }, 200),                                                                                                         // 359
                                                                                                                     // 360
    'change .reactive-table-navigation .rows-per-page input': function (event) {                                     // 361
        var rowsPerPage = Math.max(~~$(event.target).val(), 1);                                                      // 362
        var group = $(event.target).parents('.reactive-table-navigation').attr('reactive-table-group');              // 363
        Session.set(getSessionRowsPerPageKey(group), rowsPerPage);                                                   // 364
        $(event.target).val(rowsPerPage);                                                                            // 365
    },                                                                                                               // 366
                                                                                                                     // 367
    'change .reactive-table-navigation .page-number input': function (event) {                                       // 368
        var currentPage = Math.max(~~$(event.target).val(), 1);                                                      // 369
        var group = $(event.target).parents('.reactive-table-navigation').attr('reactive-table-group');              // 370
        var pageCount = Template.reactiveTable.getPageCount.call(this);                                              // 371
        if (currentPage > pageCount) {                                                                               // 372
          currentPage = pageCount;                                                                                   // 373
        }                                                                                                            // 374
        if (currentPage < 0) {                                                                                       // 375
          currentPage = 1;                                                                                           // 376
        }                                                                                                            // 377
        Session.set(getSessionCurrentPageKey(this.group), currentPage - 1);                                          // 378
        $(event.target).val(currentPage);                                                                            // 379
    },                                                                                                               // 380
                                                                                                                     // 381
    'click .reactive-table-navigation .previous-page': function (event) {                                            // 382
        var group = $(event.target).parents('.reactive-table-navigation').attr('reactive-table-group');              // 383
        var currentPageKey = getSessionCurrentPageKey(group);                                                        // 384
        var currentPage = Session.get(currentPageKey);                                                               // 385
        Session.set(currentPageKey, currentPage - 1);                                                                // 386
    },                                                                                                               // 387
                                                                                                                     // 388
    'click .reactive-table-navigation .next-page': function (event) {                                                // 389
        var group = $(event.target).parents('.reactive-table-navigation').attr('reactive-table-group');              // 390
        var currentPageKey = getSessionCurrentPageKey(group);                                                        // 391
        var currentPage = Session.get(currentPageKey);                                                               // 392
        Session.set(currentPageKey, currentPage + 1);                                                                // 393
    }                                                                                                                // 394
});                                                                                                                  // 395
                                                                                                                     // 396
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aslagle:reactive-table'] = {};

})();
