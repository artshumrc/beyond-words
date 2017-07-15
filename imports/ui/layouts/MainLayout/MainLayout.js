import React from 'react';
import PropTypes from 'prop-types';

class MainLayout extends React.Component {
	static propTypes = {
		content: PropTypes.object.isRequired,
	}

	render() {
		return (
			<main>
				{this.props.content}
			</main>
		);
	}
}

export default MainLayout;
