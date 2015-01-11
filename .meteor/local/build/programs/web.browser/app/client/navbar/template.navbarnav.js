(function(){
Template.__checkName("navbarnav");
Template["navbarnav"] = new Template("Template.navbarnav", (function() {
  var view = this;
  return HTML.UL({
    "class": "nav navbar-nav"
  }, "\n		", HTML.LI({
    "class": "active"
  }, "\n			", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "posts");
    }
  }, "Posts"), "\n		"), "\n		", HTML.LI("\n			", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "new");
    }
  }, "New"), "\n		"), "\n		", Spacebars.include(view.lookupTemplate("dropdown1")), "\n	");
}));

})();
