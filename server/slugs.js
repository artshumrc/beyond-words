
import Objects from '/imports/api/collections/objects';

Meteor.startup(() => {
	let count;
	const docs = Objects.find({
		slug: {
			$exists: false,
		},
	}, {
		limit: 500,
	});
	count = 0;
	docs.forEach((doc) => {
		Objects.update({
			_id: doc._id,
		}, {
			$set: {
				slug: '',
			},
		});
		count += 1;
		return count;
	});
	return console.log(`Updated slugs for ${count} Documents.`);
});
