import Objects from '/imports/api/collections/objects';

Meteor.methods({
	'objects.insert': (token, object) => {
		check(token, String);
		check(object, Object);
		const roles = ['editor', 'admin', 'commenter'];

		if (
			!Meteor.users.findOne({
				roles: 'admin',
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})) {
			throw new Meteor.Error('meteor-ddp-admin', 'Attempted editing with invalid token');
		}

		let objectId;
		try {
			objectId = Objects.insert(object);
		} catch (err) {
			throw new Meteor.Error('object-insert', err.message);
		}

		return objectId;
	},

	'objects.update': (token, objectId, update) => {
		check(token, Match.Maybe(String));
		check(objectId, String);
		check(update, Object);

		if (
			!Meteor.users.findOne({
				roles: 'admin',
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})) {
			throw new Meteor.Error('meteor-ddp-admin', 'Attempted editing with invalid token');
		}

		try {
			Objects.update({ _id: objectId }, { $set: update });
		} catch (err) {
			throw new Meteor.Error('object-update', err.message);
		}

		return objectId;
	},

	'objects.delete': (token, objectId) => {
		check(token, String);
		check(objectId, String);

		if (
			!Meteor.users.findOne({
				roles: 'admin',
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})) {
			throw new Meteor.Error('meteor-ddp-admin', 'Attempted editing with invalid token');
		}

		try {
			Objects.remove({ _id: objectId });
		} catch (err) {
			throw new Meteor.Error('object-delete', err.message);
		}

		return objectId;
	},
});
