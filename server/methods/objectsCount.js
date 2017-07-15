import { Meteor } from 'meteor/meteor';
import Objects from '/imports/api/collections/objects';

Meteor.method('objectsCount', () => {
	return Objects.find().count();
});
