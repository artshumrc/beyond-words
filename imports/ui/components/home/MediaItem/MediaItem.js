import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { createContainer } from 'meteor/react-meteor-data';

class MediaItem extends React.Component {

	render() {
		const mediaItem = this.props.mediaItem;
		const self = this;

		const styles = {
			thumbnailImage: {
			},
		};

		let image = {};
		let imageUrl = '';
		if (this.props.attachment) {
			image = this.props.attachment;
			imageUrl = image.url();
			styles.thumbnailImage.backgroundImage = `url("${imageUrl}")`;
		}

		return (
			<div
				className={`media-item wow fadeIn media-item--${mediaItem._id}`}
			>
				<a
					className={`media-item-link media-item-image-link ${('image' in mediaItem && mediaItem.image.length ? 'media-item-image-link--with-image' : '')}`}
					href={mediaItem.link}
					target="_blank" rel="noopener noreferrer"
					onClick={self.linkTomediaItemOrScroll}
				>
					{imageUrl.length ?
						<div
							className="media-item-image"
							style={styles.thumbnailImage}
						/>
					: ''}
				</a>
				<div className="media-item-info">
					<span
						className="media-item-source"
					>
						{mediaItem.source}
					</span>
					<a
						className="media-item-link"
						href={mediaItem.link}
						target="_blank" rel="noopener noreferrer"
						onClick={self.linkTomediaItemOrScroll}
					>
						<h3 className="media-item-title">
							{mediaItem.title}
							<i className="mdi mdi-open-in-new" />
						</h3>
					</a>
					<span className="media-item-date">
						{moment.utc(mediaItem.date).format('D MMM YYYY')}
					</span>
				</div>
			</div>
		);
	}
}

MediaItem.propTypes = {
	mediaItem: PropTypes.object,
};

MediaItem.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};

const mediaItemContainer = createContainer((props) => {
	let attachment = null;

	/*
	const imageSubscription = Meteor.subscribe('attachments');
	if (imageSubscription.ready() && typeof props.mediaItem.image !== 'undefined') {
		attachment = Attachments.findOne({ _id: props.mediaItem.image });
	}
	*/

	return {
		attachment,
	};
}, MediaItem);


export default mediaItemContainer;
