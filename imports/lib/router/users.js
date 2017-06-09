Router.map(function map() {
	this.route('profile', {
		path: '/profile',
	});
	this.route('account', {
		path: '/account',
	});
	this.route('setUserName', {
		path: '/setUserName',
		onBeforeAction() {
			if (!Config.username || (Meteor.userId() && Meteor.user().username)) {
				this.redirect('/profile');
			}
			return this.next();
		},
	});
	return this.route('signOut', {
		path: '/sign-out',
		onBeforeAction() {
			Meteor.logout();
			this.redirect('/');
			return this.next();
		},
	});
});
