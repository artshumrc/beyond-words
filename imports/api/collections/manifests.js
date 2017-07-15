import { Meteor } from 'meteor/meteor';

Manifests = new Meteor.Collection('manifests');
const imageSchema = new SimpleSchema({
	id: {
		type: String,
		optional: true,
	},
	name: {
		type: String,
		optional: true,
	},
	type: {
		type: String,
		optional: true,
	},
	size: {
		type: Number,
		optional: true,
	},
	path: {
		type: String,
		optional: true,
	},
	label: {
		type: String,
		optional: true,
	}
});
const uploadedObject = new SimpleSchema({
	uploadedDate: {
		type: Date,
		optional: true,
	},
	uploaded: {
		type: String,
		optional: true,
	},
	downloadUrl: {
		type: String,
		optional: true,
	}
});
Schemas.Manifests = new SimpleSchema({
	title: {
		type: String,
		max: 200,
	},
	abbr: {
		type: String,
		max: 200,
		optional: true,
	},
	label: {
		type: String,
		max: 200,
		optional: true,
	},
	description: {
		type: String,
		optional: true,
	},
	author: {
		type: String,
		optional: true,
	},
	seeAlso: {
		type: String,
		optional: true,
	},
	attribution: {
		type: String,
		optional: true,
	},
	remoteUri: {
		type: String,
		optional: true,
	},
	images: {
		type: [imageSchema],
		optional: true
	},
	upload: {
		type: uploadedObject,
		optional: true
	}
});

Manifests.attachSchema(Schemas.Manifests);
