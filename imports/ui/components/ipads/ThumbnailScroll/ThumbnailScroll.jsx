import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

ThumbnailScroll = React.createClass({

	propTypes: {
		thumbnailList: React.PropTypes.array.isRequired,
		activeSlide: React.PropTypes.number.isRequired,
		scrollToSlide: React.PropTypes.func.isRequired,
	},
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},
	render() {
		const self = this;
		const styles = {
			thumbnailSlider: {
				background: 'rgb(9, 22, 36)',
			},
		};

		return (
			<Paper
				zDepth={4}
				style={styles.thumbnailSlider}
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
							<Paper zDepth={2}>
								<img alt="thumbnail" className="center-block" src={thumbnail} />
							</Paper>
						</div>
					))}
				</div>
			</Paper>
		);
	},
});

ThumbnailScroll.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
