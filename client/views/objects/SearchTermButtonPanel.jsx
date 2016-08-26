import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

SearchTermButtonPanel = React.createClass({

	propTypes: {
		toggleSearchTerm: React.PropTypes.func.isRequired,
		label: React.PropTypes.string.isRequired,
		searchTermKey: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired,
		activeWork: React.PropTypes.bool,
		active: React.PropTypes.bool,
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	getInitialState(){
		return {
			active : false,
		};

	},

	toggleSearchTerm(){
		this.props.toggleSearchTerm(this.props.searchTermKey, this.props.value);

	},

	render(){
		var className = "search-term-button";
		var active = this.props.active;

		if("activeWork" in this.props){
			if(this.props.activeWork === true){
				active = true
			}

		}else{
			if(this.state.active){
				active = true;
			}

		}

		if(active){
			className += " search-term-button--active";
		}
		const styles = {
		  chip: {
		    margin: 4,
		  }
		};

		return (
			<Chip
				className={className}
				onTouchTap={this.toggleSearchTerm}
				style={styles.chip}>
				{this.props.label}
			</Chip>
		)

	}

});
