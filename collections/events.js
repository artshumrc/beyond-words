this.Events = new Meteor.Collection('events');

Schemas.Events = new SimpleSchema({
  title: {
    type: String,
  },
  link: {
    type: String,
    optional: true,
  },
  date: {
    type: Date
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
    optional: true,
    autoform: {
      rows: 5
    }
  },
});

Events.attachSchema(Schemas.Events);
