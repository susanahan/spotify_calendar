import React, { Component } from 'react';


class Day extends Component {
    render() {
      let {day, selected, select } = this.props
      return (
        <div
          className={
            "day" +
            (day.isToday ? " today" : "") +
            (day.isCurrentMonth ? "" : " different-month") +
            (day.date.isSame(selected) ? " selected" : "") +
            (day.hasEvents ? " has-events" : "")
          }
          onClick={() => select(day)}
        >

          <div className="day-number">{day.number}</div>
        </div>
      );
    }
  }

  export default Day;