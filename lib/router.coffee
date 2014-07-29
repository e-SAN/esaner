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
    onAfterAction: -> this.render 'posts'
  
  @route 'new'
  
  @route 'posts',
    path: '/posts'

  ###    
    data: ->
      posts = Posts.find 
        parent:null, 
        sort: lastCommentDate:-1   
      posts.fetch()
  ###

  @route 'fullPost', 
    path:'/post/:_id'
    data: -> 
      post = Posts.findOne _id: @params._id
###
      post.comments = Posts.find 
        parent: @params._id 
        sort: date: 1
      post
###
###
  @route 'searchResults',
    path: '/posts/:searchKey'
    data: -> Posts.find title: @params.searchKey
###