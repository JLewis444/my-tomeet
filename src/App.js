import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
  state = {events: []}
  updateEvents = (lat, lon) => {
    getEvents(lat, lon)
    .then(events => {console.log(events); this.setState({events})})
    .catch(error => console.log(error))
  }
  // componentDidMount () {this.updateEvents()} 
  render() {
  return (
    <div className="App">
      <CitySearch updateEvents={this.updateEvents} />
      <NumberOfEvents updateEvents={this.updateEvents} />
      <EventList  events={this.state.events} />
    </div>
   );
  }
}

export default App;
