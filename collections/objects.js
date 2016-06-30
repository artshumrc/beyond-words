this.Objects = new Meteor.Collection('objects');

Schemas.Objects = new SimpleSchema({
  title: {
    type: String,
    max: 60
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
  description: {
    type: String,
    autoform: {
      rows: 5
    }
  },
});

Objects.attachSchema(Schemas.Objects);
