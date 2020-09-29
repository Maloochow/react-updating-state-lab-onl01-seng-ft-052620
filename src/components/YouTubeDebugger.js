// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state =  {
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

    render() {
        return (
        <div>
        <button onClick={this.handleBitrate} className="bitrate" >bitrate</button>
        <button onClick={this.handleClick2} className="resolution" >resolution</button>
        </div>
        )
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12    
            }
        })
    }
    // handleClick1 = () => {
    //     this.setState(previousState => {
    //         return {
    //         settings: {
    //             ...previousState.settings,
    //             bitrate: 12    
    //         }
    //     }
    //     })
    // }

    handleClick2 = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }    
            }
        })
    }
}

export default YouTubeDebugger