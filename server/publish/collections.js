/*
 * Replace these in the future as they will publish our entire collections.
 */

if (Meteor.isServer) {

	  Meteor.publish('objects', function(query, skip, limit) {
			if(!skip){
				skip = 0;
			}

			if(!limit){
				limit = 10;
			}

	    return Objects.find(query, {skip: skip, limit: limit, sort: {catalog_n:1}});

	  });

    Meteor.publish('events', function () {
        return Events.find();
    });


    Meteor.publish('images', function () {
        var fields = {};

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
