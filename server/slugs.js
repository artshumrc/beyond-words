Meteor.startup(function() {
  var count, docs;
  docs = Objects.find({
    slug: {
      $exists: false
    }
  }, {
    limit: 500
  });
  count = 0;
  docs.forEach(function(doc) {
    Objects.update({
      _id: doc._id
    }, {
      $set: {
        slug: ''
      }
    });
    return count += 1;
  });
  return console.log('Updated slugs for ' + count + ' Documents.');
});
