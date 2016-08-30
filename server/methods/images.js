/**
* Created by Julian on 7/27/16.
*/
Meteor.methods({
	uploadFiles(files) {
		check(files, [String]);
	},
	removeImage(imageId) {
		check(imageId, String);
		Images.remove(imageId);
	},
});
