Meteor.users.allow({
	update(userId, doc, fieldNames) {
		if (userId === doc._id && !doc.username &&
			fieldNames.length === 1 && fieldNames[0] === 'username') {
			return true;
		}
		return false;
	},
});
