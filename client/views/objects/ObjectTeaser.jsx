import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import ActionInput from 'material-ui/svg-icons/action/input';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Object Teaser
ObjectTeaser = React.createClass({

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  },

  propTypes: {
    object: React.PropTypes.object.isRequired
  },


  render() {
    let object = this.props.object;
    let object_url = "/objects/" + object.author + "/" + object.slug ;

     return (
       <div className="object-teaser">
         <Card>
            <a href={object_url}>
              <CardTitle title={object.title} />
            </a>
            <CardText>
            </CardText>
            <Divider />
            <CardActions>
              <a href="#">
                <IconButton tooltip="Comment">
                  <CommunicationComment />
                </IconButton>
              </a>
              <a href="#">
                <IconButton tooltip="Favorite">
                  <ActionFavoriteBorder />
                </IconButton>
              </a>
              <a href="#">
                <IconButton tooltip="Other Formats">
                  <ActionInput />
                </IconButton>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    }

});

ObjectTeaser.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
