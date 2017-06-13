
import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import muiTheme from '/imports/lib/muiTheme';

class FiltersWidget extends React.Component {

	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		const self = this;

		return (
			<div className="filters">
				{this.props.filters.map((filter, i) => {
					let label = filter.key;
					if (label === 'catalognumber') {
						label = 'Catalog Number';
					} else if (label === 'hasviewer') {
						label = 'Has Viewer';
					} else if (label === 'textsearch') {
						label = 'Text Search';
					}
					if (['lineFrom', 'lineTo'].indexOf(filter.key) < 0) {
						return (
							<div
								key={i}
								className={`filter filter-${filter.key}`}
							>
								<span className="filter-key paper-shadow">{filter.key}</span>
								{filter.values.map((val, j) => {
									if (
										['dateFrom', 'dateTo', 'hasViewer', 'textsearch', 'catalogNumber'].indexOf(filter.key) >= 0
									) {
										return (
											<RaisedButton
												key={j}
												labelPosition="before"
												className="filter-val "
												label={val.title || val.name || val}
											/>
										);
									}
									return (
										<RaisedButton
											key={j}
											labelPosition="before"
											className="filter-val "
											label={val.title || val.name || val}
											onClick={self.props.toggleSearchTerm.bind(null, filter.key, val)}
										>
											<i className="mdi mdi-close" />
										</RaisedButton>
									);
								})}
							</div>
						);
					}

					return '';
				})}
			</div>
		);
	}
}

FiltersWidget.propTypes = {
	filters: PropTypes.array.isRequired,
	toggleSearchTerm: PropTypes.func,
};


export default FiltersWidget;
