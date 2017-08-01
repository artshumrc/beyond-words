import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import ReactPlayer from 'react-player'

import Objects from '/imports/api/collections/objects';
import Manifests from '/imports/api/collections/manifests';
import { Images, Thumbnails } from '/imports/api/collections/images';
import ObjectTeaser from '/imports/ui/components/objects/ObjectTeaser';
import ObjectsDetailRelatedList from '/imports/ui/components/objects/ObjectsDetailRelatedList';
import Viewer from '/imports/ui/components/common/Viewer';

// Single object detail view
class ObjectDetailPage extends React.Component {

	objectsLoadingOrNoResults() {
		const {object, ready} = this.props;

		if (!ready) {
			return (
				<div className="loading-collections loading-visible">
					<div className="dot-spinner">
						<div className="bounce1" />
						<div className="bounce2" />
						<div className="bounce3" />
					</div>
				</div>
			);
		}

		if (!object) {
			return (
				<div className="no-results no-results--objects">
					<p>The manuscript you requested was not found.</p>
				</div>
			);
		}
	}

	render() {
		const { object, manifest } = this.props;
		let image = {};

		if (!object) {
			return this.objectsLoadingOrNoResults();
		}

		if (object.images && object.images.length) {
			if (typeof object.images[0] === 'object') {
				image = object.images[0];
			}
		}

		return (
			<div className="object-details-page">
				<section className="object-details paper-shadow">
					<div className="object-details-inner">
						<div className="object-detail-thumbnail-wrap">
							{(image && 'path' in image && image.path) ?
								<img
									alt="object thumbnail"
									className="object-detail-thumbnail paper-shadow"
									src={image.path}
								/>
								:
								<img
									alt="object thumbnail"
									className="object-detail-thumbnail paper-shadow"
									src="/images/default_image.jpg"
								/>
							}
							{object.miradorLink || object.manifestId ?
								<a
									className="thumbnail-embedded-overlay"
									href={manifest ? `/manifests/${manifest._id}` : object.miradorLink}
								>
									<i className="mdi mdi-image-filter" />
									<span>Turn the Pages</span>
								</a>
							: ''}
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
							{(object.pdfs && object.pdfs.length) ?
								<div className="object-detail-meta object-detail-meta--pdf">
									<label>PDFs</label>
									{object.pdfs.map(pdf => (
										<a key={pdf.name} href={pdf.path} target="_blank" rel="noopener noreferrer">
											{pdf.label || pdf.name}
											<i className="mdi mdi-download" />
										</a>
									))}
								</div>
							: ''}
							{(object.audioFiles && object.audioFiles.length) ?
								<div className="object-detail-meta object-detail-meta--audio">
									<label>Related Audio</label>
									{object.audioFiles.map(audioFile => (
										<div
											className="object-detail-media"
											key={audioFile.path}
										>
											<span className="media-title">
												{audioFile.label || audioFile.name}
											</span>
											<div className="media-player">
												<ReactPlayer
													url={audioFile.path}
													width="100%"
													height={40}
													controls
												/>
											</div>
										</div>
									))}
								</div>
							: ''}
							{(object.videos && object.videos.length) ?
								<div className="object-detail-meta object-detail-meta--videos">
									<label>Related Videos</label>
									{object.videos.map(video => (
										<div
											className="object-detail-media"
											key={video.path}
										>
											<span className="media-title">
												{video.label || video.name}
											</span>
											<div className="media-player">
												<ReactPlayer
													url={video.path}
													width="100%"
													height={300}
													controls
												/>
											</div>
										</div>
									))}
								</div>
							: ''}
						</div>
					</div>
				</section>
				<ObjectsDetailRelatedList />
			</div>
		);
	}
}

ObjectDetailPage.propTypes = {
	slug: PropTypes.string.isRequired,
};

const objectDetailPageContainer = createContainer((props) => {
	let object;
	let manifest;

	const objectSubscription = Meteor.subscribe('objects', {slug: props.slug}, 0, 1);
	if (objectSubscription.ready()) {
		object = Objects.findOne({ slug: props.slug });
	}

	if (object && object.manifestId) {
		const manifestSubscription = Meteor.subscribe('objectManifest', object.manifestId);
		manifest = Manifests.findOne({ _id: object.manifestId });
	}

	return {
		object,
		manifest,
		ready: objectSubscription.ready(),
	};
}, ObjectDetailPage);


export default objectDetailPageContainer;
