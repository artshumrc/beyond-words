import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

// Single object detail view
class ObjectDetail extends React.Component {
	openViewer() {
		console.log('ObjectDetail.openViewer');
		this.props.openViewer();
	}

	render() {
		const selectedObject = this.props.selectedObject;

		let image = {};
		let imageUrl = '';
		if (this.data.attachment) {
			image = this.data.attachment;
			imageUrl = image.url();
		}

		let pdf = {};
		let pdfUrl = '';
		if (this.data.pdfAttachment) {
			pdf = this.data.pdfAttachment;
			pdfUrl = pdf.url();
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
										className="thumbnail-embedded-overlay"
										onClick={this.props.openMiradorViewer}
									>
										<i className="mdi mdi-image-filter" />
										<span>View in Mirador</span>

									</div>

									: ''
								}
								{selectedObject.hasImageViewer ?
									<div
										className="thumbnail-embedded-overlay"
										onClick={this.openViewer}
									>
										<i className="mdi mdi-image-filter" />
										<span>Turn the Pages</span>

									</div>

							: ''
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
										<label>Institution{(selectedObject.institution_2 || selectedObject.institution_3) ? 's' : ''}</label>
										<span>
											{selectedObject.institution}{selectedObject.institution_2 ? (`, ${selectedObject.institution_2}`) : ''}{selectedObject.institution_3 ? (`, ${selectedObject.institution_3}`) : ''}
										</span>
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
								{selectedObject.notes ?
									<div className="object-detail-meta">
										<label>Additional Notes</label>
										<span>{selectedObject.notes}</span>
									</div>
						: ''}
								{(pdfUrl.length) ?
									<div className="object-detail-meta object-detail-meta--pdf">
										<a href={pdfUrl} target="_blank" rel="noopener noreferrer">
											<label>PDF Download</label>
											<i className="mdi mdi-download" />
										</a>
									</div>
						: ''}
							</div>

						</div>

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
	}
}

ObjectDetail.propTypes = {
	selectedObject: PropTypes.object,
	objectToSelectSlug: PropTypes.string,
	closeSelectedObject: PropTypes.func,
	selectObject: PropTypes.func,
	openViewer: PropTypes.func,
	openMiradorViewer: PropTypes.func,
};
const objectDetailContainer = createContainer((props) => {
	let attachment = null;
	let pdfAttachment = null;
	const selectedObject = null;

	const imageSubscription = Meteor.subscribe('attachments', this.props.selectedObject.slug);
	if (imageSubscription.ready()) {
		if (typeof this.props.selectedObject.image !== 'undefined') {
			attachment = Attachments.findOne({ _id: this.props.selectedObject.image });
		}
		if (typeof this.props.selectedObject.pdf !== 'undefined') {
			pdfAttachment = Attachments.findOne({ _id: this.props.selectedObject.pdf });
		}
	}

	// console.log("ObjectDetail.props", this.props);
	if (this.props.objectToSelectSlug && !('catalog_n' in this.props.selectedObject) && !this.objectSelected) {
		const objectSubscription = Meteor.subscribe('objects', {slug: this.props.objectToSelectSlug});
		if (objectSubscription.ready()) {
			object = Objects.findOne({slug: this.props.objectToSelectSlug});
			// console.log("ObjectDetail.object", object);
			this.props.selectObject(object);
			this.objectSelected = true;
		}
	}

	return {
		attachment,
		pdfAttachment,
	};
}, ObjectDetail);


export default objectDetailContainer;
