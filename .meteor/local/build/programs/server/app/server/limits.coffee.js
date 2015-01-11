(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/*
Posts.deny #something wrong, not denied at all
	insert: (post)->
		not approved postOwner 
		
Posts.allow 
	insert: (userId, doc) -> userId? and doc.owner is userId 
	remove: (userId, doc) -> userId? and doc.owner is userId
	update: (userId, doc, fieldNames, modifier) -> 
		 *console.log fieldNames, modifier
		 *console.log doc 
		_.all( doc, (d)-> d.owner is userId)
 */


})();

//# sourceMappingURL=limits.coffee.js.map
