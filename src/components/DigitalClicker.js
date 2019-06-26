import React from 'react';



class DigitalCilcker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };

  }

  handleClick = () => {
    this.setState(lastState => ({
      timesClicked: lastState.timesClicked+1
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalCilcker
