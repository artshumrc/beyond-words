AutoForm.hooks({
	updatePassword: {
		onSubmit(insertDoc) {
			if (insertDoc.new !== insertDoc.confirm) {
				sAlert.error('Passwords do not match');
				return false;
			}
			Accounts.changePassword(insertDoc.old, insertDoc.new, (err) => {
				$('.btn-primary').attr('disabled', null);
				if (err) {
					return sAlert.error(err.message);
				}
				return sAlert.success('Password Updated');
			});
			return false;
		},
	},
});

Template.account.events({
	'click .js-delete-account': () => Meteor.call('deleteAccount', Meteor.userId()),
});

Template.setUserName.helpers({
	user() {
		return Meteor.user();
	},
});
