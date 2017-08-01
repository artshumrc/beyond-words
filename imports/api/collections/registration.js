import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


const Registration = new Meteor.Collection('registration');

Registration.schema = new SimpleSchema({
	first_name: {
		type: String,
		optional: true,
	},
	middle_name: {
		type: String,
		optional: true,
	},
	last_name: {
		type: String,
		optional: true,
	},
	affiliation: {
		type: String,
		optional: true,
	},
	email: {
		type: String,
		optional: true,
	},
	nov_3: {
		type: Boolean,
		optional: true,
	},
	nov_4: {
		type: Boolean,
		optional: true,
	},
	nov_5: {
		type: Boolean,
		optional: true,
	},
	nov_8: {
		type: Boolean,
		optional: true,
	},
	nov_9: {
		type: Boolean,
		optional: true,
	},
	nov_10: {
		type: Boolean,
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

Registration.attachSchema(Registration.schema);

export default Registration;
