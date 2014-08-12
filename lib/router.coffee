Router.configure
  layoutTemplate: 'layout'
  notFoundTemplate: 'notFound'
  loadingTemplate: 'loading'
###
  waitOn: -> 
    Meteor.subscribe 'posts', Meteor.userId()
    #Meteor.subscribe 'comments', @_id
###
  
Router.map -> # => will not work
  @route 'splash', 
    path: '/'
    onAfterAction: -> this.render 'posts' #doesn't work?
    waitOn: ->
      Meteor.subscribe "posts", Meteor.user()?.username

  @route 'new'
  
  @route 'posts',
    path: '/posts'
    waitOn: ->
      Meteor.subscribe "posts", Meteor.user()?.username
    data: ->
      posts = {} 
      found = (Posts.find 
        parent:null, 
        sort: lastCommentDate:-1)#.fetch()   
      #posts.posts = found
      posts = found
      posts

  @route 'fullPost', 
    path:'/post/:_id'
    #data: 
    waitOn: ->
      Meteor.subscribe "fullpost", Meteor.user()?.username, @params._id
    data:->
      post = Posts.findOne _id: @params._id
      if post?
        post.comments = Posts.find 
          parent: @params._id 
          sort: date: 1
        #post.commentsList.comments = post.comments
        post
      else
        {}

###
  @route 'searchResults',
    path: '/posts/:searchKey'
    data: -> Posts.find title: @params.searchKey
###
