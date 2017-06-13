import React from 'react';
import PropTypes from 'prop-types';

class HomeContent extends React.Component {
	scrollToAbout(e) {
		$('html, body').animate({ scrollTop: $('#about').height() - 100 }, 300);

		e.preventDefault();
	}


	render() {
		return (
			<div className="tl-view home-view">
				<HomeCover />
				<HomeOverview />
				<HomeNarrative />
				<HomeMedia />
				<HomeTwitter />
				<HomePlanYourTrip />
				<HomeEvents />
				<HomeCatalog />
				<HomeLenders />
			</div>
		);
	}
}

export default HomeContent;
