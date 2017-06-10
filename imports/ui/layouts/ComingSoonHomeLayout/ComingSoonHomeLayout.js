import React from 'react';
import PropTypes from 'prop-types';

class ComingSoonHomeLayout extends React.Component {
	componentDidMount() {
		if (typeof location.hash !== 'undefined' && location.hash.length > 0) {
			setTimeout(() => {
				$('html, body').animate({ scrollTop: $(location.hash).offset().top - 100 }, 300);
			}, 1000);
		}
	}
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
