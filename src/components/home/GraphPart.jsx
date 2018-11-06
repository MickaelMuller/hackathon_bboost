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
                <Container>
                    <h1 className="graph-part">Les graphiques les mieux notés</h1>
                    <Row>
                        <Col xs="12" md="4" lg="4">
                            <CardPage />
                        </Col>
                        <Col xs="12" md="4" lg="4">
                            <CardPage />
                        </Col>
                        <Col xs="12" md="4" lg="4">
                            <CardPage />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GraphPart;