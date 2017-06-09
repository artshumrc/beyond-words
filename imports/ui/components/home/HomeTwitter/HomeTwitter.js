import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardText } from 'material-ui/Card';

HomeTwitter = React.createClass({

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	mixins: [ReactMeteorData],

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	getMeteorData() {
		let tweets = [];
		const handle = Meteor.subscribe('tweets');
		if (handle.ready()) {
			// console.log(tweets);
			// TweetCollection = new Mongo.Collection("tweetCollection");
			tweets = TweetCollection.find({}, { limit: 6, sort: { id: -1 } }).fetch();
		}
		return {
			tweets,
			ready: handle.ready(),
		};
	},
	render() {
		// console.log(this.data.ready, this.data.tweets);
		const linkifyTwitter = text => linkifyHtml(text, {
			formatHref(value, type) {
				if (type === 'hashtag') {
					return `https://twitter.com/hashtag/${value.substring(1)}`;
				}
				return value;
			},
			target: '_blank',
		});
		return (
			<div>
				<section id="twitter">
					<div className="container">
						<a className="twitter-header-link" href="https://twitter.com/beyondwords2016" target="_blank" rel="noopener noreferrer">
							<i className="mdi mdi-twitter" />
							<h2 className="text-center bw-tweet-handle">@BeyondWords2016</h2>
						</a>
						<h4 className="text-center">Latest Updates from Twitter</h4>
						<div className="row">
							{this.data.tweets.map((tweet, index) => (
								<div
									key={index}
									className="bw-tweet-wrapper wow fadeIn"
								>
									<Card>
										<CardText>
											<a
												href="https://twitter.com/beyondwords2016"
												target="_blank"
												rel="noopener noreferrer"
											>
												<img src={tweet.user.profile_image_url} alt="avatar" className="avatar" />
											</a>
											<div
												className="tweet-text-html"
												dangerouslySetInnerHTML={{ __html: linkifyTwitter(tweet.text) }}
											/>
										</CardText>
									</Card>
								</div>
							))}
						</div>
					</div>
				</section>
			</div >
		);
	},
});
