import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import muiTheme from '/imports/lib/muiTheme';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import debounce from 'throttle-debounce/debounce';

import DateRangeSlider from '/imports/ui/components/objects/DateRangeSlider';
import SearchTermButton from '/imports/ui/components/objects/SearchTermButton';

class ObjectsSearchTools extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchDropdownOpen: '',
			yearMin: 600,
			yearMax: 1700,
			scribes: [],
			illuminators: [],
			institutions: [],
			places: [],
		};
		autoBind(this);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
	}

	componentDidMount() {
		Meteor.call('searchTools', (err, res) => {
			if (err) {
				// console.log(err);
			} else {
				// console.log('searchTools response', res);
				this.setState({
					scribes: res.scribes,
					illuminators: res.illuminators,
					institutions: res.institutions,
					places: res.places,

				});
			}
		});
	}

	toggleSearchDropdown(dropdown) {
		if (this.state.searchDropdownOpen === dropdown) {
			this.setState({
				searchDropdownOpen: '',
			});
		} else {
			this.setState({
				searchDropdownOpen: dropdown,
			});
		}
	}

	toggleSearchTerm(key, value) {
		this.props.toggleSearchTerm(key, value);
		this.setState({
			searchDropdownOpen: '',
		});
	}

	handleChangeTextsearch() {
		this.props.handleChangeTextsearch(this.refs.textSearch.input.value); // eslint-disable-line
	}

	handleChangeCatalogNSearch() {
		this.props.handleChangeCatalogNSearch(this.refs.catalogNSearch.input.value); // eslint-disable-line
	}

	render() {
		const self = this;
		const filters = this.props.filters;
		return (
			<div className="md-menu-toolbar" >
				<div className="toolbar-tools">

					<div className="search-tools">
						<Toggle
							className="search-tool search-type-mirador"
							label="Has Viewer?"
							onToggle={this.props.toggleMiradorSearch.bind(this)}
							thumbStyle={{
								backgroundColor: '#cccccc',
							}}
							thumbSwitchedStyle={{
								backgroundColor: '#f6f6f6',
							}}
							trackStyle={{
								backgroundColor: '#aaaaaa',
							}}
							trackSwitchedStyle={{
								backgroundColor: '#eeeeee',
							}}
						/>

						{/*}<div
							className={`dropdown search-dropdown search-dropdown-date${
								self.state.searchDropdownOpen === 'date' ? ' open' : ''}`}
						>
							<FlatButton
								className="search-tool search-type-date dropdown-toggle"
								// label={<span><i className='mdi mdi-calendar button-prefix-icon'></i>Date</span>}
								label="Date"
								labelPosition="before"
								icon={<FontIcon className="mdi mdi-chevron-down" />}
								onClick={this.toggleSearchDropdown.bind(this, 'date')}
							/>

							<ul className="dropdown-menu ">
								<div className="dropdown-menu-inner">
									<div className="search-tool--date toolbar">
										<DateRangeSlider
											handleChangeDate={this.props.handleChangeDate}
										/>
									</div>
								</div>
							</ul>

						</div>*/}
						<div
							className={`dropdown search-dropdown search-dropdown-scribes${
								self.state.searchDropdownOpen === 'scribes' ? ' open' : ''}`}
						>
							<FlatButton
								className="search-tool search-type-scribes dropdown-toggle"
								label="Scribes"
								labelPosition="before"
								icon={<FontIcon className="mdi mdi-chevron-down" />}
								onClick={this.toggleSearchDropdown.bind(this, 'scribes')}
							/>

							<ul className="dropdown-menu ">
								<div className="dropdown-menu-inner">
									{self.state.scribes.map((scribe, i) => {
										let active = false;
										filters.forEach((filter) => {
											if (filter.key === 'scribes') {
												filter.values.forEach((value) => {
													if (scribe === value) {
														active = true;
													}
												});
											}
										});
										return (
											<SearchTermButton
												key={i}
												toggleSearchTerm={self.toggleSearchTerm}
												label={scribe}
												searchTermKey="scribes"
												value={scribe}
												active={active}
											/>
										);
									})}
									{self.state.scribes.length === 0 ?
										<div className="no-results">No scribes found in objects.</div>
										: ''
									}
								</div>
							</ul>
						</div>
						<div
							className={`dropdown search-dropdown search-dropdown-illuminators${
								self.state.searchDropdownOpen === 'illuminators' ? ' open' : ''}`}
						>
							<FlatButton
								className="search-tool search-type-illuminators dropdown-toggle"
								label="Illuminators"
								labelPosition="before"
								icon={<FontIcon className="mdi mdi-chevron-down" />}
								onClick={this.toggleSearchDropdown.bind(this, 'illuminators')}
							/>

							<ul className="dropdown-menu ">
								<div className="dropdown-menu-inner">
									{self.state.illuminators.map((illuminator, i) => {
										let active = false;
										filters.forEach((filter) => {
											if (filter.key === 'illuminators') {
												filter.values.forEach((value) => {
													if (illuminator === value) {
														active = true;
													}
												});
											}
										});
										return (
											<SearchTermButton
												key={i}
												toggleSearchTerm={self.toggleSearchTerm}
												label={illuminator}
												searchTermKey="illuminators"
												value={illuminator}
												active={active}
											/>
										);
									})}
									{self.state.illuminators.length === 0 ?
										<div className="no-results">No illuminators found in objects.</div>
										: ''
									}
								</div>
							</ul>


						</div>
						<div
							className={`dropdown search-dropdown search-dropdown-institutions${
								self.state.searchDropdownOpen === 'institutions' ? ' open' : ''}`}
						>
							<FlatButton
								className="search-tool search-type-institutions dropdown-toggle"
								label="Institutions"
								labelPosition="before"
								icon={<FontIcon className="mdi mdi-chevron-down" />}
								onClick={this.toggleSearchDropdown.bind(this, 'institutions')}
							/>

							<ul className="dropdown-menu ">
								<div className="dropdown-menu-inner">
									{self.state.institutions.map((institution, i) => {
										let active = false;
										filters.forEach((filter) => {
											if (filter.key === 'institutions') {
												filter.values.forEach((value) => {
													if (institution === value) {
														active = true;
													}
												});
											}
										});
										return (
											<SearchTermButton
												key={i}
												toggleSearchTerm={self.toggleSearchTerm}
												label={institution}
												searchTermKey="institutions"
												value={institution}
												active={active}
											/>
										);
									})}
									{self.state.institutions.length === 0 ?
										<div className="no-results">No institutions found in objects.</div>
										: ''
									}
								</div>
							</ul>


						</div>
						<div
							className={`dropdown search-dropdown search-dropdown-places${
								self.state.searchDropdownOpen === 'places' ? ' open' : ''}`}
						>
							<FlatButton
								className="search-tool search-type-places dropdown-toggle"
								label="Places"
								labelPosition="before"
								icon={<FontIcon className="mdi mdi-chevron-down" />}
								onClick={this.toggleSearchDropdown.bind(this, 'places')}
							/>

							<ul className="dropdown-menu ">
								<div className="dropdown-menu-inner">
									{self.state.places.map((place, i) => {
										let active = false;
										filters.forEach((filter) => {
											if (filter.key === 'places') {
												filter.values.forEach((value) => {
													if (place === value) {
														active = true;
													}
												});
											}
										});
										return (
											<SearchTermButton
												key={i}
												toggleSearchTerm={self.toggleSearchTerm}
												label={place}
												searchTermKey="places"
												value={place}
												active={active}
											/>
										);
									})}
									{self.state.places.length === 0 ?
										<div className="no-results">No places found in objects.</div>
										: ''
									}
								</div>
							</ul>

						</div>
						<div className="search-tool text-search catalog-n-search">
							<TextField
								hintText=""
								floatingLabelText="Catalog No."
								ref="catalogNSearch"
								onChange={debounce(500, this.handleChangeCatalogNSearch)}
							/>
						</div>

						<div className="search-tool text-search">
							<TextField
								hintText=""
								floatingLabelText="Text Search"
								ref="textSearch"
								onChange={debounce(500, this.handleChangeTextsearch)}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ObjectsSearchTools.propTypes = {
	filters: PropTypes.array,
	toggleSearchTerm: PropTypes.func,
	handleChangeTextsearch: PropTypes.func,
	handleChangeCatalogNSearch: PropTypes.func,
	handleChangeDate: PropTypes.func,
	toggleMiradorSearch: PropTypes.func,
};

ObjectsSearchTools.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};


const objectsSearchToolsContainer = createContainer((props) => {
	const scribes = [];
	const illuminators = [];
	const institutions = [];
	const places = [];

	return {
		scribes,
		illuminators,
		institutions,
		places,
	};
}, ObjectsSearchTools);

export default objectsSearchToolsContainer;
