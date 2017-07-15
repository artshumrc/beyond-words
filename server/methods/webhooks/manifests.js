Meteor.method('updateManifestS3Uri', (manifestUri) => {
	console.log(manifestUri);

}, {
	url: 'manifests/s3',
	getArgsFromRequest(request) {
		const content = request.body;
		return [content];
	},
});
