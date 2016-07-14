HomeEvents = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        var events = [];
        var eventSub = Meteor.subscribe('events');
        if (eventSub.ready()) {
            events = Events.find().fetch();
        }
        return {events: events};
    },
    render(){
        return (
            <div>
                <section id="events">
                    <div className="container">
                        <h2 className="events-title text-center">Events</h2>
                        <h4 className="thin text-center">Support for Beyond Words public programming has been provided
                            by the Samuel H. Kress Foundation.</h4>
                        <ul className="events-list">
                            {this.data.events.map(function (event) {
                                return <li className="event-item">
                                    <div className="event-calendar-date">
                                        <h6 className="event-month">{moment(event.date).format('MMMM')}</h6>
                                        <h3 className="event-day thin">{moment(event.date).format('D')}</h3>
                                        <h6 className="event-weekday">{moment(event.date).format('dddd')}</h6>
                                    </div>
                                    <div className="event-info">
                                        <h3 className="event-title">Nancy Netzer lecture at Boston
                                            College</h3>
                                        <div className="event-description">
                                            <p>
                                                Some more details about the nancy lecture
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
});
