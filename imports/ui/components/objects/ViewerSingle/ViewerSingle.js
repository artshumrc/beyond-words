
import React from 'react';
import PropTypes from 'prop-types';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Slider from 'react-slick';

class ViewerSingle extends React.Component {

	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	}

	getDefaultProps() {
		return {
			slides: [
				'/images/Januarius_0001.tif',
			],
		};
	}

	constructor(props) {
		super(props);
		this.state = {
			slickGoTo: 0,
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
			slickGoTo: this.state.slickGoTo,
		});
	}

	handleSlideChange(currentSlide) {
		// check if currentSlide is valid
		if (currentSlide < 0 || currentSlide >= this.props.slides.length) {
			console.log('Invalid slide');
			return;
		}
		this.setState({
			slickGoTo: currentSlide,
		});
	}

	scrollToSlide(currentSlide) {
		// check if currentSlide is valid
		if (currentSlide < 0 || currentSlide >= this.props.slides.length) {
			console.log('Invalid slide');
			return;
		}
		this.setState({
			slickGoTo: currentSlide,
		});
	}

	render() {
		const settings = {
			focusOnSelect: true,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			slickGoTo: this.state.slickGoTo || 0,
			arrows: true,
		};

		const supportsObjectFit = Modernizr.testProp('object-fit');

		return (
			<div className="container viewer-container viewer-container--single-view">
				{this.state.open ?
					<FullscreenViewer
						imageUrl={`https://s3.amazonaws.com/beyond-words/medium/${this.state.slide}`}
						open={this.state.open}
						handleClose={this.handleSlideClose}
					/>
					:
					''
				}
				<Slider
					className="single-view-slider"
					{...settings}
				>
					{this.props.slides.map((slide, i) => (
						<div
							key={i}
							className="image"
						>
							<img
								onClick={this.handleSlideOpen.bind(this, slide)}
								className="center-block"
								style={{backgroundImage: `url("https://s3.amazonaws.com/beyond-words/medium/${slide}")`}}
								src={(supportsObjectFit) ? `https://s3.amazonaws.com/beyond-words/medium/${slide}` : ''}
								alt={slide}
							/>
						</div>
				))}
				</Slider>
				<div className="bottom-panel">
					<ViewerThumbnailScroll
						activeSlide={this.state.slickGoTo}
						thumbnailList={this.props.slides}
						scrollToSlide={this.scrollToSlide}
					/>
				</div>
			</div>
		);
	}
}

ViewerSingle.propTypes = {
	slides: PropTypes.array,
};

export default ViewerSingle;
