import React from 'react';

// component:
import UserBookmarksList from './UserBookmarksList';

describe('UserBookmarksList', () => {
	it('renders correctly', () => {

		const tree = renderer
			.create(<UserBookmarksList />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
