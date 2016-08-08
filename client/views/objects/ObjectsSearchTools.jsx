
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
		handleChangeLineN: React.PropTypes.func
	},

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object.isRequired,
  },

  getInitialState(){
    return {
    };
  },

  mixins: [ReactMeteorData],

  getMeteorData(){
    var query = {};

		var authors = _.uniq(Objects.find({}, {
											    sort: {author: 1}, fields: {author: true}
											}).fetch().map(function(x) {
											    return x.author;
											}), true),
				illuminators = _.uniq(Objects.find({}, {
											    sort: {illuminator: 1}, fields: {illuminator: true}
											}).fetch().map(function(x) {
											    return x.illuminator;
											}), true),
				institutions = _.uniq(Objects.find({}, {
											    sort: {institution: 1}, fields: {institution: true}
											}).fetch().map(function(x) {
											    return x.institution;
											}), true),
				places = _.uniq(Objects.find({}, {
											    sort: {place: 1}, fields: {place: true}
											}).fetch().map(function(x) {
											    return x.place;
											}), true);

		return {
			authors: authors,
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

                <FlatButton
                  className="left-drawer-toggle"
                  style={styles.flatIconButton}
                  icon={<FontIcon className="mdi mdi-menu" />}
                  onClick={this.toggleLeftMenu}
                />

        				<div className="search-tools">

        					<div className="search-tool text-search">
                    <TextField
                        hintText=""
                        floatingLabelText="Search"
												onChange={debounce(500, this.props.handleChangeTextsearch)}
                      />
        					</div>

        					<div className={"dropdown search-dropdown search-dropdown-authors" + (self.state.searchDropdownOpen === "authors" ? " open" : "")}>
        						<FlatButton
                      className="search-tool search-type-authors dropdown-toggle"
                      label="Authors"
											labelPosition="before"
                      icon={<FontIcon className="mdi mdi-chevron-down" />}
                      onClick={this.toggleSearchDropdown.bind(null, "authors")}
        						>
        						</FlatButton>

	        						<ul className="dropdown-menu ">
	        							<div className="dropdown-menu-inner">
													{self.data.authors.map(function(authors, i){
		                        return <SearchTermButton
																key={i}
																toggleSearchTerm={self.toggleSearchTerm}
																label={author}
																searchTermKey="authors"
																value={author}
																/>
													})}
	        							</div>
	        						</ul>


        					</div>

        					<div className={"dropdown search-dropdown search-dropdown-authors" + (self.state.searchDropdownOpen === "authors" ? " open" : "")}>
        						<FlatButton
                      className="search-tool search-type-authors dropdown-toggle"
                      label="Authors"
											labelPosition="before"
                      icon={<FontIcon className="mdi mdi-chevron-down" />}
                      onClick={this.toggleSearchDropdown.bind(null, "authors")}
        						>
        						</FlatButton>

	        						<ul className="dropdown-menu ">
	        							<div className="dropdown-menu-inner">
													{self.data.authors.map(function(authors, i){
		                        return <SearchTermButton
																key={i}
																toggleSearchTerm={self.toggleSearchTerm}
																label={author}
																searchTermKey="authors"
																value={author}
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

        				</div>

        				<div className="search-toggle">
        					<IconButton
                    className="search-button"
                    onClick={this.toggleSearchMode}
                    iconClassName="mdi mdi-magnify"
                    >

        					</IconButton>
        				</div>

        			</div>
        		</div>
    )
  }
});
