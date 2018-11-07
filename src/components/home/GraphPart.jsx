import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardPage from '../CardPage';
import './GraphPart.css';

class GraphPart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Container className="graph-bottom">
                    <h2 className="graph-part graph-text">Les graphiques les mieux notés</h2>
                    <Row>
                        <Col xs="12" md="4" lg="4">
                            <CardPage rating="3"/>
                        </Col>
                        <Col xs="12" md="4" lg="4">
                            <CardPage rating="5"/>
                        </Col>
                        <Col xs="12" md="4" lg="4">
                            <CardPage rating="4"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GraphPart;