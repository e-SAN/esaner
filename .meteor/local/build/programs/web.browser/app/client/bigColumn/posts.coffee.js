(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/*
Template.searchform.events 
	'click #search': (e,t) ->
		unless key = $('#searchKey').val()?
			return
		else
			Meteor.go "searchResults"
 */
Template.wlist.visible = function() {
  var _ref, _ref1;
  return (_ref = (_ref1 = Meteor.user()) != null ? _ref1.username : void 0) === 'J.K' || _ref === 'athena';
};

Template.wlist.jk = function() {
  var _ref;
  return ((_ref = Meteor.user()) != null ? _ref.username : void 0) === 'J.K';
};

Template.wlist.events({
  'click #addUser': function(e, t) {
    var username, _ref;
    if ((username = (_ref = ($('#username')).val()) != null ? _ref.trim() : void 0) == null) {

    } else {
      Meteor.call("addUser", Meteor.user().username, username);
      $('#username').val('').select().focus();
      return e.preventDefault();
    }
  },
  'click #removeUser': function(e, t) {
    var username, _ref;
    if ((username = (_ref = ($('#username')).val()) != null ? _ref.trim() : void 0) == null) {

    } else {
      Meteor.call("removeUser", Meteor.user().username, username);
      $('#username').val('').select().focus();
      return e.preventDefault();
    }
  }
});

Template.posts.helpers({
  posts: function() {
    return Posts.find({
      parent: null
    }, {
      sort: {
        lastCommentDate: -1
      }
    });
  }
});

Template.commentsList.helpers({
  comments: function() {
    return Posts.find({
      parent: this._id
    }, {
      sort: {
        date: 1
      }
    });
  }
});

Template["new"].events({
  'click #submitNew': function(e, t) {
    var content, title, _ref;
    if (!(title = (_ref = ($('#title')).val()) != null ? _ref.trim() : void 0)) {
      return alert("title can't be empty");
    } else {
      content = ($('#content')).val();
      Meteor.call("addPost", {
        parent: null,
        title: title,
        content: content
      });
      Router.go('posts');
      return e.preventDefault();
    }
  },
  'click #cancel': function(e, t) {
    $('#title').val('');
    $('#content').val('');
    Router.go('posts');
    return e.preventDefault();
  }
});

Template.newComment.events({
  'click #submit': function(e, t) {
    var content, title, _ref;
    title = (_ref = ($('#title')).val()) != null ? _ref.trim() : void 0;
    content = ($('#content')).val();
    if (!title) {
      if (content == null) {
        return;
      }
    }
    Meteor.call("addPost", {
      parent: this._id,
      title: title,
      content: content
    });
    $('#content').val('');
    $('#title').val('').select().focus();
    return e.preventDefault();
  },
  'click #cancel': function(e, t) {
    $('#content').val('');
    $('#title').val('').select().focus();
    return e.preventDefault();
  }
});

})();
