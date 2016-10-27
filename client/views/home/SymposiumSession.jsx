import moment from 'moment-timezone';

SymposiumSession = React.createClass({

	propTypes: {
		session: React.PropTypes.object.isRequired,
	},

	render() {
		const session = this.props.session;

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

	},
});
