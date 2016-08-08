
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';



ObjectsList = React.createClass({

  mixins: [ReactMeteorData],

	propTypes: {
		filters: React.PropTypes.array,
		addSearchTerm: React.PropTypes.func,
		loadMoreObjects: React.PropTypes.func,
		skip: React.PropTypes.number

	},

	getInitialState: function() {

		// viewMode may be list or grid

		return {
			viewMode: "grid"
    };
	},

	getMeteorData(){
		var query = {},
				objects = [];

		// Parse the filters to the query
		this.props.filters.forEach(function(filter){
			switch(filter.key){
				case "textsearch":
					query.$text = { $search : filter.values[0]};
					break;

				case "authors":
					var values = [];
					filter.values.forEach(function(value){
						values.push(value.wordpressId);
					})
					query['author._id'] = { $in: values };
					break;

				case "illuminators":
					var values = [];
					filter.values.forEach(function(value){
						values.push(value.wordpressId);
					})
					query['author._id'] = { $in: values };
					break;

				case "institution":
					var values = [];
					filter.values.forEach(function(value){
						values.push(value.wordpressId);
					})
					query['author._id'] = { $in: values };
					break;

				case "places":
					var values = [];
					filter.values.forEach(function(value){
						values.push(value.wordpressId);
					})
					query['author._id'] = { $in: values };
					break;

			}
		});

		console.log("Objects query:", query);
		var handle = Meteor.subscribe('objects', query, this.props.skip, 10);
		if(handle.ready()) {
			objects = Objects.find({}, {sort:{catalog_n:1}}).fetch();
		}

		return {
			objects: objects
		};
	},


  componentDidMount(){
  },


  renderObjects() {
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
