Objects = new Meteor.Collection('objects');

Schemas.Objects = new SimpleSchema({
	catalog_n: {
		type: Number,
		label: 'Catalog Number',
	},
	author_title: {
		type: String,
		label: "Author and Title combined as 'Author, Title; Author, Title; etc.'",
		optional: true,
	},
	title: {
		type: String,
		label: 'Title (deprecated) - left only as reference; do not fill out',
		optional: true,
	},
	author: {
		type: String,
		label: 'Author (deprecated) - left only as reference; do not fill out',
		optional: true,
	},
    /* slug: {
    type: String,
    max: 200,
    optional: true,
    autoform: {
    type: "hidden",
    label: false
    }
    },*/
	shelfmark: {
		type: String,
		label: 'Shelfmark',
		optional: true,
	},
	former_shelfmark: {
		type: String,
		label: 'Former shelfmark',
		optional: true,
	},
	description: {
		type: String,
		label: 'Description of the object',
		optional: true,
		autoform: {
			rows: 5,
		},
	},
	images: {
		type: [String],
		optional: true,
		label: 'Image thumbnail (not for viewer)',
		autoform: {
			type: 'ufs',
			collection: 'images',
			store: 'ImageStore',
			publication: 'images',
			thumbnails: 'thumbnails',
		},
	},
	date: {
		type: String,
		label: 'Flexible date field (whatever should be used for display)',
		optional: true,
	},
	dateBegun: {
		type: Date,
		label: 'Start date (for search tools)',
		optional: true,
	},
	dateEnded: {
		type: Date,
		label: 'End date (for search tools)',
		optional: true,
	},
	illuminator: {
		type: String,
		label: 'Illuminator (unique values will be used for dropdown search tools)',
		optional: true,
	},
	scribe: {
		type: String,
		label: 'Scribe (unique values will be used for dropdown search tools)',
		optional: true,
	},
	printer: {
		type: String,
		label: 'Printer (unique values will be used for dropdown search tools)',
		optional: true,
	},
	institution: {
		type: String,
		label: 'Institution (unique values will be used for dropdown search tools)',
		optional: true,
	},
	collection: {
		type: String,
		label: 'Collection',
		optional: true,
	},
	place: {
		type: String,
		label: 'Place',
		optional: true,
	},
	miradorLink: {
		type: String,
		label: 'Link to Mirador',
		optional: true,
	},
	hasImageViewer: {
		type: Boolean,
		label: 'Check if the object has tiled images with the Beyond Words custom image viewer',
		optional: true,
	},
	externalUrl: {
		type: String,
		label: 'External URL for viewing the object',
		optional: true,
	},

	created: {
		type: Date,
		optional: true,
		autoValue() {
			if (this.isInsert) {
				return new Date();
			}
			return null;
		},
		autoform: {
			type: 'hidden',
			label: false,
		},
	},
	updated: {
		type: Date,
		optional: true,
		autoValue() {
			if (this.isUpdate) {
				return new Date();
			}
			return null;
		},
		autoform: {
			type: 'hidden',
			label: false,
		},
	},
});

Objects.attachSchema(Schemas.Objects);
Objects.friendlySlugs('author_title');
