import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component/lib';
import { createContainer } from 'meteor/react-meteor-data';

import MediaItem from '/imports/ui/components/home/MediaItem';

class MediaItemList extends React.Component {

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
	}
}

MediaItemList.propTypes = {
	mediaItem: PropTypes.object,
};

MediaItemList.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};

const mediaItemListContainer = createContainer(() => {
	let mediaItems = [];
	const handle = Meteor.subscribe('mediaItems');
	if (handle.ready()) {
		mediaItems = MediaItems.find({}, { sort: { date: -1 } }).fetch();
	}

	return {
		mediaItems,
	};
}, MediaItemList);


export default mediaItemListContainer;
