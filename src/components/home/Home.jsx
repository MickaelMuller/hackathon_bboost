import React, { Component } from 'react';
import FormUpload from './FormUpload';
import Video from './Video';
import GraphPart from './GraphPart';
import './Home.css';
import Explanation from './Explanation';



class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Video />
                <GraphPart />
                <Explanation />
                <FormUpload />
            </div>
         );
    }
}
 
export default Home;