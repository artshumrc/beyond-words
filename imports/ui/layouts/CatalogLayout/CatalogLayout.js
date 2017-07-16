import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import HeaderCatalog from '/imports/ui/components/common/HeaderCatalog';
import ObjectsList from '/imports/ui/components/objects/ObjectsList';
import ObjectDetailPage from '/imports/ui/components/objects/ObjectDetailPage';
import CatalogFooter from '/imports/ui/components/common/CatalogFooter';
import BeyondWordsViewer from '/imports/ui/components/objects/BeyondWordsViewer';
import Pagination from '/imports/ui/components/objects/Pagination';
import Utils from '/imports/lib/utils';

class CatalogLayout extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections Catalog',
			catalogLayout: 'grid',
		};
		autoBind(this);
	}

	componentWillMount() {
		const { objectSlug } = this.props;
		const filters = FlowRouter.getQueryParam('filters');
		const page = FlowRouter.getQueryParam('page') || 1;
		const initialTotal = FlowRouter.getQueryParam('total') || 0;
		const query = Utils.filtersToQuery(filters);

		if (!objectSlug) {
		  Meteor.call('objectsCount', [query], (error, total) => {
		    if(error) {
		      // handle error
					console.error(error);
		    } else {
					if (total !== initialTotal) {
						FlowRouter.go('/catalog', {}, {page, filters, total});
					}
		    }
			});
		}
	}

	updateRouteWithFilters(filters) {
		const query = Utils.filtersToQuery(filters);

	  Meteor.call('objectsCount', [query], (error, total) => {
	    if(error) {
	      // handle error
				console.error(error);
	    } else {
				FlowRouter.go('/catalog', {}, {page: 1, filters, total});
	    }
	  });
	}

	toggleSearchTerm(key, value) {
		const filters = FlowRouter.getQueryParam('filters') || [];
		let keyIsInFilter = false;
		let valueIsInFilter = false;
		let filterValueToRemove;
		let filterToRemove;

		filters.forEach((filter, i) => {
			if (filter.key === key) {
				keyIsInFilter = true;

				if (filter.values.indexOf(value) >= 0) {
					valueIsInFilter = true;
					filterValueToRemove = filter.values.indexOf(value);
				}

				if (valueIsInFilter) {
					filter.values.splice(filterValueToRemove, 1);
					if (filter.values.length === 0) {
						filterToRemove = i;
					}
				} else {
					filter.values.push(value);
				}
			}
		});


		if (typeof filterToRemove !== 'undefined') {
			filters.splice(filterToRemove, 1);
		}

		if (!keyIsInFilter) {
			filters.push({
				key,
				values: [value],
			});
		}

		this.updateRouteWithFilters(filters);
	}

	toggleMiradorSearch(key, value) {
		let filters = FlowRouter.getQueryParam('filters') || [];
		let isInFilters = false;

		filters.forEach(function(filter) {
			if (filter.key === 'hasViewer') {
				filter.values[0] = value;
				isInFilters = true;
			}
		});

		if (!isInFilters) {
			filters.push({
				key: 'hasViewer',
				values: [true],
			});
		}

		if (isInFilters && value === false) {
			filters = filters.filter(function(obj) {
				return obj.key !== 'hasViewer';
			});
		}

		this.updateRouteWithFilters(filters);
	}

	handleChangeTextsearch(textsearch) {
		const filters = FlowRouter.getQueryParam('filters') || [];

		if (textsearch && textsearch.length) {
			let textsearchInFilters = false;

			filters.forEach((filter, i) => {
				if (filter.key === 'textsearch') {
					filters[i].values = [textsearch];
					textsearchInFilters = true;
				}
			});

			if (!textsearchInFilters) {
				filters.push({
					key: 'textsearch',
					values: [textsearch],
				});
			}
		} else {
			let filterToRemove;

			filters.forEach((filter, i) => {
				if (filter.key === 'textsearch') {
					filterToRemove = i;
				}
			});

			if (typeof filterToRemove !== 'undefined') {
				filters.splice(filterToRemove, 1);
			}
		}

		this.updateRouteWithFilters(filters);
	}

	handleChangeCatalogNSearch(catalogN) {
		const filters = FlowRouter.getQueryParam('filters') || [];

		if (catalogN && catalogN.length) {
			let textsearchInFilters = false;

			filters.forEach((filter, i) => {
				if (filter.key === 'catalogNumber') {
					filters[i].values = [catalogN];
					textsearchInFilters = true;
				}
			});

			if (!textsearchInFilters) {
				filters.push({
					key: 'catalogNumber',
					values: [catalogN],
				});
			}
		} else {
			let filterToRemove;

			filters.forEach((filter, i) => {
				if (filter.key === 'catalogNumber') {
					filterToRemove = i;
				}
			});

			if (typeof filterToRemove !== 'undefined') {
				filters.splice(filterToRemove, 1);
			}
		}

		this.updateRouteWithFilters(filters);
	}

	handleChangeDate(e) {
		const filters = FlowRouter.getQueryParam('filters') || [];

		if (e.from > 600) {
			let dateFromInFilters = false;

			filters.forEach((filter, i) => {
				if (filter.key === 'dateFrom') {
					filters[i].values = [e.from];
					dateFromInFilters = true;
				}
			});

			if (!dateFromInFilters) {
				filters.push({
					key: 'dateFrom',
					values: [e.from],
				});
			}
		} else {
			let filterToRemove;

			filters.forEach((filter, i) => {
				if (filter.key === 'dateFrom') {
					filterToRemove = i;
				}
			});

			if (typeof filterToRemove !== 'undefined') {
				filters.splice(filterToRemove, 1);
			}
		}

		if (e.to < 1700) {
			let dateToInFilters = false;

			filters.forEach((filter, i) => {
				if (filter.key === 'dateTo') {
					filters[i].values = [e.to];
					dateToInFilters = true;
				}
			});

			if (!dateToInFilters) {
				filters.push({
					key: 'dateTo',
					values: [e.to],
				});
			}
		} else {
			let filterToRemove;

			filters.forEach((filter, i) => {
				if (filter.key === 'dateTo') {
					filterToRemove = i;
				}
			});

			if (typeof filterToRemove !== 'undefined') {
				filters.splice(filterToRemove, 1);
			}
		}

		this.updateRouteWithFilters(filters);
	}

	toggleCatalogLayout(layout) {
		this.setState({
			catalogLayout: layout,
		});
	}

	render() {
		const { objectSlug } = this.props;
		let skip = 0;
		const limit = 36;
		const page = FlowRouter.getQueryParam('page');
		const filters = FlowRouter.getQueryParam('filters') || [];

		if (page) {
			skip = limit * (parseInt(page, 10) - 1);
		}

		return (
			<div className="archimedes-layout catalog-layout">

				<HeaderCatalog
					filters={filters}
					toggleSearchTerm={this.toggleSearchTerm}
					toggleMiradorSearch={this.toggleMiradorSearch}
					handleChangeDate={this.handleChangeDate}
					handleChangeTextsearch={this.handleChangeTextsearch}
					handleChangeCatalogNSearch={this.handleChangeCatalogNSearch}
					catalogTitleText={this.state.catalogTitleText}
					toggleCatalogLayout={this.toggleCatalogLayout}
					catalogLayout={this.state.catalogLayout}
				/>

				{objectSlug ?
					<ObjectDetailPage
						slug={objectSlug}
					/>
				:
					<ObjectsList
						filters={filters}
						toggleSearchTerm={this.toggleSearchTerm}
						toggleMiradorSearch={this.toggleMiradorSearch}
						skip={skip}
						limit={limit}
						catalogLayout={this.state.catalogLayout}
					/>
				}

				<Pagination
					activePage={parseInt(FlowRouter.getQueryParam('page'), 10) || 1}
					limit={limit}
					filters={filters}
				/>

				<CatalogFooter />

			</div>
		);
	}
}

export default CatalogLayout;
