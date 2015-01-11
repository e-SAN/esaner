(function(){
Template.__checkName("fullPost");
Template["fullPost"] = new Template("Template.fullPost", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("headerContent")), HTML.Raw("\n	<br>\n		"), Spacebars.include(view.lookupTemplate("commentsList")), HTML.Raw('	\n		\n	<br>\n	<!--<button id="comment" type="submit" class="btn btn-default"> Comment </button>-->\n\n	<br>\n		'), Spacebars.include(view.lookupTemplate("newComment")) ];
}));

})();
