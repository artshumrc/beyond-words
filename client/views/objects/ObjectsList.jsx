
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';



ObjectsList = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

	getInitialState: function() {
		return {
      paged : 1,
      limit : 21,
      active_dropdown : "",
      textsearch: '',
      example_facet: [],
    };
	},

  componentDidMount(){
    setTimeout(function(){
      $(".objects-container").addClass("component-mounted");
      $(".loading-collections").removeClass("loading-visible");

    }, 2000);
  },

  // Loads Objects from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    console.log("getMeteorData() this.state:", this.state);
    let query = {};


    let example_facet = _.uniq(Objects.find({}, {
        sort: {example_facet: 1}, fields: {example_facet: true}
    }).fetch().map(function(x) {
        return x.example_facet;
    }), true);


		if(
      (this.state.textsearch && this.state.textsearch.length)
    || (this.state.example_facet && this.state.example_facet.length)
    ){

      query = {$or: []};

  		if(this.state.textsearch && this.state.textsearch.length){
  				var re = new RegExp(".*" + this.state.textsearch + ".*", "gi");
          query.$or.push({title: re});
          query.$or.push({other_meta_field: re});
  		}

  		if(this.state.example_facet && this.state.example_facet.length){
        this.state.example_facet.map(function(example_facet){
          query.$or.push({example_facet: example_facet});

        });

      }


    }

    console.log("Query:", query);
    let limit = this.state.limit * this.state.paged;

    return {
      Objects : Objects.find(query, {sort: {viav_id:1}, limit: limit}).fetch(),
      total_records : Objects.find(query).count(),
      example_facet : example_facet,
    };
  },

	searchText: function(event) {
		this.setState({
      textsearch: event.target.value,
      paged: 1
    });
	},

  searchExampleFacet: function(e){
    var example_facet = this.state.example_facet,
        $target = $(e.target),
        sel_example_facet,
        sel_example_facet_i;

    if(!$target.hasClass("search-toggle-button")){
      $target = $target.parents(".search-toggle-button");
    }

    sel_example_facet = $target.text();
    sel_example_facet_i = example_facet.indexOf(sel_example_facet);

    if(sel_example_facet_i >= 0){
      example_facet.splice(sel_example_facet_i);
      $target.removeClass("search-toggle-button-active");
    }else {
      example_facet.push(sel_example_facet);
      $target.addClass("search-toggle-button-active");

    }
		this.setState({
      example_facet: example_facet,
      paged: 1
    });


  },

  pageSearch: function(){
    this.setState({
      paged: this.state.paged + 1
    });

  },

  renderObjects() {
    // Get tasks from this.data.tasks
    return this.data.objects.map((object) => {
      return <ObjectTeaser
        key={object._id}
        object={object} />;
    });
  },

  toggleDropdown(e) {
    var $target = $(e.target),
        toggle_facetName = "";

    if(!$target.hasClass("toggle-button")){
      $target = $target.parents(".toggle-button");
    }

    if($target[0].className.indexOf("example_facet")>0){
      toggle_facetName = "example_facet";
    }

    if (this.state.active_dropdown === toggle_facetName) {
      this.setState({
          active_dropdown : ""
      });

    }else {

      this.setState({
          active_dropdown : toggle_facetName
      });

    }
  },

  render() {

    let that = this;

    let backgroundColors = {
      dropdownToggle_active: "rgba(0, 172, 193, 1)",
      dropdownToggle: "#ffffff",
      facet_active: "rgba(0, 172, 193, 1)",
      facet: "#eeeeee"
    }

    let styles = {
      dropdownToggle : {
        height: "auto",
        padding: "0px",
        margin: "0 7px"

      },
      searchToggle : {
        height: "auto",
        padding: "0px",
        margin: "5px 15px",

      },

      dropdownToggle_label : {
        fontFamily: 'Proxima N W01 Light',
        fontWeight: "bold",
        fontSize: "16px",
    		textTransform: "uppercase",
        color: "#444444",
        padding: "10px 15px",
        display: "inline-block",
      },
      dropdownToggle_label_active : {
        fontFamily: 'Proxima N W01 Light',
        fontWeight: "bold",
        fontSize: "16px",
    		textTransform: "uppercase",
        color: "#ffffff",
        padding: "10px 15px",
        display: "inline-block",

      },
      facet_label : {
        fontFamily: 'Proxima N W01 Light',
        fontSize: "16px",
    		textTransform: "none",
        color: "#666666",
        display: "block",
        padding: "8px 13px !important"

      }
    }

    let masonry_options = {
      //columnWidth : "400px",
      isFitWidth : true,
      transitionDuration : 0
    };


    return (
			<div className="Objects-list">
	      <div className="search-toolbar search-tool-hide">
	        <div className="toolbar-tools">
	          <div className="search-tools">
	            <div className="search-tool text-search">
	              <input placeholder="Search . . ." type="text" name="textsearch"
									value={this.state.value}
			 						onChange={this.searchText}
									></input>
	            </div>
              <RaisedButton
                backgroundColor={(this.state.active_dropdown === "example_facet") ? backgroundColors.dropdownToggle_active : backgroundColors.dropdownToggle}
                style={styles.dropdownToggle}
                labelStyle={(this.state.active_dropdown === "example_facet") ? styles.dropdownToggle_label_active : styles.dropdownToggle_label}
                label="Example Facet"
                labelPosition="before"
                className={"toggle-button dropdown-toggle-button dropdown-toggle-button-example-facet " + ((this.state.active_dropdown === "example_facet") ? "active" : "")}
                icon={<FontIcon className="mdi mdi-chevron-down"/>}
                onClick={this.toggleDropdown}
                />

	          </div>
	        </div>
          <div className={"search-facet-dropdown " + (this.state.active_dropdown.length ? "dropdown-visible-" + this.state.active_dropdown : "")}>
            <div className="dropdown-list dropdown-list-example-facet">
              {this.data.example_facet.map(function(example_facet, index){
                return (example_facet) ?
                  <RaisedButton
                            key={index}
                            style={styles.searchToggle}
                            labelStyle={styles.facet_label}
                            label={example_facet}
                            className="toggle-button search-toggle-button"
                            onClick={that.searchExampleFacet}
                            />
                          : "";
              })}
            </div>
          </div>
	     </div>
       <div className="loading-collections loading-visible">
         <div className="well-spinner"></div>
       </div>

		    <div className="objects-container"
          >
		      {this.renderObjects()}
		    </div >
				
			</div>

      );
    }

});
