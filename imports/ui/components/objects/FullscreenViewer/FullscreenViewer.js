import React from 'react';
import PropTypes from 'prop-types';
import 'openseadragon';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

class FullscreenViewer extends React.Component {
	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	componentDidMount() {
		const self = this;

		const mediumUrl = self.props.imageUrl;
		let dziUrl = `${self.props.imageUrl}.dzi`;

		// add exception for hew wid 2 mss
		if (~dziUrl.indexOf('hew_ms_widener_2')) {
			dziUrl = dziUrl.replace('jpg', 'jp2');
		}

		/* eslint new-cap: "off" */
		this.viewer = OpenSeadragon({
			id: 'fullscreen-image',
			prefixUrl: 'https://s3.amazonaws.com/beyond-words/',
			autoHideControls: true,
			// iOSDevice: true,
			showHomeControl: false,
			showFullPageControl: false,
			tileSources: {
				type: 'image',
				url: mediumUrl,
			},
			/*
			tileSources: dziUrl,
			*/
		});
		// this.viewer.setFullScreen(true);
		/* this.viewer.addHandler('canvas-double-click', () => {
			//const ifFullScreen = self.viewer.isFullPage();
			//self.viewer.setFullScreen(!ifFullScreen);
			//self.props.handleClose();
		});
		*/
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
			<div
				className={`fullscreen-viewer${this.props.open ? ' fullscreen-viewer--open' : ''}`}
				bodyStyle={styles.noPadding}
			>
				<div className="fullscreen-viewer-inner">
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
							style={styles.closeButton}
							onClick={self.handleClose}
						>
							<ContentClear />
						</IconButton>
					</div>
				</div>
			</div>
		);
	}
}

FullscreenViewer.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default FullscreenViewer;
