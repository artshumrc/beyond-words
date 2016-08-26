import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {debounce} from 'throttle-debounce';
import Drawer from 'material-ui/Drawer';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

ObjectsSearchToolsPanel = React.createClass({

	propTypes: {
		filters: React.PropTypes.array,
		toggleSearchTerm: React.PropTypes.func,
		handleChangeTextsearch: React.PropTypes.func,
		handleChangeDate: React.PropTypes.func,
		open: React.PropTypes.bool,
	},

  getChildContext() {
	return { muiTheme: getMuiTheme(baseTheme) };
  },

  childContextTypes: {
	muiTheme: React.PropTypes.object.isRequired,
  },

  getInitialState(){
    return {
		searchDropdownOpen : "",
		yearMin: 600,
		yearMax: 1700,
		scribes: [],
		illuminators: [],
		institutions: [],
		places: [],
    };
  },

  mixins: [ReactMeteorData],

  getMeteorData(){

		let scribes = [], illuminators = [], institutions = [], places = [];

		return {
			scribes: scribes,
			illuminators: illuminators,
			institutions: institutions,
			places: places
		}
	},

	componentDidMount(){

		let scribes = [], illuminators = [], institutions = [], places = [];

		Meteor.call('searchTools', (err, res) => {
			if (err) {
				alert(err);
			}
			else {
				console.log("searchTools response", res);
				this.setState({
					scribes: res.scribes,
					illuminators: res.illuminators,
					institutions: res.institutions,
					places: res.places
				});
			}
		});

	},

	toggleSearchTerm(key, value){
		this.props.toggleSearchTerm(key, value);
	},

	render(){
		var self = this;
		var filters = this.props.filters;

	    let styles = {
	      flatButton : {
	        width: "auto",
	        minWidth: "none",
	        height: "80px",
	        padding: "21px 5px"
	      },
	      flatIconButton : {
	        padding: "10px 20px",
	        width: "auto",
	        minWidth: "none",
	        height: "55px",
	      },
		  wrapper: {
		    display: 'flex',
		    flexWrap: 'wrap',
		  },
	    };

    return (
		<Drawer
			openSecondary={true}
			open={this.props.open}
			docked={false}
			width={400}
			onRequestChange={this.props.closeLeftMenu}>
            <Card>
			    <CardHeader
			      title="Date"
			      actAsExpander={true}
			      showExpandableButton={true}
			    />
			    <CardText expandable={true} style={styles.wrapper}>
				    {self.state.scribes.map(function(scribe, i){
						let active = false;
						filters.forEach(function(filter){
							if(filter.key === "scribes"){
								filter.values.forEach(function(value){
									if(scribe === value){
										active = true;
									}
								});
							}
						});
						return (
							<SearchTermButtonPanel
								key={i}
								toggleSearchTerm={self.toggleSearchTerm}
								label={scribe}
								searchTermKey="scribes"
								value={scribe}
								active={active}
							/>
						)
					})}
					{self.state.scribes.length === 0 ?
						<div className="no-results">No scribes found in objects.</div>
						: ""
					}
			    </CardText>
			</Card>
			<Card>
			    <CardHeader
			      title="Illuminators"
			      actAsExpander={true}
			      showExpandableButton={true}
			    />
			    <CardText expandable={true} style={styles.wrapper}>
				    {self.state.illuminators.map(function(illuminator, i){
						var active = false;
						filters.forEach(function(filter){
							if(filter.key === "illuminators"){
								filter.values.forEach(function(value){
									if(illuminator === value){
										active = true;
									}
								});
							}
						});
						return (
							<SearchTermButtonPanel
								key={i}
								toggleSearchTerm={self.toggleSearchTerm}
								label={illuminator}
								searchTermKey="illuminators"
								value={illuminator}
								active={active}
							/>
						)
					})}
					{self.state.illuminators.length === 0 ?
						<div className="no-results">No illuminators found in objects.</div>
						: ""
					}
			    </CardText>
			</Card>
			<Card>
			    <CardHeader
			      title="Institutions"
			      actAsExpander={true}
			      showExpandableButton={true}
			    />
			    <CardText expandable={true} style={styles.wrapper}>
				   {self.state.institutions.map(function(institution, i){
						let active = false;
						filters.forEach(function(filter){
							if(filter.key === "institutions"){
								filter.values.forEach(function(value){
									if(institution === value){
										active = true;
									}
								});
							}
						});
						return (
							<SearchTermButtonPanel
								key={i}
								toggleSearchTerm={self.toggleSearchTerm}
								label={institution}
								searchTermKey="institutions"
								value={institution}
								active={active}
							/>
						)
					})}
					{self.state.institutions.length === 0 ?
						<div className="no-results">No institutions found in objects.</div>
						: ""
					}
			    </CardText>
			</Card>
			<Card>
			    <CardHeader
			      title="Places"
			      actAsExpander={true}
			      showExpandableButton={true}
			    />
			    <CardText expandable={true} style={styles.wrapper}>
				    {self.state.places.map(function(place, i){
						var active = false;
						filters.forEach(function(filter){
							if(filter.key === "places"){
								filter.values.forEach(function(value){
									if(place === value){
										active = true;
									}
								});
							}
						});
						return (
							<SearchTermButtonPanel
								key={i}
								toggleSearchTerm={self.toggleSearchTerm}
								label={place}
								searchTermKey="places"
								value={place}
								active={active}
							/>
						)
					})}
					{self.state.places.length === 0 ?
						<div className="no-results">No places found in objects.</div>
						: ""
					}
			    </CardText>
			</Card>
        </Drawer>
    )
  }
});
