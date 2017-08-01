import React from 'react';
import PropTypes from 'prop-types';

class Spinner extends React.Component {

	render() {
		let className = 'ahcip-spinner commentary-loading';
		if (this.props.fullPage) {
			className += ' full-page-spinner';
		}
		return (
			<div className={className} >
				<div className="double-bounce1" />
				<div className="double-bounce2" />
			</div>
		);
	}
}


Spinner.propTypes = {
	fullPage: PropTypes.bool,
};

export default Spinner;
