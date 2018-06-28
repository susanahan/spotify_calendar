import React, { Component } from 'react';
import './styles/css/App.css';
import Calendar from './components/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Calendar/>     
      </div>
    );
  }
}

export default App;
