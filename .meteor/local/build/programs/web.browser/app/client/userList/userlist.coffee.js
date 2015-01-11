(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.userList.helpers({
  users: function() {
    return WList.find({});
  }
});


/*		myId = Meteor.userId()
		cantPlayAgainst = [myId]
		 * note: only games that I'm playing are published
		gs = Games.find inProgress: true
		for game in gs.fetch() # a fetch() is needed here otherwise it doesn't work
			cantPlayAgainst.push otherId game 

		Meteor.users.find _id: $not: $in: cantPlayAgainst
 */

})();
