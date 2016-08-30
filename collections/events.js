this.Events = new Meteor.Collection('events');

Schemas.Events = new SimpleSchema({
	title: {
		type: String,
	},
	link: {
		type: String,
		optional: true,
	},
	date: {
		type: Date,
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
