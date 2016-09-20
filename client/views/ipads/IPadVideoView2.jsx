import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FontIcon from 'material-ui/FontIcon';
import { grey500, white } from 'material-ui/styles/colors';

IPadVideoView2 = React.createClass({

	propTypes: {
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	mixins: [ReactMeteorData],

	getInitialState() {
		return {
			view: 'grid',
			videoOpen: false,
			infoModalOpen: false,
		};
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	getMeteorData() {
		const query = {};
		let object = {};

		/*
		const objectSubscription = Meteor.subscribe('objects', {});
		if (objectSubscription.ready()) {
			object = Objects.find().fetch()[0];// .findOne({});
		}
		*/

		return {
			object,
			ipad: IPads.find(query, { sort: { title: 1 } }).fetch(),
			currentUser: Meteor.user(),
		};
	},

	handleViewChange(event, value) {
		this.setState({
			view: value,
		});
	},

	handleClose() {
		this.setState({
			videoOpen: false,
		});
	},
	showVideo() {
		this.setState({
			videoOpen: true,
		});
	},
	handleCloseInfoModal() {
		this.setState({
			infoModalOpen: false,
		});
	},
	showInfoModal() {
		this.setState({
			infoModalOpen: true,
		});
	},

	render() {
		const styles = {
			toolBar: {
				height: 'auto',
				background: '#091624',
				padding: '1%',
			},
			radioButtonGroup: {
				display: 'flex',
			},
			radioButton: {
				width: 'auto',
			},
			icon: {
				lineHeight: 0,
			},
			noPadding: {
				padding: 0,
			},
			closeButton: {
				position: 'absolute',
				zIndex: 1000,
				background: 'rgba(0, 0, 0, 0.5)',
				color: '#fffff',

			},
		};

		// const iframe = 'http://medievalscrolls.com/manifests/hls_ms_180.html';
		const iframe = '';

		const slides = [
			'/viewer/1Typ215-1r.jpg',
			'/viewer/2Typ215-1v.jpg',
			'/viewer/3Typ215-2r.jpg',
			'/viewer/4Typ215-2v.jpg',
			'/viewer/5Typ215-3r.jpg',
			'/viewer/6Typ215-5v.jpg',
			'/viewer/7Typ215-6.jpg',
			'/viewer/8Typ215-6r.jpg',
			'/viewer/9Typ215-75v.jpg',
			'/viewer/10Typ215-76.jpg',
			'/viewer/11Typ215-76r.jpg',
			'/viewer/12Typ215-121v.jpg',
			'/viewer/13Typ215-122.jpg',
			'/viewer/14Typ215-122r.jpg',
			'/viewer/15Typ215-195v.jpg',
			'/viewer/16Typ215-196r.jpg',
		];

		const title = 'Byzantine Gospels (“Harvard Gospels”)';

		/*
		 * Some demo data for the info panel dropdown--to be replaced for each build
		 * for the iPads
		 */
		const object = this.data.object;

		/*
		<div className="ipad-video video-1">
			<span className="video-title">Illuminating Manuscripts</span>
			<video id="video1" controls>
				<source
					src="/videos/making_manuscripts_illumination.mp4"
				></source>
			</video>
		</div>
		<div className="ipad-video video-2">
			<span className="video-title">Medieval Binding</span>
			<video id="video2" controls>
				<source
					src="/videos/making_manuscripts_binding.mp4"
				/>
			</video>
		</div>
		*/

		return (
			<div className="page page-ipad page-ipad-videos">
				<div className="ipad-video video-1">
					<span className="video-title">Making Parchment</span>
					<video id="video1" controls>
						<source
							src="/videos/Parchment_1080.mp4"
						></source>
					</video>
				</div>
				<div className="ipad-video video-2">
					<span className="video-title">The Work of a Scribe</span>
					<video id="video2" controls>
						<source
							src="/videos/Script_1080.mp4"
						/>
					</video>
				</div>
			</div>
		);
	},
});
