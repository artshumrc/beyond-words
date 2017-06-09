
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class SearchTermButton extends React.Component {

	propTypes: {
		toggleSearchTerm: PropTypes.func.isRequired,
		label: PropTypes.string.isRequired,
		searchTermKey: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		activeWork: PropTypes.bool,
		active: PropTypes.bool,
	},

	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	},

	getInitialState() {
		return {
			active: false,
		};
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	toggleSearchTerm() {
		this.props.toggleSearchTerm(this.props.searchTermKey, this.props.value);
	},

	render() {
		let className = 'search-term-button';
		let active = this.props.active;
		const value = Utils.trunc(this.props.value, 28);

		if ('activeWork' in this.props) {
			if (this.props.activeWork === true) {
				active = true;
			}
		} else if (this.state.active) {
			active = true;
		}

		if (active) {
			className += ' search-term-button--active';
		}

		return (
			<li>
				<RaisedButton
					className={className}
					onClick={this.toggleSearchTerm}
					label={value}
				/>
			</li>
		);
	},

});
