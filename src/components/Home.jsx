import React, { Component } from 'react';
import NavBar from './navbar';
import FormUpload from './FormUpload';
import './Home.css'


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar />
                <FormUpload />


            </div>
         );
    }
}
 
export default Home;