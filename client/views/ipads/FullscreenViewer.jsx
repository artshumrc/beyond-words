import 'openseadragon';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

FullscreenViewer = React.createClass({

	propTypes: {
		imageUrl: React.PropTypes.string.isRequired,
		open: React.PropTypes.bool.isRequired,
		handleClose: React.PropTypes.func.isRequired,
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	componentDidMount() {
		const self = this;
		/* eslint new-cap: "off" */
		this.viewer = OpenSeadragon({
			id: 'fullscreen-image',
			prefixUrl: '/openseadragon/images/',
			// TODO: Change this once dzi files are available
			tileSources: {
				type: 'image',
				url: self.props.imageUrl,
			},
		});
		this.viewer.setFullScreen(true);
		this.viewer.addHandler('canvas-double-click', () => {
			const ifFullScreen = self.viewer.isFullPage();
			self.viewer.setFullScreen(!ifFullScreen);
		});
	},

	handleClose() {
		if (typeof this.props.handleClose === 'function') {
			this.props.handleClose();
		}
	},

	render() {
		const styles = {
			fullscreenImage: {
				height: 500,
			},
			noPadding: {
				padding: 0,
			},
			closeButton: {
				position: 'absolute',
				right: 0,
				zIndex: 1000,
				background: 'rgba(0, 0, 0, 0.5)',

			},
		};
		return (
			<Dialog
				open={this.props.open}
				className="fullscreen-viewer"
				onRequestClose={this.handleClose}
				bodyStyle={styles.noPadding}
			>
				<IconButton
					tooltip="Close" style={styles.closeButton}
					onClick={this.handleClose}
				>
					<ContentClear />
				</IconButton>
				<div id="fullscreen-image" style={styles.fullscreenImage} />
			</Dialog>
		);
	},
});

FullscreenViewer.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
