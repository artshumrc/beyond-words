import { Meteor } from 'meteor/meteor';
import Objects from '/imports/api/collections/objects';

Meteor.method('objectsCount', (params)=> {
	let query = {};
	if (params.length) {
		query = params[0];
	}
	check(query, Object);
	return Objects.find(query).count();
});
