import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

import Slider from 'react-slick';

ThumbnailSlider = React.createClass({

	propTypes: {
		thumbnailList: React.PropTypes.array.isRequired,
		handleSlideChange: React.PropTypes.func.isRequired,
	},
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},
	render() {
		const self = this;
		const settings = {
			centerMode: true,
			centerPadding: '0px',
			focusOnSelect: true,
			dots: false,
			arrows: false,
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
			],
			afterChange(currentSlide) {
				if (typeof self.props.handleSlideChange === 'function') {
					self.props.handleSlideChange(currentSlide);
				}
			},
		};
		const styles = {
			thumbnailSlider: {
				background: 'rgb(9, 22, 36)',
			},
		};

		return (
			<Paper
				zDepth={4}
				style={styles.thumbnailSlider}
				className="thumbnail-slider"
			>
				<Slider {...settings}>
					{this.props.thumbnailList.map((thumbnail, i) => (
						<div key={i}>
							<div className="image">
								<Paper zDepth={2}>
									<img alt="thumbnail" className="center-block" src={thumbnail} />
								</Paper>
							</div>
						</div>
				))}
				</Slider>
			</Paper>
		);
	},
});

ThumbnailSlider.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
