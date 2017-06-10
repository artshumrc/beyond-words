import React from 'react';
import PropTypes from 'prop-types';

class IPadLayout extends React.Component {
	render() {
		return (
			<div className="archimedes-layout ipad-layout">
				<main>
					{this.props.content}
				</main>
			</div>
		);
	}
}

IPadLayout.propTypes = {
	content: PropTypes.element,
};
