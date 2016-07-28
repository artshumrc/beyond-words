/**
 * Created by Julian on 7/27/16.
 */
Meteor.methods({
    removeImage: function(imageId){
        Images.remove(imageId);
    }
});