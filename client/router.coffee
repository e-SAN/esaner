#------------------------ router ------------------------------------
logSet = (a, b) ->
  r = Session.set a, b
  console.log "now #{a} is #{b}"
  r

logSetCurrentView = (currentView)->
  logSet "currentView", currentView


ESANRouter = Backbone.Router.extend
  routes: # ! this order matters ! stupid!!
    "": "layout"
    "posts": "posts"
    "comments": "comments"
    "new": "new"
    "newUser": "newUser"
    #"hospitals": "hospitals" 
    ":detail": "detail" # 查看single object, see below
    
  layout: -> logSetCurrentView "layout"
  posts: -> logSetCurrentView "posts" 
  comments: -> logSetCurrentView "comments"
  new: -> logSetCurrentView "new"
  newUser: -> logSetCurrentView "newUser"
  #hospitals: -> logSetCurrentView "hospitals"
  detail: (detail) -> # detail is string formatted like 'view-detail'
    sp = detail.split '&'
    logSetCurrentView decodeURI sp[0] # this could be everything that contains details
    logSet "currentDetail",  decodeURI sp[1] # this leading to one detail of the viewed objected




#------------------------ do initiatings here -----------------------
Meteor.startup -> # 开始
  new ESANRouter
  
  Backbone.history.start pushState: true




#------------------------ Template.layout------------------------------- 
Template.layout.events 
  'click a[href^= "/"]': (e,t) ->  # means (a.href)a[href] ="/"
    # Note: Backbone.history.navigate decodeURI e.currentTarget.pathname will not work!
    Backbone.history.navigate e.currentTarget.pathname, true
    e.preventDefault()



#------------------------- Template.header -----------------------------
Template.header.events
  'click #posts': -> Backbone.history.navigate '/posts', true 
  'click #comments': -> Backbone.history.navigate '/comments', true
  #'click #tasks': -> Backbone.history.navigate '/tasks', true
  'click #new': -> Backbone.history.navigate '/new', true
  'click #newUser': -> Backbone.history.navigate '/newUser', true
  #'click #newTaskForm': -> Backbone.history.navigate '/newTaskForm', true
  #'click #printable': -> Session.set "showButtons", not showAsEditMode()
  #'click #hospitals': -> Backbone.history.navigate '/hospitals', true 
  
