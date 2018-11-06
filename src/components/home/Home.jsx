import React, { Component } from 'react';
import FormUpload from './FormUpload';
import Video from './Video';
import './Home.css'
import Graphs from './Graphs';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Graphs />
            </div>
         );
    }
}
 
export default Home;