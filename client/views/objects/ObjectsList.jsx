import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import InfiniteScroll from '../../../imports/InfiniteScroll';


ObjectsList = React.createClass({

    mixins: [ReactMeteorData],

    propTypes: {
        filters: React.PropTypes.array,
        addSearchTerm: React.PropTypes.func,
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

                case "authors":
                    var values = [];
                    filter.values.forEach(function (value) {
                        values.push(value.wordpressId);
                    })
                    query['author._id'] = {$in: values};
                    break;

                case "illuminators":
                    var values = [];
                    filter.values.forEach(function (value) {
                        values.push(value.wordpressId);
                    })
                    query['author._id'] = {$in: values};
                    break;

                case "institution":
                    var values = [];
                    filter.values.forEach(function (value) {
                        values.push(value.wordpressId);
                    })
                    query['author._id'] = {$in: values};
                    break;

                case "places":
                    var values = [];
                    filter.values.forEach(function (value) {
                        values.push(value.wordpressId);
                    })
                    query['author._id'] = {$in: values};
                    break;

            }
        });

        console.log("Objects query:", query);
        var handle = Meteor.subscribe('objects', query, this.props.skip, this.props.limit);
        if (handle.ready()) {
            objects = Objects.find({}, {sort: {catalog_n: 1}}).fetch();
        }
				if(objects.length < this.props.limit){
					stillMoreObjects = false;
				}

        return {
            objects: objects,
						stillMoreObjects: stillMoreObjects
        };
    },


    // componentDidMount(){
    // },


    renderObjects() {
			var self = this;

			if(this.data.objects.length){
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

    render() {

        let self = this;

        return (
            <div className="objects-list">
							<InfiniteScroll
								endPadding={120}
								loadMore={this.props.loadMoreObjects}
								>

                <div className="objects-container">
                    {this.renderObjects()}
                </div >

								{this.data.stillMoreObjects ?
	                <div className="loading-collections loading-visible">
										<div className="dot-spinner">
											  <div className="bounce1"></div>
											  <div className="bounce2"></div>
											  <div className="bounce3"></div>
											</div>
	                </div>

								: ""}
							</InfiniteScroll>
            </div>
        );
    }

});
