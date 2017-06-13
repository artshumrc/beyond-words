import React from 'react';

// component:
import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
	it('renders correctly', () => {

		const tree = renderer
			.create(<ProfilePage />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
