@approved = (name) ->
	return false unless name?
	name is 'J.K' or WList.findOne(username:name)?

Meteor.publish "post", (username, id)->
	if approved username
		Posts.find _id: id

Meteor.publish "fullpost", (username, id)->
	if approved username
		Posts.find $or: [{_id: id}, {parent:id}]

Meteor.publish "posts", (username)->
	if approved username #and username? in ['j.k'] #<--this works! so we will add white-list
		Posts.find {} #parent:null #,
			#fields:
			#	content:false
				#owner:false

Meteor.publish "comments", (username, id)->
	if approved username and id?
		Posts.find parent:id #,
			###
				fields:
				content:false
				#owner:false
			###
Meteor.publish "likes", (postid)->
	Likes.find post:postid

Meteor.publish "appusers", (userid) ->
	if userid?
		Meteor.users.find()
