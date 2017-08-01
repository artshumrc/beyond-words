
import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Masonry from 'react-masonry-component/lib';
import muiTheme from '/imports/lib/muiTheme';
import isDblTouchTap from '/imports/ui/components/common/isDblTouchTap';

class ViewerGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slide: '',
			open: false,
		};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
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
	}
}

ViewerGrid.propTypes = {
	slides: PropTypes.array,
};
ViewerGrid.defaultProps = {
	slides: [
		'/images/BannerSQ.jpg',
	],
};

ViewerGrid.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};


export default ViewerGrid;
