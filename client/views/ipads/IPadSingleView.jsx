import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

import Slider from 'react-slick';

IPadSingleView = React.createClass({

	propTypes: {
		slides: React.PropTypes.array,
	},

	getDefaultProps() {
		return {
			slides: [
				'/images/Januarius_0001.tif',
				'/images/Januarius_0002.tif',
				'/images/Januarius_0003.tif',
				'/images/Januarius_0004.tif',
				'/images/Januarius_0005.tif',
				'/images/Januarius_0006.tif',
				'/images/Januarius_0007.tif',
				'/images/Januarius_0008.tif',
				'/images/Januarius_0009.tif',
				'/images/Januarius_0010.tif',
				'/images/Januarius_0011.tif',
				'/images/Januarius_0012.tif',
				'/images/Januarius_0013.tif',
				'/images/Januarius_0014.tif',
				'/images/Januarius_0015.tif',
				'/images/Januarius_0016.tif',
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
			slickGoTo: this.state.slickGoTo,
		});
	},

	handleSlideChange(currentSlide) {
		// check if currentSlide is valid
		if (currentSlide < 0 || currentSlide >= this.props.slides.length) {
			console.log('Invalid slide');
			return;
		}
		this.setState({
			slickGoTo: currentSlide,
		});
	},

	scrollToSlide(currentSlide) {
		// check if currentSlide is valid
		if (currentSlide < 0 || currentSlide >= this.props.slides.length) {
			console.log('Invalid slide');
			return;
		}
		this.setState({
			slickGoTo: currentSlide,
		});
	},

	render() {
		const settings = {
			focusOnSelect: true,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			slickGoTo: this.state.slickGoTo || 0,
			arrows: false,
		};
		return (
			<div className="container ipad-container ipad-container--single-view">
				{this.state.open ?
					<FullscreenViewer
						imageUrl={this.state.slide}
						open={this.state.open}
						handleClose={this.handleSlideClose}
					/>
					:
					''
				}
				<div className="row">
					<div className="col-xs-8 center-block clear">
						<Slider
							className="single-view-slider"
							{...settings}
						>
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
						<ThumbnailScroll
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

IPadSingleView.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
