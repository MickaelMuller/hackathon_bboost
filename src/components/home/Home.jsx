import React, { Component } from 'react';
import FormUpload from './FormUpload';
import GraphPart from './GraphPart';
import './Home.css';
import Explanation from './Explanation';
import Graphs from './Graphs'

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <Explanation />
                <GraphPart />
                <FormUpload />
                <Graphs />
            </div>
        );
    }
}

export default Home;