/*
 * Replace these in the future as they will publish our entire collections.
 */

if (Meteor.isServer){

  Meteor.publish('books', function() {
    return Books.find();
  });

  Meteor.publish('events', function(){
    return Events.find();
  })

}
