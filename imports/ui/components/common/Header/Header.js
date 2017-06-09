import React from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { white } from 'material-ui/styles/colors';

class Header extends React.Component {

	getInitialState() {
		return {
			leftMenuOpen: false,
		};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
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

	scrollToEvents(e) {
		$('html, body').animate({ scrollTop: $('#events').offset().top - 100 }, 300);

		e.preventDefault();
	}

	scrollToNews(e) {
		$('html, body').animate({ scrollTop: $('#news').offset().top - 100 }, 300);

		e.preventDefault();
	}

	scrollToSymposium(e) {
		$('html, body').animate({ scrollTop: $('#symposium').offset().top - 100 }, 300);

		e.preventDefault();
	}

	scrollToCatalog(e) {
		$('html, body').animate({ scrollTop: $('#catalog').offset().top - 100 }, 300);

		e.preventDefault();
	}

	scrollToPlanYourTrip(e) {
		$('html, body').animate({ scrollTop: $('#plan-your-trip').offset().top - 100 }, 300);

		e.preventDefault();
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
				<header className="header-nav paper-shadow">
					<div className="navigation-primary">
						<div className="container close-navbar">

							<div className="navbar-header">
								<FlatButton
									className="left-drawer-toggle"
									style={styles.flatIconButton}
									icon={<FontIcon className="mdi mdi-menu" color={white} />}
									onClick={this.toggleLeftMenu}
								/>

								<FlatButton
									className="logo logo-light"
									style={styles.flatButton}
									href="/"
									icon={<img alt="logo" className="logo-image" src="/images/logo-white.png" />}
								/>
								<FlatButton
									className="logo logo-dark"
									style={styles.flatButton} href="/"
									icon={<img alt="logo" className="logo-image" src="/images/logo-gold.png" />}
								/>

							</div>

							<div className="navbar-collapse collapse module-group right">

								<div className="module left">

									<ul className="nav navbar-nav navbar-right">
										<li>
											<FlatButton
												style={styles.flatButton}
												label="PLAN YOUR TRIP"
												href="#plan-your-trip"
												onClick={this.scrollToPlanYourTrip}
												onTouchTap={this.scrollToPlanYourTrip}
											/>
										</li>
										<li>
											<FlatButton
												style={styles.flatButton}
												label="EVENTS"
												href="#events"
												onClick={this.scrollToEvents}
												onTouchTap={this.scrollToEvents}
											/>
										</li>
										<li>
											<FlatButton
												style={styles.flatButton}
												label="NEWS"
												href="#news"
												onClick={this.scrollToNews}
												onTouchTap={this.scrollToNews}
											/>
										</li>
										<li>
											<FlatButton
												style={styles.flatButton}
												label="SYMPOSIUM"
												href="#symposium"
												onClick={this.scrollToSymposium}
												onTouchTap={this.scrollToSymposium}
											/>
										</li>
										<li
											className="catalog-item"
										>
											<FlatButton
												style={styles.flatButton}
												label="CATALOG"
												href="/catalog"
											/>
											<div className="dropdown-panel">
												<FlatButton
													style={styles.flatButton}
													label="ONLINE"
													href="/catalog"
												/>
												<FlatButton
													style={styles.flatButton}
													label="PRINT"
													href="#"
													onClick={this.scrollToCatalog}
													onTouchTap={this.scrollToSymposium}
												/>
											</div>
										</li>
										<li>
											<FlatButton
												style={styles.flatButton}
												label="AUDIOGUIDE"
												href="//beyondwords.oncell.com/"
												target="_blank"
												rel="noopener noreferrer"
											/>
										</li>
									</ul>
								</div>
								<div className="module widget-handle left museum-widget-handle">
									<ul className="nav navbar-nav navbar-right">
										<li>
											<FlatButton
												style={styles.flatButton}
												label="HOUGHTON" target="_blank" rel="noopener noreferrer"
												href="//hcl.harvard.edu/libraries/houghton/"
											/>
										</li>
										<li>
											<FlatButton
												style={styles.flatButton}
												label="MCMULLEN" target="_blank" rel="noopener noreferrer"
												href="//www.bc.edu/sites/artmuseum/exhibitions/beyond-words/"
											/>
										</li>
										<li>
											<FlatButton
												style={styles.flatButton}
												target="_blank" rel="noopener noreferrer" label="GARDNER"
												href="//www.gardnermuseum.org/collection/exhibitions"
											/>
										</li>
									</ul>

								</div>

								<div className="module social-module widget-handle left">
									<ul className="menu icon-menu">
										<li>
											<FlatButton
												style={styles.flatIconButton}
												href="https://twitter.com/@BeyondWords2016"
												icon={<FontIcon className="mdi mdi-twitter" />}
												target="_blank" rel="noopener noreferrer"
											/>
										</li>
									</ul>
								</div>

							</div>{/*
							<!-- .module-group.right -->*/}
						</div>{/*
						<!-- .container.close-navbar -->*/}
					</div>{/*
					<!-- .navigation-primary-->*/}
				</header>
			</div>
		);
	}
}

Header.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
