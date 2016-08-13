import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


HomeTwitter = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    },
    mixins: [ReactMeteorData],
    getMeteorData(){
        var tweets = [];
        var handle = Meteor.subscribe('tweets');
        if (handle.ready()) {
            // console.log(tweets);
            //TweetCollection = new Mongo.Collection("tweetCollection");
            tweets = TweetCollection.find({}, {limit: 6}).fetch();
        }
        return {
            tweets: tweets,
            ready: handle.ready()
        };
    },
    render(){
        // console.log(this.data.ready, this.data.tweets);
        var linkifyTwitter = function (text) {
            return linkifyHtml(text, {
                formatHref: function (value, type) {
                    if (type === 'hashtag') {
                        value = 'https://twitter.com/hashtag/' + value.substring(1);
                    }
                    return value;
                },
                target: '_blank'
            });
        };
        return (
            <div>
                <section id="twitter">
                    <div className="container">
                        <a  className="twitter-header-link" href="https://twitter.com/beyondwords2016" target="_blank">
                          <i className="mdi mdi-twitter"></i>
                          <h2 className="text-center bw-tweet-handle">@BeyondWords2016</h2>
                        </a>
                        <h4 className="text-center">Latest Updates from Twitter</h4>
                        <div className="row">
                            {this.data.tweets.map(function (tweet, index) {
                                return <div
                                  key={index}
                                  className="bw-tweet-wrapper wow fadeIn"
                                  >
                                    <Card>
                                        <CardText
                                          >
                                            <a href="https://twitter.com/beyondwords2016" target="_blank"><img src={tweet.user.profile_image_url} alt="" className="avatar"/></a>
                                            <div className="tweet-text-html" dangerouslySetInnerHTML={{__html: linkifyTwitter(tweet.text)}}></div>
                                        </CardText>
                                    </Card>
                                </div>
                            })}
                        </div>
                    </div>
                </section>
            </div >
        )
    }
});
