import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

SearchTermButton = React.createClass({

	propTypes: {
		toggleSearchTerm: React.PropTypes.func.isRequired,
		label: React.PropTypes.string.isRequired,
		searchTermKey: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired,
		activeWork: React.PropTypes.bool,
		active: React.PropTypes.bool,
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
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
