import FS from 'meteor/cfs:standard-packages';

/*
const Attachments = new FS.Collection('Attachments', {
	stores: [
		new FS.Store.GridFS('attachments', {
			transformWrite(fileObj, readStream, writeStream) {
				if (gm.isAvailable) {
					if (fileObj.original.type.substr(0, 5) === 'image') {
						return gm(readStream, fileObj.name()).autoOrient().stream().pipe(writeStream);
					}
					return readStream.pipe(writeStream);
				}
				return readStream.pipe(writeStream);
			},
		}),
	],
});
*/

const Attachments = new Meteor.Collection('attachments');

export default Attachments;
