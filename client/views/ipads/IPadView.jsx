import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionViewModule from 'material-ui/svg-icons/action/view-module';
import ActionViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import ActionInfo from 'material-ui/svg-icons/action/info';

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
              <ActionInfo style={styles.icon} hoverColor={blue500} />
            </ToolbarGroup>
            <ToolbarGroup >
              <RadioButtonGroup name="view" defaultSelected="grid" onChange={this.handleViewChange}>
                <RadioButton
                  value="grid"
                  checkedIcon={<ActionViewModule color={white} />}
                  uncheckedIcon={<ActionViewModule color={white} />}
                  style={styles.radioButton}
                />
                <RadioButton
                  value="single"
                  checkedIcon={<ActionViewCarousel />}
                  uncheckedIcon={<ActionViewCarousel color={white} />}
                  style={styles.radioButton}
                />
                <RadioButton
                  value="spread"
                  checkedIcon={<ActionViewCarousel color={white} />}
                  uncheckedIcon={<ActionViewCarousel color={white} />}
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
                return <IPadSpreadView />;
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
