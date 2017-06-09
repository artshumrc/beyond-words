
import React from 'react';
import PropTypes from 'prop-types';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Slider from 'react-slick';

class ViewerSpread extends React.Component {

	propTypes: {
		slides: PropTypes.array,
	},

	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	},

	getDefaultProps() {
		return {
			slides: [
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
			arrows: true,
		};

		const supportsObjectFit = Modernizr.testProp('object-fit');

		return (
			<div className="container viewer-container viewer-container--spread-view">
				{this.state.open ?
					<FullscreenViewer
						imageUrl={`https://s3.amazonaws.com/beyond-words/medium/${this.state.slide}`}
						open={this.state.open}
						handleClose={this.handleSlideClose}
					/>
					:
					''
				}
				<Slider className="spread-view-slider"{...settings}>
					{this.props.slides.map((slide, i) => (
						<div key={i}>
							<div className="image">
								<img
									onClick={this.handleSlideOpen.bind(this, slide)}
									className="center-block"
									style={{backgroundImage: `url("https://s3.amazonaws.com/beyond-words/medium/${slide}")`}}
									src={(supportsObjectFit) ? `https://s3.amazonaws.com/beyond-words/medium/${slide}` : ''}
        />
							</div>
						</div>
				))}
				</Slider>
				<div className="bottom-panel">
					<ViewerThumbnailScrollSpread
						activeSlide={this.state.slickGoTo}
						thumbnailList={this.props.slides}
						scrollToSlide={this.scrollToSlide}
					/>
				</div>
			</div>
		);
	},
});
