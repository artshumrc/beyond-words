import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Masonry from 'react-masonry-component/lib'
import InfiniteScroll from '../../../imports/InfiniteScroll';
import {debounce} from 'throttle-debounce';


ObjectsList = React.createClass({

    mixins: [ReactMeteorData],

    propTypes: {
        filters: React.PropTypes.array,
        addSearchTerm: React.PropTypes.func,
        toggleSearchTerm: React.PropTypes.func,
        loadMoreObjects: React.PropTypes.func,
        skip: React.PropTypes.number,
        limit: React.PropTypes.number

    },

    getInitialState: function () {

        // viewMode may be list or grid

        return {
            viewMode: "grid"
        };
    },

		objects: [],

    getMeteorData(){
        var query = {},
            objects = [],
						stillMoreObjects = true;


        // Parse the filters to the query
        this.props.filters.forEach(function (filter) {
            switch (filter.key) {
                case "textsearch":
                    query.$text = {$search: filter.values[0]};
                    break;

                case "scribes":
                    query['scribe'] = {$in: filter.values};
                    break;

                case "illuminators":
                    query['illuminator'] = {$in: filter.values};
                    break;

                case "institution":
                    query['institution'] = {$in: filter.values};
                    break;

                case "places":
                    query['place'] = {$in: filter.values};
                    break;

                case "dateFrom":
                    var date = moment("01/01/" + filter.values[0]);
                    query['dateBegun'] = {$gte: new Date(date.toISOString())};
                    break;

                case "dateTo":
                    var date = moment("01/01/" + filter.values[0]);
                    query['dateEnded'] = {$lte: new Date(date.toISOString())};
                    break;

            }
        });

        console.log("Objects query:", query);
        var handle = Meteor.subscribe('objects', query, this.props.skip, this.props.limit);
        if (handle.ready()) {
            objects = Objects.find({}, {}).fetch();
        }
				if(objects.length < this.props.limit){
					stillMoreObjects = false;
				}

        return {
            objects: objects,
						stillMoreObjects: stillMoreObjects
        };
    },


    componentDidMount(){
	    setTimeout(function(){
	      $(".items-container").addClass("component-mounted");
	      $(".loading-collections").removeClass("loading-visible");

	    }, 2000);
    },


    renderObjects() {
			var self = this;
			if(
					this.objects.length === 0
				|| this.props.skip === 0
			){
				this.objects = this.data.objects;

			}else {
				//$("html, body").animate({ scrollTop: 0 }, "fast");
				this.data.objects.forEach(function(object){
					if(!self.objects.some(function(existingObject){
						return existingObject._id === object._id
					})){
						self.objects.push(object);
					}

				});
			}

      return this.objects.map((object) => {
          return <ObjectTeaser
              key={object._id}
              object={object}/>;
      });
    },

    toggleDropdown(e) {
        var $target = $(e.target),
            toggle_facetName = "";

        if (!$target.hasClass("toggle-button")) {
            $target = $target.parents(".toggle-button");
        }

        if ($target[0].className.indexOf("example_facet") > 0) {
            toggle_facetName = "example_facet";
        }

        if (this.state.active_dropdown === toggle_facetName) {
            this.setState({
                active_dropdown: ""
            });

        } else {

            this.setState({
                active_dropdown: toggle_facetName
            });

        }
    },

		componentDidMount: function() {
        //this.hide();
    },
    handleImagesLoaded: function(imagesLoadedInstance) {
        //this.show();
    },

    render() {

        let self = this;

		    let masonryOptions = {
		      //columnWidth : "400px",
		      //isFitWidth : true,
		      transitionDuration : 0
		    };


        return (
            <div className="objects-list">

							<FiltersWidget
								filters={this.props.filters}
								toggleSearchTerm={this.props.toggleSearchTerm}
								/>

							<InfiniteScroll
								endPadding={120}
								loadMore={debounce(1000, this.props.loadMoreObjects)}
								>

						    <Masonry
				          options={masonryOptions}
				          className="objects-container"
	                onImagesLoaded={this.handleImagesLoaded}
				          >
                    {this.renderObjects()}
						    </Masonry>
							</InfiniteScroll>

							{this.data.stillMoreObjects ?
                <div className="loading-collections loading-visible">
									<div className="dot-spinner">
										  <div className="bounce1"></div>
										  <div className="bounce2"></div>
										  <div className="bounce3"></div>
										</div>
                </div>

							: ""}
            </div>
        );
    }

});
