// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    clickHandle = () => {
        this.setState({
            timesClicked: this.state.timesClicked+1
        })
    }
    render() {
        return (
            
                <button onClick={this.clickHandle}>{this.state.timesClicked}</button>
            
        )
    }
}

export default DigitalClicker
