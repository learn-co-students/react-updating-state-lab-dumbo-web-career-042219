// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        let count = this.state.timesClicked + 1
        let updatedState = {...this.state, timesClicked: count}
        return this.setState(updatedState);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        );
    }
}

export default DigitalClicker;