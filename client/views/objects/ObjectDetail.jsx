// Single object detail view
ObjectDetail = React.createClass({

	propTypes: {
		object: React.PropTypes.object.isRequired,
		closeSelectedObject: React.PropTypes.func,
	},

	mixins: [ReactMeteorData],

	getMeteorData() {
		let attachment = null;

		const imageSubscription = Meteor.subscribe('attachments', this.props.object.slug);
		if (imageSubscription.ready() && typeof this.props.object.image !== 'undefined') {
			attachment = Attachments.findOne({ _id: this.props.object.image });
			//thumbnails = Thumbnails.find({}).fetch();
		}

		return {
			attachment,
		};
	},

	render() {
		const object = this.props.object;

		let image = {};
		let imageUrl = "";
		if (this.data.attachment) {
			image = this.data.attachment;
			imageUrl = image.url();
		}

		return (
			<div className="object-details ">
				<div className="object-details-inner paper-shadow">

					<div className="object-detail-thumbnail-wrap">
						{(imageUrl.length) ?
							<img
								alt="object thumbnail"
								className="object-detail-thumbnail paper-shadow"
								src={imageUrl}
							/>
							:
							<img
								alt="object thumbnail"
								className="object-detail-thumbnail paper-shadow"
								src="/images/default_image.jpg"
							/>
						}
					</div>

					<div className="object-detail-text-wrap">

						<div className="object-detail-header">
							<h2 className="card-title object-title">{object.author_title}</h2>
							<hr />
						</div>

						<div className="object-detail-meta">
							<label>Catalog No.</label>
							<span>{object.catalog_n}</span>
						</div>
						{object.date ?
							<div className="object-detail-meta">
								<label>Date</label>
								<span>{object.date}</span>
							</div>
						: ''}
						{object.place ?
							<div className="object-detail-meta">
								<label>Place</label>
								<span>{object.place}</span>
							</div>
						: ''}
						{object.institution ?
							<div className="object-detail-meta">
								<label>Institution</label>
								<span>{object.institution}</span>
							</div>
						: ''}
						{object.collection ?
							<div className="object-detail-meta">
								<label>Collection</label>
								<span>{object.collection}</span>
							</div>
						: ''}
						{object.shelfmark ?
							<div className="object-detail-meta">
								<label>Shelfmark</label>
								<span>{object.shelfmark}</span>
							</div>
						: ''}
						{object.former_shelfmark ?
							<div className="object-detail-meta">
								<label>Former Shelfmark</label>
								<span>{object.former_shelfmark}</span>
							</div>
						: ''}
						{object.scribe ?
							<div className="object-detail-meta">
								<label>Scribe</label>
								<span>{object.scribe}</span>
							</div>
						: ''}
						{object.printer ?
							<div className="object-detail-meta">
								<label>Printer</label>
								<span>{object.printer}</span>
							</div>
						: ''}
						{object.illumintator ?
							<div className="object-detail-meta">
								<label>Illuminator</label>
								<span>{object.illuminator}</span>
							</div>
						: ''}
						{object.externalLink ?
							<div className="object-detail-meta">
								<label>External Link</label>
								<span>
									<a
										href={object.externalUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										{object.externalUrl}
									</a>
								</span>
							</div>
						: ''}
						{object.illumintator ?
							<div className="object-detail-meta">
								<label>Description</label>
								<span>{object.description}</span>
							</div>
						: ''}
					</div>

				</div>

			</div>
		);
	},
});
