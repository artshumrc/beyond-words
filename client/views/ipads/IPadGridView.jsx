import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Paper from 'material-ui/Paper';

IPadGridView = React.createClass({

	propTypes: {
		thumbnailList: React.PropTypes.array,
	},
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},
	getDefaultProps() {
		return {
			thumbnailList: [
		        '/images/BannerSQ.jpg',
		        '/images/BannerSQ.jpg',
		        '/images/BannerSQ.jpg',
		        '/images/BannerSQ.jpg',
		        '/images/BannerSQ.jpg',
		        '/images/BannerSQ.jpg',
		        '/images/BannerSQ.jpg',
		    ],
		}
	},
	render() {
		return (
			<div className="container">
				<div className="row">
					{this.props.thumbnailList.map((thumbnail, i) => {
						return (
							<div key={i} className="grid-thumbnail col-sm-4">
								<div className="image">
									<img className="center-block" src={thumbnail} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
});

IPadGridView.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

