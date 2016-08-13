// Single object detail view
ObjectDetail = React.createClass({

    mixins: [ReactMeteorData],
    getMeteorData(){
        var object = {},
            images = [],
            thumbnails = [];
        var objectSubscription = Meteor.subscribe('object', this.props.slug);
        if (objectSubscription.ready()) {
            object = Objects.find({slug: this.props.slug}).fetch()[0];
        }
        var imageSubscription = Meteor.subscribe('objectImages', this.props.slug);
        if (imageSubscription.ready()) {
            images = Images.find({}).fetch();
            thumbnails = Thumbnails.find({}).fetch();
        }
        return {
            object: object,
            images: images,
            thumbnails: thumbnails
        };
    },

    render() {
        let object = this.data.object;
        // console.log(this);
        var imageId = false;
        if (object.images && object.images.length) {
            //get a random image
            imageId = object.images[Math.floor(Math.random() * object.images.length)];
        }
        var headerImageUrl = imageId? Images.findOne(imageId).url:'/images/bronze-characters.jpg';

        return (
            <div>
								{object.miradorLink ?
									<div className="object-detail-mirador">
										<p className="mirador-help-text">
											Mirador viewer has not loaded due to the iif.lib.harvard.edu server settings.
										</p>
										<iframe
											className="mirdador-viewer"
											src={object.miradorLink}
											/>
									</div>
								:
									<section className="page-head fullscreen image-bg bg-dark object-detail-page-head">
										<div className="background-image-holder less-blur blur">
												<img className="background-image" alt='image' src="/images/manuscript_header.jpg"/>
										</div>

										<div className="background-screen primary">
										</div>

									</section>
								}

                <section className="object-details">
									<div className="object-details-inner">

										<div className="object-detail-thumbnail-wrap">
											<img className="object-detail-thumbnail" src="/images/default_image.jpg" />

										</div>

										<div className="object-detail-text-wrap">

											<div className="object-detail-header">
			                  <h2 className="card-title object-title">{object.title}</h2>
											</div>

											<div className="object-detail-meta">
													<label>Catalog No.</label>
													<span>{object.catalog_n}</span>
											</div>

											<div className="object-detail-meta">
													<label>Author</label>
													<span>{object.author}</span>
											</div>

											<div className="object-detail-meta">
													<label>Illuminator</label>
													<span>{object.illuminator}</span>
											</div>

											<div className="object-detail-meta">
													<label>Institution</label>
													<span>{object.institution}</span>
											</div>

											<div className="object-detail-meta">
													<label>Shelfmark</label>
													<span>{object.shelfmark}</span>
											</div>

											<div className="object-detail-meta">
													<label>Former Shelfmark</label>
													<span>{object.former_shelfmark}</span>
											</div>

											<div className="object-detail-meta">
													<label>Place</label>
													<span>{object.place}</span>
											</div>

											<div className="object-detail-meta">
													<label>Date</label>
													<span>{object.dateBegun} - {object.dateEnded}</span>
											</div>

											<div className="object-detail-meta">
													<label>External Link</label>
													<span>
														<a href={object.externalUrl}>
														{object.externalUrl}
													</a>

														</span>
											</div>

											<div className="object-detail-meta">
													<label>Description</label>
													<span>{object.description}</span>
											</div>

											<div className="object-detail-meta">
													<label>Image Notes</label>
													<span>{object.imageNotes}</span>
											</div>



										</div>



                  </div>

                </section>


            </div>
        );
    }
});
