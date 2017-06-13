import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class UserBookmarksList extends React.Component {
	render() {
		const { bookmarkedText } = this.props;
		const styles = {
			listItem: {
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
				font: 'normal',
			},
			list: {
				marginTop: 0,
			},
		};

		if (!bookmarkedText) {
			return null;
		}

		return (
			<div className="collection with-header" style={styles.list}>
				<div className="collection-header"> <h3>Bookmarks</h3></div>
				{this.props.bookmarkedText.map((text, i) => (
					<BookmarkedTextNode
						key={i}
						isOdd={i % 2}
						text={text}
					/>
					))}
			</div>
		);
	}
}

UserBookmarksList.propTypes = {
	bookmarkedText: PropTypes.array,
};


const UserBookmarksListContainer = createContainer(() => {
	let bookmarkedText = [];
	const handleBookmark = Meteor.subscribe('bookmark');
	const bookmarkList = Meteor.users.findOne({}, { fields: { bookmarks: 1 } });

	const bookmarks = [];

	if (bookmarkList && bookmarkList.bookmarks && bookmarkList.bookmarks.length) {
		bookmarkList.bookmarks.forEach((bookmark) => {
			bookmarks.push(new Meteor.Collection.ObjectID(bookmark));
		});

		const handleText = Meteor.subscribe('textNodes', { _id: { $in: bookmarks } });

		if (handleText.ready()) {
			bookmarkedText = TextNodes.find({ _id: { $in: bookmarks } }).fetch();
		}
	}

	return {
		bookmarkedText,
	};
}, UserBookmarksList);

export default UserBookmarksListContainer;
