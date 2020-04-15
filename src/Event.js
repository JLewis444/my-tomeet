import React, { Component } from 'react';


class Event extends Component {
    state = {
        events: [],
    }

    handleChange = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

    render() {
        const { event } = this.props;
        if (!event) {
            return <div>Loading...</div>
        }
    }
}


export default Event;