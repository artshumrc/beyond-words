
import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo500, grey300, white, black } from 'material-ui/styles/colors';

class SearchTermButtonPanel extends React.Component {

	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	}

	constructor(props) {
		super(props);

		this.state = {
			active: false,
		};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	toggleSearchTerm() {
		this.props.toggleSearchTerm(this.props.searchTermKey, this.props.value);
	}

	render() {
		let backgroundColor = grey300;
		let color = black;
		let className = 'search-term-button';
		let active = this.props.active;

		if ('activeWork' in this.props) {
			if (this.props.activeWork === true) {
				active = true;
			}
		} else if (this.state.active) {
			active = true;
		}

		if (active) {
			className += ' search-term-button--active';
			backgroundColor = indigo500;
			color = white;
		}
		const styles = {
			chip: {
				margin: 5,
				maxWidth: '100%',
			},
			chipLabel: {
				color,
				textOverflow: 'ellipsis',
				overflow: 'hidden',
			},
		};

		return (
			<Chip
				className={className}
				backgroundColor={backgroundColor}
				onTouchTap={this.toggleSearchTerm}
				style={styles.chip}
				labelStyle={styles.chipLabel}
			>
				{this.props.label}
			</Chip>
		);
	}
}

SearchTermButtonPanel.propTypes = {
	toggleSearchTerm: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	searchTermKey: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	activeWork: PropTypes.bool,
	active: PropTypes.bool,
};

export default SearchTermButtonPanel;
