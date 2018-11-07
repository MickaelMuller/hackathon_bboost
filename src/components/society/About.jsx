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
                    <p className="about-text">Velit eu consequat ad eu et. Do enim officia aliquip est cupidatat non id qui anim excepteur in aute. Pariatur quis sunt eiusmod laborum reprehenderit nulla cillum consectetur eu occaecat. Sunt nulla pariatur ex pariatur fugiat. Ad cillum in veniam et deserunt sunt sint aute aliqua reprehenderit irure ipsum. Nostrud elit fugiat sit sunt do ullamco. Est exercitation voluptate consectetur ea ut do do incididunt consequat eu nisi fugiat ex.
                    Aliqua elit enim eu mollit amet veniam culpa eu ullamco commodo excepteur Lorem. Cillum sunt mollit minim laboris reprehenderit duis Lorem voluptate tempor eiusmod sint eiusmod excepteur do. Pariatur ea aliquip Lorem aliqua ex occaecat ex. Dolor nisi dolor aliquip culpa enim.
                    </p>
                    <br />
                    <p className="about-text">
                        Velit velit adipisicing est elit irure eiusmod officia voluptate. Dolore ut cillum eu fugiat est qui magna anim sint Lorem ut commodo do. Cupidatat proident ipsum adipisicing incididunt amet pariatur. Incididunt consequat ullamco aliquip nulla excepteur ut commodo elit pariatur duis nulla et. Adipisicing amet duis reprehenderit fugiat tempor.
                        Aliqua elit enim eu mollit amet veniam culpa eu ullamco commodo excepteur Lorem. Cillum sunt mollit minim laboris reprehenderit duis Lorem voluptate tempor eiusmod sint eiusmod excepteur do. Pariatur ea aliquip Lorem aliqua ex occaecat ex. Dolor nisi dolor aliquip culpa enim.</p>
                </Container>
            </div>
        );
    }
}

export default About;