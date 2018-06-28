import React, { Component } from 'react';
import moment from 'moment';
import Week from './Week';
import DayNames from './DayNames';
import Events from './Events';
import Form from './Form';


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: moment(),
      selectedDay: moment().startOf("day"),
      selectedMonthEvents: [],
      showEvents: false,
      show: true
    };
 
  }

  previous=()=> {
    const currentMonthView = this.state.selectedMonth;

    this.setState({
      selectedMonth: currentMonthView.subtract(1, "month")
    });
  }

  next=()=> {
    const currentMonthView = this.state.selectedMonth;
    this.setState({
      selectedMonth: currentMonthView.add(1, "month")
    });
  }

  selectDate=(day)=> {
    this.setState({
      selectedMonth: day.date,
      selectedDay: day.date.clone(),
      showEvents: true,
      show:true
    });
    console.log('selectDate', day)
  }

  goToCurrentMonthView=()=>{
    this.setState({
      selectedMonth: moment()
    });
  }
  
  hideForm=()=>{
    this.setState({
      show: false
    });
  }

  showCalendar=()=>{
    this.setState({
      selectedMonth: this.state.selectedMonth,
      selectedDay: this.state.selectedDay,
      showEvents: false
    });
  }

  renderMonthLabel=()=>{
    const currentMonthView = this.state.selectedMonth;
    return (
      <span className="box month-label">
        {currentMonthView.format("MMMM YYYY")}
      </span>
    );
  }

  renderDayLabel=()=>{
    const currentSelectedDay = this.state.selectedDay;
    return (
      <span className="box month-label">
        {currentSelectedDay.format("DD MMMM YYYY")}
      </span>
    );
  }
  
  renderTodayLabel=()=>{
    return (
      <span className="box today-label" onClick={this.goToCurrentMonthView}>
        Today
      </span>
    );
  }
  
  renderWeeks=()=>{
    const currentMonthView = this.state.selectedMonth;
    const currentSelectedDay = this.state.selectedDay;
    const monthEvents = this.state.selectedMonthEvents;

    let weeks = [];
    let done = false;
    let previousCurrentNextView = currentMonthView
      .clone()
      .startOf("month")
      .subtract(1, "d")
      .day("Monday");
    let count = 0;
    let monthIndex = previousCurrentNextView.month();

    while (!done) {
      weeks.push(
        <Week
          previousCurrentNextView={previousCurrentNextView.clone()}
          currentMonthView={currentMonthView}
          monthEvents={monthEvents}
          selected={currentSelectedDay}
          select={day => this.selectDate(day)}
        />
      );
      previousCurrentNextView.add(1, "w");
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();
    }
    return weeks;
  }


  render() {
    const {showEvents, show} = this.state;
    console.log('show', show);
      return (
          <div>
        <div className='calendar-rectangle'>
        <div className='calendar-content'>
        <section className="main-calendar">
          <header className="calendar-header">
            <div className="row title-header">
              <i
                className="box arrow fa fa-angle-left"
                onClick={this.previous}
              />
              <div className="box header-text">
              {this.renderTodayLabel()}
              {this.renderMonthLabel()}
              </div>
              <i className="box arrow fa fa-angle-right" onClick={this.next} />
            </div>
            <DayNames />
          </header>
          <div className="days-container">
            {this.renderWeeks()} 
          </div>
        </section>
        
        </div>
        </div>

          <div className='form-container'>
             {show ? <Form hide={this.hideForm} /> : ''}
            </div>
            </div>
      );
    }
  }


export default Calendar;