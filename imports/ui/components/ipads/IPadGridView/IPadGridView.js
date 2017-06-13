
import React from 'react';
import PropTypes from 'prop-types';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import isDblTouchTap from '/imports/ui/components/common/isDblTouchTap';

class IPadGridView extends React.Component {

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
	}

	getInitialState() {
		return {
			slide: '',
			open: false,
		};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	handleSlideOpen(slide) {
		this.setState({
			open: true,
			slide,
		});
	}

	handleSlideClose() {
		this.setState({
			open: false,
		});
	}

	render() {
		const self = this;
		return (
			<div className="container ipad-container ipad-container--grid-view">
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
					{this.props.slides.map((slide, i) => (
						<div key={i} className="grid-thumbnail col-xs-6 col-sm-4">
							<div className="image">
								<Paper zDepth={2}>
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
				</div>
			</div>
		);
	}
}

IPadGridView.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};

IPadGridView.propTypes = {
	slides: PropTypes.array,
};

export default IPadGridView;
