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
		let _activePage = 0;

		if (activePage) {
			_activePage = activePage;
		}

		if (_activePage === 0) {
			return false;
		}

		FlowRouter.go('/objects', {}, { page: _activePage - 1 });
	}
	goToNextPage() {
		const { activePage, totalObjects } = this.props;
		let _activePage = 0;

		if (activePage) {
			_activePage = activePage;
		}

		if (_activePage === totalObjects) {
			return false;
		}

		FlowRouter.go('/objects', {}, { page: _activePage + 1 });
	}

	render() {
		const { activePage, limit } = this.props;
		const { totalObjects } = this.state;

		let _activePage = 0;
		const numPages = Math.ceil(totalObjects/limit);

		if (activePage) {
			_activePage = activePage;
		}

		return (
			<div className="pagination">
				{_activePage > 0 ?
					<div
						className="pagination-button previous-button"
						onClick={this.goToPrevPage.bind(this)}
					>
						<span>
							Previous
						</span>
					</div>
				: ''}
				{_.range(numPages).map(page => {
					let isActive = false;

					if (_activePage === page) {
						isActive = true;
					}

					return (
						<div
							className={`pagination-button ${isActive ? 'is-active' : ''}`}
							onClick={this.goToPage.bind(this, page)}
							key={page}
						>
							<span>
								{page + 1}
							</span>
						</div>
					);
				})}
				{_activePage < numPages ?
					<div
						className="pagination-button next-button"
						onClick={this.goToNextPage.bind(this)}
					>
						<span>
							Next
						</span>
					</div>
				: ''}
			</div>
		);
	}
};


export default Pagination;
