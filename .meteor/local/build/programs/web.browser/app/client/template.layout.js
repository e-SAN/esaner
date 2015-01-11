(function(){
Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, "\n	", HTML.DIV({
    "class": "row clearfix"
  }, "\n		", HTML.DIV({
    "class": "col-md-12 column"
  }, "\n			", Spacebars.include(view.lookupTemplate("navbar")), "\n			", HTML.DIV({
    "class": "row clearfix"
  }, "\n				", HTML.DIV({
    "class": "col-md-12 column"
  }, "\n					", Blaze.Unless(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n						", Spacebars.include(view.lookupTemplate("splash")), "\n					" ];
  }, function() {
    return [ "\n						", Spacebars.include(view.lookupTemplate("yield")), "\n						", Spacebars.include(view.lookupTemplate("userList")), "	\n					" ];
  }), "	\n				"), "\n			"), "\n		"), "\n	"), "\n");
}));

})();
