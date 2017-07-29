import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


const Objects = new Meteor.Collection('objects');

Objects.schema = new SimpleSchema({
	catalog_n: {
		type: Number,
	},
	author_title: {
		type: String,
		optional: true,
	},
	shelfmark: {
		type: String,
		optional: true,
	},
	former_shelfmark: {
		type: String,
		optional: true,
	},
	description: {
		type: String,
		optional: true,
	},
	image: {
		type: String,
		optional: true,
	},
	pdf: {
		type: String,
		optional: true,
	},
	date: {
		type: String,
		optional: true,
	},
	dateBegun: {
		type: Date,
		optional: true,
	},
	dateEnded: {
		type: Date,
		optional: true,
	},
	illuminator: {
		type: String,
		optional: true,
	},
	scribe: {
		type: String,
		optional: true,
	},
	printer: {
		type: String,
		optional: true,
	},
	institution: {
		type: String,
		optional: true,
	},
	institution_2: {
		type: String,
		optional: true,
	},
	institution_3: {
		type: String,
		optional: true,
	},
	collection: {
		type: String,
		optional: true,
	},
	place: {
		type: String,
		optional: true,
	},
	miradorLink: {
		type: String,
		optional: true,
	},
	hasImageViewer: {
		type: Boolean,
		optional: true,
	},
	externalUrl: {
		type: String,
		optional: true,
	},
	viewerImages: {
		type: Array,
		optional: true,
	},
	'viewerImages.$': {
		type: String,
		optional: true,
	},
	notes: {
		type: String,
		optional: true,
	},
	manifestId: {
		type: String,
		optional: true,
	},
	created: {
		type: Date,
		optional: true,
	},
	updated: {
		type: Date,
		optional: true,
	},

	pdfs: {
		type: Array,
		optional: true,
	},
	'pdfs.$': {
		type: Object,
		optional: true,
		blackbox: true,
	},

	audioFiles: {
		type: Array,
		optional: true,
	},
	'audioFiles.$': {
		type: Object,
		optional: true,
		blackbox: true,
	},

	videos: {
		type: Array,
		optional: true,
	},
	'videos.$': {
		type: Object,
		optional: true,
		blackbox: true,
	},

});

Objects.attachSchema(Objects.schema);
Objects.friendlySlugs('author_title');

export default Objects;
