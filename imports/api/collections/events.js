import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


const Events = new Meteor.Collection('events');

Events.schema = new SimpleSchema({
	title: {
		type: String,
	},
	link: {
		type: String,
		optional: true,
	},
	location: {
		type: String,
		optional: true,
	},
	date: {
		type: Date,
		optional: true,
	},
	endDate: {
		type: Date,
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
	description: {
		type: String,
		optional: true,
	},
});

Events.attachSchema(Events.schema);

export default Events;
