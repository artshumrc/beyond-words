/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FontIcon from 'material-ui/FontIcon';
import { grey500, white } from 'material-ui/styles/colors';

class IPadViewRich7 extends React.Component {

	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	}

	getInitialState() {
		return {
			view: 'grid',
			videoOpen: false,
			infoModalOpen: false,
		};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
	}

	getMeteorData() {
		const query = {};
		const object = {};

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
	}

	handleViewChange(event, value) {
		this.setState({
			view: value,
		});
	}

	handleClose() {
		this.setState({
			videoOpen: false,
		});
	}

	showVideo() {
		this.setState({
			videoOpen: true,
		});
	}

	handleCloseInfoModal() {
		this.setState({
			infoModalOpen: false,
		});
	}

	showInfoModal() {
		this.setState({
			infoModalOpen: true,
		});
	}

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
			'/viewer/5981100.jpg',
			'/viewer/5981102.jpg',
			'/viewer/5981104.jpg',
			'/viewer/5981106.jpg',
			'/viewer/5981108.jpg',
			'/viewer/5981110.jpg',
			'/viewer/5981112.jpg',
			'/viewer/5981114.jpg',
			'/viewer/5981116.jpg',
			'/viewer/5981118.jpg',
			'/viewer/5981120.jpg',
			'/viewer/5981122.jpg',
			'/viewer/5981124.jpg',
			'/viewer/5981126.jpg',
			'/viewer/5981128.jpg',
			'/viewer/5981130.jpg',
			'/viewer/5981132.jpg',
			'/viewer/5981134.jpg',
			'/viewer/5981136.jpg',
			'/viewer/5981138.jpg',
			'/viewer/5981140.jpg',
			'/viewer/5981142.jpg',
			'/viewer/5981144.jpg',
			'/viewer/5981146.jpg',
			'/viewer/5981148.jpg',
			'/viewer/5981150.jpg',
			'/viewer/5981156.jpg',
			'/viewer/5981158.jpg',
			'/viewer/5981164.jpg',
			'/viewer/5981166.jpg',
			'/viewer/5981172.jpg',
			'/viewer/5981174.jpg',
			'/viewer/5981180.jpg',
			'/viewer/5981182.jpg',
			'/viewer/5981188.jpg',
			'/viewer/5981190.jpg',
			'/viewer/5981204.jpg',
			'/viewer/5981206.jpg',
			'/viewer/5981212.jpg',
			'/viewer/5981214.jpg',
			'/viewer/5981220.jpg',
			'/viewer/5981222.jpg',
			'/viewer/5981228.jpg',
			'/viewer/5981230.jpg',
			'/viewer/5981244.jpg',
			'/viewer/5981246.jpg',
			'/viewer/5981284.jpg',
			'/viewer/5981286.jpg',
			'/viewer/5981350.jpg',
			'/viewer/5981408.jpg',
			'/viewer/5981410.jpg',
			'/viewer/5981444.jpg',
			'/viewer/5981446.jpg',
		];

		const title = 'Book of hours (“Habert du Berry d’Artois-Hoe Hours”), use of Sens and Troyes';

		/*
		 * Some demo data for the info panel dropdown--to be replaced for each build
		 * for the iPads
		 */
		const object = this.props.object;


		return (
			<div className="page page-ipad">
				{iframe.length ?
					<iframe src={iframe} width="100%" height="100%" />
					:
						<section className="page-content ipad-content">
							<Toolbar
								className="ipad-toolbar paper-shadow"
								style={styles.toolBar}
			 >
								<ToolbarGroup
									className="toolbar-group toolbar-group-info"
				>
									<FontIcon
										onClick={this.showInfoModal}
										style={styles.icon}
										className="mdi mdi-information"
										color={grey500}
										hoverColor={white}
				 />
									{/* <FontIcon
									onClick={this.showVideo}
									style={styles.icon}
									className="mdi mdi-video"
									color={grey500}
									hoverColor={white}
								/>*/}
								</ToolbarGroup>

								<h3>{title}</h3>

								<ToolbarGroup
									className="toolbar-group toolbar-group-view-mode"
				>
									<RadioButtonGroup
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
											style={styles.radioButton}
					/>
									</RadioButtonGroup>
								</ToolbarGroup>
							</Toolbar>

							{(() => {
								switch (this.state.view) {
								case 'grid':
									return <IPadGridView slides={slides} />;
								case 'single':
									return <IPadSingleView slides={slides} />;
								case 'spread':
									return <IPadSpreadView slides={slides} />;
								default:
									return <p>There is a problem displaying this view.</p>;
								}
							})()}

							<Dialog
								className="fullscreen-video"
								open={this.state.videoOpen}
								onRequestClose={this.handleClose}
								bodyStyle={styles.noPadding}
			 >
								<IconButton
									className="close-fullscreen"
									style={styles.closeButton}
									onClick={this.handleClose}
				>
									<ContentClear />
								</IconButton>
								<div className="viewer-video">
									<video controls>
										<source
											src="/videos/making_manuscripts_binding01.mp4"
											type="video/mp4"
					/>
									</video>
								</div>

							</Dialog>
							<div
								className={(this.state.infoModalOpen ? 'info-modal lowered' : 'info-modal')}
			 >
								<IconButton
									className="close-fullscreen"
									style={styles.closeButton}
									onClick={this.handleCloseInfoModal}
				>
									<ContentClear />
								</IconButton>
								<section className="object-details">
									<div className="object-details-inner">
										<div className="object-detail-text-wrap">

											<div className="object-detail-header">
												<h2 className="card-title object-title">Book of hours (“Habert du Berry d’Artois-Hoe Hours”), use of Sens and Troyes</h2>
											</div>

											<div className="object-detail-meta">
												<label>Catalog No.</label>
												<span>109</span>
											</div>
											{true ?
												<div className="object-detail-meta">
													<label>Date</label>
													<span>c. 1470</span>
												</div>
										: ''}
											{true ?
												<div className="object-detail-meta">
													<label>Place</label>
													<span>Troyes, France</span>
												</div>
										: ''}
											{true ?
												<div className="object-detail-meta">
													<label>Institution</label>
													<span>Harvard University</span>
												</div>
										: ''}
											{true ?
												<div className="object-detail-meta">
													<label>Collection</label>
													<span>Houghton Library</span>
												</div>
										: ''}
											{true ?
												<div className="object-detail-meta">
													<label>Shelfmark</label>
													<span>MS Richardson 7</span>
												</div>
										: ''}
											{object.former_shelfmark ?
												<div className="object-detail-meta">
													<label>Former Shelfmark</label>
													<span>Ms. 1510</span>
												</div>
										: ''}
											{object.scribe ?
												<div className="object-detail-meta">
													<label>Scribe</label>
													<span>{object.scribe}</span>
												</div>
										: ''}
											{object.printer ?
												<div className="object-detail-meta">
													<label>Printer</label>
													<span>{object.printer}</span>
												</div>
										: ''}
											{true ?
												<div className="object-detail-meta">
													<label>Illuminator</label>
													<span>Master of the Troyes Missal</span>
												</div>
										: ''}
											{object.externalUrl ?
												<div className="object-detail-meta">
													<label>External Link</label>
													<span>
														<a
															href={object.externalUrl}
															target="_blank"
															rel="noopener noreferrer"
							>
															{object.externalUrl}
														</a>
													</span>
												</div>
										: ''}
											{true ?
												<div className="object-detail-meta">
													<label>Description</label>
													<span>
													Parchment, ff. i + 237, 266 x 184 (120 x 83) mm
													</span>
												</div>
										: ''}

										</div>

										{/* <div className="object-detail-text-wrap">

										<div className="object-detail-header">
											<h2 className="card-title object-title">{object.author_title}</h2>
										</div>

										<div className="object-detail-meta">
											<label>Catalog No.</label>
											<span>{object.catalog_n}</span>
										</div>
										{object.date ?
											<div className="object-detail-meta">
												<label>Date</label>
												<span>{object.date}</span>
											</div>
										: ''}
										{object.place ?
											<div className="object-detail-meta">
												<label>Place</label>
												<span>{object.place}</span>
											</div>
										: ''}
										{object.institution ?
											<div className="object-detail-meta">
												<label>Institution</label>
												<span>{object.institution}</span>
											</div>
										: ''}
										{object.collection ?
											<div className="object-detail-meta">
												<label>Collection</label>
												<span>{object.collection}</span>
											</div>
										: ''}
										{object.shelfmark ?
											<div className="object-detail-meta">
												<label>Shelfmark</label>
												<span>{object.shelfmark}</span>
											</div>
										: ''}
										{object.former_shelfmark ?
											<div className="object-detail-meta">
												<label>Former Shelfmark</label>
												<span>{object.former_shelfmark}</span>
											</div>
										: ''}
										{object.scribe ?
											<div className="object-detail-meta">
												<label>Scribe</label>
												<span>{object.scribe}</span>
											</div>
										: ''}
										{object.printer ?
											<div className="object-detail-meta">
												<label>Printer</label>
												<span>{object.printer}</span>
											</div>
										: ''}
										{object.illumintator ?
											<div className="object-detail-meta">
												<label>Illuminator</label>
												<span>{object.illuminator}</span>
											</div>
										: ''}
										{object.externalUrl ?
											<div className="object-detail-meta">
												<label>External Link</label>
												<span>
													<a
														href={object.externalUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														{object.externalUrl}
													</a>
												</span>
											</div>
										: ''}
										{object.illumintator ?
											<div className="object-detail-meta">
												<label>Description</label>
												<span>{object.description}</span>
											</div>
										: ''}

									</div> */}

									</div>

								</section>

							</div>

						</section>
				}
			</div>
		);
	}
}

export default IPadViewRich7;
