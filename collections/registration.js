this.Registration = new Meteor.Collection('registration');

Schemas.Registration = new SimpleSchema({
  first_name: {
    type: String,
    optional: true,
  },
  middle_name: {
    type: String,
    optional: true,
  },
  last_name: {
    type: String,
    optional: true,
  },
  affiliation: {
    type: String,
    optional: true,
  },
  email: {
    type: String,
    optional: true,
  },
  nov_3: {
    type: Boolean,
    optional: true,
  },
  nov_4: {
    type: Boolean,
    optional: true,
  },
  nov_5: {
    type: Boolean,
    optional: true,
  },
  nov_8: {
    type: Boolean,
    optional: true,
  },
  nov_9: {
    type: Boolean,
    optional: true,
  },
  nov_10: {
    type: Boolean,
    optional: true,
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

Registration.attachSchema(Schemas.Registration);
