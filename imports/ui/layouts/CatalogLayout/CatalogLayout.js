import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import HeaderCatalog from '/imports/ui/components/common/HeaderCatalog';
import ObjectsList from '/imports/ui/components/objects/ObjectsList';
import CatalogFooter from '/imports/ui/components/common/CatalogFooter';
import BeyondWordsViewer from '/imports/ui/components/objects/BeyondWordsViewer';
import Utils from '/imports/lib/utils';

class CatalogLayout extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			objectToSelectSlug: this.props.selectedObjectSlug,
			selectedObject: {},
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections Catalog, 2016.',
			catalogLayout: 'grid',
			filters: [],
			skip: 0,
			limit: 12,
			miradorOpen: false,
			viewerOpen: false,
		};
		autoBind(this);
	}

	toggleSearchTerm(key, value) {
		const filters = this.state.filters;
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

		this.setState({
			filters,
			objectToSelectSlug: null,
			selectedObject: {},
			skip: 0,
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections Catalog, 2016.',
		});

		if (location.pathname !== '/catalog' || location.pathname !== '/catalog/') {
			FlowRouter.go('/catalog');

		}
		location.hash = '';

	}

	toggleMiradorSearch(key, value) {
		let filters = this.state.filters;
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

		this.setState({
			filters,
			objectToSelectSlug: null,
			selectedObject: {},
			skip: 0,
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections Catalog, 2016.',
		});

		if (location.pathname !== '/catalog' || location.pathname !== '/catalog/') {
			FlowRouter.go('/catalog');

		}
		location.hash = '';
	}

	handleChangeTextsearch(textsearch) {
		const filters = this.state.filters;

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

		this.setState({
			filters,
			objectToSelectSlug: null,
			selectedObject: {},
			skip: 0,
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections Catalog, 2016.',
		});
		location.hash = '';
	}

	handleChangeCatalogNSearch(catalogN) {
		const filters = this.state.filters;

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

		this.setState({
			filters,
			objectToSelectSlug: null,
			selectedObject: {},
			skip: 0,
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections Catalog, 2016.',
		});
		location.hash = '';
	}

	handleChangeDate(e) {
		const filters = this.state.filters;

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


		this.setState({
			filters,
			objectToSelectSlug: null,
			selectedObject: {},
			skip: 0,
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections Catalog, 2016.',
		});
		location.hash = '';
	}

	toggleCatalogLayout(layout) {
		this.setState({
			catalogLayout: layout,
			objectToSelectSlug: null,
			selectedObject: {},
			skip: 0,
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections Catalog, 2016.',
		});
		location.hash = '';
	}

	render() {
		// console.log('CatalogLayout.filters', this.state.filters);
		const selectedObject = this.state.selectedObject;

		return (
			<div className="archimedes-layout catalog-layout">

				<HeaderCatalog
					filters={this.state.filters}
					toggleSearchTerm={this.toggleSearchTerm}
					toggleMiradorSearch={this.toggleMiradorSearch}
					handleChangeDate={this.handleChangeDate}
					handleChangeTextsearch={this.handleChangeTextsearch}
					handleChangeCatalogNSearch={this.handleChangeCatalogNSearch}
					catalogTitleText={this.state.catalogTitleText}
					toggleCatalogLayout={this.toggleCatalogLayout}
					catalogLayout={this.state.catalogLayout}
				/>

				<ObjectsList
					filters={this.state.filters}
					toggleSearchTerm={this.toggleSearchTerm}
					toggleMiradorSearch={this.toggleMiradorSearch}
					skip={this.state.skip}
					limit={this.state.limit}
					catalogLayout={this.state.catalogLayout}
				/>

				<CatalogFooter />

			</div>
		);
	}
}

export default CatalogLayout;
