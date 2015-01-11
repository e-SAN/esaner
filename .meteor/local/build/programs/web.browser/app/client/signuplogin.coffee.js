(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.signup.events({
  'click button': function(e, t) {
    e.preventDefault();
    Accounts.createUser({
      email: ($('#su-email')).val(),
      username: ($('#su-username')).val(),
      password: ($('#su-password')).val()
    });
    return Session.set('signup', false);
  },
  'click a': function(e, t) {
    e.preventDefault();
    return Session.set('signup', false);
  }
});

Template.signupLogin.visable = function() {
  return Session.get('signup');
};

Template.login.events({
  'click button': function(e, t) {
    e.preventDefault();
    return Meteor.loginWithPassword(($('#li-username')).val(), ($('#li-password')).val(), function(err) {
      return console.log(err);
    });
  },
  'click a': function(e, t) {
    e.preventDefault();
    return Session.set('signup', true);
  }
});

Template.logout.events({
  'click button': function(e, t) {
    e.preventDefault();
    return Meteor.logout();
  }
});

})();
