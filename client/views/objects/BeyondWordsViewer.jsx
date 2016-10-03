import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FontIcon from 'material-ui/FontIcon';
import { grey500, white } from 'material-ui/styles/colors';

BeyondWordsViewer = React.createClass({

	propTypes: {
		selectedObject: React.PropTypes.object,
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
				background: 'rgba(9,22,36,0.8)',
				padding: '0',
				display: 'block',
				justifyContent: 'none',
			},
			radioButtonGroup: {
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

		const slides = [
			'hew_ms_widener_2_0020.jpg',
			'hew_ms_widener_2_0021.jpg',
			'hew_ms_widener_2_0068.jpg',
			'hew_ms_widener_2_0069.jpg',
			'hew_ms_widener_2_0080.jpg',
			'hew_ms_widener_2_0081.jpg',
			'hew_ms_widener_2_0098.jpg',
			'hew_ms_widener_2_0099.jpg',
			'hew_ms_widener_2_0102.jpg',
			'hew_ms_widener_2_0103.jpg',
			'hew_ms_widener_2_0106.jpg',
			'hew_ms_widener_2_0107.jpg',
			'hew_ms_widener_2_0110.jpg',
			'hew_ms_widener_2_0111.jpg',
			'hew_ms_widener_2_0112.jpg',
			'hew_ms_widener_2_0113.jpg',
			'hew_ms_widener_2_0118.jpg',
			'hew_ms_widener_2_0119.jpg',
		];

		let authorTitle = '';

		if ('author_title' in object && typeof object.author_title !== 'undefined') {
			authorTitle = object.author_title;
		}


		return (
			<div className="embedded-beyondwords-viewer">
				<section className="page-content viewer-content">
					<Toolbar
						className="viewer-toolbar paper-shadow"
						style={styles.toolBar}
					>
						<ToolbarGroup
							className="toolbar-group toolbar-group-view-mode"
						>
							<RadioButtonGroup
								className="radio-button-group"
								style={styles.radioButtonGroup}
								name="view"
								defaultSelected="grid"
								onChange={this.handleViewChange}
							>
								<RadioButton
									value="grid"
									checkedIcon={<FontIcon
										style={styles.icon}
										className="mdi mdi-view-grid"
										color={white}
									/>}
									uncheckedIcon={<FontIcon
										style={styles.icon}
										className="mdi mdi-view-grid"
										color={grey500}
									/>}
									className="radio-button radio-button--grid"
									style={styles.radioButton}
								/>
								<RadioButton
									value="single"
									checkedIcon={<FontIcon
										style={styles.icon}
										className="mdi mdi-file-document-box"
										color={white}
									/>}
									uncheckedIcon={<FontIcon
										style={styles.icon}
										className="mdi mdi-file-document-box"
										color={grey500}
									/>}
									className="radio-button radio-button--single"
									style={styles.radioButton}
								/>
								<RadioButton
									value="spread"
									checkedIcon={<FontIcon
										style={styles.icon}
										className="mdi mdi-book-open-variant"
										color={white}
									/>}
									uncheckedIcon={<FontIcon
										style={styles.icon}
										className="mdi mdi-book-open-variant"
										color={grey500}
									/>}
									className="radio-button radio-button--spread"
									style={styles.radioButton}
								/>
							</RadioButtonGroup>
						</ToolbarGroup>
						<div className="viewer-title">
							<h3>{Utils.trunc(authorTitle, 60)}</h3>
						</div>

					</Toolbar>
					<div className="viewer-view">
						{(() => {
							switch (this.state.view) {
							case 'grid':
								return <ViewerGrid slides={slides} />;
							case 'single':
								return <ViewerSingle slides={slides} />;
							case 'spread':
								return <ViewerSpread slides={slides} />;
							default:
								return <p>There is a problem displaying this view.</p>;
							}
						})()}
					</div>

				</section>

			</div>
		);
	},
});
