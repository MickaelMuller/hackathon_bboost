import React, { Component } from 'react';
import Video from '../home/Video';
import About from './About';
import Contact from './Contact';
import Epidemiumcontact from './Epidemiumcontact';

class Society extends Component {
   
    render() {
        return (
            <div>
                <Video />
                <About />
                <Contact />
                <Epidemiumcontact />
            </div>
        );
    }
}

export default Society;