import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

IPadGridView = React.createClass({

	propTypes: {
		slides: React.PropTypes.array,
	},

	getDefaultProps() {
		return {
			slides: [
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
				'/images/BannerSQ.jpg',
			],
		};
	},

	getInitialState() {
		return {
			slide: '',
			open: false,
		};
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	handleSlideOpen(slide) {
		this.setState({
			open: true,
			slide,
		});
	},
	handleSlideClose() {
		this.setState({
			open: false,
		});
	},
	render() {
		return (
			<div className="container">
				{this.state.open ?
					<FullscreenViewer
						imageUrl={this.state.slide}
						open={this.state.open}
						handleClose={this.handleSlideClose}
					/>
					:
					null
				}
				<div className="row">
					{this.props.slides.map((slide, i) => (
						<div key={i} className="grid-thumbnail col-xs-6 col-sm-4">
							<div className="image">
								<Paper zDepth={2}>
									<img
										alt="slide"
										onClick={this.handleSlideOpen.bind(this, slide)}
										className="center-block"
										src={slide}
									/>
								</Paper>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	},
});

IPadGridView.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

