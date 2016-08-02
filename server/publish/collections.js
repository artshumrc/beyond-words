/*
 * Replace these in the future as they will publish our entire collections.
 */

if (Meteor.isServer){

  Meteor.publish('books', function() {
    return Books.find();
  });

  Meteor.publish('events', function(){
    return Events.find();
  });


  Meteor.publish('images', function () {
    var fields = {};

    // if (!this.userId) {
    //   fields.userId = null;
    // }
    return [
      Images.find(fields),
      Thumbnails.find(fields)
    ];
  });

  Meteor.publish('pages', function(slug){
    if(slug) {
      slug = {slug: slug};
    }else{
      slug = {};
    }
    return Pages.find(slug);
  })

}
