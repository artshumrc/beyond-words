import React from 'react';
import PropTypes from 'prop-types';
import Objects from '/imports/api/collections/objects';
import _ from 'underscore';

class Pagination extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			totalObjects: 0,
		};
	}

	componentWillMount() {
	  Meteor.call('objectsCount', (error, totalObjects) => {
	    if(error) {
	      // handle error
	    } else {
	      this.setState({ totalObjects });
	    }
	  });
	}

	goToPage(page) {
		FlowRouter.go('/objects', {}, { page });
	}

	goToPrevPage() {
		const { activePage } = this.props;

		if (activePage === 1) {
			return false;
		}

		FlowRouter.go('/objects', {}, { page: activePage - 1 });
	}
	goToNextPage() {
		const { activePage, totalObjects } = this.props;

		if (activePage === totalObjects) {
			return false;
		}

		FlowRouter.go('/objects', {}, { page: activePage + 1 });
	}

	render() {
		const { activePage, limit } = this.props;
		const { totalObjects } = this.state;

		const numPages = Math.ceil(totalObjects/limit);


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
				{activePage < numPages ?
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
