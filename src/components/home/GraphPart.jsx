import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardPage from './CardPage';
import './GraphPart.css';

class GraphPart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="graph-div">
                <Container className="graph-bottom">
                    <h2 className="graph-part graph-text">Les graphiques les mieux notés</h2>
                    <Row>
                        <Col xs="12" md="4" lg="4">
                            <CardPage title="Mortalité du cancer du poumon" rating="3" image="https://www150.statcan.gc.ca/n1/pub/82-624-x/images/11596-03-fra.gif"/>
                        </Col>
                        <Col xs="12" md="4" lg="4">
                            <CardPage title="Incidence globale du cancer" rating="5" image="https://i0.wp.com/www.thepanamanews.com/wp-content/uploads/2018/09/WHO-cancer.jpg "/>
                        </Col>
                        <Col xs="12" md="4" lg="4">
                            <CardPage title="Pourcentage de rémission" rating="4" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQ5-sko8aeSqqPkz2BNAecetjxkV0q-Um8qZ0P8R-KpAHO10Q"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GraphPart;