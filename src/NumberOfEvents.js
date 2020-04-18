import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        numberOfEvents: 32,
        infoText: ''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ numberOfEvents: value });

     
    }


render() {
    return(
        <div className="numberOfEvents">
            <label>Number of Events:</label>
            <input
               type="text"
               id="numberOfEvents_input"
               value={this.state.numberOfEvents}
               onChange={this.handleInputChanged}
            />
        </div>
    )

    }
     
}

export default NumberOfEvents;