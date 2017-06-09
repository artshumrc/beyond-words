
import React from 'react';
import PropTypes from 'prop-types';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class ViewerThumbnailScroll extends React.Component {

	propTypes: {
		thumbnailList: PropTypes.array.isRequired,
		activeSlide: PropTypes.number.isRequired,
		scrollToSlide: PropTypes.func.isRequired,
	},

	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	render() {
		const self = this;

		return (
			<div
				className="thumbnail-scroll"
			>
				<div className="thumbnail-scroll-inner">
					{this.props.thumbnailList.map((thumbnail, i) => (
						<div
							key={i}
							className={(this.props.activeSlide === i) ?
								'image thumbnail-image-scroll thumbnail-image--active-slide'
								: 'image thumbnail-image-scroll'
							}
							onClick={self.props.scrollToSlide.bind(null, i)}
						>
							<img
								alt={thumbnail}
								className="center-block"
								src={`https://s3.amazonaws.com/beyond-words/thumbnails/${thumbnail}`}
							/>
						</div>
					))}
				</div>
			</div>
		);
	},
});
