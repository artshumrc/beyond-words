import Objects from '/imports/api/collections/objects';

Meteor.methods({
	'objects.insert': (token, object) => {
		check(token, String);
		check(object, Object);
		const roles = ['editor', 'admin', 'objecter'];
		if ((
				!Meteor.userId()
				&& !Roles.userIsInRole(Meteor.user(), roles)
			)
			&& !Meteor.users.findOne({
				roles: roles,
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})
		) {
			throw new Meteor.Error('object-insert', 'not-authorized');
		}

		let objectId;
		try {
			objectId = objects.insert(object);
		} catch (err) {
			throw new Meteor.Error('object-insert', err);
		}

		return objectId;
	},

	'objects.update': (token, objectId, update) => {
		check(token, Match.Maybe(String));
		check(objectId, String);
		check(update, Object);

		const user = Meteor.user() || Meteor.users.findOne({
			'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken((token || '')),
		});

		const roles = ['editor', 'admin', 'objecter'];
		if ((
				!Meteor.userId()
				&& !Roles.userIsInRole(Meteor.user(), roles)
			)
			&& !Meteor.users.findOne({
				roles: roles,
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})
		) {
			throw new Meteor.Error('object-update', 'not-authorized');
		}

		try {
			Objects.update({ _id: objectId }, { $set: update });
		} catch (err) {
			throw new Meteor.Error('object-update', err);
		}

		return objectId;
	},

	'objects.delete': (token, objectId) => {
		check(token, String);
		check(objectId, String);

		const roles = ['editor', 'admin', 'objecter'];
		if ((
				!Meteor.userId()
				&& !Roles.userIsInRole(Meteor.user(), roles)
			)
			&& !Meteor.users.findOne({
				roles: 'admin',
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})
		) {
			throw new Meteor.Error('object-delete', 'not-authorized');
		}

		try {
			Objects.remove({ _id: objectId });
		} catch (err) {
			throw new Meteor.Error('object-delete', err);
		}

		return objectId;
	},
});
