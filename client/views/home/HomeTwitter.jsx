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
            tweets = TweetCollection.find({}).fetch();
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
                        <h1 className="text-center bw-tweet-handle"><a href="https://twitter.com/beyondwords2016">@beyondwords2016</a></h1>
                        <h4 className="text-center">The Latest Updates from Twitter</h4>
                        <div className="row">
                            {this.data.tweets.map(function (tweet, index) {
                                return <div className="bw-tweet-wrapper col-sm-4">
                                    <Card>
                                        <CardText>
                                            <a href="https://twitter.com/beyondwords2016"><img src={tweet.user.profile_image_url} alt="" className="avatar"/></a>
                                            <div className="" dangerouslySetInnerHTML={{__html: linkifyTwitter(tweet.text)}}></div>
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
