import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

HomeMedia = React.createClass({

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	render() {
		// console.log(this.data.ready, this.data.tweets);
		return (
			<section id="news" className="bg-gray">
				<div className="container">
					<h2 className="text-center bw-tweet-handle">In the News</h2>
					<div className="row">
						<MediaItemList />
					</div>
				</div>
			</section>
		);
	},
});
