(function(){
Template.__checkName("searchform");
Template["searchform"] = new Template("Template.searchform", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("visible"));
  }, function() {
    return [ "\n	", HTML.FORM({
      "class": "navbar-form navbar-left",
      role: "search"
    }, "\n		", HTML.DIV({
      "class": "form-group"
    }, "\n			", HTML.INPUT({
      id: "searchKey",
      type: "text",
      "class": "form-control"
    }), "\n		"), " ", HTML.BUTTON({
      id: "search",
      type: "submit",
      "class": "btn btn-default"
    }, "Search"), "\n	"), "\n" ];
  });
}));

})();
