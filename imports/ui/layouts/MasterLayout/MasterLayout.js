import React from 'react';
import PropTypes from 'prop-types';

class MasterLayout extends React.Component {
	propTypes: {
		content: PropTypes.element,
	},

	render() {
		console.log(this);
		return (
			<div className="archimedes-layout master-layout">
				<Header />
				<main>
					{this.props.content}
				</main>
				<Footer />
			</div>
		);
	},

});
