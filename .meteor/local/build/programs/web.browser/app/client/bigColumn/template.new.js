(function(){
Template.__checkName("new");
Template["new"] = new Template("Template.new", (function() {
  var view = this;
  return HTML.FORM({
    "class": "form-horizontal",
    role: "form"
  }, HTML.Raw('\n		<div class="form-group">\n			<label for="title" class="col-sm-2 control-label">Title</label>\n			<div class="col-sm-10">\n				<input type="title" class="form-control" id="title">\n			</div>\n		</div>\n		'), HTML.DIV({
    "class": "form-group"
  }, "\n			", HTML.Raw('<label for="content" class="col-sm-2 control-label">Content</label>'), "\n			", HTML.DIV({
    "class": "col-sm-10"
  }, "\n				", HTML.TEXTAREA({
    type: "content",
    "class": "form-control",
    id: "content"
  }), "\n			"), "\n		"), HTML.Raw('\n		<!--<div class="form-group">\n			 <div class="col-sm-offset-2 col-sm-10">\n				<div class="checkbox">\n					<label><input type="checkbox"> not publish </label>\n				</div>\n			</div>		\n		</div>-->\n		<div class="form-group">\n			<div class="col-sm-offset-2 col-sm-10">\n			 	<button id="submitNew" type="submit" class="btn btn-default">Submit</button>\n				 <button id="cancel" type="cancel" class="btn btn-warn"> Cancel </button>\n			</div>	 \n		</div>\n	'));
}));

})();
