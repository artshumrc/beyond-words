import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const IPads = new Meteor.Collection('ipads');

IPads.schema = new SimpleSchema({
	catalog_n: {
		type: Number,
	},
	author_title: {
		type: String,
		optional: true,
	},
	link: {
		type: String,
		optional: true,
	},
	date: {
		type: Date,
		optional: true,
	},
	description: {
		type: String,
		optional: true,
	},
	iframe: {
		type: String,
		optional: true,
	},
	images: {
		type: [String],
		optional: true,
	},
	videos: {
		type: [String],
		optional: true,
	},
	createdAt: {
		type: Date,
		optional: true,
	},
	updatedAt: {
		type: Date,
		optional: true,
	},
});

IPads.attachSchema(IPads.schema);

export default IPads;
