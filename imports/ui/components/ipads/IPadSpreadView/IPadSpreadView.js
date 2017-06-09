import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

import Slider from 'react-slick';

IPadSpreadView = React.createClass({

	propTypes: {
		slides: React.PropTypes.array,
	},

	getDefaultProps() {
		return {
			slides: [
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
			],
		};
	},

	getInitialState() {
		return {
			slickGoTo: 0,
			slide: '',
			open: false,
		};
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	handleSlideOpen(slide) {
		this.setState({
			open: true,
			slide,
		});
	},

	handleSlideClose() {
		this.setState({
			open: false,
		});
	},

	handleSlideChange(currentSlide) {
		// check if currentSlide is valid
		if (currentSlide < 0 || currentSlide >= this.props.slides.length) {
			console.log('Invalid slide');
			return;
		}
		if (currentSlide % 2 === 0) {
			// left slide selected
			this.setState({
				slickGoTo: currentSlide,
			});
		} else {
			// right slide selected
			this.setState({
				slickGoTo: currentSlide - 1,
			});
		}
	},

	scrollToSlide(currentSlide) {
		// check if currentSlide is valid
		if (currentSlide < 0 || currentSlide >= this.props.slides.length) {
			console.log('Invalid slide');
			return;
		}
		if (currentSlide % 2 === 0) {
			// left slide selected
			this.setState({
				slickGoTo: currentSlide,
			});
		} else {
			// right slide selected
			this.setState({
				slickGoTo: currentSlide - 1,
			});
		}
	},


	render() {
		const settings = {
			focusOnSelect: true,
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 2,
			slickGoTo: this.state.slickGoTo || 0,
			arrows: false,
		};
		return (
			<div className="container ipad-container ipad-container--spread-view">
				{this.state.open ?
					<IPadFullscreenViewer
						imageUrl={this.state.slide}
						open={this.state.open}
						handleClose={this.handleSlideClose}
					/>
					:
					''
				}
				<div className="row">
					<div className="col-xs-11 center-block clear">
						<Slider className="spread-view-slider"{...settings}>
							{this.props.slides.map((slide, i) => (
								<div key={i}>
									<div className="image">
										<Paper zDepth={0}>
											<img
												alt="slide"
												onClick={this.handleSlideOpen.bind(this, slide)}
												className="center-block"
												src={slide}
           />
										</Paper>
									</div>
								</div>
						))}
						</Slider>
						<p className="coaching-text">
							Swipe to turn the page. Tap to zoom in.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 center-block clear">
						<ThumbnailScrollSpread
							activeSlide={this.state.slickGoTo}
							thumbnailList={this.props.slides}
							scrollToSlide={this.scrollToSlide}
						/>
					</div>
				</div>
			</div>
		);
	},
});

IPadSpreadView.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
