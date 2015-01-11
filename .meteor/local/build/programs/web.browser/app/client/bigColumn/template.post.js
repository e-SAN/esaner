(function(){
Template.__checkName("post");
Template["post"] = new Template("Template.post", (function() {
  var view = this;
  return HTML.DIV({
    "class": "panel panel-default"
  }, "\n		", HTML.DIV({
    "class": "panel-heading"
  }, "\n			 ", HTML.A({
    "class": "panel-title",
    "data-toggle": "collapse",
    "data-parent": "#panel-articles-list",
    href: function() {
      return [ "#", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];
    }
  }, Spacebars.include(view.lookupTemplate("header"))), "\n		"), "\n		", HTML.DIV({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));
    },
    "class": "panel-collapse collapse"
  }, "\n			", HTML.DIV({
    "class": "panel-body"
  }, "\n				", Spacebars.include(view.lookupTemplate("content")), "\n				", HTML.A({
    "class": "btn",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "fullPost");
    }
  }, "View details »"), "	\n			"), "\n		"), "\n	");
}));

})();
