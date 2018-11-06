import React, { Component } from 'react';
import Video from '../home/Video';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Video />
            </div>
        );
    }
}

export default Library;