(function(){
Template.__checkName("wlist");
Template["wlist"] = new Template("Template.wlist", (function() {
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
      id: "username",
      type: "text",
      "class": "form-control"
    }), "\n		"), " ", HTML.BUTTON({
      id: "addUser",
      type: "submit",
      "class": "btn btn-default"
    }, "Add"), Blaze.If(function() {
      return Spacebars.call(view.lookup("jk"));
    }, function() {
      return [ " ", HTML.BUTTON({
        id: "removeUser",
        type: "submit",
        "class": "btn btn-warn"
      }, "Remove") ];
    }), "\n	"), "\n" ];
  });
}));

})();
