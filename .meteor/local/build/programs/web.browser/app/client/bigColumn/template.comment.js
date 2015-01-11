(function(){
Template.__checkName("comment");
Template["comment"] = new Template("Template.comment", (function() {
  var view = this;
  return HTML.DIV({
    "class": "headerContent"
  }, " \n		", Spacebars.include(view.lookupTemplate("headerContent")), "\n	");
}));

})();
