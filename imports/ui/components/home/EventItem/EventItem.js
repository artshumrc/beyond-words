
import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import moment from 'moment-timezone';

import muiTheme from '/imports/lib/muiTheme';
import Add2Calendar from '/imports/ui/components/common/Add2Calendar';

class EventItem extends React.Component {
	childContextTypes: {
		muiTheme: PropTypes.object.isRequired,
	}

	componentDidMount() {
		const event = this.props.event;
		let tmp;

		tmp = moment.utc(event.date);
		tmp.hours(tmp.hours() + 4);

		if ('endDate' in event) {
			tmp = moment.utc(event.endDate);

		} else {
			tmp = moment.utc(event.date);
			tmp.hours(tmp.hours() + 6);
		}

		const endDate = tmp.toString();
		const startDate = tmp.toString();

		const singleEventArgs = {
			title: event.title,
			start: startDate,
			end: endDate,
			location: event.location || 'Houghton Library, Harvard University, Harvard Yard, Cambridge, MA 02138',
			description: event.description || 'description',
		};
		const singleEvent = new Add2Calendar(singleEventArgs);
		const singleEventNode = singleEvent.getSingleEventWidgetNode();
		document.querySelector(`.event-item--${event._id} .add-to-calendar`).appendChild(singleEventNode);
	}

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
	}


	render() {
		const event = this.props.event;
		const pastEvent = this.props.pastEvent;
		const self = this;

		return (
			<li
				className={`event-item wow fadeIn event-item--${event._id} ${pastEvent ? 'event-item--past-event' : ''}`}
			>
				<div className="event-calendar-date">
					<h6 className="event-month">{moment.utc(event.date).format('MMMM')}</h6>
					<h3 className="event-day thin">{moment.utc(event.date).format('D')}</h3>
					<h6 className="event-weekday">{moment.utc(event.date).format('dddd')}</h6>
				</div>
				<div className="event-info">
					{event.link && event.link !== '#' ?
						<a
							className="event-link"
							href={event.link}
							target="_blank" rel="noopener noreferrer"
							onClick={self.linkToEventOrScroll}
						>
							<h3 className="event-title">
								{event.title}
								<i className="mdi mdi-open-in-new" />
							</h3>
						</a>
					:
						<h3 className="event-title">{event.title}</h3>
					}
					<div className="add-to-calendar" />
				</div>
			</li>
		);
	}
}

EventItem.propTypes = {
	event: PropTypes.object.isRequired,
	pastEvent: PropTypes.bool,
};

export default EventItem;
