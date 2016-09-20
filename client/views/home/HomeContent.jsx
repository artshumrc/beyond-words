HomeContent = React.createClass({

	componentDidMount() {
		/*
		* Init wow animations on homepage
		*/
		// let wow = new WOW().init();
	},

	scrollToAbout(e) {
		$('html, body').animate({ scrollTop: $('#about').height() - 100 }, 300);

		e.preventDefault();
	},


	render() {
		return (
			<div className="tl-view home-view">
				<HomeCover />
				<HomeOverview />
				<HomeNarrative />
				<HomeTwitter />
				<HomePlanYourTrip />
				<HomeEvents />
				<HomeCatalog />
				<HomeLenders />
			</div>
		);
	},
});
