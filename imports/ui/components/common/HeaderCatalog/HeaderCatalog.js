import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';

import muiTheme from '/imports/lib/muiTheme';
import LeftMenu from '/imports/ui/components/common/LeftMenu';
import ObjectsSearchToolsPanel from '/imports/ui/components/objects/ObjectsSearchToolsPanel';
import ObjectsSearchTools from '/imports/ui/components/objects/ObjectsSearchTools';

class HeaderCatalog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			leftMenuOpen: false,
			rightMenuOpen: false,
		};
		autoBind(this);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
	}

	toggleLeftMenu() {
		this.setState({
			leftMenuOpen: !this.state.leftMenuOpen,
		});
	}

	closeLeftMenu() {
		this.setState({
			leftMenuOpen: false,
		});
	}

	toggleRightMenu() {
		this.setState({
			rightMenuOpen: !this.state.rightMenuOpen,
		});
	}

	closeRightMenu() {
		this.setState({
			rightMenuOpen: false,
		});
	}

	goBack() {
		window.history.back();
	}

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
					toggleMiradorSearch={this.props.toggleMiradorSearch}
					handleChangeDate={this.props.handleChangeDate}
					handleChangeTextsearch={this.props.handleChangeTextsearch}
					handleChangeCatalogNSearch={this.props.handleChangeCatalogNSearch}
					open={this.state.rightMenuOpen}
					closeRightMenu={this.closeRightMenu}
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
										toggleMiradorSearch={this.props.toggleMiradorSearch}
										handleChangeDate={this.props.handleChangeDate}
										handleChangeTextsearch={this.props.handleChangeTextsearch}
										handleChangeCatalogNSearch={this.props.handleChangeCatalogNSearch}
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
						''
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
	}
}

HeaderCatalog.propTypes = {
	filters: PropTypes.array,
	toggleSearchTerm: PropTypes.func,
	handleChangeTextsearch: PropTypes.func,
	handleChangeCatalogNSearch: PropTypes.func,
	handleChangeDate: PropTypes.func,
	catalogTitleText: PropTypes.string,
	selectedObject: PropTypes.object,
	toggleCatalogLayout: PropTypes.func,
	closeSelectedObject: PropTypes.func,
	catalogLayout: PropTypes.string,
	toggleMiradorSearch: PropTypes.func,
};

HeaderCatalog.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};


export default HeaderCatalog;
