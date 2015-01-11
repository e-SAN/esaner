(function(){
Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return [ HTML.STRONG(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("owner"));
  }), ": ", Blaze.View(function() {
    return Spacebars.mustache(view.lookup("title"));
  })), " [ ", Blaze.View(function() {
    return Spacebars.mustache(view.lookup("date"));
  }), " ]" ];
}));

})();
