Images = new Mongo.Collection('images');

ImageStore = new UploadFS.store.GridFS({
    collection: Images,
    name: 'images',
    chunkSize: 1024 * 255
});