(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});


/*
  waitOn: -> 
    Meteor.subscribe 'posts', Meteor.userId()
     *Meteor.subscribe 'comments', @_id
 */

Router.map(function() {
  this.route('splash', {
    path: '/',
    onAfterAction: function() {
      return this.render('posts');
    },
    waitOn: function() {
      var _ref, _ref1;
      return [Meteor.subscribe("posts", (_ref = Meteor.user()) != null ? _ref.username : void 0, Meteor.subscribe("appusers", (_ref1 = Meteor.user()) != null ? _ref1.username : void 0))];
    }
  });
  this.route('new');
  this.route('posts', {
    path: '/posts',
    waitOn: function() {
      var _ref;
      return [Meteor.subscribe("posts", (_ref = Meteor.user()) != null ? _ref.username : void 0)];
    },
    data: function() {
      var found, posts;
      posts = {};
      found = Posts.find({
        parent: null,
        sort: {
          lastCommentDate: -1
        }
      });
      posts = found;
      return posts;
    }
  });
  this.route('fullPost', {
    path: '/post/:_id',
    waitOn: function() {
      var _ref;
      return [Meteor.subscribe("fullpost", (_ref = Meteor.user()) != null ? _ref.username : void 0, this.params._id)];
    },
    data: function() {
      var post;
      post = Posts.findOne({
        _id: this.params._id
      });
      if (post != null) {
        post.comments = Posts.find({
          parent: this.params._id,
          sort: {
            date: 1
          }
        });
        return post;
      } else {
        return {};
      }
    }
  });
  return this.route('layout', {
    waitOn: function() {
      return [Meteor.subscribe('appusers')];
    },
    data: function() {
      return WList.find({});
    }
  });
});


/*
  @route 'searchResults',
    path: '/posts/:searchKey'
    data: -> Posts.find title: @params.searchKey
 */

})();

//# sourceMappingURL=router.coffee.js.map
