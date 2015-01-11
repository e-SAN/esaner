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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var Spacebars = Package.spacebars.Spacebars;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Session = Package.session.Session;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/alethes:pages/lib/pages.coffee.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Pages,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

this.__Pages = Pages = (function() {
  Pages.prototype.availableSettings = {
    dataMargin: [Number, 3],
    divWrapper: [true, false],
    filters: [Object, {}],
    itemTemplate: [String, "_pagesItemDefault"],
    navShowEdges: [Boolean, false],
    navShowFirst: [Boolean, true],
    navShowLast: [Boolean, true],
    resetOnReload: [Boolean, false],
    paginationMargin: [Number, 3],
    perPage: [Number, 10],
    requestTimeout: [Number, 2],
    route: [String, "/page/"],
    router: [true, false],
    routerTemplate: [String, "pages"],
    routerLayout: [String, "layout"],
    sort: [Object, {}],
    fields: [Object, {}]
  };

  Pages.prototype.fastRender = false;

  Pages.prototype.infinite = false;

  Pages.prototype.infiniteItemsLimit = Infinity;

  Pages.prototype.infiniteTrigger = .8;

  Pages.prototype.infiniteRateLimit = 1;

  Pages.prototype.pageSizeLimit = 60;

  Pages.prototype.rateLimit = 1;

  Pages.prototype.homeRoute = "/";

  Pages.prototype.pageTemplate = "_pagesPageCont";

  Pages.prototype.navTemplate = "_pagesNavCont";

  Pages.prototype.table = false;

  Pages.prototype.tableItemTemplate = "_pagesTableItem";

  Pages.prototype.tableTemplate = "_pagesTable";

  Pages.prototype.templateName = false;

  Pages.prototype._ninstances = 0;

  Pages.prototype._currentPage = 1;

  Pages.prototype.collections = {};

  Pages.prototype.init = true;

  Pages.prototype.instances = {};

  Pages.prototype.subscriptions = [];

  Pages.prototype.currentSubscription = null;

  Pages.prototype.methods = {
    "CountPages": function() {
      var n;
      n = Math.ceil(this.Collection.find(this.filters, {
        sort: this.sort
      }).count() / this.perPage);
      return n || 1;
    },
    "Set": function(k, v) {
      var changes, _k, _v;
      if (v == null) {
        v = void 0;
      }
      if (v != null) {
        changes = this.set(k, v, false, true);
      } else {
        changes = 0;
        for (_k in k) {
          _v = k[_k];
          changes += this.set(_k, _v, false, true);
        }
      }
      return changes;
    },
    "Unsubscribe": function() {
      var i, k, subs, _i, _len, _ref;
      subs = [];
      _ref = this.subscriptions;
      for (k = _i = 0, _len = _ref.length; _i < _len; k = ++_i) {
        i = _ref[k];
        if (i.connection.id === arguments[arguments.length - 1].connection.id) {
          i.stop();
        } else {
          subs.push(i);
        }
      }
      this.subscriptions = subs;
      return true;
    }
  };

  function Pages(collection, settings) {
    if (!(this instanceof Meteor.Pagination)) {
      throw "Please use the `new` constructor style " + (new Error).stack.split("\n")[2].trim();
    }
    this.setCollection(collection);
    this.setDefaults();
    this.applySettings(settings);
    this.setRouter();
    this[(Meteor.isServer ? "server" : "client") + "Init"]();
    this.registerInstance();
    this;
  }

  Pages.prototype.preloadData = function(key, value) {
    this.PreloadedData.remove({
      _id: key
    });
    return this.PreloadedData.insert({
      _id: key,
      v: value
    });
  };

  Pages.prototype.serverInit = function() {
    var self;
    this.setMethods();
    self = this;
    this.preloadData("totalPages", this.call("CountPages"));
    Meteor.publish(this.name, function(page) {
      return self.publish.call(self, page, this);
    });
    return Meteor.publish(this.name + "_data", function() {
      return self.PreloadedData.find();
    });
  };

  Pages.prototype.clientInit = function() {
    this.requested = [];
    this.received = [];
    this.queue = [];
    this.setTemplates();
    this.countPages();
    if (this.infinite) {
      this.setInfiniteTrigger();
    }
    return this.syncSettings((function(err, changes) {
      if (changes > 0) {
        return this.reload();
      }
    }).bind(this));
  };

  Pages.prototype.reload = function() {
    return this.unsubscribe((function(_this) {
      return function() {
        _this.requested = [];
        _this.received = [];
        _this.queue = [];
        return _this.call("CountPages", function(e, total) {
          var p;
          _this.sess("totalPages", total);
          p = _this.currentPage();
          if ((p == null) || _this.resetOnReload || p > total) {
            p = 1;
          }
          _this.sess("currentPage", false);
          return _this.sess("currentPage", p);
        });
      };
    })(this));
  };

  Pages.prototype.unsubscribe = function(cb) {
    return this.call("Unsubscribe", (function(_this) {
      return function() {
        if (cb != null) {
          return cb();
        }
      };
    })(this));
  };

  Pages.prototype.setDefaults = function() {
    var k, v, _ref, _results;
    _ref = this.availableSettings;
    _results = [];
    for (k in _ref) {
      v = _ref[k];
      if (v[1] != null) {
        _results.push(this[k] = v[1]);
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Pages.prototype.applySettings = function(settings) {
    var key, value, _results;
    _results = [];
    for (key in settings) {
      value = settings[key];
      _results.push(this.set(key, value, false, true));
    }
    return _results;
  };

  Pages.prototype.syncSettings = function(cb) {
    var S, k;
    S = {};
    for (k in this.availableSettings) {
      S[k] = this[k];
    }
    return this.set(S, void 0, true, false, cb.bind(this));
  };

  Pages.prototype.setMethods = function() {
    var f, n, nm, self, _ref;
    nm = {};
    self = this;
    _ref = this.methods;
    for (n in _ref) {
      f = _ref[n];
      nm[this.id + n] = (function(f) {
        return function() {
          var arg, k, r, v;
          arg = [];
          for (k in arguments) {
            v = arguments[k];
            arg[k] = v;
          }
          arg.push(this);
          r = f.apply(self, arg);
          return r;
        };
      })(f);
    }
    this.methods = nm;
    return Meteor.methods(this.methods);
  };

  Pages.prototype.getMethod = function(name) {
    return this.id + name;
  };

  Pages.prototype.call = function(method, cb) {
    cb = typeof cb === "function" ? cb.bind(this) : null;
    return Meteor.call(this.getMethod(method), cb);
  };

  Pages.prototype.sess = function(k, v) {
    k = "" + this.id + "." + k;
    if (v != null) {
      return Session.set(k, v);
    } else {
      return Session.get(k);
    }
  };

  Pages.prototype.set = function(k, v, onServer, init, cb) {
    var changes, _k, _v;
    if (v == null) {
      v = void 0;
    }
    if (onServer == null) {
      onServer = true;
    }
    if (init == null) {
      init = false;
    }
    if (cb != null) {
      cb = cb.bind(this);
    } else {
      cb = this.reload.bind(this);
    }
    if (Meteor.isClient && onServer) {
      Meteor.call(this.getMethod("Set"), k, v, cb);
    }
    if (v != null) {
      changes = this._set(k, v, init);
    } else {
      changes = 0;
      for (_k in k) {
        _v = k[_k];
        changes += this._set(_k, _v, init);
      }
    }
    return changes;
  };

  Pages.prototype._set = function(k, v, init) {
    var ch;
    if (init == null) {
      init = false;
    }
    ch = 0;
    if (init || k in this.availableSettings) {
      if ((this.availableSettings[k] != null) && this.availableSettings[k][0] !== true) {
        check(v, this.availableSettings[k][0]);
      }
      if (JSON.stringify(this[k]) !== JSON.stringify(v)) {
        ch = 1;
      }
      this[k] = v;
    } else {
      new Meteor.Error(400, "Setting not available.");
    }
    return ch;
  };

  Pages.prototype.setId = function(name) {
    var n;
    if (this.templateName) {
      name = this.templateName;
    }
    if (name in Pages.prototype.instances) {
      n = name.match(/[0-9]+$/);
      if (n != null) {
        name = name.slice(0, +n[0].length + 1 || 9e9) + parseInt(n) + 1;
      } else {
        name = name + "2";
      }
    }
    this.id = "pages_" + name;
    return this.name = name;
  };

  Pages.prototype.registerInstance = function() {
    Pages.prototype._ninstances++;
    return Pages.prototype.instances[this.name] = this;
  };

  Pages.prototype.setCollection = function(collection) {
    var e, isNew;
    if (typeof collection === 'object') {
      Pages.prototype.collections[collection._name] = collection;
      this.Collection = collection;
    } else {
      isNew = true;
      try {
        this.Collection = new Mongo.Collection(collection);
        Pages.prototype.collections[this.name] = this.Collection;
      } catch (_error) {
        e = _error;
        isNew = false;
        this.Collection = Pages.prototype.collections[this.name];
        this.Collection instanceof Mongo.Collection || (function() {
          throw "The '" + collection + "' collection was created outside of <Meteor.Pagination>. Pass the collection object instead of the collection's name to the <Meteor.Pagination> constructor.";
        })();
      }
    }
    this.setId(this.Collection._name);
    this.PaginatedCollection = new Mongo.Collection(this.id);
    return this.PreloadedData = new Mongo.Collection(this.id + "_data");
  };

  Pages.prototype.setRouter = function() {
    var init, l, pr, self, t, _ref;
    if (this.router === "iron-router") {
      pr = "" + this.route + ":n";
      t = this.routerTemplate;
      l = (_ref = this.routerLayout) != null ? _ref : void 0;
      self = this;
      init = true;
      Router.map(function() {
        if (self.homeRoute) {
          this.route("" + self.name + "_home", {
            path: self.homeRoute,
            template: t,
            layoutTemplate: l,
            onBeforeAction: function() {
              self.sess("oldPage", 1);
              return self.sess("currentPage", 1);
            }
          });
        }
        if (!self.infinite) {
          return this.route("" + self.name + "_page", {
            path: pr,
            template: t,
            layoutTemplate: l,
            onBeforeAction: function() {
              return self.onNavClick(parseInt(this.params.n));
            }
          });
        }
      });
      if (Meteor.isServer && this.fastRender) {
        self = this;
        FastRender.route("" + this.route + ":n", function(params) {
          this.subscribe(self.name + "_data");
          return this.subscribe(self.name, parseInt(params.n));
        });
        return FastRender.route(this.homeRoute, function() {
          this.subscribe(self.name + "_data");
          return this.subscribe(self.name, 1);
        });
      }
    }
  };

  Pages.prototype.setPerPage = function() {
    return this.perPage = this.pageSizeLimit < this.perPage ? this.pageSizeLimit : this.perPage;
  };

  Pages.prototype.setTemplates = function() {
    var i, name, _i, _len, _ref;
    name = this.templateName || this.name;
    if (this.table && this.itemTemplate === "_pagesItemDefault") {
      this.itemTemplate = this.tableItemTemplate;
    }
    _ref = [this.navTemplate, this.pageTemplate, this.itemTemplate, this.tableTemplate];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      i = _ref[_i];
      Template[i].helpers({
        pagesData: this
      });
    }
    return Template[name].helpers({
      pagesData: this,
      pagesNav: Template[this.navTemplate],
      pages: Template[this.pageTemplate]
    });
  };

  Pages.prototype.countPages = function() {
    return this.call("CountPages", (function(e, r) {
      return this.sess("totalPages", r);
    }).bind(this));
  };

  Pages.prototype.publish = function(page, subscription) {
    var c, handle, handle2, init, n, self, skip;
    this.setPerPage();
    skip = (page - 1) * this.perPage;
    if (skip < 0) {
      skip = 0;
    }
    init = true;
    c = this.Collection.find(this.filters, {
      sort: this.sort,
      fields: this.fields,
      skip: skip,
      limit: this.perPage
    });
    self = this;
    handle = c.observe({
      addedAt: (function(subscription, doc, at) {
        var e, id;
        try {
          doc["_" + this.id + "_p"] = page;
          doc["_" + this.id + "_i"] = at;
          id = doc._id;
          delete doc._id;
          if (!init) {
            subscription.added(this.id, id, doc);
            return (this.Collection.find(this.filters, {
              sort: this.sort,
              fields: this.fields,
              skip: skip,
              limit: this.perPage
            })).forEach((function(_this) {
              return function(o, i) {
                if (i >= at) {
                  return subscription.changed(_this.id, o._id, _.object([["_" + _this.id + "_i", i + 1]]));
                }
              };
            })(this));
          }
        } catch (_error) {
          e = _error;
        }
      }).bind(this, subscription)
    });
    handle2 = c.observeChanges({
      movedBefore: (function(subscription, id, before) {
        var ref;
        ref = false;
        return (this.Collection.find(this.filters, {
          sort: this.sort,
          fields: this.fields,
          skip: skip,
          limit: this.perPage
        })).forEach((function(_this) {
          return function(o, i) {
            var at;
            if (!ref && o._id === before) {
              ref = true;
              at = i;
            }
            if (ref) {
              subscription.changed(_this.id, o._id, _.object([["_" + _this.id + "_i", i + 1]]));
            }
            return subscription.changed(_this.id, id, _.object([["_" + _this.id + "_i", i]]));
          };
        })(this));
      }).bind(this, subscription),
      changed: (function(subscription, id, fields) {
        var e;
        try {
          return subscription.changed(this.id, id, fields);
        } catch (_error) {
          e = _error;
        }
      }).bind(this, subscription),
      removed: (function(subscription, id) {
        var e;
        try {
          return subscription.removed(this.id, id);
        } catch (_error) {
          e = _error;
        }
      }).bind(this, subscription)
    });
    n = 0;
    c.forEach((function(doc, index, cursor) {
      n++;
      doc["_" + this.id + "_p"] = page;
      doc["_" + this.id + "_i"] = index;
      return subscription.added(this.id, doc._id, doc);
    }).bind(this));
    init = false;
    subscription.onStop(function() {
      handle.stop();
      return handle2.stop();
    });
    this.ready();
    this.subscriptions.push(subscription);
    return c;
  };

  Pages.prototype.loading = function(p) {
    if (!this.fastRender && p === this.currentPage() && (typeof Session !== "undefined" && Session !== null)) {
      return this.sess("ready", false);
    }
  };

  Pages.prototype.now = function() {
    return (new Date()).getTime();
  };

  Pages.prototype.log = function(msg) {
    return console.log("" + this.name + " " + msg);
  };

  Pages.prototype.logRequest = function(p) {
    this.timeLastRequest = this.now();
    this.loading(p);
    if (__indexOf.call(this.requested, p) < 0) {
      return this.requested.push(p);
    }
  };

  Pages.prototype.logResponse = function(p) {
    if (__indexOf.call(this.received, p) < 0) {
      return this.received.push(p);
    }
  };

  Pages.prototype.clearQueue = function() {
    return this.queue = [];
  };

  Pages.prototype.neighbors = function(page) {
    var d, np, pp, _i, _ref;
    this.n = [page];
    if (this.dataMargin === 0) {
      return this.n;
    }
    for (d = _i = 1, _ref = this.dataMargin; 1 <= _ref ? _i <= _ref : _i >= _ref; d = 1 <= _ref ? ++_i : --_i) {
      np = page + d;
      if (np <= this.sess("totalPages")) {
        this.n.push(np);
      }
      pp = page - d;
      if (pp > 0) {
        this.n.push(pp);
      }
    }
    return this.n;
  };

  Pages.prototype.paginationNavItem = function(label, page, disabled, active) {
    if (active == null) {
      active = false;
    }
    return {
      p: label,
      n: page,
      active: active ? "active" : "",
      disabled: disabled ? "disabled" : ""
    };
  };

  Pages.prototype.paginationNeighbors = function() {
    var from, i, k, n, p, page, to, total, _i, _j, _len;
    page = this.currentPage();
    total = this.sess("totalPages");
    from = page - this.paginationMargin;
    to = page + this.paginationMargin;
    if (from < 1) {
      to += 1 - from;
      from = 1;
    }
    if (to > total) {
      from -= to - total;
      to = total;
    }
    if (from < 1) {
      from = 1;
    }
    if (to > total) {
      to = total;
    }
    n = [];
    if (this.navShowFirst || this.navShowEdges) {
      n.push(this.paginationNavItem("«", 1, page === 1));
    }
    n.push(this.paginationNavItem("<", page - 1, page === 1));
    for (p = _i = from; from <= to ? _i <= to : _i >= to; p = from <= to ? ++_i : --_i) {
      n.push(this.paginationNavItem(p, p, page > total, p === page));
    }
    n.push(this.paginationNavItem(">", page + 1, page >= total));
    if (this.navShowLast || this.navShowEdges) {
      n.push(this.paginationNavItem("»", total, page >= total));
    }
    for (k = _j = 0, _len = n.length; _j < _len; k = ++_j) {
      i = n[k];
      n[k]['_p'] = this;
    }
    return n;
  };

  Pages.prototype.onNavClick = function(n) {
    if (n <= this.sess("totalPages") && n > 0) {
      Deps.nonreactive((function() {
        return this.sess("oldPage", this.sess("currentPage"));
      }).bind(this));
      return this.sess("currentPage", n);
    }
  };

  Pages.prototype.setInfiniteTrigger = function() {
    return window.onscroll = (_.throttle(function() {
      var l, oh, t;
      t = this.infiniteTrigger;
      oh = document.body.offsetHeight;
      if (t > 1) {
        l = oh - t;
      } else if (t > 0) {
        l = oh * t;
      } else {
        return;
      }
      if ((window.innerHeight + window.scrollY) >= l) {
        if (this.lastPage < this.sess("totalPages")) {
          return this.sess("currentPage", this.lastPage + 1);
        }
      }
    }, this.infiniteRateLimit * 1000)).bind(this);
  };

  Pages.prototype.checkQueue = function() {
    var i;
    if (this.queue.length) {
      while (!(__indexOf.call(this.neighbors(this.currentPage()), i) >= 0 || !this.queue.length)) {
        i = this.queue.shift();
      }
      if (__indexOf.call(this.neighbors(this.currentPage()), i) >= 0) {
        return this.requestPage(i);
      }
    }
  };

  Pages.prototype.currentPage = function() {
    if (Meteor.isClient && (this.sess("currentPage") != null)) {
      return this.sess("currentPage");
    } else {
      return this._currentPage;
    }
  };

  Pages.prototype.isReady = function() {
    return this.sess("ready");
  };

  Pages.prototype.ready = function(p) {
    if (p === true || p === this.currentPage() && (typeof Session !== "undefined" && Session !== null)) {
      return this.sess("ready", true);
    }
  };

  Pages.prototype.checkInitPage = function() {
    var m, p;
    this.init = false;
    m = location.pathname.match(new RegExp("" + this.route + "([0-9]+)"));
    if (m) {
      p = parseInt(m[1]);
    } else {
      p = 1;
    }
    this.sess("oldPage", p);
    return this.sess("currentPage", p);
  };

  Pages.prototype.getPage = function(page) {
    var c, n, p, total, _i, _len, _ref;
    if (Meteor.isClient) {
      if (page == null) {
        page = this.currentPage();
      }
      page = parseInt(page);
      if (page === NaN) {
        return;
      }
      total = this.sess("totalPages");
      if (total === 0) {
        return this.ready(true);
      }
      if (page <= total) {
        _ref = this.neighbors(page);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          p = _ref[_i];
          if (__indexOf.call(this.received, p) < 0) {
            this.requestPage(p);
          }
        }
      }
      if (this.infinite) {
        n = this.PaginatedCollection.find({}, {
          fields: this.fields,
          sort: this.sort
        }).count();
        c = this.PaginatedCollection.find({}, {
          fields: this.fields,
          sort: this.sort,
          skip: this.infiniteItemsLimit !== Infinity && n > this.infiniteItemsLimit ? n - this.infiniteItemsLimit : 0,
          limit: this.infiniteItemsLimit
        });
      } else {
        c = this.PaginatedCollection.find(_.object([["_" + this.id + "_p", page]]), {
          fields: this.fields,
          sort: _.object([["_" + this.id + "_i", 1]])
        });
        c.observeChanges({
          added: (function(_this) {
            return function() {
              return _this.countPages();
            };
          })(this),
          removed: (function(_this) {
            return function() {
              return _this.countPages();
            };
          })(this)
        });
      }
      return c.fetch();
    }
  };

  Pages.prototype.requestPage = function(page) {
    if (!page || __indexOf.call(this.requested, page) >= 0) {
      return;
    }
    if (page === this.currentPage()) {
      this.clearQueue();
    }
    this.queue.push(page);
    this.logRequest(page);
    return Meteor.defer((function(page) {
      return this.subscriptions[page] = Meteor.subscribe(this.name, page, {
        onReady: (function(page) {
          return this.onPage(page);
        }).bind(this, page),
        onError: (function(e) {
          return new Meteor.Error(e.message);
        }).bind(this)
      });
    }).bind(this, page));
  };

  Pages.prototype.onPage = function(page) {
    this.logResponse(page);
    this.ready(page);
    if (this.infinite) {
      this.lastPage = page;
    }
    return this.checkQueue();
  };

  return Pages;

})();

Meteor.Pagination = Pages;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/alethes:pages/client/template.templates.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("pages");                                                                                         // 2
Template["pages"] = new Template("Template.pages", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return "";                                                                                                           // 5
}));                                                                                                                   // 6
                                                                                                                       // 7
