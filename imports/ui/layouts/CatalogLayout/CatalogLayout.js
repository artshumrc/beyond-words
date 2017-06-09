import React from 'react';
import PropTypes from 'prop-types';

class CatalogLayout extends React.Component {

	propTypes: {
		selectedObjectSlug: PropTypes.string,
	},

	getInitialState() {
		return {
			objectToSelectSlug: this.props.selectedObjectSlug,
			selectedObject: {},
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections, Catalog, 2016.',
			catalogLayout: 'grid',
			filters: [],
			skip: 0,
			limit: 12,
			miradorOpen: false,
			viewerOpen: false,
		};
	},

	loadMoreObjects() {
		if (!(this.props.selectedObjectSlug || 'catalog_n' in this.state.selectedObject)) {
			this.setState({
				skip: this.state.skip + this.state.limit,
			});

		} else {
			// console.log("did not load more objects");
		}
	},

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
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections, Catalog, 2016.',
		});

		if (location.pathname !== '/catalog' || location.pathname !== '/catalog/') {
			FlowRouter.go('/catalog');

		}
		location.hash = '';

	},

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
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections, Catalog, 2016.',
		});

		if (location.pathname !== '/catalog' || location.pathname !== '/catalog/') {
			FlowRouter.go('/catalog');

		}
		location.hash = '';
	},

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
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections, Catalog, 2016.',
		});
		location.hash = '';
	},

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
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections, Catalog, 2016.',
		});
		location.hash = '';
	},

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
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections, Catalog, 2016.',
		});
		location.hash = '';
	},


	toggleCatalogLayout(layout) {
		this.setState({
			catalogLayout: layout,
			objectToSelectSlug: null,
			selectedObject: {},
			skip: 0,
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections, Catalog, 2016.',
		});
		location.hash = '';
	},

	selectObject(selectedObject) {
		let catalogTitleText = selectedObject.catalog_n.toString();
		if (selectedObject.author_title !== undefined) {
			catalogTitleText = `${catalogTitleText}. ${Utils.trunc(selectedObject.author_title, 90)}`;
		}
		this.setState({
			selectedObject,
			catalogTitleText,
		});
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		if (location.pathname.indexOf(selectedObject.slug) < 0) {
			// FlowRouter.go("/catalog/" + selectedObject.slug);
		}
	},

	closeSelectedObject() {
		this.setState({
			selectedObject: {},
			objectToSelectSlug: '',
			catalogTitleText: 'Illuminated Manuscripts in Boston Collections, Catalog, 2016.',
		});
		FlowRouter.go('/catalog');
		location.hash = '';
	},

	openViewer() {

		this.setState({
			viewerOpen: true,
		});

	},

	closeViewer() {

		this.setState({
			viewerOpen: false,
		});

	},

	openMiradorViewer() {

		this.setState({
			miradorOpen: true,
		});

	},

	closeMiradorViewer() {

		this.setState({
			miradorOpen: false,
		});

	},


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
					selectedObject={this.state.selectedObject}
					closeSelectedObject={this.closeSelectedObject}
				/>

				<ObjectsList
					filters={this.state.filters}
					toggleSearchTerm={this.toggleSearchTerm}
					toggleMiradorSearch={this.toggleMiradorSearch}
					loadMoreObjects={this.loadMoreObjects}
					skip={this.state.skip}
					limit={this.state.limit}
					catalogLayout={this.state.catalogLayout}
					selectedObject={this.state.selectedObject}
					objectToSelectSlug={this.state.objectToSelectSlug}
					selectObject={this.selectObject}
					closeSelectedObject={this.closeSelectedObject}
					openViewer={this.openViewer}
					openMiradorViewer={this.openMiradorViewer}
				/>

				<CatalogFooter />

				{selectedObject.miradorLink ?
					<div className={this.state.miradorOpen ? 'object-embedded-viewer object-embedded-viewer--open' : 'object-embedded-viewer'}>
						<i
							className="mdi mdi-close close-viewer"
							onClick={this.closeMiradorViewer}
						/>
						<iframe src={selectedObject.miradorLink} />
					</div>

					: ''
				}
				{selectedObject.hasImageViewer ?
					<div className={this.state.viewerOpen ? 'object-embedded-viewer object-embedded-viewer--open' : 'object-embedded-viewer'}>
						<i
							className="mdi mdi-close close-viewer"
							onClick={this.closeViewer}
						/>
						<BeyondWordsViewer
							selectedObject={selectedObject}
      />
					</div>

					: ''
				}
			</div>
		);
	},

});
