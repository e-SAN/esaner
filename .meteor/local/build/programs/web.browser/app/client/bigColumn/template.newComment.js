(function(){
Template.__checkName("newComment");
Template["newComment"] = new Template("Template.newComment", (function() {
  var view = this;
  return HTML.DIV({
    "class": "newCommentForm"
  }, "\n", HTML.FORM({
    "class": "form-horizontal",
    role: "form"
  }, "\n	", HTML.Raw('<div class="form-group">\n		<label for="title" class="col-sm-2 control-label">Title</label>\n		<div class="col-sm-10">\n			<input type="title" class="form-control" id="title">\n		</div>\n	</div>'), "\n	", HTML.DIV({
    "class": "form-group"
  }, "\n		", HTML.Raw('<label for="content" class="col-sm-2 control-label">Content</label>'), "\n		", HTML.DIV({
    "class": "col-sm-10"
  }, "\n			", HTML.TEXTAREA({
    type: "content",
    "class": "form-control",
    id: "content"
  }), "\n		"), "\n	"), "\n	\n	", HTML.Raw('<div class="form-group">\n		<div class="col-sm-offset-2 col-sm-10">\n			 <button id="submit" type="submit" class="btn btn-default"> Submit </button>\n			 <button id="cancel" type="cancel" class="btn btn-warn"> Cancel </button>\n		</div>\n	</div>'), "\n"), "\n");
}));

})();
