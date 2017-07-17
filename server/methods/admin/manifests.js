import { Meteor } from 'meteor/meteor';
import { EJSON } from 'meteor/ejson';
import Manifests from '/imports/api/collections/manifests';

const imagePattern = {
	_id: String,
	name: String,
	type: String,
	path: String,
	label: Match.Maybe(String),
	thumbPath: String,
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
			!Meteor.users.findOne({
				roles: 'admin',
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})) {
			throw new Meteor.Error('meteor-ddp-admin', 'Attempted creating with invalid token');
		}

		manifest._id = Manifests.insert(manifest, function (error) {
			if (error) {
				return error;
			}
		});

		HTTP.post('http://generate-manifests.orphe.us/manifests', {
			params: {
				manifest: EJSON.stringify(manifest),
				responseUrl: Meteor.settings.manifestWebHookResponseURL,
			},
		});

		return true;
	},

	'manifests.update': (token, _id, manifest) => {
		check(token, String);
		check(_id, String);
		checkManifest(manifest);
		if (
			!Meteor.users.findOne({
				roles: 'admin',
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})) {
			throw new Meteor.Error('meteor-ddp-admin', 'Attempted updating with invalid token');
		}

		Manifests.update({
			_id
		}, {
			$set: manifest,
		}, function (error) {
			if (error) {
				return error;
			}
		});

		manifest._id = _id;

		HTTP.put('http://generate-manifests.orphe.us/manifests', {
			params: {
				manifest: EJSON.stringify(manifest),
				responseUrl: Meteor.settings.manifestWebHookResponseURL,
			},
		});

		return true;
	},
	'manifests.remove': (token, manifestId) => {
		check(token, String);
		check(manifestId, String);
		if (
			!Meteor.users.findOne({
				roles: 'admin',
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(token),
			})) {
			throw new Meteor.Error('meteor-ddp-admin', 'Attempted removing with invalid token');
		}

		Manifests.remove(manifestId, function(error) {
			if (error) {
				return error;
			}
		});

		/*
		HTTP.del('http://generate-manifests.orphe.us/manifests', {
			params: {
				manifestId,
				responseUrl: Meteor.settings.manifestWebHookResponseURL,
			},
		});
		*/
	}
});
