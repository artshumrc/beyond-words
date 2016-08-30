AutoForm.hooks({
	updateProfile: {
		onSuccess() {
			return sAlert.success('Profile updated');
		},
		onError() {
			return sAlert.error(error);
		},
	},
	updatePicture: {
		onSuccess() {
			return sAlert.success('Picture Updated');
		},
		onError() {
			return sAlert.error(error);
		},
	},
});

Template.profile.events({
	'change form#updatePicture input': () =>
		Meteor.setTimeout(() =>
			$('form#updatePicture').submit(), 10),
});
