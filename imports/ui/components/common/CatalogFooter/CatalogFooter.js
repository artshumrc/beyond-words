import React from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from '/imports/lib/muiTheme';


class CatalogFooter extends React.Component {

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
				<footer className="bg-dark catalog-footer">
					<div className="catalog-footer-inner">
						<span className="copyright-information fade-1-4">
							Copyright of the Beyond Words Exhibition, {year}. Sponsored by the National Endowment for the Humanities.
						</span>
					</div>
				</footer>
			</div>
		);
	}
}

export default CatalogFooter;
