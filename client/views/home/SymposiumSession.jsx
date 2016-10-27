
SymposiumSession = React.createClass({

	propTypes: {
		session: React.PropTypes.object.isRequired,
	},

	render() {
		return (
			<div className="session">
				<h5>
					{session.date} {session.title}
				</h5>
				<p>
					{session.description}
				</p>
			</div>
		);

	},
});
