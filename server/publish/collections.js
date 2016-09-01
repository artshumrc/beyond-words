/*
 * Replace these in the future as they will publish our entire collections.
 */
if (Meteor.isServer) {
	Meteor.publish('objects', (query, skip, limit) => {
		check(query, Object);
		if(skip){
			check(skip, Number);
		}
		if(limit){
			check(limit, Number);
		}

		return Objects.find(query, {
			skip,
			limit,
			sort: {
				catalog_n: 1,
			},
		});
	});

	Meteor.publish('object', (slug) => {
		check(slug, String);
		return Objects.find({
			slug,
		});
	});

	Meteor.publish('events', () => Events.find());


	Meteor.publish('images', () => {
		const fields = {};

		return [
			Images.find(fields),
			Thumbnails.find(fields),
		];
	});

	Meteor.publish('selectImages', (imageArray) => {
		check(imageArray, [String]);
		return [
			Images.find({
				_id: { $in: imageArray },
			}),
			Thumbnails.find({
				originalId: { $in: imageArray },
			}),
		];
	});

	Meteor.publish('pageImages', function pageImages(pageSlug) {
		check(pageSlug, String);
		const page = Pages.findOne({
			slug: pageSlug,
		});
		if (page) {
			const imageArray = page.headerImage;
			if (imageArray && Array.isArray(imageArray)) {
				return [
					Images.find({
						_id: { $in: imageArray },
					}),
					Thumbnails.find({
						originalId: { $in: imageArray },
					}),
				];
			}
		}
		return this.ready();
	});

	Meteor.publish('objectImages', function objectImages(objectSlug) {
		check(objectSlug, String);
		const object = Objects.findOne({
			slug: objectSlug,
		});
		if (object) {
			const imageArray = object.images;
			if (imageArray && Array.isArray(imageArray)) {
				return [
					Images.find({
						_id: { $in: imageArray },
					}),
					Thumbnails.find({
						originalId: { $in: imageArray },
					}),
				];
			}
		}
		return this.ready();
	});

	Meteor.publish('pages', (slug) => {
		check(slug, String);
		let query;
		if (slug) {
			query = {
				slug,
			};
		} else {
			query = {};
		}
		return Pages.find(query);
	});
}
