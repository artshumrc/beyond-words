IPadLayout = React.createClass({
	propTypes: {
		content: React.PropTypes.element,
	},

	render() {
		return (
			<div className="archimedes-layout ipad-layout">
				<main>
					{this.props.content}
				</main>
			</div>
		);
	},

});
