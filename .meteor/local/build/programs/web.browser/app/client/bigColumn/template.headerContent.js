(function(){
Template.__checkName("headerContent");
Template["headerContent"] = new Template("Template.headerContent", (function() {
  var view = this;
  return [ HTML.P(Spacebars.include(view.lookupTemplate("header"))), "\n	", Spacebars.include(view.lookupTemplate("content")), HTML.Raw("\n	<br>") ];
}));

})();
