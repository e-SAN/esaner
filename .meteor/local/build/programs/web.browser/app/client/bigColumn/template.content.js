(function(){
Template.__checkName("content");
Template["content"] = new Template("Template.content", (function() {
  var view = this;
  return HTML.DIV({
    "class": "content"
  }, "	\n			", Blaze.View(function() {
    return Spacebars.mustache(view.lookup("content"));
  }), "\n	");
}));

})();
