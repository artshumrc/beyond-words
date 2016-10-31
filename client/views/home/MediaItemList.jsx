import moment from 'moment-timezone';

MediaItemList = React.createClass({

	propTypes: {
		mediaItem: React.PropTypes.object,
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	mixins: [ReactMeteorData],

	getMeteorData() {
		let mediaItems = [];
		const handle = Meteor.subscribe('mediaItems');
		if (handle.ready()) {
			mediaItems = MediaItems.find({}, { sort: { date: -1 } }).fetch();
		}
		return {
			mediaItems,
		};
	},

	render() {
		return (
			<div
				className="media-item-list"
			>
				{this.data.mediaItems.map((mediaItem, index) => (
					<MediaItem
						key={index}
						mediaItem={mediaItem}
					/>
				))}
			</div>
		);
	},
});
