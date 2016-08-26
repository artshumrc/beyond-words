import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo500, grey300, white, black} from 'material-ui/styles/colors';

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
		let backgroundColor = grey300;
		let color = black;
		let className = "search-term-button";
		let active = this.props.active;

		if("activeWork" in this.props){
			if(this.props.activeWork === true){
				active = true
			}

		}
		else{
			if(this.state.active){
				active = true;
			}

		}

		if(active){
			className += " search-term-button--active";
			backgroundColor = indigo500;
			color = white;
		}
		const styles = {
			chip: {
				margin: 5,
				maxWidth: "100%",
			},
			chipLabel: {
				textOverflow: "ellipsis",
				overflow: "hidden",
				color: color,
			},
		};

		return (
			<Chip
				className={className}
				backgroundColor={backgroundColor}
				onTouchTap={this.toggleSearchTerm}
				style={styles.chip}
				labelStyle={styles.chipLabel}>
				{this.props.label}
			</Chip>
		)

	}

});
