import React, { Component } from 'react';
import FormUpload from './FormUpload';
import Video from './Video';
import './Home.css'
import GraphPart from './GraphPart';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Video />
                <GraphPart />
                <FormUpload />
            </div>
         );
    }
}
 
export default Home;