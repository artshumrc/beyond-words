import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
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
		let self = this;
	    const settings = {
			centerMode: true,
			centerPadding: '0px',
			focusOnSelect: true,
			dots: true,
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ],
			afterChange: function (currentSlide) {
				if (typeof self.props.handleSlideChange === 'function') {
					self.props.handleSlideChange(currentSlide);
				}
			},
	    };
	    const styles = {
	    	thumbnailSlider: {
	    		background: "rgb(9, 22, 36)",
	    	},
	    };
		return (
			<Paper zDepth={4} style={styles.thumbnailSlider}>
				<Slider {...settings}>
				{this.props.thumbnailList.map((thumbnail, i) => {
					return (
						<div key={i}>
							<div className="image">
								<Paper zDepth={2}><img className="center-block" src={thumbnail} /></Paper>
							</div>
						</div>
					);
				})}
				</Slider>
			</Paper>
		);
	}
});

ThumbnailSlider.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
