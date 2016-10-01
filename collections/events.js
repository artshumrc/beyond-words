this.Events = new Meteor.Collection('events');

Schemas.Events = new SimpleSchema({
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
		label: 'Date and time (start)',
		autoform:{
			afFieldInput: {
				type: 'datetime-local',
			},
		},
	},
	endDate: {
		type: Date,
		label: 'Date and time (end)',
		optional: true,
		autoform:{
			afFieldInput: {
				type: 'datetime-local',
			},
		},
	},
	createdAt: {
		type: Date,
		autoValue() {
			if (this.isInsert) {
				return new Date();
			}
			return null;
		},
	},
	updatedAt: {
		type: Date,
		optional: true,
		autoValue() {
			if (this.isUpdate) {
				return new Date();
			}
			return null;
		},
	},
	description: {
		type: String,
		optional: true,
		autoform: {
			rows: 5,
		},
	},
});

Events.attachSchema(Schemas.Events);
