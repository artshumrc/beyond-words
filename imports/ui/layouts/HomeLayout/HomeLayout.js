import React from 'react';
import PropTypes from 'prop-types';

import Header from '/imports/ui/components/common/Header';
import Footer from '/imports/ui/components/common/Footer';
import HomeContent from '/imports/ui/components/home/HomeContent';



class HomeLayout extends React.Component {
	render() {
		return (
			<div className="archimedes-layout home-layout">
				<Header />
				<HomeContent />
				<Footer />
			</div>
		);
	}
}


export default HomeLayout;
