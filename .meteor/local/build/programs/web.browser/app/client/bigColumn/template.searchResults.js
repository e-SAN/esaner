(function(){
Template.__checkName("searchResults");
Template["searchResults"] = new Template("Template.searchResults", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "panel-group",
    id: "panel-articles-list"
  }, "\n	", Blaze.Each(function() {
    return Spacebars.call(view.lookup("posts"));
  }, function() {
    return [ "\n		", Spacebars.include(view.lookupTemplate("post")), "\n	" ];
  }), "\n	"), "\n	", Spacebars.include(view.lookupTemplate("mypages")) ];
}));

})();
