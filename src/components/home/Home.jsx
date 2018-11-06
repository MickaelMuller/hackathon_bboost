import React, { Component } from 'react';
import FormUpload from './FormUpload';
import Video from './Video';
import './Home.css';
import Explanation from './Explanation';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Video />
                <Explanation />
                <FormUpload />
            </div>
         );
    }
}
 
export default Home;