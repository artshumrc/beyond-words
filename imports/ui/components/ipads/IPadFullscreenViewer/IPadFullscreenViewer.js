
import React from 'react';
import PropTypes from 'prop-types';
import 'openseadragon';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

class IPadFullscreenViewer extends React.Component {
	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
	}

	componentDidMount() {
		const self = this;
		/* eslint new-cap: "off" */
		this.viewer = OpenSeadragon({
			id: 'fullscreen-image',
			prefixUrl: '/openseadragon/images/',
			autoHideControls: true,
			iOSDevice: true,
			showHomeControl: false,
			showFullPageControl: false,
			// TODO: Change this once dzi files are available
			tileSources: {
				type: 'image',
				url: self.props.imageUrl,
			},
		});
		this.viewer.setFullScreen(true);
		this.viewer.addHandler('canvas-double-click', () => {
			// const ifFullScreen = self.viewer.isFullPage();
			// self.viewer.setFullScreen(!ifFullScreen);
			// self.props.handleClose();
		});
	}

	handleClose() {
		if (typeof this.props.handleClose === 'function') {
			this.props.handleClose();
			this.viewer.setFullScreen(false);
		}
	}

	render() {
		const self = this;
		const styles = {
			fullscreenImage: {
				height: 500,
			},
			noPadding: {
				padding: 0,
			},
			closeButton: {
				position: 'absolute',
				right: '10px',
				top: '10px',
				zIndex: 1000,
				background: 'rgba(0, 0, 0, 0.9)',
				border: '1px solid #fff',
				borderRadius: '50%',

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
					className="fullscreen-viewer-close"
					style={styles.closeButton}
					onClick={this.handleClose}
				>
					<ContentClear />
				</IconButton>
				<div id="fullscreen-image" style={styles.fullscreenImage} >
					<IconButton
						className="fullscreen-viewer-close"
						tooltip="Close" style={styles.closeButton}
						onClick={self.handleClose}
					>
						<ContentClear />
					</IconButton>
				</div>
			</Dialog>
		);
	}
}

IPadFullscreenViewer.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default IPadFullscreenViewer;
