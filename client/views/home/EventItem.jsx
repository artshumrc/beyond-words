
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Add2Calendar from '../../../imports/Add2Calendar';
import moment from 'moment-timezone';

EventItem = React.createClass({

	propTypes: {
		event: React.PropTypes.object,
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object.isRequired,
	},

	componentDidMount(){
		const event = this.props.event;
		let startDate,
			endDate;
		let tmp;

		startDate = moment.utc(event.date).toString();

		if('endDate' in event){
			tmp = moment.utc(event.endDate);

		}else {
			tmp = moment.utc(event.date);
			tmp.hours(tmp.hours()+2);

		}
		endDate = tmp.toString();

		const singleEventArgs = {
			title			 : event.title,
			start			 : startDate,
			end				 : endDate,
			location		: event.location || "Houghton Library, Harvard University, Harvard Yard, Cambridge, MA 02138",
			description : event.description || "description",
		};
		const singleEvent = new Add2Calendar(singleEventArgs);
		const singleEventNode = singleEvent.getSingleEventWidgetNode();
		document.querySelector('.event-item--' + event._id + ' .add-to-calendar').appendChild(singleEventNode);

	},

	linkToEventOrScroll(e) {
		let $target = $(e.target);

		if (!$target.hasClass('event-link')) {
			$target = $target.parents('.event-link');
		}

		if ($target.prop('href').indexOf(window.location.host) >= 0) {
			let scrollElemId = '#';

			scrollElemId += $target.prop('href').split('#')[1];

			$('html, body').animate({ scrollTop: $(scrollElemId).offset().top - 100 }, 300);

			e.preventDefault();
		}
	},



	render(){
		const event = this.props.event;
		const self = this;

		return <li
						className={"event-item wow fadeIn event-item--" + event._id}
					>
						<div className="event-calendar-date">
							<h6 className="event-month">{moment.utc(event.date).format('MMMM')}</h6>
							<h3 className="event-day thin">{moment.utc(event.date).format('D')}</h3>
							<h6 className="event-weekday">{moment.utc(event.date).format('dddd')}</h6>
						</div>
						<div className="event-info">
							{event.link && event.link !== "#" ?
								<a
									className="event-link"
									href={event.link}
									target="_blank" rel="noopener noreferrer"
									onClick={self.linkToEventOrScroll}
								>
									<h3 className="event-title">
										{event.title}
										<i className="mdi mdi-open-in-new"></i>
									</h3>
								</a>
							:
								<h3 className="event-title">{event.title}</h3>
							}
							<div className="add-to-calendar">
							</div>
						</div>
					</li>

	}
});
