this.Books = new Meteor.Collection('books');

Schemas.Books = new SimpleSchema({
    title: {
        type: String,
        max: 60
    },
    createdAt: {
        type: Date,
        optional: true,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            }
        }
    },
    updatedAt: {
        type: Date,
        optional: true,
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        }
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
    place: {
        type: String,
        optional: true
    },
    externalUrl: {
        type: String,
        optional: true,
    },
    shelfmark: {
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
    }
});

Books.attachSchema(Schemas.Books);
