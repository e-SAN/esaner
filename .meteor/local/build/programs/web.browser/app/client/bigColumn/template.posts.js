(function(){
Template.__checkName("posts");
Template["posts"] = new Template("Template.posts", (function() {
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
