import { Meteor } from 'meteor/meteor';
import Manifests from '/imports/api/collections/manifests';

Meteor.method('updateManifestS3Uri', (update) => {
	const exampleSecret = 'examplewebhookkey';

	check(update.secret, String);
	check(update.manifestUri, String);
	check(update.manifestId, String);

	console.log(`Updating manifest record ${update.manifestId} with URI ${update.manifestUri}`);

	if (update.secret === exampleSecret) {
		Manifests.update({
			_id: update.manifestId,
		}, {
			$set: {
				remoteUri: update.manifestUri,
			},
		});
	}

}, {
	url: 'manifests/s3',
	getArgsFromRequest(request) {
		const content = request.body;
		return [content];
	},
});
