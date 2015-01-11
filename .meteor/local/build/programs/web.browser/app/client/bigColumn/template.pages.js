(function(){
Template.__checkName("mypages");
Template["mypages"] = new Template("Template.mypages", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("visible"));
  }, function() {
    return [ "\n	", HTML.UL({
      "class": "pagination"
    }, "\n		", HTML.LI("\n			", HTML.A({
      href: "#"
    }, "Prev"), "\n		"), "\n		", HTML.LI("\n			", HTML.A({
      href: "#"
    }, "1"), "\n		"), "\n		", HTML.LI("\n			", HTML.A({
      href: "#"
    }, "2"), "\n		"), "\n		", HTML.LI("\n			", HTML.A({
      href: "#"
    }, "3"), "\n		"), "\n		", HTML.LI("\n			", HTML.A({
      href: "#"
    }, "4"), "\n		"), "\n		", HTML.LI("\n			", HTML.A({
      href: "#"
    }, "5"), "\n		"), "\n		", HTML.LI("\n			", HTML.A({
      href: "#"
    }, "Next"), "\n		"), "\n	"), "\n" ];
  });
}));

})();
