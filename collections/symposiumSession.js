this.SymposiumSessions = new Meteor.Collection('symposiumSessions');

Schemas.SymposiumSessions = new SimpleSchema({
	title: {
		type: String,
	},
	/* link: {
		type: String,
		optional: true,
	}, */

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
		autoform: {
			afFieldInput: {
				type: 'datetime-local',
			},
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

SymposiumSessions.attachSchema(Schemas.SymposiumSessions);
