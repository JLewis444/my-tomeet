import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

class App extends Component {
  updateEvents = () => {}
  componentDidMount () {this.updateEvents()} 
  render() {
  return (
    <div className="App">
      <CitySearch updateEvents={this.updateEvents} />
      <EventList />
    </div>
   );
  }
}

export default App;
