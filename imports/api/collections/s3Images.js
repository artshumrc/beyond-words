import { Meteor } from 'meteor/meteor';

const s3Images = new Meteor.Collection('s3Images');

export default s3Images;

/*
Schemas.s3Images = new SimpleSchema({
	_id: {
		type: String,
	},
	name: {
		type: String
	},
	path: {
		type: String
	},
	type: {
		type: String
	},
	thumbPath: {
		type: String
	}
});

s3Images.attachSchema(Schemas.s3Images);
*/
