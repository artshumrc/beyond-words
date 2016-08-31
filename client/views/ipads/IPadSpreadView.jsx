import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Paper from 'material-ui/Paper';

import Slider from 'react-slick';

IPadSpreadView = React.createClass({

	propTypes: {
		slides: React.PropTypes.array,
	},
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},
	getInitialState() {
		return {
			slickGoTo: 0,
			slide: "",
			open: false,
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
	handleSlideOpen(slide) {
		this.setState({
			open: true,
			slide: slide,
		});

	},
	handleSlideClose() {
		this.setState({
			open: false,
		});
	},
	handleSlideChange(currentSlide) {
		// check if currentSlide is valid
	    if(currentSlide < 0 || currentSlide >= this.props.slides.length) {
	      console.log("Invalid slide");
	      return;
	    }
	    if(currentSlide % 2 == 0) {
	      // left slide selected
	      this.setState({
	      	slickGoTo: currentSlide,
	      });
	    }
	    else {
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
	    };
		return (
			<div className="container">
				{this.state.open?
					<FullscreenViewer imageUrl={this.state.slide} open={this.state.open} handleClose={this.handleSlideClose}/>
					: null
				}
				<div className="row">
					<div className="col-xs-11 center-block clear">
						<Slider {...settings}>
						{this.props.slides.map((slide, i) => {
							return (
								<div key={i}>
									<div className="image">
										<Paper zDepth={2}>
											<img onClick={this.handleSlideOpen.bind(this,slide)} className="center-block" src={slide} />
										</Paper>
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

IPadSpreadView.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
