/**
 * Created by Julian on 7/27/16.
 */
Meteor.methods({
    uploadFiles: function (files) {

    },
    removeImage: function (imageId) {
        Images.remove(imageId);
    }
});
