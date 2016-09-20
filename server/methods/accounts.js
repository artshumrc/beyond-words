Meteor.methods({
	deleteAccount(userId) {
		check(userId, String);
		if (this.userId === userId) {
			Meteor.users.remove({
				_id: this.userId,
			});
		} else {
			throw new Meteor.Error('not-authorized');
		}
	},
});
