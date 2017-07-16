import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import s3Images from '/imports/api/collections/s3Images';

function checkImage(image) {
	check(image, {
		name: String,
		path: String,
		type: String,
		thumbPath: String,
		_id: String,
	});
}

Meteor.methods({
	's3Images.insert': (token, image) => {
		check(token, String);
		checkImage(image);
		if (
			Meteor.users.findOne({
				roles: 'admin',
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})) {
			return s3Images.insert(image);
		}
		throw new Meteor.Error('meteor-ddp-admin', 'Attempted publishing with invalid token');
	}
});
