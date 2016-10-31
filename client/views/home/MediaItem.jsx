
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import moment from 'moment-timezone';

MediaItem = React.createClass({

	propTypes: {
		mediaItem: React.PropTypes.object,
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},


	render(){
		const mediaItem = this.props.mediaItem;
		const self = this;

		return (
			<div
						className={"mediaItem-item wow fadeIn mediaItem-item--" + mediaItem._id}
			>
				<div className="mediaItem-calendar-date">
					<h6 className="mediaItem-month">{moment.utc(mediaItem.date).format('MMMM')}</h6>
					<h3 className="mediaItem-day thin">{moment.utc(mediaItem.date).format('D')}</h3>
					<h6 className="mediaItem-weekday">{moment.utc(mediaItem.date).format('dddd')}</h6>
				</div>
				<div className="mediaItem-info">
					{mediaItem.link && mediaItem.link !== "#" ?
						<a
							className="mediaItem-link"
							href={mediaItem.link}
							target="_blank" rel="noopener noreferrer"
							onClick={self.linkTomediaItemOrScroll}
						>
							<h3 className="mediaItem-title">
								{mediaItem.title}
								<i className="mdi mdi-open-in-new"></i>
							</h3>
						</a>
					:
						<h3 className="mediaItem-title">{mediaItem.title}</h3>
					}
				</div>
			</div>
		);
	}
});
