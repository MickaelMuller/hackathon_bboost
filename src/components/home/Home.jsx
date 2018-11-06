import React, { Component } from 'react';
import FormUpload from './FormUpload';
import Video from './Video';
import './Home.css'


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Video />
                <FormUpload />
            </div>
         );
    }
}
 
export default Home;