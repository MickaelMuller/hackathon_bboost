import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './Epidemiumcontact.css';

class Epidemiumcontact extends Component {

    render() {
        return (
            <div className="epidemium">
                <Container>
                    <h2 className="epi-title"> Nous retrouver</h2>
                    <br/>
                    <p className="epi-text">Data : data@epidemium.cc</p>
                    <p className="epi-text">Wiki : wiki@epidemium.cc</p>
                    <p className="epi-text">Ethical question: ethique@epidemium.cc</p>
                    <p className="epi-text p">Scientific question : methodologie@epidemium.cc</p>
                </Container>
            </div>
        );
    }
}

export default Epidemiumcontact;