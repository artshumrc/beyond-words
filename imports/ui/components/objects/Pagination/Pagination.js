import React from 'react';
import PropTypes from 'prop-types';
import Objects from '/imports/api/collections/objects';
import _ from 'underscore';
import Utils from '/imports/lib/utils';

class Pagination extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			totalObjects: 0,
		};
	}

	goToPage(page) {
		const { activePage } = this.props;
		const totalObjects = FlowRouter.getQueryParam('total') || 0;
		const filters = FlowRouter.getQueryParam('filters');

		FlowRouter.go('/catalog', {}, { page, total: totalObjects, filters });
	}

	goToPrevPage() {
		const { activePage } = this.props;
		const totalObjects = FlowRouter.getQueryParam('total') || 0;
		const filters = FlowRouter.getQueryParam('filters');

		if (activePage === 1) {
			return false;
		}

		FlowRouter.go('/catalog', {}, { page: activePage - 1, total: totalObjects, filters });
	}
	goToNextPage() {
		const { activePage, } = this.props;
		const totalObjects = FlowRouter.getQueryParam('total') || 0;
		const filters = FlowRouter.getQueryParam('filters');

		if (activePage === totalObjects) {
			return false;
		}

		FlowRouter.go('/catalog', {}, { page: activePage + 1, total: totalObjects, filters });
	}

	render() {
		const { activePage, limit } = this.props;

		let totalObjects = FlowRouter.getQueryParam('total') || 0;
		const numPages = Math.ceil(totalObjects/limit);

		if (numPages <= 1) {
			return null;
		}

		return (
			<div className="pagination">
				{activePage > 1 ?
					<div
						className="pagination-button previous-button"
						onClick={this.goToPrevPage.bind(this)}
					>
						<i className="mdi mdi-chevron-left" />
						<span>
							Previous
						</span>
					</div>
				: ''}
				{_.range(1, numPages).map(page => {
					let isActive = false;

					if (activePage === page ) {
						isActive = true;
					}

					return (
						<div
							className={`pagination-button ${isActive ? 'is-active' : ''}`}
							onClick={this.goToPage.bind(this, page)}
							key={page}
						>
							<span>
								{page}
							</span>
						</div>
					);
				})}
				{activePage < numPages - 1?
					<div
						className="pagination-button next-button"
						onClick={this.goToNextPage.bind(this)}
					>
						<span>
							Next
						</span>
						<i className="mdi mdi-chevron-right" />
					</div>
				: ''}
			</div>
		);
	}
};


export default Pagination;
