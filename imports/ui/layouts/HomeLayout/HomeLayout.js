import React from 'react';
import PropTypes from 'prop-types';

class HomeLayout extends React.Component {

	render() {
		return (
			<div className="archimedes-layout home-layout">
				<Header />
				<HomeView />
				<Footer />
			</div>
		);
	},

});
