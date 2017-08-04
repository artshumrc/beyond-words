import React from 'react';
import PropTypes from 'prop-types';

import HomeCover from '/imports/ui/components/home/HomeCover';
import HomeOverview from '/imports/ui/components/home/HomeOverview';
import HomeNarrative from '/imports/ui/components/home/HomeNarrative';
import HomeMedia from '/imports/ui/components/home/HomeMedia';
import HomeTwitter from '/imports/ui/components/home/HomeTwitter';
import HomePlanYourTrip from '/imports/ui/components/home/HomePlanYourTrip';
import HomeEvents from '/imports/ui/components/home/HomeEvents';
import HomeCatalog from '/imports/ui/components/home/HomeCatalog';
import HomeLenders from '/imports/ui/components/home/HomeLenders';

class HomeContent extends React.Component {
	componentDidMount() {
		if (window.location.hash.length > 0) {
			setTimeout(() => {
				$('html, body').animate({
					scrollTop: $(window.location.hash).offset().top
				}, 300);
			}, 1000);
		}
	}


	render() {
		return (
			<div className="archimedes-view home-view">
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
