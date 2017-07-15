import Twit from 'twit';
import TweetCollection from '/imports/api/collections/tweetCollection';


const T = new Twit({
	consumer_key: '1a8UqOjo2n7imRhOy3B7NvTcr',
	consumer_secret: 'tRCuDoFNx80RdN32c4VicCusqnkdbtkE5eDIzgJLZwUd4ZJEM9',
	access_token: '151099171-FGLGO1xzQ9m2e4Muk2slPoHY1KlNNKFZjwGPpJ5T',
	access_token_secret: 'mcRslW9aUU1k1hBSWwz4SfgXx4ozebmPhsplX7eqgCd3w',
	timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
});

// 10 minutes
const POLL_INTERVAL = 600000;
// 30 minutes
// const POLL_INTERVAL = 1800000;
Meteor.publish('tweets', function tweets() {
	const pub = this;
	const poll = () => {
		const wrapGet = Meteor.wrapAsync(T.get, T);
		const data = wrapGet('statuses/user_timeline', {
			screen_name: 'beyondwords2016',
			count: '6',
			exclude_replies: true,
			include_rts: false,
		});

		console.log('Tweets from Twitter repsonse:', data.length);

		if (data) {
			data.forEach((doc) => {
				if (!TweetCollection.findOne({ id_str: doc.id_str })) {
					TweetCollection.insert(doc);
          // pub.added('tweetCollection', doc.id_str, doc);
				}
			});
		}
	};

	poll();
	pub.ready();

	const interval = Meteor.setInterval(poll, POLL_INTERVAL);

	pub.onStop(() => {
		Meteor.clearInterval(interval);
	});

	return TweetCollection.find();
});
