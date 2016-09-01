
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import { debounce } from 'throttle-debounce';


ObjectsSearchTools = React.createClass({

	propTypes: {
		filters: React.PropTypes.array,
		toggleSearchTerm: React.PropTypes.func,
		handleChangeTextsearch: React.PropTypes.func,
		handleChangeDate: React.PropTypes.func,

	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	mixins: [ReactMeteorData],

	getInitialState() {
		return {
			searchDropdownOpen: '',
			yearMin: 600,
			yearMax: 1700,
			scribes: [],
			illuminators: [],
			institutions: [],
			places: [],
		};
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	componentDidMount() {
		Meteor.call('searchTools', (err, res) => {
			if (err) {
				console.log(err);
			} else {
				console.log('searchTools response', res);
				this.setState({
					scribes: res.scribes,
					illuminators: res.illuminators,
					institutions: res.institutions,
					places: res.places,

				});
			}
		});
	},

	getMeteorData() {
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
	},

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
	},

	toggleSearchTerm(key, value) {
		this.props.toggleSearchTerm(key, value);
		this.setState({
			searchDropdownOpen: '',
		});
	},

	render() {
		const self = this;
		const filters = this.props.filters;
		return (
			<div className="md-menu-toolbar" >
				<div className="toolbar-tools">

					<div className="search-tools">

						<div
							className={`dropdown search-dropdown search-dropdown-date\
							${self.state.searchDropdownOpen === 'date' ? ' open' : ''}`}
						>
							<FlatButton
								className="search-tool search-type-date dropdown-toggle"
								// label={<span><i className='mdi mdi-calendar button-prefix-icon'></i>Date</span>}
								label="Date"
								labelPosition="before"
								icon={<FontIcon className="mdi mdi-chevron-down" />}
								onClick={this.toggleSearchDropdown.bind(null, 'date')}
							/>

							<ul className="dropdown-menu ">
								<div className="dropdown-menu-inner">
									<div className="search-tool search-tool--date">
										<DateRangeSlider
											handleChangeDate={this.props.handleChangeDate}
										/>
									</div>
								</div>
							</ul>

						</div>
						<div
							className={`dropdown search-dropdown search-dropdown-scribes\
							${self.state.searchDropdownOpen === 'scribes' ? ' open' : ''}`}
						>
							<FlatButton
								className="search-tool search-type-scribes dropdown-toggle"
								label="Scribes"
								labelPosition="before"
								icon={<FontIcon className="mdi mdi-chevron-down" />}
								onClick={this.toggleSearchDropdown.bind(null, 'scribes')}
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
							className={`dropdown search-dropdown search-dropdown-illuminators\
							${self.state.searchDropdownOpen === 'illuminators' ? ' open' : ''}`}
						>
							<FlatButton
								className="search-tool search-type-illuminators dropdown-toggle"
								label="Illuminators"
								labelPosition="before"
								icon={<FontIcon className="mdi mdi-chevron-down" />}
								onClick={this.toggleSearchDropdown.bind(null, 'illuminators')}
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
							className={`dropdown search-dropdown search-dropdown-institutions\
							${self.state.searchDropdownOpen === 'institutions' ? ' open' : ''}`}
						>
							<FlatButton
								className="search-tool search-type-institutions dropdown-toggle"
								label="Institutions"
								labelPosition="before"
								icon={<FontIcon className="mdi mdi-chevron-down" />}
								onClick={this.toggleSearchDropdown.bind(null, 'institutions')}
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
							className={`dropdown search-dropdown search-dropdown-places\
							${self.state.searchDropdownOpen === 'places' ? ' open' : ''}`}
						>
							<FlatButton
								className="search-tool search-type-places dropdown-toggle"
								label="Places"
								labelPosition="before"
								icon={<FontIcon className="mdi mdi-chevron-down" />}
								onClick={this.toggleSearchDropdown.bind(null, 'places')}
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

						<div className="search-tool text-search">
							<TextField
								hintText=""
								floatingLabelText="Search"
								onChange={debounce(500, this.props.handleChangeTextsearch)}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	},
});
