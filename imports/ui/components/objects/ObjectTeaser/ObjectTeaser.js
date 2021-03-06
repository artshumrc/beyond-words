import React from 'react';
import autoBind from 'react-autobind';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Objects from '/imports/api/collections/objects';
import Utils from '/imports/lib/utils';

// Object Teaser
class ObjectTeaser extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			attachmentCheck: false,
		};

		autoBind(this);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
	}

	componentDidMount() {
		const self = this;
	}

	render() {
		const object = this.props.object;
		const objectUrl = `/objects/${object.slug}`;
		let authorTitle = '';
		let description = '';

		if ('author_title' in object && typeof object.author_title !== 'undefined') {
			authorTitle = object.author_title;
		}

		if ('description' in object && typeof object.description !== 'undefined') {
			description = object.description;
		}

		const styles = {
			thumbnailImage: {
			},
		};

		let image;
		if (object.images && object.images.length) {
			if (typeof object.images[0] === 'object') {
				image = object.images[0];
				const prefix = "https://iiif-orpheus.s3.amazonaws.com/";
				const imageName = image.path.replace(prefix, '');

				styles.thumbnailImage.backgroundImage = `url("http://iiif.orphe.us/${imageName}/full/400,/0/default.jpg")`;
			}
		}

		return (
			<div className="object-teaser col-md-4 col-sm-6">
				<div className="object-teaser-wrap">
					<a
						href={objectUrl}
					>
						<div className="object-thumbnail-wrap">
							<div className="object-catalog-n">
								<span>
									{object.catalog_n}.
								</span>
							</div>
							{image ?
								<div>
									<div
										alt={authorTitle}
										className="object-detail-thumbnail"
										style={styles.thumbnailImage}
									/>
								</div>
								:
								<div>
									<div className="default-image-text default-image-text-visible">
										<span>Preview image not available</span>
									</div>
									<img
										alt={authorTitle}
										className="object-detail-thumbnail default"
										src="/images/default_image.jpg"
									/>
								</div>
							}
						</div>
					</a>
					<div className="object-text-wrap">
						<a href={objectUrl}>
							<h3>{Utils.trunc(authorTitle, 60)}</h3>
						</a>
						<hr />
						<span className="object-teaser-subtitle">{object.date}</span>
						<p>
							{Utils.trunc(description, 120)}
						</p>

						<div className="meta-items">
							{object.place ?
								<div className="object-teaser-meta">
									<label>Place</label>
									<p>
										{object.place}
									</p>
								</div>
								:
								''
							}
							{object.institution ?
								<div className="object-teaser-meta">
									<label>Institution{(object.institution_2 || object.institution_3) ? 's' : ''}</label>
									<p>
										{object.institution}{object.institution_2 ? (`, ${object.institution_2}`) : ''}{object.institution_3 ? (`, ${object.institution_3}`) : ''}
									</p>
								</div>
								:
								''
							}
							{object.collection ?
								<div className="object-teaser-meta">
									<label>Collection</label>
									<p>
										{object.collection}
									</p>
								</div>
								:
								''
							}
							{object.shelfmark ?
								<div className="object-teaser-meta">
									<label>Shelfmark</label>
									<p>
										{object.shelfmark}
									</p>
								</div>
								:
								''
							}
							{object.illuminator ?
								<div className="object-teaser-meta">
									<label>Illuminator</label>
									<p>
										{object.illuminator}
									</p>
								</div>
								:
								''
							}
							{object.scribe ?
								<div className="object-teaser-meta">
									<label>Scribe</label>
									<p>
										{object.scribe}
									</p>
								</div>
								:
								''
							}
							{object.printer ?
								<div className="object-teaser-meta">
									<label>Printer</label>
									<p>
										{object.printer}
									</p>
								</div>
								:
								''
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ObjectTeaser.propTypes = {
	object: PropTypes.object.isRequired,
};

ObjectTeaser.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};

const objectTeaserContainer = createContainer((props) => {
	let attachment = null;

	/*
	const imageSubscription = Meteor.subscribe('attachments');
	if (imageSubscription.ready() && typeof props.object.image !== 'undefined') {
		attachment = Attachments.findOne({ _id: props.object.image });
	}
	*/

	return {
		attachment,
	};
}, ObjectTeaser);


export default objectTeaserContainer;
