import React, { Component } from "react";
import YouTube from "react-youtube";

class Video extends Component {
  render() {
    return (
      <div>
        <YouTube className="video" videoId="BhEPgP7tAqQ" onReady={this._onReady} />
      </div>
    );
  }
}

export default Video;
