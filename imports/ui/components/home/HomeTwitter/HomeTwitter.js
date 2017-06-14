
import React from 'react';
import PropTypes from 'prop-types';
import muiTheme from '/imports/lib/muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardText } from 'material-ui/Card';
import { createContainer } from 'meteor/react-meteor-data';

class HomeTwitter extends React.Component {
	getChildContext() {
		return { muiTheme: getMuiTheme(muiTheme) };
	}

	render() {
		// console.log(this.props.ready, this.props.tweets);
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
							{this.props.tweets.map((tweet, index) => (
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
			</div>
		);
	}
}

HomeTwitter.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};

const homeTwitterContainer = createContainer((props) => {
	let tweets = [];
	const handle = Meteor.subscribe('tweets');
	if (handle.ready()) {
		tweets = TweetCollection.find({}, { limit: 6, sort: { id: -1 } }).fetch();
	}

	return {
		tweets,
		ready: handle.ready(),
	};
}, HomeTwitter);


export default homeTwitterContainer;
