import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

class Events extends Component {
    render() {
        const {selectedMonthEvents, selectedDay, removeEvent} = this.props;

    //   const {currentSelectedDay} = this.props.selectedDay;
    //   const monthEvents = this.props.selectedMonthEvents;
    //   const removeEvent = this.props.removeEvent;
  
      const monthEventsRendered = selectedMonthEvents.map((event, i) => {
        return (
          <div
            key={event.title}
            className="event-container"
            onClick={() => removeEvent(i)}
          >
            <CSSTransitionGroup
              component="div"
              className="animated-time"
              transitionName="time"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              <div className="event-time event-attribute">
                {event.date.format("HH:mm")}
              </div>
            </CSSTransitionGroup>
            <CSSTransitionGroup
              component="div"
              className="animated-title"
              transitionName="title"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              <div className="event-title event-attribute">{event.title}</div>
            </CSSTransitionGroup>
          </div>
        );
      });
  
      const dayEventsRendered = [];
  
      for (var i = 0; i < monthEventsRendered.length; i++) {
        if (selectedMonthEvents[i].date.isSame(selectedDay, "day")) {
          dayEventsRendered.push(monthEventsRendered[i]);
        }
      }
  
      return (
        <div className="day-events">
          {dayEventsRendered}
        </div>
      );
    }
  }

  export default Events;