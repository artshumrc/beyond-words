Meteor.publish('user', () => { // eslint-disable-line
	return Meteor.users.find();
});
