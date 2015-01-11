(function(){
Template.__checkName("dropdown1");
Template["dropdown1"] = new Template("Template.dropdown1", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("visible"));
  }, function() {
    return [ "\n	", HTML.LI({
      "class": "dropdown"
    }, "\n		 ", HTML.A({
      href: "#",
      "class": "dropdown-toggle",
      "data-toggle": "dropdown"
    }, "Dropdown", HTML.STRONG({
      "class": "caret"
    })), "\n		", HTML.UL({
      "class": "dropdown-menu"
    }, "\n			", HTML.LI("\n				", HTML.A({
      href: "#"
    }, "Action"), "\n			"), "\n			", HTML.LI("\n				", HTML.A({
      href: "#"
    }, "Another action"), "\n			"), "\n			", HTML.LI("\n				", HTML.A({
      href: "#"
    }, "Something else here"), "\n			"), "\n			", HTML.LI({
      "class": "divider"
    }, "\n			"), "\n			", HTML.LI("\n				", HTML.A({
      href: "#"
    }, "Separated link"), "\n			"), "\n			", HTML.LI({
      "class": "divider"
    }, "\n			"), "\n			", HTML.LI("\n				", HTML.A({
      href: "#"
    }, "One more separated link"), "\n			"), "\n		"), "\n	"), "\n" ];
  });
}));

})();
