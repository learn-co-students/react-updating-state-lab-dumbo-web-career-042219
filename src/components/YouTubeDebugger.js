// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      bitHandle = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
        });
    }

    resHandle = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
          }
        });
    }

    
  


    //  This does the job but doesnt pass that test. 
    //   clickHandle = event => {
    //     //   console.log('event: ', event.target.className);
    //         if (event.target.className === 'bitrate') {this.setState({
    //             settings: {
    //                 ...this.state.settings,
    //                 bitrate: 12
    //               }
    //         });
    //               } else if (event.target.className === 'resolution') {this.setState({
    //                 settings: {
    //                     ...this.state.settings,
    //                     video: {
    //                       ...this.state.settings.video,
    //                       resolution: '720p'
    //                     }
    //             }
    //             });
    //         }
    // }

    render() {
        return (
            <div>
              <button className='bitrate' onClick={this.bitHandle}>
                  Bit
              </button> 
              <button className='resolution' onClick={this.resHandle}>
                  Res
                </button>


            </div>
        )
    }
}

export default YouTubeDebugger
