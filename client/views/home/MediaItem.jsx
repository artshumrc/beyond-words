import moment from 'moment-timezone';

MediaItem = React.createClass({

	propTypes: {
		mediaItem: React.PropTypes.object,
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	mixins: [ReactMeteorData],

	getMeteorData() {
		let attachment = null;

		const imageSubscription = Meteor.subscribe('attachments');
		if (imageSubscription.ready() && typeof this.props.mediaItem.image !== 'undefined') {
			attachment = Attachments.findOne({ _id: this.props.mediaItem.image });
		}

		return {
			attachment,
		};
	},

	render() {
		const mediaItem = this.props.mediaItem;
		const self = this;

		const styles = {
			thumbnailImage: {
			},
		};

		let image = {};
		let imageUrl = '';
		/*
		if (this.data.attachment) {
			image = this.data.attachment;
			imageUrl = image.url();
			styles.thumbnailImage.backgroundImage = `url("${imageUrl}")`;
		}
		*/

		console.log(image);

		return (
			<div
				className={`media-item wow fadeIn media-item--${mediaItem._id}`}
			>
				<a
					className={`media-item-link media-item-image-link ${(imageUrl.length ? 'media-item-image-link--with-image' : '')}`}
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
	},
});
