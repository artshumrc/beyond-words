IPadLayout = React.createClass({
	propTypes: {
		content: React.PropTypes.element,
	},

	render() {
		console.log(this);
		return (
			<div className="archimedes-layout ipad-layout">
				<main>
					{this.props.content}
				</main>
			</div>
		);
	},

});
