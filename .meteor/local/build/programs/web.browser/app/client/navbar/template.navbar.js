(function(){
Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default",
    role: "navigation"
  }, "\n		", Spacebars.include(view.lookupTemplate("brand")), "\n		\n		", HTML.DIV({
    "class": "collapse navbar-collapse",
    id: "bs-example-navbar-collapse-1"
  }, "\n			", Spacebars.include(view.lookupTemplate("navbarnav")), "\n			", Spacebars.include(view.lookupTemplate("searchform")), "\n			", Spacebars.include(view.lookupTemplate("wlist")), "\n			", Spacebars.include(view.lookupTemplate("navbarright")), "\n		"), "\n		\n	");
}));

})();
