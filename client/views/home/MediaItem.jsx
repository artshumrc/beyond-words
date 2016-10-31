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

		let image = {};
		let imageUrl = '';
		if (this.data.attachment) {
			image = this.data.attachment;
			imageUrl = image.url();
			styles.thumbnailImage.backgroundImage = `url("${imageUrl}")`;
		}

		return (
			<div
				className={`media-item wow fadeIn media-item--${mediaItem._id}`}
			>
				{imageUrl.length ?
					<a
						className="media-item-link"
						href={mediaItem.link}
						target="_blank" rel="noopener noreferrer"
						onClick={self.linkTomediaItemOrScroll}
					>
						<img
							alt={`${mediaItem.title} - ${mediaItem.source}`}
							src={imageUrl}
							className="media-item-image"
						/>
					</a>
				: ''}
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
