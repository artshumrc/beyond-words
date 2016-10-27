import { Tabs, Tab } from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

HomeEvents = React.createClass({

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	mixins: [ReactMeteorData],

	getInitialState() {
		return {
			registrationModalOpen: false,
			successModalOpen: false,
			errorText: '',
			regFormNov3: false,
			regFormNov4: false,
			regFormNov5: false,
			hasRegistered: false,
		};
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	getMeteorData() {
		let nov3Sessions = [];
		let nov4Sessions = [];
		let nov5Sessions = [];

		const sessionSubscription = Meteor.subscribe('symposiumSessions');
		if (sessionSubscription.ready()) {
			nov3Sessions = SymposiumSessions.find({ nov3: true }).fetch();
			nov4Sessions = SymposiumSessions.find({ nov4: true }).fetch();
			nov5Sessions = SymposiumSessions.find({ nov5: true }).fetch();
		}


		return {
			events: Events.find({}, { sort: { date: 1 } }).fetch(),
			nov3Sessions,
			nov4Sessions,
			nov5Sessions,
		};
	},

	openRegistrationModal() {
		this.setState({
			registrationModalOpen: true,
		});
	},

	closeRegistrationModal() {
		this.setState({
			registrationModalOpen: false,
		});
	},

	closeSuccessModal() {
		this.setState({
			successModalOpen: false,
		});
	},

	handleCheckBoxChange(checkboxDay) {
		if (checkboxDay === 'nov_3') {
			this.setState({
				regFormNov3: !this.state.regFormNov3,
			});
		} else if (checkboxDay === 'nov_4') {
			this.setState({
				regFormNov4: !this.state.regFormNov4,
			});
		} else if (checkboxDay === 'nov_5') {
			this.setState({
				regFormNov5: !this.state.regFormNov5,
			});
		} else {
			//console.log('handleChange error');
		}
	},

	submitRegistrationModal() {
		const self = this;

		// get all the inputs into an array.
		const $inputs = $('#registrationForm :input');
		const values = {};
		$inputs.each(function transform() {
			if (['nov_3', 'nov_4', 'nov_5'].indexOf(this.name) >= 0) {
				if (this.name === 'nov_3') {
					values[this.name] = self.state.regFormNov3;
				} else if (this.name === 'nov_4') {
					values[this.name] = self.state.regFormNov4;
				} else if (this.name === 'nov_5') {
					values[this.name] = self.state.regFormNov5;
				}
			} else {
				values[this.name] = $(this).val();
			}
		});

		if (values.first_name.length === 0
			|| values.last_name.length === 0
			|| values.email.length === 0) {
			this.setState({
				errorText: 'This value is required',
			});
		} else {
			this.setState({
				errorText: '',
			});
		}

		if (values.nov_3 === false
			&& values.nov_4 === false
			&& values.nov_5 === false) {
			this.setState({
				checkboxErrorText: 'Please select at least one day to attend',
			});
		} else {
			this.setState({
				checkboxErrorText: '',
			});
		}

		if (values.first_name.length > 0
			&& values.last_name.length > 0
			&& values.email.length > 0
			&& (values.nov_3 === true
				|| values.nov_4 === true
				|| values.nov_5 === true)) {
			// on the client
			Meteor.call('register', values, (error) => {
				if (error) {
					//console.log(error);
				}
			});

			this.setState({
				registrationModalOpen: false,
				successModalOpen: true,
				errorText: '',
				checkboxErrorText: '',
				hasRegistered: true,
			});
		}
	},

	render() {
		const that = this;

		const styles = {
			contentContainerStyle: {
				background: '#fafafa',
				padding: '90px 60px',

			},
			inkBarStyle: {
				background: '#C5CAE9',

			},
			tabItemContainerStyle: {
				background: '#eee',

			},
			tab: {
				color: '#222',
				fontFamily: 'Hind',
			},
			checkbox: {
				marginBottom: 16,
			},
		};

		const actions = [
			<FlatButton
				label="Cancel"
				primary
				onClick={this.closeRegistrationModal}
			/>,
			<FlatButton
				label="Submit"
				primary
				onClick={this.submitRegistrationModal}
			/>,
		];

		const successActions = [
			<FlatButton
				label="Close"
				primary
				onClick={this.closeSuccessModal}
			/>,
		];

		const errorText = this.state.errorText;
		const checkboxErrorText = this.state.checkboxErrorText;
		console.log(this.data);

		return (
			<div>
				<section id="events">
					<div className="container">
						<h2 className="events-title text-center">Events</h2>
						<h5 className="thin text-center">
							<em>
								Support for Beyond Words public programming has been provided by
								the Samuel H. Kress Foundation.
							</em>
						</h5>
						<ul className="events-list">
							{this.data.events.map((event, i) => (
								<EventItem
									key={i}
									event={event}
									/>
							))}
						</ul>
					</div>
				</section>
				<section id="symposium">
					<h3 className="symposium-title">Symposium: 3-5 November 2016</h3>
					<p>
						Major support for the Beyond Words symposium has been provided by
						The Medieval Studies Committee of Harvard University and the Boston
						College Institute for Liberal Arts, with additional support from Christie's
						and the International Center of Medieval Art.
					</p>

					{!this.state.hasRegistered ?
						<a
							className="btn btn-large md-button registration-button md-ink-ripple paper-shadow"
							onClick={this.openRegistrationModal}
						>
							<span>Register Now</span>
							<div className="md-ripple-container" />

						</a>
						:
						<a
							className="btn btn-large md-button registration-button md-ink-ripple paper-shadow"
						>
							<span>Thank you for registering</span>
							<div className="md-ripple-container" />

						</a>
					}

					<Tabs
						className="program-tabs"
						contentContainerStyle={styles.contentContainerStyle}
						inkBarStyle={styles.inkBarStyle}
						tabItemContainerStyle={styles.tabItemContainerStyle}
					>

						<Tab
							label="3 Nov, McMullen"
							style={styles.tab}
						>
							<h4 className="symposium-day">
								Thursday, 3 November, McMullen Museum, Boston College
							</h4>
							<br />

							{this.data.nov3Sessions.map((session, i) => (
								<SymposiumSession
									key={i}
									session={session}
								/>
							))}

						</Tab>

						<Tab
							label="4 Nov, ISGM"
							style={styles.tab}
						>
							<h4 className="symposium-day">Friday, 4 November, Isabella Stewart Gardner Museum</h4>
							<br />
							{this.data.nov4Sessions.map((session, i) => (
								<SymposiumSession
									key={i}
									session={session}
								/>
							))}

						</Tab>

						<Tab
							label="5 Nov, Houghton"
							style={styles.tab}
						>
							<h4 className="symposium-day">
								Saturday, 5 November, <a href="https://map.harvard.edu/" target="_blank">Sever Hall 113, Harvard University</a>
							</h4>
							<br />

							{this.data.nov5Sessions.map((session, i) => (
								<SymposiumSession
									key={i}
									session={session}
								/>
							))}

						</Tab>
					</Tabs>
				</section>

				<Dialog
					className="dialog-modal"
					title="Register for Beyond Words"
					actions={actions}
					modal
					open={this.state.registrationModalOpen}
				>

					<p>
						While the Symposium is free of charge, pre-registration is required.
					</p>
					<p>
						Please also indicate which day(s) you will be attending. * denotes a required field.
					</p>
					<form id="registrationForm" >

						<TextField
							name="first_name"
							required
							className="text-field name-field"
							floatingLabelText="First name*"
							errorText={errorText}
						/>
						<TextField
							name="middle_name"
							className="text-field name-field"
							floatingLabelText="Middle name"

						/>
						<TextField
							name="last_name"
							required
							className="text-field name-field"
							floatingLabelText="Last name*"
							errorText={errorText}
						/>
						<br />
						<br />
						<TextField
							name="affiliation"
							className="text-field"
							floatingLabelText="Affiliation"
						/>
						<TextField
							name="email"
							required
							errorText={errorText}
							className="text-field"
							type="email"
							floatingLabelText="Email address*"
							errorText={errorText}
						/>
						<br />
						<br />

						<p>
							Days attending*:
						</p>
						<span className="checkbox-label-error-text">{checkboxErrorText}</span>
						<br />
						<Checkbox
							name="nov_3"
							className="checkbox-field"
							label="Thurs., Nov. 3 (McMullen Museum, Boston College)"
							onCheck={this.handleCheckBoxChange.bind(null, 'nov_3')}
							style={styles.checkbox}
						/>
						<Checkbox
							name="nov_4"
							className="checkbox-field"
							label="Fri., Nov. 4 (Isabella Stewart Gardner Museum)"
							onCheck={this.handleCheckBoxChange.bind(null, 'nov_4')}
							style={styles.checkbox}
						/>
						<Checkbox
							name="nov_5"
							className="checkbox-field"
							label="Sat., Nov. 5 (Houghton Library, Harvard University)"
							onCheck={this.handleCheckBoxChange.bind(null, 'nov_5')}
							style={styles.checkbox}
						/>

					</form>
				</Dialog>

				<Dialog
					className="dialog-modal"
					title="Registration successful"
					actions={successActions}
					modal
					open={this.state.successModalOpen}
				>

					<p>
						Thank you for registering for the Beyond Words Symposium.
					</p>

				</Dialog>

			</div>
		);
	},

});
