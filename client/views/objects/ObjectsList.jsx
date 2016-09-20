import Masonry from 'react-masonry-component/lib';
import { debounce } from 'throttle-debounce';
import Slider from 'react-slick';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import InfiniteScroll from '../../../imports/InfiniteScroll.jsx';

ObjectsList = React.createClass({


	propTypes: {
		selectedObject: React.PropTypes.object,
		objectToSelectSlug: React.PropTypes.string,
		selectObject: React.PropTypes.func,
		filters: React.PropTypes.array,
		addSearchTerm: React.PropTypes.func,
		toggleSearchTerm: React.PropTypes.func,
		loadMoreObjects: React.PropTypes.func,
		skip: React.PropTypes.number,
		limit: React.PropTypes.number,
		closeSelectedObject: React.PropTypes.func,
		catalogLayout: React.PropTypes.string,
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	mixins: [ReactMeteorData],

	getInitialState() {
		return {
		};
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	componentDidMount() {
		// this.hide();
	},

	getMeteorData() {
		const query = {};
		let objects = [];
		let stillMoreObjects = true;

		// Parse the filters to the query
		this.props.filters.forEach((filter) => {
			const date = moment(`${filter.values[0]}-01-01`, 'YYYY MM DD');
			switch (filter.key) {
			case 'textsearch':
				query.$text = { $search: filter.values[0] };
				break;

			case 'catalogNumber':
				query.catalog_n = parseInt(filter.values[0]);
				break;

			case 'hasViewer':
				query.$or = [{$where: "(this.miradorLink && this.miradorLink.length > 0) || (this.externalUrl && this.externalUrl.length > 0)"}, {hasImageViewer: true}];
				break;

			case 'scribes':
				query.scribe = { $in: filter.values };
				break;

			case 'illuminators':
				query.illuminator = { $in: filter.values };
				break;

			case 'institutions':
				query.institution = { $in: filter.values };
				break;

			case 'places':
				query.place = { $in: filter.values };
				break;

			case 'dateFrom':
				query.dateBegun = { $gte: new Date(date.toISOString()) };
				break;

			case 'dateTo':
				query.dateEnded = { $lte: new Date(date.toISOString()) };
				break;
			default:
				// do nothing
			}
		});

		console.log('Objects query:', query);
		const handle = Meteor.subscribe('objects', query, this.props.skip, this.props.limit);
		if (handle.ready()) {
			objects = Objects.find({}, {}).fetch();
			/*
			objects.forEach((object, i) => {
				const imageSubscription = Meteor.subscribe('objectImages', object.slug);
				if (imageSubscription.ready()) {
					objects[i].images = Images.find({}).fetch();
					objects[i].thumbnails = Thumbnails.find({}).fetch();
				}
			});
			*/

			if (objects.length < this.props.limit) {
				stillMoreObjects = false;
			}
		}

		return {
			objects,
			stillMoreObjects,
		};
	},

	handleImagesLoaded() {
		// this.show();
	},

	objects: [],

	toggleDropdown(e) {
		let $target = $(e.target);
		let toggleFacetName = '';

		if (!$target.hasClass('toggle-button')) {
			$target = $target.parents('.toggle-button');
		}

		if ($target[0].className.indexOf('example_facet') > 0) {
			toggleFacetName = 'example_facet';
		}

		if (this.state.active_dropdown === toggleFacetName) {
			this.setState({
				active_dropdown: '',
			});
		} else {
			this.setState({
				active_dropdown: toggleFacetName,
			});
		}
	},
	renderObjects() {
		return this.objects.map((object) => (
			<ObjectTeaser
				key={object._id}
				object={object}
				selectObject={this.props.selectObject}
			/>
		));
	},

	render() {
		const self = this;

		if (this.objects.length === 0 || this.props.skip === 0) {
			this.objects = this.data.objects;
		} else {
			// $("html, body").animate({ scrollTop: 0 }, "fast");
			this.data.objects.forEach((object) => {
				if (!self.objects.some((existingObject) => existingObject._id === object._id)) {
					self.objects.push(object);
				}
			});
		}

		this.objects.sort(function(a, b) {
			return a.catalog_n - b.catalog_n;
		});

		const masonryOptions = {
			// columnWidth : "400px",
			// isFitWidth : true,
			transitionDuration: 300,
		};

		const selectedObject = this.props.selectedObject;
		if(selectedObject && "objectDetailSlider" in self.refs){
			this.objects.forEach(function(object, i){
				if(object.catalog_n === selectedObject.catalog_n){
					self.refs.objectDetailSlider.slickGoTo(i);

				}
			});

		}

		const settings = {
			focusOnSelect: true,
			//dots: true,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};

		return (
			<div className="objects-list wow fadeIn">

				<FiltersWidget
					filters={this.props.filters}
					toggleSearchTerm={this.props.toggleSearchTerm}
				/>

				{('catalog_n' in selectedObject || this.props.objectToSelectSlug) ?
					<div>
						<ObjectDetail
							selectedObject={this.props.selectedObject}
							objectToSelectSlug={this.props.objectToSelectSlug}
							closeSelectedObject={this.props.closeSelectedObject}
							selectObject={self.props.selectObject}
						/>

						{this.objects.length ?
							<div className="row">
								<div className="col-xs-11 center-block clear">
									<Slider ref='slider' {...settings}>
										{this.objects.map((object, i) => (
											<div key={i}>
												<div className="object-slider-teaser">
													<ObjectTeaser
														key={object._id}
														object={object}
														selectObject={self.props.selectObject}
													/>;
												</div>
											</div>
										))}
									</Slider>
								</div>
							</div>
						: ""}

					</div>
				:
					<div>
						<InfiniteScroll
							endPadding={200}
							loadMore={debounce(1000, this.props.loadMoreObjects)}
						>

							{this.props.catalogLayout === 'grid' ?
								<Masonry
									options={masonryOptions}
									className="objects-container objects-container--grid row"
									onImagesLoaded={this.handleImagesLoaded}
								>

									{this.renderObjects()}
								</Masonry>
								:
								<div className="objects-container objects-container--list row">
									{this.renderObjects()}
								</div>
							}
						</InfiniteScroll>

						{this.data.stillMoreObjects ?
							<div className="loading-collections loading-visible">
								<div className="dot-spinner">
									<div className="bounce1" />
									<div className="bounce2" />
									<div className="bounce3" />
								</div>
							</div>
							: ''
						}
						{this.objects.length === 0 && !this.data.stillMoreObjects ?
							<div className="no-results no-results--objects">
								<p>No manuscripts were found for your query.</p>
							</div>
							: ''
						}
					</div>
				}
			</div>
		);
	},
});
