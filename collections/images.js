Thumbnails = new Mongo.Collection('thumbnails');

Images = new Mongo.Collection('images');

ThumbnailStore = new UploadFS.store.GridFS({
    collection: Thumbnails,
    name: 'thumbnails',
    // permissions: defaultPermissions,
    filter: new UploadFS.Filter({
        extensions: ['gif', 'jpg', 'jpeg', 'png']
    }),
    onRead: function (fileId, file, req, res) {
        if (file.userId && (file.token !== req.query.token)) {
            res.writeHead(403, {"Content-Type": 'text/plain'});
            res.end('Forbidden');
            return false;
        }
    },
    transformWrite: function (from, to, fileId, file) {
        // Resize images
        if (file.type.indexOf('image/') === 0) {
            const gm = Npm.require('gm');
            if (gm) {
                gm(from)
                    .resize(150, 150)
                    .gravity('Center')
                    .extent(150, 150)
                    .quality(75)
                    .stream().pipe(to);
            } else {
                from.pipe(to);
            }
        } else {
            from.pipe(to);
        }
    }
});

ImageStore = new UploadFS.store.GridFS({
    collection: Images,
    name: 'images',
    copyTo: [ThumbnailStore],
    chunkSize: 1024 * 255
});