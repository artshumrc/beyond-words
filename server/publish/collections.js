/*
 * Replace these in the future as they will publish our entire collections.
 */

if (Meteor.isServer) {

    Meteor.publish('books', function () {
        return Books.find();
    });

    Meteor.publish('events', function () {
        return Events.find();
    });


    Meteor.publish('images', function () {
        var fields = {};

        // if (!this.userId) {
        //   fields.userId = null;
        // }
        return [
            Images.find(fields),
            Thumbnails.find(fields)
        ];
    });

    Meteor.publish('selectImages', function (imageArray) {
        if (imageArray && Array.isArray(imageArray)) {
            return [
                Images.find({_id: {$in: imageArray}}),
                Thumbnails.find({originalId: {$in: imageArray}})
            ]
        }
        return this.ready();
    });

    Meteor.publish('pageImages', function(pageSlug){
        if (pageSlug) {
            var page = Pages.findOne({slug: pageSlug});
            console.log(page);
            var imageArray = page.headerImage;
            if (imageArray && Array.isArray(imageArray)) {
                return [
                    Images.find({_id: {$in: imageArray}}),
                    Thumbnails.find({originalId: {$in: imageArray}})
                ]
            }
        }
        return this.ready();
    });

    Meteor.publish('pages', function (slug) {
        if (slug) {
            slug = {slug: slug};
        } else {
            slug = {};
        }
        return Pages.find(slug);
    })

}
