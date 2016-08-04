Pages = new Meteor.Collection('pages');

Schemas.Pages = new SimpleSchema({
    title: {
        type: String
    },
    subTitle: {
        type: String,
        optional: true
    },
    headerImage: {
        type: [String],
        optional: true,
        autoform: {
            type: 'ufs',
            collection: 'images',
            store: 'ImageStore',
            publication: 'images',
            thumbnails: 'thumbnails'
        }
    },
    slug: {
        type: String,
        autoValue: function () {
            console.log(this);
            var slug;
            if (this.isSet) {
                slug = this.value;
            } else {
                slug = slugify(this.siblingField('title').value);
            }
            var i = 0;
            var slugPages = Pages.find({_id: {$ne: this.docId},slug: {$regex: '^' + slug + '-?(\d+$)?'}}, {sort: {slug: 1}});
            slugPages.forEach(function (page) {
                console.log(page.slug);
                if (page.slug === slug || page.slug === slug + '-' + i) {
                    i++;
                }
            });
            if (i) {
                return slug + '-' + i;
            } else {
                return slug;
            }
        },
        optional: true,
        autoform: {
            placeholder: 'Calculated automatically'
        }
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            }
        }
    },
    updatedAt: {
        type: Date,
        optional: true,
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        }
    },
    content: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'summernote',
                class: 'editor', // optional
                settings: {
                    height: 500,
                    callbacks: {
                        onImageUpload: function (files) {
                            // upload image to server and create imgNode...
                            // console.log(this, this.id);
                            var editorId = this.id;
                            const ONE_MB = 1024 * 100;
                            _.each(files, function (file) {
                                var uploader = new UploadFS.Uploader({
                                    adaptive: false,
                                    chunkSize: ONE_MB * 16.66,
                                    maxChunkSize: ONE_MB * 20,
                                    data: file,
                                    file: file,
                                    store: ImageStore,
                                    maxTries: 3
                                });
                                uploader.onAbort = function (file) {
                                    console.log(file.name + ' upload aborted');
                                };
                                uploader.onComplete = function (file) {
                                    console.log(file.name + ' upload completed');
                                    var url = file.url;
                                    // console.log(file.url, editorId, $(editorId));
                                    $('#' + editorId).summernote('insertImage', url, function ($image) {
                                        console.log('image inserted');
                                        // $image.css('width', $image.width() / 3);
                                        // $image.css('margin', 15);
                                        // $image.attr('data-filename', 'retriever');
                                    });
                                    // return file._id;
                                };
                                uploader.onCreate = function (file) {
                                    workers[file._id] = this;
                                    console.log(file.name + ' created');
                                };
                                uploader.onError = function (err, file) {
                                    console.error(file.name + ' could not be uploaded', err);
                                };
                                uploader.onProgress = function (file, progress) {
                                    console.log(file.name + ' :'
                                        + "\n" + (progress * 100).toFixed(2) + '%'
                                        + "\n" + (this.getSpeed() / 1024).toFixed(2) + 'KB/s'
                                        + "\n" + 'elapsed: ' + (this.getElapsedTime() / 1000).toFixed(2) + 's'
                                        + "\n" + 'remaining: ' + (this.getRemainingTime() / 1000).toFixed(2) + 's'
                                    );
                                };
                                uploader.start();
                            });
                            // Meteor.call('uploadFiles', files, function(err, res){
                            //     console.log(res);
                            // });
                        }
                    }
                }
            }
        }
    }
});

Pages.attachSchema(Schemas.Pages);