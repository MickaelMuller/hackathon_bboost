import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './About.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="section" >
                <Container >
                    <h2 className="about-title" >A propos d'Epidemium</h2>
                    <br />
                    <img src='/medias/LogoEpidemiumV2.png' className="about-img" alt="logo"/>
                    <p className="about-text">Le groupe Epidemium a pour ambition de réunir les acteurs experts et non-experts autour des enjeux de l'épidémiologie du cancer, de la science des données et de la recherche ouverte. Nous invitons donc à nous rejoindre tous ceux qui manifestent un intérêt pour l'une de ces disciplines ou qui tout simplement partagent l'idée d'une recherche collaborative dans le domaine de la santé.
                    </p>
                    <br />
                </Container>
            </div>
        );
    }
}

export default About;