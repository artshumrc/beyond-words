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

class IPadViewTyp215 extends React.Component {
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
			'/viewer/2Typ215-1v.jpg',
			'/viewer/3Typ215-2r.jpg',
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
		];

		const title = 'Byzantine Gospels (“Harvard Gospels”)';

		/*
		 * Some demo data for the info panel dropdown--to be replaced for each build
		 * for the iPads
		 */
		const object = this.data.object;


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
												<h2 className="card-title object-title">Byzantine Gospels (“Harvard Gospels”)</h2>
											</div>

											<div className="object-detail-meta">
												<label>Catalog No.</label>
												<span>23</span>
											</div>
											{true ?
												<div className="object-detail-meta">
													<label>Date</label>
													<span>c. 1000</span>
												</div>
										: ''}
											{true ?
												<div className="object-detail-meta">
													<label>Place</label>
													<span>Constantinople (?), Turkey</span>
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
													<span>MS Typ 215</span>
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
													Parchment, ff. 250 + ii, 280 x 220 mm
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

export default IPadViewTyp215;
