(function(){
Template.__checkName("userList");
Template["userList"] = new Template("Template.userList", (function() {
  var view = this;
  return HTML.DIV({
    "class": "column"
  }, HTML.Raw("<h1>Users </h1>\n<p>Choose another user to start a chat with: </p>\n"), HTML.UL({
    "class": "userList"
  }, Blaze.Each(function() {
    return Spacebars.call(view.lookup("users"));
  }, function() {
    return Spacebars.include(view.lookupTemplate("userItem"));
  })));
}));

Template.__checkName("userItem");
Template["userItem"] = new Template("Template.userItem", (function() {
  var view = this;
  return HTML.LI(HTML.BUTTON(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("."));
  }), " "));
}));

})();
