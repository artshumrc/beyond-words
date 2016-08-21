import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Paper from 'material-ui/Paper';

import Slider from 'react-slick';

IPadSpreadView = React.createClass({

	propTypes: {
		thumbnailList: React.PropTypes.array,
	},
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},
	getDefaultProps() {
		return {
			thumbnailList: [
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
	render() {
		const spread_settings = {
	      focusOnSelect: true,
	      infinite: true,
	      slidesToShow: 2,
	      slidesToScroll: 1,
	    };
	    const thumbnail_settings = {
	      focusOnSelect: true,
	      dots: true,
	      infinite: true,
	      slidesToShow: 4,
	      slidesToScroll: 1,
	    };
	    const styles = {
	    	thumbnailSlider: {
	    		background: "#232F3C",
	    	},
	    };
		return (
			<div className="container">
				<Slider {...spread_settings}>
				{this.props.thumbnailList.map((thumbnail, i) => {
					return (
						<div key={i}>
							<div className="image">
								<img className="center-block" src={thumbnail} />
							</div>
						</div>
					);
				})}
				</Slider>
				<Paper zDepth={5} style={styles.thumbnailSlider}>
					<Slider {...thumbnail_settings}>
					{this.props.thumbnailList.map((thumbnail, i) => {
						return (
							<div key={i}>
								<div className="image">
									<img className="center-block" src={thumbnail} />
								</div>
							</div>
						);
					})}
					</Slider>
				</Paper>
			</div>
		);
	}
});

IPadSpreadView.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

