Meteor.startup(function () {
    Twit = require('twit');

    T = new Twit({
        consumer_key: '31K6FwUSGcbzN26G7i970ZlCL',
        consumer_secret: 'X5XUqU5Xyso577f8y5oLLPfA9kR4WzZuG4cidYzYwZ97htMTur',
        access_token: '3965211779-fBbMU65W56rVSrRX2lYFnI2M8vzlPZtD6izjIM1',
        access_token_secret: 'vMmTPA3KjNALoWCgD4ThKHuTgMBXf16xc7Kug1nYgmrRR',
        timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
    });
});

const POLL_INTERVAL = 1800000;
Meteor.publish('tweets', function () {
    var pub = this;
    const published_tweets = {};
    const poll = function () {
        var wrapGet = Meteor.wrapAsync(T.get, T);
        const data = wrapGet('statuses/user_timeline', {screen_name: 'beyondwords2016', count: '6', exclude_replies: true, include_rts: false});
        // console.log(data);
        if (data) {
            data.forEach(function (doc) {
                if (published_tweets[doc.id]) {
                    pub.changed('tweetCollection', doc.id, doc);
                } else {
                    published_tweets[doc.id] = true;
                    pub.added('tweetCollection', doc.id, doc);
                }
            });
        }
    };

    poll();
    pub.ready();

    const interval = Meteor.setInterval(poll, POLL_INTERVAL);

    pub.onStop(function () {
        Meteor.clearInterval(interval);
    });
});
