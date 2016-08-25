this.IPads = new Meteor.Collection('ipads');

Schemas.IPads = new SimpleSchema({
  catalog_n: {
      type: Number,
			label: "Catalog Number",
  },
  author_title: {
      type: String,
			label: "Author and Title combined as 'Author, Title; Author, Title; etc.'",
      optional: true
  },
  link: {
    type: String,
    optional: true,
  },
  date: {
    type: Date
  },
  description: {
    type: String,
    optional: true,
    autoform: {
      rows: 5
    }
  },
  iframe: {
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
      rows: 5
    }
  },
  videos: {
    type: [String],
    optional: true,
    autoform: {
      rows: 5
    }
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    }
  },
});

IPads.attachSchema(Schemas.IPads);
