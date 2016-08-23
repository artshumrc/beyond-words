import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Paper from 'material-ui/Paper';

import Slider from 'react-slick';

IPadSingleView = React.createClass({

	propTypes: {
		slides: React.PropTypes.array,
	},
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},
	getInitialState() {
		return {
			slickGoTo: 0,
		}
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
		}
	},
	handleSlideChange(currentSlide) {
		// check if currentSlide is valid
	    if(currentSlide < 0 || currentSlide >= this.props.slides.length) {
	      console.log("Invalid slide");
	      return;
	    }
	    this.setState({
	    	slickGoTo: currentSlide,
	    });
	},
	render() {
		const settings = {
	      focusOnSelect: true,
	      infinite: true,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      slickGoTo: this.state.slickGoTo || 0,
	    };
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-11 center-block clear">
						<Slider {...settings}>
						{this.props.slides.map((slide, i) => {
							return (
								<div key={i}>
									<div className="image">
										<h5>{i}</h5>
										<Paper zDepth={2}><img className="center-block" src={slide} /></Paper>
									</div>
								</div>
							);
						})}
						</Slider>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-11 center-block clear">
						<ThumbnailSlider
							thumbnailList={this.props.slides}
							handleSlideChange={this.handleSlideChange}
						/>
					</div>
				</div>
			</div>
		);
	}
});

IPadSingleView.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

