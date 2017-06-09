import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

class SymposiumSession extends React.Component {
	render() {
		const { session } = this.props;

		return (
			<div className="session">
				<h5>
					{moment(session.date).format('h:mm')} {session.title}
				</h5>
				{session.description ?
					<p>
						{session.description}
					</p>
				: '' }
			</div>
		);
	}
}

SymposiumSession.propTypes = {
	session: PropTypes.object.isRequired,
};
