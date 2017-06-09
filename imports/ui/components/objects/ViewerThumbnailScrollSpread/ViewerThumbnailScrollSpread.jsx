import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

ViewerThumbnailScrollSpread = React.createClass({

	propTypes: {
		thumbnailList: React.PropTypes.array.isRequired,
		activeSlide: React.PropTypes.number.isRequired,
		scrollToSlide: React.PropTypes.func.isRequired,
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
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
							className={(this.props.activeSlide === (i - 1) || this.props.activeSlide === (i)) ?
								'image thumbnail-image-scroll thumbnail-image--active-slide'
								: 'image thumbnail-image-scroll'
							}
							onClick={self.props.scrollToSlide.bind(null, i)}
						>
							<img
								alt="thumbnail"
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
