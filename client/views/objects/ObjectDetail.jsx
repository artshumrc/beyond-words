// Single object detail view
ObjectDetail = React.createClass({

	propTypes: {
		selectedObject: React.PropTypes.object,
		objectToSelectSlug: React.PropTypes.string,
		closeSelectedObject: React.PropTypes.func,
		selectObject: React.PropTypes.func,
	},

	getInitialState() {
		return {
			miradorOpen: false,
		};
	},

	mixins: [ReactMeteorData],

	objectSelected: false,

	getMeteorData() {
		let attachment = null;
		let selectedObject = null;

		const imageSubscription = Meteor.subscribe('attachments', this.props.selectedObject.slug);
		if (imageSubscription.ready() && typeof this.props.selectedObject.image !== 'undefined') {
			attachment = Attachments.findOne({ _id: this.props.selectedObject.image });
			// thumbnails = Thumbnails.find({}).fetch();
		}

		//console.log("ObjectDetail.props", this.props);
		if(this.props.objectToSelectSlug && !("catalog_n" in this.props.selectedObject) && !this.objectSelected){
			const objectSubscription = Meteor.subscribe('objects', {slug: this.props.objectToSelectSlug});
			if (objectSubscription.ready()) {
				object = Objects.findOne({slug: this.props.objectToSelectSlug});
				//console.log("ObjectDetail.object", object);
				this.props.selectObject(object);
				this.objectSelected = true;
			}


		}



		return {
			attachment,
		};
	},

	openMiradorViewer(){

		this.setState({
			miradorOpen: true,
		});

	},

	closeMiradorViewer(){

		this.setState({
			miradorOpen: false,
		});

	},

	render() {
		const selectedObject = this.props.selectedObject;

		let image = {};
		let imageUrl = '';
		if (this.data.attachment) {
			image = this.data.attachment;
			imageUrl = image.url();
		}

		return (
			<div>
			{('catalog_n' in selectedObject) ?

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
						{selectedObject.miradorLink ?
							<div
								className="thumbnail-mirador-overlay"
								onClick={this.openMiradorViewer}
							>
								<i className="mdi mdi-image-filter" />
								<span>View in Mirador</span>

							</div>

							: ""
						}
					</div>

					<div className="object-detail-text-wrap">

						<div className="object-detail-header">
							<h2 className="card-title object-title">{selectedObject.author_title}</h2>
							<hr />
						</div>

						<div className="object-detail-meta">
							<label>Catalog No.</label>
							<span>{selectedObject.catalog_n}</span>
						</div>
						{selectedObject.date ?
							<div className="object-detail-meta">
								<label>Date</label>
								<span>{selectedObject.date}</span>
							</div>
						: ''}
						{selectedObject.place ?
							<div className="object-detail-meta">
								<label>Place</label>
								<span>{selectedObject.place}</span>
							</div>
						: ''}
						{selectedObject.institution ?
							<div className="object-detail-meta">
								<label>Institution</label>
								<span>{selectedObject.institution}</span>
							</div>
						: ''}
						{selectedObject.collection ?
							<div className="object-detail-meta">
								<label>Collection</label>
								<span>{selectedObject.collection}</span>
							</div>
						: ''}
						{selectedObject.shelfmark ?
							<div className="object-detail-meta">
								<label>Shelfmark</label>
								<span>{selectedObject.shelfmark}</span>
							</div>
						: ''}
						{selectedObject.former_shelfmark ?
							<div className="object-detail-meta">
								<label>Former Shelfmark</label>
								<span>{selectedObject.former_shelfmark}</span>
							</div>
						: ''}
						{selectedObject.scribe ?
							<div className="object-detail-meta">
								<label>Scribe</label>
								<span>{selectedObject.scribe}</span>
							</div>
						: ''}
						{selectedObject.printer ?
							<div className="object-detail-meta">
								<label>Printer</label>
								<span>{selectedObject.printer}</span>
							</div>
						: ''}
						{selectedObject.illuminator ?
							<div className="object-detail-meta">
								<label>Illuminator</label>
								<span>{selectedObject.illuminator}</span>
							</div>
						: ''}
						{selectedObject.externalUrl ?
							<div className="object-detail-meta">
								<label>External Link</label>
								<span>
									<a
										href={selectedObject.externalUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										{selectedObject.externalUrl}
									</a>
								</span>
							</div>
						: ''}
						{selectedObject.description ?
							<div className="object-detail-meta">
								<label>Description</label>
								<span>{selectedObject.description}</span>
							</div>
						: ''}
					</div>

				</div>

				{selectedObject.miradorLink ?
					<div className={this.state.miradorOpen ? 'object-mirador-viewer object-mirador-viewer--open' : 'object-mirador-viewer' }>
						<i
							className="mdi mdi-close"
							onClick={this.closeMiradorViewer}
						/>
						<iframe src={selectedObject.miradorLink} />
					</div>

					: ""
				}

			</div>
			:
				<div className="loading-collections loading-visible">
					<div className="dot-spinner">
						<div className="bounce1" />
						<div className="bounce2" />
						<div className="bounce3" />
					</div>
				</div>
			}
		</div>
		);
	},
});
