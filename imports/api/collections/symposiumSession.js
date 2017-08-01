import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const SymposiumSessions = new Meteor.Collection('symposiumSessions');

SymposiumSessions.schema = new SimpleSchema({
	title: {
		type: String,
	},

	nov3: {
		type: Boolean,
		optional: true,
	},

	nov4: {
		type: Boolean,
		optional: true,
	},

	nov5: {
		type: Boolean,
		optional: true,
	},

	date: {
		type: Date,
		label: 'Starting time',
	},

	description: {
		type: String,
		optional: true,
	},

});

SymposiumSessions.attachSchema(SymposiumSessions.schema);

export default SymposiumSessions;
