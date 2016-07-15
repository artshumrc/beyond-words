/*
 * Replace these in the future as they will publish our entire collections.
 */

if (Meteor.isServer){

  Meteor.publish('objects', function() {
    return Objects.find();
  });

  Meteor.publish('events', function(){
    return Events.find();
  })

}
