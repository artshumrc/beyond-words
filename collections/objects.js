Objects = new Meteor.Collection('objects');

Schemas.Objects = new SimpleSchema({
    catalog_n: {
        type: Number,
    },
    title: {
        type: String,
        max: 60
    },
		slug: {
			type: String,
			max: 200,
			optional: true,
			autoform: {
				type: "hidden",
				label: false
			}
		},
    shelfmark: {
        type: String,
        optional: true
    },
    former_shelfmark: {
        type: String,
        optional: true
    },
    description: {
        type: String,
        optional: true,
        autoform: {
            rows: 5
        }
    },
    images: {
        type: [String],
        optional: true,
        autoform: {
            type: 'ufs',
            collection: 'images',
            store: 'ImageStore',
            publication: 'images',
            thumbnails: 'thumbnails'
        }
    },
    imageNotes: {
        type: String,
        optional: true,
    },
    dateBegun: {
        type: Date,
        optional: true
    },
    dateEnded: {
        type: Date,
        optional: true
    },
    author: {
        type: String,
        optional: true
    },
    illuminator: {
        type: String,
        optional: true
    },
    scribe: {
        type: String,
        optional: true
    },
    printer: {
        type: String,
        optional: true
    },
    institution: {
        type: Array,
        optional: true
    },
    'institution.$': {
        type: String
    },
    place: {
        type: String,
        optional: true
    },
    miradorLink: {
        type: String,
        optional: true
    },
    externalUrl: {
        type: String,
        optional: true,
    },

	  created: {
	    type: Date,
	    optional: true,
	    autoValue: function() {
	      if (this.isInsert) {
	        return new Date;
	      }
	    },
	    autoform: {
	      type: "hidden",
	      label: false
	    }
	  },
	  updated: {
	    type: Date,
	    optional: true,
	    autoValue: function() {
	      if (this.isUpdate) {
	        return new Date;
	      }
	    },
	    autoform: {
	      type: "hidden",
	      label: false
	    }
	  }
});

Objects.attachSchema(Schemas.Objects);
Objects.friendlySlugs('title');
