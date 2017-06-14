
import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import Objects from '/imports/api/collections/objects';

// Single object detail view
class ObjectDetailPage extends React.Component {

	render() {
		const object = this.props.object;
		// console.log(this);
		if (object.images && object.images.length) {
		// get a random image
			imageId = object.images[Math.floor(Math.random() * object.images.length)];
		}
		let image = {};
		if (this.props.images.length) {
			image = this.props.images[0];
		}

		return (
			<div className="object-details-page">
				{(object.miradorLink || object.hasImageViewer) ?
					<div>
						{object.miradorLink ?
							<div className="object-detail-viewer object-detail--mirador">
								<p className="mirador-help-text">
									Mirador viewer has not loaded due to the iif.lib.harvard.edu server settings.
								</p>
								<iframe
									className="mirdador-viewer"
									src={object.miradorLink}
								/>
							</div>
							:
							<div className="object-detail-viewer object-detail--osd-viewer">
								<Viewer />
							</div>
						}
					</div>
				:
					<div />
				}

				<section className="object-details paper-shadow">
					<div className="object-details-inner">
						<div className="object-detail-thumbnail-wrap">
							{('url' in image && image.url.length) ?
								<img
									alt="object thumbnail"
									className="object-detail-thumbnail paper-shadow"
									src={image.url}
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
								:
								''
							}
							{object.shelfmark ?
								<div className="object-detail-meta">
									<label>Shelfmark</label>
									<span>{object.shelfmark}</span>
								</div>
								:
								''
							}
							{object.former_shelfmark ?
								<div className="object-detail-meta">
									<label>Former Shelfmark</label>
									<span>{object.former_shelfmark}</span>
								</div>
								:
								''
							}
							{object.scribe ?
								<div className="object-detail-meta">
									<label>Scribe</label>
									<span>{object.scribe}</span>
								</div>
								:
								''
							}
							{object.printer ?
								<div className="object-detail-meta">
									<label>Printer</label>
									<span>{object.printer}</span>
								</div>
								:
								''
							}
							{object.institution ?
								<div className="object-detail-meta">
									<label>Institution</label>
									<span>{object.institution}</span>
								</div>
								:
								''
							}
							{object.illumintator ?
								<div className="object-detail-meta">
									<label>Illuminator</label>
									<span>{object.illuminator}</span>
								</div>
								:
								''
							}
							{object.collection ?
								<div className="object-detail-meta">
									<label>Collection</label>
									<span>{object.collection}</span>
								</div>
								:
								''
							}
							{object.place ?
								<div className="object-detail-meta">
									<label>Place</label>
									<span>{object.place}</span>
								</div>
								:
								''
							}
							{object.externalLink ?
								<div className="object-detail-meta">
									<label>External Link</label>
									<span>
										<a href={object.externalUrl} target="_blank" rel="noopener noreferrer">
											{object.externalUrl}
										</a>
									</span>
								</div>
								:
								''
							}
							{object.illumintator ?
								<div className="object-detail-meta">
									<label>Description</label>
									<span>{object.description}</span>
								</div>

								:
								''
							}
						</div>
					</div>
				</section>
			</div>
		);
	}
}

ObjectDetailPage.propTypes = {
	slug: PropTypes.string.isRequired,
};

const objectDetailPageContainer = createContainer((props) => {
	let object = {};
	let images = [];
	let thumbnails = [];
	const objectSubscription = Meteor.subscribe('object', this.props.slug);
	if (objectSubscription.ready()) {
		object = Objects.find({ slug: this.props.slug }).fetch()[0];
	}
	const imageSubscription = Meteor.subscribe('objectImages', this.props.slug);
	if (imageSubscription.ready()) {
		// images = Images.find({}).fetch();
		// thumbnails = Thumbnails.find({}).fetch();
	}
	return {
		object,
		images,
		thumbnails,
	};
}, ObjectDetailPage);


export default objectDetailPageContainer;
