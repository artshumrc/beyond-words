import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Masonry from 'react-masonry-component/lib'
import InfiniteScroll from '../../../imports/InfiniteScroll';
import {debounce} from 'throttle-debounce';
import Paper from 'material-ui/Paper';
import Slider from 'react-slick';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'


ObjectsList = React.createClass({

    mixins: [ReactMeteorData],

    propTypes: {
		selectedObject: React.PropTypes.object,
		selectObject: React.PropTypes.func,
        filters: React.PropTypes.array,
        addSearchTerm: React.PropTypes.func,
        toggleSearchTerm: React.PropTypes.func,
        loadMoreObjects: React.PropTypes.func,
        skip: React.PropTypes.number,
        limit: React.PropTypes.number

    },

    getInitialState: function () {
        return {
        };
    },

	objects: [],

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
	},

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

                case "institutions":
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
            objects.forEach(function(object){
                var imageSubscription = Meteor.subscribe('objectImages', object.slug);
                if (imageSubscription.ready()) {
                    object.images = Images.find({}).fetch();
                    object.thumbnails = Thumbnails.find({}).fetch();
                }
            });

            if(objects.length < this.props.limit){
                stillMoreObjects = false;
            }
        }

        return {
            objects: objects,
			stillMoreObjects: stillMoreObjects
        };
    },


    componentDidMount(){
		// this.hide();
    },

    handleImagesLoaded: function(imagesLoadedInstance) {
        //this.show();
    },

    renderObjects(isInSlider) {
		var self = this;

		if(!isInSlider){
			isInSlider = false;
		}

		if(this.objects.length === 0 || this.props.skip === 0) {
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
		console.log("render object", this.objects.length);
        return this.objects.map((object) => {
            return (
                <ObjectTeaser
                    key={object._id}
                    object={object}
                    selectObject={self.props.selectObject}
                />
            )
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

	    let masonryOptions = {
            //columnWidth : "400px",
            //isFitWidth : true,
            transitionDuration : 300
	    };

		let selectedObject = this.props.selectedObject;

	    const settings = {
            focusOnSelect: true,
            dots: true,
            //infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
	    };

        return (
            <div className="objects-list wow fadeIn">

				<FiltersWidget
					filters={this.props.filters}
					toggleSearchTerm={this.props.toggleSearchTerm}
                    />

				{("author_title" in selectedObject && selectedObject.author_title.length) ?
					<div>
						<ObjectDetail
							object={this.props.selectedObject}
							closeSelectedObject={this.props.closeSelectedObject}
						/>

						<div className="row">
							<div className="col-xs-11 center-block clear">
								<Slider {...settings}>
						            {this.objects.map((object, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="object-slider-teaser">
                                                <ObjectTeaser
                                                    key={object._id}
                                                    object={object}
                                                    selectObject={self.props.selectObject}
                                                    isInSlider={true}
                                                />;
                                                </div>
                                            </div>
                                        )
								    })}
								</Slider>
							</div>
						</div>

					</div>
					:
					<div>
						<InfiniteScroll
							endPadding={120}
							loadMore={debounce(1000, this.props.loadMoreObjects)} >

							{this.props.catalogLayout === "grid" ?
                                <Masonry
                                    options={masonryOptions}
                                    className="objects-container objects-container--grid"
                                    onImagesLoaded={this.handleImagesLoaded} >

                                    {this.renderObjects()}

                                </Masonry>
                                :
                                <div className="objects-container objects-container--list">
                                    {this.renderObjects()}
                                </div>
							}
						</InfiniteScroll>

						{this.data.stillMoreObjects ?
                            <div className="loading-collections loading-visible">
								<div className="dot-spinner">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                            </div>
                            : ""
                        }
						{this.objects.length === 0 && !this.data.stillMoreObjects ?
							<div className="no-results no-results--objects">
								<p>No manuscripts were found for your query.</p>
							</div>
                            : ""
                        }
					</div>
				}
            </div>
        );
    }

});
