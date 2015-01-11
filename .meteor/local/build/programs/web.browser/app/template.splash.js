(function(){
Template.__checkName("splash");
Template["splash"] = new Template("Template.splash", (function() {
  var view = this;
  return HTML.DIV({
    "class": "hero-unit"
  }, HTML.Raw("\n	    <h1>Welcome to Esaner Bulleting Board </h1>\n\n		"), Spacebars.include(view.lookupTemplate("signupLogin")), "	\n	");
}));

})();
