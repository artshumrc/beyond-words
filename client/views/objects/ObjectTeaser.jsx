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

  mixins: [ReactMeteorData],
  getMeteorData(){
      var object = {},
          images = [],
          thumbnails = [],
					image = "";

      var imageSubscription = Meteor.subscribe('objectImages', this.props.object.slug);
      if (imageSubscription.ready()) {
					if(typeof this.props.object.images !== "undefined"){
	          images = Images.find({_id: {$in:this.props.object.images}}).fetch();
					}
          thumbnails = Thumbnails.find({}).fetch();
      }

      return {
        images: images,
        thumbnails: thumbnails
      };
  },



  render() {
    let object = this.props.object;
    let object_url = FlowRouter.path('ObjectDetail', {slug: object.slug});
		let author_title = "";
		let description = "";

		if ('author_title' in object && typeof object.author_title !== "undefined"){
			author_title = object.author_title;
		}

		if ('description' in object && typeof object.description !== "undefined"){
			description = object.description;
		}

		var image = {};
		if(this.data.images.length){
			image = this.data.images[0];
		}


     return (
       <div className="object-teaser">
				 <a href={object_url}>
					 <div className="object-thumbnail-wrap">
						 {("url" in image && image.url.length) ?
							 <img className="object-detail-thumbnail" src={image.url} />
							 :
							 <img className="object-detail-thumbnail" src="/images/default_image.jpg" />
						 }
					 </div>
				 </a>
				 <div className="object-text-wrap">
					 <a href={object_url}>
						 <h3>{Utils.trunc(author_title, 60)}</h3>
					 </a>
					 <span className="object-teaser-subtitle">{object.date}</span>
					 <p>
						 {Utils.trunc(description, 120)}
					 </p>
				 </div>
        </div>
      );
    }

});

ObjectTeaser.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
