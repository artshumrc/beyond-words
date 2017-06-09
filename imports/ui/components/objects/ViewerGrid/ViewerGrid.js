
import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Masonry from 'react-masonry-component/lib';
import muiTheme from '/imports/lib/muiTheme';
import isDblTouchTap from '/imports/ui/components/common/isDblTouchTap';

class ViewerGrid extends React.Component {

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
	render() {
		const self = this;
		const masonryOptions = {
			fitWidth: true,
			transitionDuration: 300,
			originLeft: true,
		};

		return (
			<div className="container viewer-container viewer-container--grid-view">
				{this.state.open ?
					<FullscreenViewer
						imageUrl={`https://s3.amazonaws.com/beyond-words/medium/${this.state.slide}`}
						open={this.state.open}
						handleClose={this.handleSlideClose}
					/>
					:
					''
				}
				<Masonry
					options={masonryOptions}
					className="grid-masonry"
				>
					{this.props.slides.map((slide, i) => (
						<div key={i} className="grid-thumbnail">
							<div className="image">
								<img
									alt="slide"
									onClick={this.handleSlideOpen.bind(this, slide)}
									className="center-block"
									src={`https://s3.amazonaws.com/beyond-words/thumbnails/${slide}`}
        />
							</div>
						</div>
				))}
				</Masonry>
			</div>
		);
	},
});
