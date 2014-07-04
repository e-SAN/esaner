Template.posts.rendered = ->
	Deps.autorun ->
		Meteor.subscribe "posts", Meteor.userId()
		Meteor.subscribe "likes"
		Meteor.subscribe "appusers"

Template.posts.posts = ->
	Posts.find parent:null, 
		sort: date:-1	
###
Template.post.comments = ->
	Posts.find parent: @_id,
		sort: date:-1
###	
Template.commentsList.comments = ->
	Posts.find parent: @_id,
		sort: date: 1


Template.new.events
	'click #submit': (e,t)->
		unless title = t.find('#title').value?.trim()
			alert "title can't be empty"
		else
			content = t.find('#content').value?.trim()
			console.log this, 'clicked'

			Meteor.call "addPost",
				parent: null 
				title: title
				content: content
				#comments:[]
	
	'click #cancel': (e,t)->
		$('#title').val('')
		$('#content').val('')

Template.newComment.events
	'click #submit': (e,t)->
		unless title = t.find('#title').value?.trim()
			alert "title can't be empty"
		else
			content = t.find('#content').value?.trim()
			console.log this, 'clicked'

			Meteor.call "addPost",
				parent: (@_id) 
				title: title
				content: content
				#comments:[]
	
	'click #cancel': (e,t)->
		$('#title').val('')
		$('#content').val('')