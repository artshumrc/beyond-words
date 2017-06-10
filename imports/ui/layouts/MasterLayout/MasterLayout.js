import React from 'react';
import PropTypes from 'prop-types';

class MasterLayout extends React.Component {
	render() {
		return (
			<div className="archimedes-layout master-layout">
				<Header />
				<main>
					{this.props.content}
				</main>
				<Footer />
			</div>
		);
	}
}

MasterLayout.propTypes = {
	content: PropTypes.element,
};
