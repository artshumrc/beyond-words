import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FontIcon from 'material-ui/FontIcon';
import { grey500, white } from 'material-ui/styles/colors';

IPadView = React.createClass({

	propTypes: {
	},

	mixins: [ReactMeteorData],

	getInitialState() {
		return {
			view: 'grid',
		};
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	getMeteorData() {
		const query = {};

		return {
			objects: Objects.find(query, { sort: { title: 1 } }).fetch(),
			currentUser: Meteor.user(),
		};
	},
	handleViewChange(event, value) {
		this.setState({
			view: value,
		});
	},

	renderObjects() {
		return this.data.objects.map((object) => (
			<ObjectTeaser
				key={object._id}
				object={object}
			/>
		));
	},

	render() {
		const styles = {
			toolBar: {
				height: 'auto',
				background: '#232F3C',
				padding: '1%',
			},
			radioButtonGroup: {
				display: 'flex',
			},
			radioButton: {
				width: 'auto',
			},
			icon: {
				lineHeight: 0,
			},
		};

		return (
			<div className="page page-ipad">
				<section className="page-content ipad-content">
					<Toolbar style={styles.toolBar}>
						<ToolbarGroup >
							<FontIcon
								style={styles.icon}
								className="mdi mdi-information"
								color={grey500}
								hoverColor={white}
							/>
						</ToolbarGroup>
						<ToolbarGroup >
							<RadioButtonGroup
								style={styles.radioButtonGroup}
								name="view"
								defaultSelected="grid"
								onChange={this.handleViewChange}
							>
								<RadioButton
									value="grid"
									checkedIcon={<FontIcon className="mdi mdi-view-grid" color={white} />}
									uncheckedIcon={<FontIcon className="mdi mdi-view-grid" color={grey500} />}
									style={styles.radioButton}
								/>
								<RadioButton
									value="single"
									checkedIcon={<FontIcon className="mdi mdi-image" color={white} />}
									uncheckedIcon={<FontIcon className="mdi mdi-image" color={grey500} />}
									style={styles.radioButton}
								/>
								<RadioButton
									value="spread"
									checkedIcon={<FontIcon className="mdi mdi-book-open-variant" color={white} />}
									uncheckedIcon={<FontIcon className="mdi mdi-book-open-variant" color={grey500} />}
									style={styles.radioButton}
								/>
							</RadioButtonGroup>
						</ToolbarGroup>
					</Toolbar>
					{(() => {
						switch (this.state.view) {
						case 'grid':
							return <IPadGridView />;
						case 'single':
							return <IPadSingleView />;
						case 'spread':
							return <IPadSpreadView />;
						default:
							return <p> There some problem displaying this view </p>;
						}
					})()}

				</section>


			</div>
		);
	},
});

IPadView.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