Template.__checkName("pagesNav");                                                                                      // 8
Template["pagesNav"] = new Template("Template.pagesNav", (function() {                                                 // 9
  var view = this;                                                                                                     // 10
  return "";                                                                                                           // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
Template.__checkName("_pagesLoading");                                                                                 // 14
Template["_pagesLoading"] = new Template("Template._pagesLoading", (function() {                                       // 15
  var view = this;                                                                                                     // 16
  return HTML.Raw('<div class="pagesLoadingDefaultCont">\n    <div class="pagesLoadingDefault"><img src="/packages/alethes:pages/public/loader.gif"></div>\n  </div>');
}));                                                                                                                   // 18
                                                                                                                       // 19
Template.__checkName("_pagesPageCont");                                                                                // 20
Template["_pagesPageCont"] = new Template("Template._pagesPageCont", (function() {                                     // 21
  var view = this;                                                                                                     // 22
  return Blaze.If(function() {                                                                                         // 23
    return Spacebars.dataMustache(view.lookup("divWrapper"), view.lookup("pagesData"));                                // 24
  }, function() {                                                                                                      // 25
    return [ "\n    ", HTML.DIV({                                                                                      // 26
      "class": function() {                                                                                            // 27
        return Spacebars.mustache(view.lookup("divWrapper"), view.lookup("pagesData"));                                // 28
      }                                                                                                                // 29
    }, "\n      ", Blaze._TemplateWith(function() {                                                                    // 30
      return Spacebars.call(view.lookup("pagesData"));                                                                 // 31
    }, function() {                                                                                                    // 32
      return Spacebars.include(view.lookupTemplate("_pagesPage"));                                                     // 33
    }), "\n    "), "\n  " ];                                                                                           // 34
  }, function() {                                                                                                      // 35
    return [ Blaze.If(function() {                                                                                     // 36
      return Spacebars.dataMustache(view.lookup("table"), view.lookup("pagesData"));                                   // 37
    }, function() {                                                                                                    // 38
      return [ "\n    ", Blaze.If(function() {                                                                         // 39
        return Spacebars.dataMustache(view.lookup("tableWrapper"), view.lookup("pagesData"));                          // 40
      }, function() {                                                                                                  // 41
        return [ "\n      ", HTML.DIV({                                                                                // 42
          "class": function() {                                                                                        // 43
            return Spacebars.mustache(view.lookup("tableWrapper"), view.lookup("pagesData"));                          // 44
          }                                                                                                            // 45
        }, "\n        ", Blaze._TemplateWith(function() {                                                              // 46
          return Spacebars.call(view.lookup("pagesData"));                                                             // 47
        }, function() {                                                                                                // 48
          return Spacebars.include(view.lookupTemplate("_pagesTable"));                                                // 49
        }), "\n      "), "\n    " ];                                                                                   // 50
      }, function() {                                                                                                  // 51
        return [ "\n        ", Blaze._TemplateWith(function() {                                                        // 52
          return Spacebars.call(view.lookup("pagesData"));                                                             // 53
        }, function() {                                                                                                // 54
          return Spacebars.include(view.lookupTemplate("_pagesTable"));                                                // 55
        }), "\n    " ];                                                                                                // 56
      }), "\n  " ];                                                                                                    // 57
    }, function() {                                                                                                    // 58
      return [ "\n  ", Blaze._TemplateWith(function() {                                                                // 59
        return Spacebars.call(view.lookup("pagesData"));                                                               // 60
      }, function() {                                                                                                  // 61
        return Spacebars.include(view.lookupTemplate("_pagesPage"));                                                   // 62
      }), "\n  " ];                                                                                                    // 63
    }), "\n  " ];                                                                                                      // 64
  });                                                                                                                  // 65
}));                                                                                                                   // 66
                                                                                                                       // 67
Template.__checkName("_pagesTable");                                                                                   // 68
Template["_pagesTable"] = new Template("Template._pagesTable", (function() {                                           // 69
  var view = this;                                                                                                     // 70
  return HTML.TABLE({                                                                                                  // 71
    "class": function() {                                                                                              // 72
      return Spacebars.mustache(view.lookup("class"), view.lookup("pagesData"));                                       // 73
    }                                                                                                                  // 74
  }, "\n    ", HTML.THEAD("\n      ", HTML.TR("\n        ", Blaze.Each(function() {                                    // 75
    return Spacebars.dataMustache(view.lookup("header"), view.lookup("pagesData"));                                    // 76
  }, function() {                                                                                                      // 77
    return [ "\n          ", HTML.TH(Blaze.View(function() {                                                           // 78
      return Spacebars.mustache(view.lookup("value"));                                                                 // 79
    })), "\n        " ];                                                                                               // 80
  }), "\n      "), "\n    "), "\n    ", HTML.TBODY("\n      ", Blaze._TemplateWith(function() {                        // 81
    return Spacebars.call(view.lookup("pagesData"));                                                                   // 82
  }, function() {                                                                                                      // 83
    return Spacebars.include(view.lookupTemplate("_pagesPage"));                                                       // 84
  }), "\n    "), "\n  ");                                                                                              // 85
}));                                                                                                                   // 86
                                                                                                                       // 87
Template.__checkName("_pagesTableItem");                                                                               // 88
Template["_pagesTableItem"] = new Template("Template._pagesTableItem", (function() {                                   // 89
  var view = this;                                                                                                     // 90
  return HTML.TR("\n    ", Blaze.Each(function() {                                                                     // 91
    return Spacebars.dataMustache(view.lookup("attrs"), view.lookup("pagesData"));                                     // 92
  }, function() {                                                                                                      // 93
    return [ "\n      ", HTML.TD(Blaze.View(function() {                                                               // 94
      return Spacebars.mustache(view.lookup("value"));                                                                 // 95
    })), "\n    " ];                                                                                                   // 96
  }), "\n  ");                                                                                                         // 97
}));                                                                                                                   // 98
                                                                                                                       // 99
Template.__checkName("_pagesPage");                                                                                    // 100
Template["_pagesPage"] = new Template("Template._pagesPage", (function() {                                             // 101
  var view = this;                                                                                                     // 102
  return [ Blaze.If(function() {                                                                                       // 103
    return Spacebars.call(view.lookup("ready"));                                                                       // 104
  }, function() {                                                                                                      // 105
    return "\n  ";                                                                                                     // 106
  }, function() {                                                                                                      // 107
    return [ "\n    ", Spacebars.include(view.lookupTemplate("_pagesLoading")), "\n  " ];                              // 108
  }), "\n  ", Blaze.Each(function() {                                                                                  // 109
    return Spacebars.call(view.lookup("items"));                                                                       // 110
  }, function() {                                                                                                      // 111
    return [ "\n    ", Spacebars.include(view.lookupTemplate("item")), "\n  " ];                                       // 112
  }) ];                                                                                                                // 113
}));                                                                                                                   // 114
                                                                                                                       // 115
Template.__checkName("_pagesNavCont");                                                                                 // 116
Template["_pagesNavCont"] = new Template("Template._pagesNavCont", (function() {                                       // 117
  var view = this;                                                                                                     // 118
  return Blaze._TemplateWith(function() {                                                                              // 119
    return Spacebars.call(view.lookup("pagesData"));                                                                   // 120
  }, function() {                                                                                                      // 121
    return Spacebars.include(view.lookupTemplate("_pagesNav"));                                                        // 122
  });                                                                                                                  // 123
}));                                                                                                                   // 124
                                                                                                                       // 125
Template.__checkName("_pagesNav");                                                                                     // 126
Template["_pagesNav"] = new Template("Template._pagesNav", (function() {                                               // 127
  var view = this;                                                                                                     // 128
  return Blaze.If(function() {                                                                                         // 129
    return Spacebars.call(view.lookup("show"));                                                                        // 130
  }, function() {                                                                                                      // 131
    return [ "\n    ", HTML.DIV({                                                                                      // 132
      style: "text-align:center",                                                                                      // 133
      "data-pages": function() {                                                                                       // 134
        return Spacebars.mustache(view.lookup("name"));                                                                // 135
      },                                                                                                               // 136
      "class": "pagination-cont"                                                                                       // 137
    }, "\n      ", HTML.UL({                                                                                           // 138
      "class": "pagination"                                                                                            // 139
    }, "\n      ", Blaze.Each(function() {                                                                             // 140
      return Spacebars.call(view.lookup("paginationNeighbors"));                                                       // 141
    }, function() {                                                                                                    // 142
      return [ "\n        ", HTML.LI({                                                                                 // 143
        "class": function() {                                                                                          // 144
          return [ Spacebars.mustache(view.lookup("active")), " ", Spacebars.mustache(view.lookup("disabled")) ];      // 145
        }                                                                                                              // 146
      }, "\n          ", HTML.A({                                                                                      // 147
        href: function() {                                                                                             // 148
          return Spacebars.mustache(view.lookup("link"));                                                              // 149
        }                                                                                                              // 150
      }, Blaze.View(function() {                                                                                       // 151
        return Spacebars.mustache(view.lookup("p"));                                                                   // 152
      })), "\n        "), "\n      " ];                                                                                // 153
    }), "\n      "), "\n    "), "\n  " ];                                                                              // 154
  });                                                                                                                  // 155
}));                                                                                                                   // 156
                                                                                                                       // 157
Template.__checkName("_pagesItemDefault");                                                                             // 158
Template["_pagesItemDefault"] = new Template("Template._pagesItemDefault", (function() {                               // 159
  var view = this;                                                                                                     // 160
  return HTML.DIV({                                                                                                    // 161
    "class": "pagesItemDefault"                                                                                        // 162
  }, Blaze.Each(function() {                                                                                           // 163
    return Spacebars.call(view.lookup("properties"));                                                                  // 164
  }, function() {                                                                                                      // 165
    return [ "\n    ", HTML.DIV(HTML.I(Blaze.View(function() {                                                         // 166
      return Spacebars.mustache(view.lookup("name"));                                                                  // 167
    })), ": ", Blaze.View(function() {                                                                                 // 168
      return Spacebars.mustache(view.lookup("value"));                                                                 // 169
    })) ];                                                                                                             // 170
  }), "\n  ");                                                                                                         // 171
}));                                                                                                                   // 172
                                                                                                                       // 173
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/alethes:pages/client/controllers.coffee.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template._pagesPageCont.helpers({
  divWrapper: function(self) {
    return self.divWrapper;
  },
  table: function(self) {
    return self.table;
  },
  tableWrapper: function(self) {
    return self.table.wrapper;
  }
});

Template._pagesTable.helpers({
  "class": function(self) {
    return self.table["class"] || "";
  },
  fields: function(self) {
    return _.map(self.table.fields, function(v) {
      return {
        value: v
      };
    });
  },
  header: function(self) {
    return _.map(self.table.header || self.table.fields, function(v) {
      return {
        value: v
      };
    });
  }
});

Template._pagesPage.helpers({
  ready: function() {
    if (this.fastRender) {
      return true;
    }
    return this.sess("ready");
  },
  items: function() {
    var i, k, n, p, _i, _len;
    if (this.init) {
      this.checkInitPage();
    }
    n = this.sess((this.isReady() ? "currentPage" : "oldPage"));
    if (n == null) {
      return [];
    }
    p = this.getPage(n);
    if (p == null) {
      return [];
    }
    for (k = _i = 0, _len = p.length; _i < _len; k = ++_i) {
      i = p[k];
      p[k]['_t'] = this.itemTemplate;
    }
    return p;
  },
  item: function() {
    return Template[this._t];
  }
});

Template._pagesNav.helpers({
  show: function() {
    return this.fastRender || (!this.infinite && 1 < this.sess("totalPages"));
  },
  link: function() {
    var p, self, total;
    self = this._p;
    if (self.router) {
      p = this.n;
      if (p < 1) {
        p = 1;
      }
      if (self.sess("totalPages") == null) {
        self.sess("totalPages", self.PreloadedData.findOne({
          _id: "totalPages"
        }).v);
      }
      total = self.sess("totalPages");
      if (p > total) {
        p = total;
      }
      return self.route + p;
    }
    return "#";
  },
  paginationNeighbors: function() {
    return this.paginationNeighbors();
  }
});

Template._pagesNav.events({
  "click a": function(e) {
    var n, self;
    n = e.target.parentNode.parentNode.parentNode.getAttribute('data-pages');
    self = Meteor.Pagination.prototype.instances[n];
    return (_.throttle(function(e, self, n) {
      if (!self.router) {
        e.preventDefault();
        return self.onNavClick.call(self, n);
      }
    }, self.rateLimit * 1000))(e, self, this.n);
  }
});

Template._pagesTableItem.helpers({
  attrs: function(self) {
    return _.map(self.table.fields, (function(n) {
      return {
        value: this[n] != null ? this[n] : ""
      };
    }).bind(this));
  }
});

Template._pagesItemDefault.helpers({
  properties: function() {
    return _.compact(_.map(this, function(v, k) {
      if (k[0] !== "_") {
        return {
          name: k,
          value: v
        };
      } else {
        return null;
      }
    }));
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['alethes:pages'] = {};

})();
