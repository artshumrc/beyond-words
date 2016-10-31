import Masonry from 'react-masonry-component/lib';

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
		const masonryOptions = {
			isFitWidth: true,
			transitionDuration: 300,
		};

		return (
			<Masonry
				options={masonryOptions}
				className="media-item-list"
			>
				{this.data.mediaItems.map((mediaItem, index) => (
					<MediaItem
						key={index}
						mediaItem={mediaItem}
					/>
				))}
			</Masonry>
		);
	},
});
