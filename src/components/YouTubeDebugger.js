import React, {Component} from 'react';

class YoutubeDebug extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

  }

  handleBitChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
            }
    });
  }

  handleResChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

    render() {
      return(
        <div>
        <button className="bitrate" onClick={this.handleBitChange}>
        Change the bitrate
        </button>
          <button className="resolution" onClick={this.handleResChange}>
          Change the res
          </button>
          </div>
      )
    }

}

export default YoutubeDebug
