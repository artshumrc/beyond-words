
import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';

class DateRangeSlider extends React.Component {
	componentDidMount() {
		$('#date-range').ionRangeSlider({
			type: 'double',
			min: 600,
			max: 1700,
			grid: true,
			postfix: ' AD',
			values_separator: ' to ',
			onChange: debounce(500, this.props.handleChangeDate),

		});
	}

	render() {
		return (
			<div id="date-range" />
		);
	}
}

DateRangeSlider.propTypes = {
	handleChangeDate: PropTypes.func.isRequired,
};


export default DateRangeSlider;
