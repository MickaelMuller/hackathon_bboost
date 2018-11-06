import React, { Component } from 'react';
import NavBar from './navbar';
import FormUpload from './FormUpload';
import Video from './Video';
import './Home.css'


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar />
                <Video />
                <FormUpload />
            </div>
         );
    }
}
 
export default Home;