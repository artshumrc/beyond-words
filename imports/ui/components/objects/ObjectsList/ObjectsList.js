
import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component/lib';
import { debounce } from 'throttle-debounce';
import { createContainer } from 'meteor/react-meteor-data';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import muiTheme from '/imports/lib/muiTheme';
import Objects from '/imports/api/collections/objects';
import InfiniteScroll from '/imports/ui/components/shared/InfiniteScroll';
import FiltersWidget from '/imports/ui/components/common/FiltersWidget';
import ObjectTeaser from '/imports/ui/components/objects/ObjectTeaser';
import ObjectDetail from '/imports/ui/components/objects/ObjectDetail';

class ObjectsList extends React.Component {
	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
	}

	componentDidMount() {
		// this.hide();
	}

	handleImagesLoaded() {
		// this.show();
	}

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
	}

	renderObjects() {
		return this.props.objects.map(object => (
			<ObjectTeaser
				key={object._id}
				object={object}
				selectObject={this.props.selectObject}
			/>
		));
	}

	render() {
		const self = this;

		this.props.objects.sort(function(a, b) {
			return a.catalog_n - b.catalog_n;
		});

		const masonryOptions = {
			// isFitWidth : true,
			transitionDuration: 300,
		};

		const settings = {
			focusOnSelect: true,
			// dots: true,
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

				<div>
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

					{this.props.objects.length === 0 && !this.props.stillMoreObjects ?
						<div className="no-results no-results--objects">
							<p>No manuscripts were found for your query.</p>
						</div>
						: ''
					}
				</div>

			</div>
		);
	}
}

ObjectsList.propTypes = {
	filters: PropTypes.array,
	addSearchTerm: PropTypes.func,
	toggleSearchTerm: PropTypes.func,
	skip: PropTypes.number,
	limit: PropTypes.number,
	catalogLayout: PropTypes.string,
	objects: PropTypes.array,
};

ObjectsList.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};

const objectsListContainer = createContainer((props) => {
	const query = {};
	let objects = [];
	let stillMoreObjects = true;

	// Parse the filters to the query
	props.filters.forEach((filter) => {
		const date = moment(`${filter.values[0]}-01-01`, 'YYYY MM DD');
		switch (filter.key) {
		case 'textsearch':
			query.$text = { $search: filter.values[0] };
			break;

		case 'catalogNumber':
			query.catalog_n = parseInt(filter.values[0], 10);
			break;

		case 'hasViewer':
			query.$or = [{$where: '(this.miradorLink && this.miradorLink.length > 0) || (this.externalUrl && this.externalUrl.length > 0)'}, {hasImageViewer: true}];
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

	// console.log('Objects query:', query);
	const handle = Meteor.subscribe('objects', query, props.skip, props.limit);
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
	}

	return {
		objects,
	};
}, ObjectsList);


export default objectsListContainer;
