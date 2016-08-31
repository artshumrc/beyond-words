
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';

HeaderCatalog = React.createClass({

	propTypes: {
		filters: React.PropTypes.array,
		toggleSearchTerm: React.PropTypes.func,
		handleChangeTextsearch: React.PropTypes.func,
		handleChangeDate: React.PropTypes.func,
		catalogTitleText: React.PropTypes.string,
		selectedObject: React.PropTypes.object,
		toggleCatalogLayout: React.PropTypes.func,
		closeSelectedObject: React.PropTypes.func,
		catalogLayout: React.PropTypes.string,
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	getInitialState() {
		return {
			leftMenuOpen: false,
			rightMenuOpen: false,
		};
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	toggleLeftMenu() {
		this.setState({
			leftMenuOpen: !this.state.leftMenuOpen,
		});
	},

	closeLeftMenu() {
		this.setState({
			leftMenuOpen: false,
		});
	},
	toggleRightMenu() {
		this.setState({
			rightMenuOpen: !this.state.rightMenuOpen,
		});
	},

	closeRightMenu() {
		this.setState({
			rightMenuOpen: false,
		});
	},

	goBack() {
		window.history.back();
	},

	render() {
		const styles = {
			flatButton: {
				width: 'auto',
				minWidth: 'none',
				height: '55px',
				padding: '10px 5px',
			},
			flatIconButton: {
				padding: '10px 20px',
				width: 'auto',
				minWidth: 'none',
				height: '55px',

			},

		};


		return (
			<div>
				<LeftMenu
					open={this.state.leftMenuOpen}
					closeLeftMenu={this.closeLeftMenu}
				/>
				<ObjectsSearchToolsPanel
					filters={this.props.filters}
					toggleSearchTerm={this.props.toggleSearchTerm}
					handleChangeDate={this.props.handleChangeDate}
					handleChangeTextsearch={this.props.handleChangeTextsearch}
					open={this.state.rightMenuOpen}
					closeLeftMenu={this.closeRightMenu}
				/>
				<header className="header-nav header-catalog paper-shadow">
					<div className="navigation-primary">
						<div className="container close-navbar">

							<div className="navbar-header">
								<FlatButton
									className="left-drawer-toggle"
									style={styles.flatIconButton}
									icon={<FontIcon className="mdi mdi-menu" />}
									onClick={this.toggleLeftMenu}
								/>

								<FlatButton
									className="logo logo-light"
									style={styles.flatButton}
									href="/"
									icon={<img alt="logo" className="logo-image" src="/images/logo-white.png" />}
								/>
								<FlatButton
									className="right-drawer-toggle"
									style={styles.flatIconButton}
									icon={<FontIcon className="mdi mdi-magnify" />}
									onClick={this.toggleRightMenu}
								/>
							</div>

							<div className="navbar-collapse collapse module-group right">

								<div className="module left">
									<ObjectsSearchTools
										filters={this.props.filters}
										toggleSearchTerm={this.props.toggleSearchTerm}
										handleChangeDate={this.props.handleChangeDate}
										handleChangeTextsearch={this.props.handleChangeTextsearch}
									/>
								</div>
							</div>{/* <!-- .module-group.right -->*/}
						</div>{/* <!-- .container.close-navbar -->*/}
					</div>{/* <!-- .navigation-primary-->*/}
				</header>
				<div className="header-lower header-lower-catalog-info clearfix">
					{'author_title' in this.props.selectedObject ?
						<IconButton
							className="go-back-button"
							onClick={this.props.closeSelectedObject}
							iconClassName="mdi mdi-chevron-left"
						/>
						:
						<IconButton
							className="go-back-button"
							onClick={this.goBack}
							iconClassName="mdi mdi-chevron-left"
						/>
					}
					<div className="catalog-header-inner">
						<h4 className="catalog-header-title">{this.props.catalogTitleText}</h4>
					</div>
					<div className="toggle-view-mode-buttons">
						<IconButton
							onClick={this.props.toggleCatalogLayout.bind(null, 'list')}
							className={this.props.catalogLayout === 'list' ?
								'toggle-view-mode-button view-mode--active'
								:
								'toggle-view-mode-button view-mode--inactive'}
							iconClassName="mdi mdi-view-list"
						/>
						<IconButton
							onClick={this.props.toggleCatalogLayout.bind(null, 'grid')}
							className={this.props.catalogLayout === 'grid' ?
								'toggle-view-mode-button view-mode--active'
								: 'toggle-view-mode-button view-mode--inactive'}
							iconClassName="mdi mdi-view-grid"
						/>
					</div>
				</div>
			</div>
		);
	},
});
