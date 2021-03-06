import Events from '/imports/api/collections/events';
import Objects from '/imports/api/collections/objects';
import SymposiumSessions from '/imports/api/collections/symposiumSession';
import Pages from '/imports/api/collections/pages';
import MediaItems from '/imports/api/collections/mediaItems';
import Manifests from '/imports/api/collections/manifests';


if (Meteor.isServer) {
	Meteor.publish('objects', (query, skip, limit) => {
		check(query, Object);
		check(skip, Match.Maybe(Number));
		check(limit, Match.Maybe(Number));

		return Objects.find(query, {
			skip,
			limit,
			sort: {
				catalog_n: 1,
			},
		});
	});

	Meteor.publish('manuscripts', () => { // eslint-disable-line
		return Objects.find({}, {
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

	Meteor.publish('symposiumSessions', () => SymposiumSessions.find({}, { sort: { date: 1 } }));

	Meteor.publish('events', () => Events.find());
	Meteor.publish('mediaItems', () => MediaItems.find());
	Meteor.publish('manifests', () => Manifests.find());
	Meteor.publish('manifests.id.admin', _id => Manifests.find({_id}));


	Meteor.publish('images', () => {
		const fields = {};

		return [
			// Images.find(fields),
			//Thumbnails.find(fields),
		];
	});

	Meteor.publish('selectImages', (imageArray) => {
		check(imageArray, [String]);
		return [
			// Images.find({
			// 	_id: { $in: imageArray },
			// }),
			/*Thumbnails.find({
				originalId: { $in: imageArray },
			}),*/
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
					// Images.find({
					// 	_id: { $in: imageArray },
					// }),
					/*Thumbnails.find({
						originalId: { $in: imageArray },
					}),*/
				];
			}
		}
		return this.ready();
	});

	Meteor.publish('objectManifest', (manifestId) => {
		check(manifestId, String);
		return Manifests.find({_id: manifestId});
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
					// Images.find({
					// 	_id: { $in: imageArray },
					// }),
					/*Thumbnails.find({
						originalId: { $in: imageArray },
					}),*/
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
