(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  'postOwner': function(id) {
    var posts, userid, usr, _ref, _ref1;
    posts = (Posts.find({
      _id: id
    })).fetch();
    userid = posts[0].owner;
    usr = (Meteor.users.find({
      _id: userid
    })).fetch()[0];
    console.log((_ref = usr.emails) != null ? _ref[0].address : void 0);
    usr.emails[0].address;
    if (usr != null) {
      if (usr.profile != null) {
        return usr.profile.name;
      } else {
        return (_ref1 = usr.emails) != null ? _ref1[0].address : void 0;
      }
    } else {
      return userid;
    }
  },
  'addUser': function(username, newname) {
    if (approved(username)) {
      return WList.insert({
        username: newname,
        by: username
      });
    }
  },
  'removeUser': function(username, thename) {
    if (username === 'J.K') {
      return WList.remove({
        username: thename
      });
    }
  },
  'addPost': function(options) {
    var date, pid, post, username;
    username = Meteor.user().username;
    if (!approved(username)) {
      return;
    }
    date = new Date();
    pid = options.parent;
    post = {
      title: options.title,
      content: options.content,
      owner: username,
      date: date,
      parent: pid
    };
    if (pid != null) {
      Posts.update(pid, {
        $set: {
          lastCommentDate: date
        }
      });
    } else {
      post.lastCommentDate = date;
    }
    return Posts.insert(post);
  },
  'removePost': function(id) {
    return Posts.remove({
      _id: id
    });
  },
  'removeAllPosts': function() {
    return Posts.remove({});
  }
});


/*
	'addNames':()->
		Meteor.users.update 'tgHnK8gQ46GXRAGtv', $set: {'profile.fullname': 'Mike Tyson' }
		Meteor.users.update 'Xr9viZQzp6KbvX6b7', $set: {'profile.fullname': 'Evander Holyfield' }
 */

})();
