this.Books = new Meteor.Collection('books');

Schemas.Books = new SimpleSchema({
    title: {
        type: String,
        max: 60
    },
    createdAt: {
        type: Date,
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
    title: {
        type: String
    },
    dateBegun: {
        type: Date
    },
    dateEnded: {
        type: Date
    },
    author: {
        type: String
    },
    illuminator: {
        type: String
    },
    place: {
        type: String
    },
    externalUrl: {
        type: String
    },
    shelfmark: {
        type: String
    },
    description: {
        type: String,
        autoform: {
            rows: 5
        }
    },
    images: {
        type: [String],
        autoform: {
            type: 'ufs',
            collection: 'ImageStore'
        }
    }
});

Books.attachSchema(Schemas.Books);
