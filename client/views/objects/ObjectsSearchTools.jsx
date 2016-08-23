
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {debounce} from 'throttle-debounce';


ObjectsSearchTools = React.createClass({

	propTypes: {

		toggleSearchTerm: React.PropTypes.func,
		handleChangeTextsearch: React.PropTypes.func,
		handleChangeDate: React.PropTypes.func
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
			yearMin: 1100,
			yearMax: 1700,
    };
  },

  mixins: [ReactMeteorData],

  getMeteorData(){

    var handle = Meteor.subscribe('objects', {}, 0, 500);
		var scribes = [],
				illuminators = [],
				institutions = [],
				places = [];

    if (handle.ready()) {
				scribes = _.uniq(Objects.find({scribe: {$exists: true}}, {
											    sort: {scribe : 1}, fields: {scribe: true}
											}).fetch().map(function(x) {
											    return x.scribe;
											}), true),
				illuminators = _.uniq(Objects.find({illuminator: {$exists: true}}, {
											    sort: {illuminator: 1}, fields: {illuminator: true}
											}).fetch().map(function(x) {
											    return x.illuminator;
											}), true),
				institutions = _.uniq(Objects.find({institution: {exists: true}}, {
											    sort: {institution: 1}, fields: {institution: true}
											}).fetch().map(function(x) {
											    return x.institution;
											}), true),
				places = _.uniq(Objects.find({ place: {exists: true}}, {
											    sort: {place: 1}, fields: {place: true}
											}).fetch().map(function(x) {
											    return x.place;
											}), true);
    }



		return {
			scribes: scribes,
			illuminators: illuminators,
			institutions: institutions,
			places: places
		}
	},

	componentDidMount(){

	},

  toggleSearchDropdown(dropdown){
		if(this.state.searchDropdownOpen === dropdown){
	    this.setState({
				searchDropdownOpen : ""
	    });

		}else {
	    this.setState({
				searchDropdownOpen : dropdown
	    });

		}
  },

	toggleSearchTerm(key, value){
		this.props.toggleSearchTerm(key, value);

	},

  render(){
		var self = this;

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

      }

    };

    return (
        		<div className="md-menu-toolbar" >
        			<div className="toolbar-tools">

        				<div className="search-tools">

        					<div className={"dropdown search-dropdown search-dropdown-scribes" + (self.state.searchDropdownOpen === "date" ? " open" : "")}>
        						<FlatButton
                      className="search-tool search-type-date dropdown-toggle"
                      label="Date"
											labelPosition="before"
                      icon={<FontIcon className="mdi mdi-chevron-down" />}
                      onClick={this.toggleSearchDropdown.bind(null, "date")}
        						>
        						</FlatButton>

        						<ul className="dropdown-menu ">
        							<div className="dropdown-menu-inner">
			        					<div className="search-tool search-tool--date">
													<DateRangeSlider
														handleChangeDate={this.props.handleChangeDate}/>
												</div>
        							</div>
        						</ul>

									</div>
        					<div className={"dropdown search-dropdown search-dropdown-scribes" + (self.state.searchDropdownOpen === "scribes" ? " open" : "")}>
        						<FlatButton
                      className="search-tool search-type-scribes dropdown-toggle"
                      label="Scribes"
											labelPosition="before"
                      icon={<FontIcon className="mdi mdi-chevron-down" />}
                      onClick={this.toggleSearchDropdown.bind(null, "scribes")}
        						>
        						</FlatButton>

        						<ul className="dropdown-menu ">
        							<div className="dropdown-menu-inner">
												{self.data.scribes.map(function(scribe, i){
	                        return <SearchTermButton
															key={i}
															toggleSearchTerm={self.toggleSearchTerm}
															label={scribe}
															searchTermKey="scribes"
															value={scribe}
															/>
												})}
        							</div>
        						</ul>


        					</div>

        					<div className={"dropdown search-dropdown search-dropdown-illuminators" + (self.state.searchDropdownOpen === "illuminators" ? " open" : "")}>
        						<FlatButton
                      className="search-tool search-type-illuminators dropdown-toggle"
                      label="Illuminators"
											labelPosition="before"
                      icon={<FontIcon className="mdi mdi-chevron-down" />}
                      onClick={this.toggleSearchDropdown.bind(null, "illuminators")}
        						>
        						</FlatButton>

        						<ul className="dropdown-menu ">
        							<div className="dropdown-menu-inner">
												{self.data.illuminators.map(function(illuminator, i){
	                        return <SearchTermButton
															key={i}
															toggleSearchTerm={self.toggleSearchTerm}
															label={illuminator}
															searchTermKey="illuminators"
															value={illuminator}
															/>
												})}
        							</div>
        						</ul>


        					</div>

        					<div className={"dropdown search-dropdown search-dropdown-institutions" + (self.state.searchDropdownOpen === "institutions" ? " open" : "")}>
        						<FlatButton
                      className="search-tool search-type-institutions dropdown-toggle"
                      label="Institutions"
											labelPosition="before"
                      icon={<FontIcon className="mdi mdi-chevron-down" />}
                      onClick={this.toggleSearchDropdown.bind(null, "institutions")}
        						>
        						</FlatButton>

        						<ul className="dropdown-menu ">
        							<div className="dropdown-menu-inner">
												{self.data.institutions.map(function(institution, i){
	                        return <SearchTermButton
															key={i}
															toggleSearchTerm={self.toggleSearchTerm}
															label={institution}
															searchTermKey="institutions"
															value={institution}
															/>
												})}
        							</div>
        						</ul>


        					</div>

        					<div className={"dropdown search-dropdown search-dropdown-places" + (self.state.searchDropdownOpen === "places" ? " open" : "")}>
        						<FlatButton
                      className="search-tool search-type-places dropdown-toggle"
                      label="Places"
											labelPosition="before"
                      icon={<FontIcon className="mdi mdi-chevron-down" />}
                      onClick={this.toggleSearchDropdown.bind(null, "places")}
        						>
        						</FlatButton>

        						<ul className="dropdown-menu ">
        							<div className="dropdown-menu-inner">
												{self.data.places.map(function(place, i){
	                        return <SearchTermButton
															key={i}
															toggleSearchTerm={self.toggleSearchTerm}
															label={place}
															searchTermKey="places"
															value={place}
															/>
												})}
        							</div>
        						</ul>

        					</div>

        					<div className="search-tool text-search">
                    <TextField
                        hintText=""
                        floatingLabelText="Search"
												onChange={debounce(500, this.props.handleChangeTextsearch)}
                      />
        					</div>


        				</div>


        			</div>
        		</div>
    )
  }
});
