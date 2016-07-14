this.Events = new Meteor.Collection('events');

Schemas.Events = new SimpleSchema({
  title: {
    type: String,
    max: 60
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
    autoform: {
      rows: 5
    }
  },
});

Events.attachSchema(Schemas.Events);
