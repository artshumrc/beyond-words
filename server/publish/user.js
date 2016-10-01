Meteor.publish('user', () => {
	return Meteor.users.find();
});
