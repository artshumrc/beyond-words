
import React from 'react';
import PropTypes from 'prop-types';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class ObjectsSearchToolsPanel extends React.Component {
	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	}

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
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
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
	}

	toggleSearchTerm(key, value) {
		this.props.toggleSearchTerm(key, value);
	}

	handleChangeTextsearch(event) {
		this.props.handleChangeTextsearch(event.target.value);
	}

	render() {
		const self = this;
		const filters = this.props.filters;

		const styles = {
			flatButton: {
				width: 'auto',
				minWidth: 'none',
				height: '80px',
				padding: '21px 5px',
			},
			flatIconButton: {
				padding: '10px 20px',
				width: 'auto',
				minWidth: 'none',
				height: '55px',
			},
			wrapper: {
				display: 'flex',
				flexWrap: 'wrap',
			},
			textSearch: {
				width: '100%',
				padding: '0px 10px',
				background: '#001439',
			},
			cardHeader: {
				fontFamily: 'Hind',
				textTransform: 'uppercase',
			},
		};

		return (
			<Drawer
				openSecondary
				open={this.props.open}
				docked={false}
				onRequestChange={this.props.closeRightMenu}
			>
				<div style={styles.textSearch} className="search-tool text-search">
					<TextField
						hintText=""
						floatingLabelText="Search"
						fullWidth
						onChange={this.handleChangeTextsearch}
					/>
				</div>
				<Card>
					<CardHeader
						title="Date"
						style={styles.cardHeader}
						actAsExpander
						showExpandableButton
					/>
					<CardText expandable style={styles.wrapper}>
						<div className="search-tool--date">
							<DateRangeSlider
								handleChangeDate={this.props.handleChangeDate}
							/>
						</div>
					</CardText>
				</Card>
				<Card>
					<CardHeader
						title="Scribes"
						style={styles.cardHeader}
						actAsExpander
						showExpandableButton
					/>
					<CardText expandable style={styles.wrapper}>
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
								<SearchTermButtonPanel
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
					</CardText>
				</Card>
				<Card>
					<CardHeader
						title="Illuminators"
						style={styles.cardHeader}
						actAsExpander
						showExpandableButton
					/>
					<CardText expandable style={styles.wrapper}>
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
								<SearchTermButtonPanel
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
					</CardText>
				</Card>
				<Card>
					<CardHeader
						title="Institutions"
						style={styles.cardHeader}
						actAsExpander
						showExpandableButton
					/>
					<CardText expandable style={styles.wrapper}>
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
								<SearchTermButtonPanel
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
					</CardText>
				</Card>
				<Card>
					<CardHeader
						title="Places"
						style={styles.cardHeader}
						actAsExpander
						showExpandableButton
					/>
					<CardText expandable style={styles.wrapper}>
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
								<SearchTermButtonPanel
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
					</CardText>
				</Card>
			</Drawer>
		);
	}
}

ObjectsSearchToolsPanel.propTypes = {
	filters: PropTypes.array,
	toggleSearchTerm: PropTypes.func,
	handleChangeTextsearch: PropTypes.func,
	handleChangeDate: PropTypes.func,
	open: PropTypes.bool,
	closeRightMenu: PropTypes.func,
};
