(function(){
Template.__checkName("commentsList");
Template["commentsList"] = new Template("Template.commentsList", (function() {
  var view = this;
  return HTML.DIV({
    "class": "commentsList"
  }, "\n	", HTML.OL({
    "class": "comments"
  }, "\n	", Blaze.Each(function() {
    return Spacebars.call(view.lookup("comments"));
  }, function() {
    return [ "\n		", HTML.LI("\n			", Spacebars.include(view.lookupTemplate("comment")), "\n		"), "\n	" ];
  }), "\n	"), "\n");
}));

})();
