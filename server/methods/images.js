/**
 * Created by Julian on 7/27/16.
 */
Meteor.methods({
    uploadFiles: function (files) {
		check(files, [String]);

    },
    removeImage: function (imageId) {
		check(imageId, String);
        Images.remove(imageId);
    }
});
