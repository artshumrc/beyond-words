import React from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Footer extends React.Component {

	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	scrollToEvents(e) {
		$('html, body').animate({ scrollTop: $('#events').offset().top - 100 }, 300);

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
		const date = new Date();
		const year = date.getFullYear();

		const styles = {
			circleButton: {
				width: 'auto',
				height: 'auto',
			},
			circleButtonIcon: {
				color: '#ffffff',

			},
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
				<div className="pre-footer" />
				<footer className="bg-dark">
					<div className="container">
						<div className="row ">
							<div className="col-sm-12 text-center">
								<img
									alt="footer logo"
									className="logo footer-logo"
									src="/images/beyond-words-logo-light.png"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 text-center">
								<div className="footer-nav">
									<FlatButton
										style={styles.flatButton}
										label="HOME"
										href="/"
									/>
									<FlatButton
										style={styles.flatButton}
										label="HOUGHTON"
										target="_blank" rel="noopener noreferrer"
										href="//hcl.harvard.edu/libraries/houghton"
									/>
									<FlatButton
										style={styles.flatButton}
										label="MCMULLEN"
										target="_blank" rel="noopener noreferrer"
										href="//www.bc.edu/sites/artmuseum/exhibitions/beyond-words/"
									/>
									<FlatButton
										style={styles.flatButton}
										label="GARDNER"
										target="_blank" rel="noopener noreferrer"
										href="//www.gardnermuseum.org/collection/exhibitions"
									/>
									<FlatButton
										style={styles.flatButton}
										label="CATALOG"
										href="/catalog"
									/>
									<IconButton
										style={styles.circleButton}
										iconStyle={styles.circleButtonIcon}
										target="_blank" rel="noopener noreferrer"
										href="http://twitter.com/@BeyondWords2016"
										iconClassName="mdi mdi-twitter"
									/>
								</div>
							</div>
						</div>
						<div className="row ">
							<div className="col-sm-12 text-center">
								<span className="neh-sponsored-by-label">Sponsored by</span>
								<a href="//www.neh.gov/" target="_blank" rel="noopener noreferrer">
									<img
										alt="logo"
										className="logo neh-logo"
										src="/images/neh_logo_horizontal_reverse.png"
									/>
								</a>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 text-center">
								<span className="copyright-information fade-1-4">
									Copyright Beyond Words Exhibition, {year}.
								</span>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
