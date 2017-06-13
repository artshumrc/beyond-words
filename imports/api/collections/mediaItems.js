import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


const MediaItems = new Meteor.Collection('mediaItems');

MediaItems.schema = new SimpleSchema({
	title: {
		type: String,
		optional: true,
	},
	source: {
		type: String,
		optional: true,
	},
	link: {
		type: String,
		optional: true,
	},
	date: {
		type: Date,
		label: 'Date Published',
	},

	image: {
		type: String,
		optional: true,
		label: 'Image thumbnail (not for viewer)',
	},

	createdAt: {
		type: Date,
		optional: true,
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

MediaItems.attachSchema(MediaItems.schema);

export default MediaItems;
