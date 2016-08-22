import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FontIcon from 'material-ui/FontIcon';

import {grey500, white, black, red500, yellow500, blue500} from 'material-ui/styles/colors';
IPadView = React.createClass({

  mixins: [ReactMeteorData],

  propTypes: {
  },
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  },
  getInitialState() {
    return {
      view: "grid",
    }
  },
  getMeteorData() {
    let query = {};

    return {
      objects: Objects.find(query, {sort: {title: 1}}).fetch(),
      currentUser: Meteor.user()
    };
  },
  handleViewChange(event, value) {
    this.setState({
      view: value,
    });
  },

  renderObjects() {

    return this.data.objects.map((object) => {
      return <ObjectTeaser
              key={object._id}
              object={object} />;

    });

  },

  render() {
    const styles = {
      toolBar: {
        height: "auto",
        background: "#232F3C",
      },
      radioButton: {
        float: "left",
        margin: 10,
        width: "auto"
      },
      icon: {
        margin: 10,
      }
    };

    return (
      <div className="page page-ipad">
    		<section className="page-content ipad-content">
          <Toolbar style={styles.toolBar}>
            <ToolbarGroup >
              <FontIcon className="mdi mdi-information" color={grey500} />
            </ToolbarGroup>
            <ToolbarGroup >
              <RadioButtonGroup name="view" defaultSelected="grid" onChange={this.handleViewChange}>
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
                  iconStyle={styles.radioButtonIcon}
                />
              </RadioButtonGroup>
            </ToolbarGroup>
          </Toolbar>
          {(() => {
            switch(this.state.view) {
              case "grid":
                return <IPadGridView />;
                break;
              case "single":
                return <IPadSingleView />;
                break;
              case "spread":
                return <IPadSpreadView />;
                break;
              default:
                return <p> There some problem displaying this view </p>
            }
          })()}

        </section>


      </div>
    );
  }
});

IPadView.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
