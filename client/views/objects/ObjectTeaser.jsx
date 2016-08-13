import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
    let object_url = FlowRouter.path('ObjectDetail', {slug: object.slug});

     return (
       <div className="object-teaser">
				 <a href={object_url}>
					 <div className="object-thumbnail-wrap">
						 {object.thumbnail ?
							 <img className="object-thumbnail" src={object.thumbnail} />
						 :
							 <img className="object-thumbnail" src="/images/default_image.jpg" />
						 }
					 </div>
				 </a>
				 <div className="object-text-wrap">
					 <a href={object_url}>
						 <h3>{object.title}</h3>
					 </a>
					 <span className="object-teaser-subtitle">{object.author} Dates-Dates</span>
					 <p>
						 Example description quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat . . .
					 </p>
				 </div>
        </div>
      );
    }

});

ObjectTeaser.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
