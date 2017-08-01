import React from 'react';
import PropTypes from 'prop-types';

import Header from '/imports/ui/components/common/Header';
import Footer from '/imports/ui/components/common/Footer';

class MasterLayout extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className="archimedes-layout master-layout">
				<Header />
				<main>
					{this.props.content}
				</main>
				{!this.props.noFooter ?
					<Footer />
				: ''}
			</div>
		);
	}
}

MasterLayout.propTypes = {
	content: PropTypes.element,
};


export default MasterLayout;
