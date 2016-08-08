
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

		var authors = _.uniq(Comments.find({}, {
											    sort: {author: 1}, fields: {author: true}
											}).fetch().map(function(x) {
											    return x.author;
											}), true),
				illuminators = _.uniq(Comments.find({}, {
											    sort: {illuminator: 1}, fields: {illuminator: true}
											}).fetch().map(function(x) {
											    return x.illuminator;
											}), true),
				institutions = _.uniq(Comments.find({}, {
											    sort: {institution: 1}, fields: {institution: true}
											}).fetch().map(function(x) {
											    return x.institution;
											}), true),
				places = _.uniq(Comments.find({}, {
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
		if(location.pathname.indexOf("/commentary") === 0){
	    this.setState({
	      searchEnabled : true
	    });

		}else {
	    this.setState({
	      searchEnabled : false
			});

		}

	},

  toggleSearchMode(){

		if(location.pathname.indexOf("/commentary") === 0){
	    this.setState({
	      searchEnabled : !this.state.searchEnabled
	    });

		}else {
			location.href = "/commentary";
		}
  },

  toggleLeftMenu(){
    this.setState({
      leftMenuOpen : !this.state.leftMenuOpen
    });
  },

  closeLeftMenu(){
    this.setState({
      leftMenuOpen : false
    });
  },

  toggleSearchDropdown(e){
		var $target = $(e.target),
				targetDropdown = "";

		if($target.prop("tagName") !== "BUTTON"){
			$target = $target.parents("button");

		}

		if($target.hasClass("search-type-keyword")){
			targetDropdown = "keyword";

		}else if ($target.hasClass("search-type-commenter")){
			targetDropdown = "commenter";

		}else if ($target.hasClass("search-type-work")){
			targetDropdown = "work";

		}else if ($target.hasClass("search-type-subwork")){
			targetDropdown = "subwork";

		}

		if(this.state.searchDropdownOpen === targetDropdown){
	    this.setState({
				searchDropdownOpen : ""
	    });

		}else {
	    this.setState({
				searchDropdownOpen : targetDropdown
	    });

		}
  },

	toggleSearchTerm(key, value){
		this.props.toggleSearchTerm(key, value);

	},

	toggleWorkSearchTerm(key, value){
		var work = value;

		value.subworks.forEach(function(subwork){
			subwork.work = work;
		});

		console.log("Header.state", this.state);

		if(this.state.activeWork === value.slug){
			this.setState({
				subworks: [],
				activeWork: ""
			});

		}else {
			this.setState({
				subworks: value.subworks,
				activeWork: value.slug
			});

		}

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

    var user_is_loggedin = false;

    var active_comment = false;
    var username = false;

    var keyword = {id:1};
    var commenter = {id:1};
    var work = {id:1};
    var subwork = {work:{title:"Iliad"},id:1, title:"1"};

    //console.log("Header.state", this.state);
    //console.log("Header.data", this.data);

    return (
      <div>
        <LeftMenu
          open={this.state.leftMenuOpen}
          closeLeftMenu={this.closeLeftMenu}
          />
      	<header >
          {!this.state.searchEnabled ?

        		<div className="md-menu-toolbar" >
        			<div className="toolbar-tools">

                <IconButton
                  className="left-drawer-toggle"
                  style={styles.flatIconButton}
                  iconClassName="mdi mdi-menu"
                  onClick={this.toggleLeftMenu}
                />

                <a href="/" className="header-home-link" >
        					<h3 className="logo">A Homer Commentary in Progress</h3>
        				</a>

        				<div className="search-toggle">
        					<IconButton
                    className="search-button"
                    onClick={this.toggleSearchMode}
                    iconClassName="mdi mdi-magnify"
                    >

        					</IconButton>
        				</div>

        				<div className="header-section-wrap nav-wrap" >
        					<FlatButton
                    label="Commentary"
                    href="/commentary/"
                    style={styles.flatButton}
                    >
        					</FlatButton>
        					<FlatButton
                    label="About"
                    href="/about"
                    style={styles.flatButton}
                    ></FlatButton>
                  {user_is_loggedin ?
                      <div>
                        <FlatButton
                          label="Profile"
                          className=""
                          style={styles.flatButton}
                          >
                        </FlatButton>
                      </div>
                    :
                      <div>
                        <FlatButton
                          href="#"
                          label="Login"
                          onClick={this.showLoginModal}
                          style={styles.flatButton}
                          >
                        </FlatButton>
                        <FlatButton
                          href="#"
                          label="Join the Community"
                          onClick={this.showJoinModal}
                          style={styles.flatButton}
                          >
                        </FlatButton>
                      </div>
                  }
        				</div>

        			</div>

        		</div>

          :
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

        					<div className={"dropdown search-dropdown search-dropdown-keywords" + (self.state.searchDropdownOpen === "keyword" ? " open" : "")}>
        						<FlatButton
                      className="search-tool search-type-keyword dropdown-toggle"
                      label="Keyword"
											labelPosition="before"
                      icon={<FontIcon className="mdi mdi-chevron-down" />}
                      onClick={this.toggleSearchDropdown}
        						>
        						</FlatButton>

	        						<ul className="dropdown-menu ">
	        							<div className="dropdown-menu-inner">
													{self.data.keywords.map(function(keyword, i){
		                        return <SearchTermButton
																key={i}
																toggleSearchTerm={self.toggleSearchTerm}
																label={keyword.title}
																searchTermKey="keywords"
																value={keyword}
																/>
													})}
	        							</div>
	        						</ul>


        					</div>

        					<div className={"dropdown search-dropdown search-dropdown-commenters" + (this.state.searchDropdownOpen === "commenter" ? " open" : "")}>
        						<FlatButton
                      className="search-tool search-type-commenter dropdown-toggle"
                      label="Commenter"
											labelPosition="before"
                      icon={<FontIcon className="mdi mdi-chevron-down" />}
                      onClick={this.toggleSearchDropdown}
        						>
                    </FlatButton>

        						<ul className="dropdown-menu">
        							<div className="dropdown-menu-inner">
												{self.data.commenters.map(function(commenter, i){
	                        return <SearchTermButton
															key={i}
															toggleSearchTerm={self.toggleSearchTerm}
															label={commenter.name}
															searchTermKey="commenters"
															value={commenter}
															/>
												})}
        							</div>
        						</ul>

        					</div>

        					<div className={"dropdown search-dropdown search-dropdown-works" + (this.state.searchDropdownOpen === "work" ? " open" : "")}>
        						<FlatButton
                      className="search-tool search-type-work dropdown-toggle"
                      label="Work"
											labelPosition="before"
                      icon={<FontIcon className="mdi mdi-chevron-down" />}
                      onClick={this.toggleSearchDropdown}
        						>
                    </FlatButton>

        						<ul className="dropdown-menu">
        							<div className="dropdown-menu-inner">
												{self.data.works.map(function(work, i){
													var activeWork = (self.state.activeWork === work.slug);
	                        return <SearchTermButton
															key={i}
															toggleSearchTerm={self.toggleWorkSearchTerm}
															label={work.title}
															searchTermKey="works"
															value={work}
															activeWork={activeWork}
															/>
												})}
        							</div>

        						</ul>

        					</div>

        					<div className={"dropdown search-dropdown search-dropdown-book" + (this.state.searchDropdownOpen === "subwork" ? " open" : "") }>
        						<FlatButton
                      className="search-tool search-type-subwork dropdown-toggle"
                      label="Book"
											labelPosition="before"
                      icon={<FontIcon className="mdi mdi-chevron-down" />}
                      onClick={this.toggleSearchDropdown}
        						>
                    </FlatButton>

        						<ul className="dropdown-menu">
        							<div className="dropdown-menu-inner">
												{self.state.subworks.map(function(subwork, i){
	                        return <SearchTermButton
															key={i}
															toggleSearchTerm={self.toggleSearchTerm}
															label={subwork.work.title + " " + subwork.title}
															searchTermKey="subworks"
															value={subwork}
															/>
												})}
        							</div>


        						</ul>

        					</div>

        					<div className="search-tool text-search line-search">
        						<label></label>
										<LineRangeSlider handleChangeLineN={this.props.handleChangeLineN}/>
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
          }
      	</header>
      </div>
    )
  }
});
