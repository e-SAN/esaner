(function(){
Template.__checkName("navbarright");
Template["navbarright"] = new Template("Template.navbarright", (function() {
  var view = this;
  return HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, HTML.Raw('\n		<li>\n			<a href="https://github.com/e-SAN/esaner">GitHub</a>\n		</li>\n		'), Spacebars.include(view.lookupTemplate("dropdown1")), "\n		", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n			", HTML.LI(Spacebars.include(view.lookupTemplate("loginButtons"))), "\n		" ];
  }), "\n	");
}));

})();
