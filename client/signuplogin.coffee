Template.signup.events
	'click button': (e,t) ->
		e.preventDefault()
		Accounts.createUser
			email: ($ '#su-email').val()
			username: ($ '#su-username').val()
			password: ($ '#su-password').val()

Template.login.events
	'click button': (e, t) ->
		e.preventDefault()
		Meteor.loginWithPassword ($ '#li-username').val(), 
			($ '#li-password').val()
			(err)-> console.log err

Template.logout.events
	'click button': (e,t) ->
		e.preventDefault()
		Meteor.logout()
