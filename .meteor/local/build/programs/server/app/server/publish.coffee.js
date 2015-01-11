(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.approved = function(name) {
  if (name == null) {
    return false;
  }
  return name === 'J.K' || (WList.findOne({
    username: name
  }) != null);
};

Meteor.publish("post", function(username, id) {
  if (approved(username)) {
    return Posts.find({
      _id: id
    });
  }
});

Meteor.publish("fullpost", function(username, id) {
  if (approved(username)) {
    return Posts.find({
      $or: [
        {
          _id: id
        }, {
          parent: id
        }
      ]
    });
  }
});

Meteor.publish("posts", function(username) {
  if (approved(username)) {
    return Posts.find({});
  }
});

Meteor.publish("comments", function(username, id) {
  if (approved(username && (id != null))) {
    return Posts.find({
      parent: id

      /*
      				fields:
      				content:false
      				 *owner:false
       */
    });
  }
});

Meteor.publish("likes", function(postid) {
  return Likes.find({
    post: postid
  });
});

Meteor.publish("appusers", function(username) {
  if (approved(username)) {
    return WList.find({});
  }
});

})();

//# sourceMappingURL=publish.coffee.js.map
