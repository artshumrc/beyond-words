import { Meteor } from 'meteor/meteor';
import { EJSON } from 'meteor/ejson';


const imagePattern = {
	id: String,
	name: String,
	type: String,
	size: Number,
	path: String,
	label: Match.Maybe(String),
};

function checkManifest(manifest) {
	check(manifest, {
		title: String,
		abbr: Match.Maybe(String),
		label: Match.Maybe(String),
		description: Match.Maybe(String),
		author: Match.Maybe(String),
		seeAlso: Match.Maybe(String),
		attribution: Match.Maybe(String),
		images: [imagePattern],
		upload: Match.Maybe(Object)
	});
}

Meteor.methods({
	'manifests.create': (token, manifest) => {
		check(token, String);
		checkManifest(manifest);


		if (
			Meteor.users.findOne({
				roles: 'admin',
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})) {
			manifest._id = Manifests.insert(manifest, function (error) {
				if (error) {
					return error;
				}
			});
		} else {
			throw new Meteor.Error('meteor-ddp-admin', 'Attempted creating with invalid token');
		}

		HTTP.post('http://generate-manifests.orphe.us/manifests', {
			params: {
				manifest: EJSON.stringify(manifest),
			},
		});

	},
	'manifests.update': (token, _id, manifest) => {
		check(token, String);
		check(_id, String);
		checkManifest(manifest);
		if (
			Meteor.users.findOne({
				roles: 'admin',
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})) {
			Manifests.update({
				_id
			}, {
				$set: manifest,
			}, function (error) {
				if (error) {
					return error;
				}
			});
		} else {
			throw new Meteor.Error('meteor-ddp-admin', 'Attempted updating with invalid token');
		}
	},
	'manifests.remove': (token, manifestId) => {
		check(token, String);
		check(manifestId, String);
		if (
			Meteor.users.findOne({
				roles: 'admin',
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})) {
			Manifests.remove(manifestId, function(error) {
				if (error) {
					return error;
				}
			});
		} else {
			throw new Meteor.Error('meteor-ddp-admin', 'Attempted removing with invalid token');
		}
	}
});
