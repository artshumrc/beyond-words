this.SymposiumSessions = new Meteor.Collection('symposiumSessions');

Schemas.SymposiumSessions = new SimpleSchema({
	title: {
		type: String,
	},
	/* link: {
		type: String,
		optional: true,
	}, */
	location: {
		type: String,
		optional: true,
	},
	date: {
		type: Date,
		label: 'Date and time (start)',
		autoform: {
			afFieldInput: {
				type: 'datetime-local',
			},
		},
	},

	endDate: {
		type: Date,
		label: 'Date and time (end)',
		optional: true,
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
});

SymposiumSessions.attachSchema(Schemas.SymposiumSessions);
