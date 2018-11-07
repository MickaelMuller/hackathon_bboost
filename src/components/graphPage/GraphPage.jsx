import React, { Component } from "react";
import OldGraph from "./OldGraph";
import CardPageStar from "../graphPage/CardPageStar";
import { Container, Row, Col } from "reactstrap";
import './GraphPage.css'

class GraphPage extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <OldGraph />
          </Col>
        </Row>
        <Row >
            <Col lg="4"> 
                <CardPageStar title="Taux de mortalité du cancer du poumon" rating="0" image="https://www150.statcan.gc.ca/n1/pub/82-624-x/images/11596-03-fra.gif" />
            </Col>
            <Col lg="4"> 
                <CardPageStar title="Pourcentage de mortalité multi-cancers" rating="0" image="https://www150.statcan.gc.ca/n1/pub/89-503-x/2015001/article/14324/c-g/c-g33-fra.gif"/>
            </Col>
            <Col lg="4"> 
                <CardPageStar title="Incidence globale du cancer" rating="0" image="https://i0.wp.com/www.thepanamanews.com/wp-content/uploads/2018/09/WHO-cancer.jpg "/>
            </Col>
        </Row>
        <Row className="deuxieme-row">
            <Col lg="4"> 
                <CardPageStar title="Pourcentage de rémission" rating="0" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQ5-sko8aeSqqPkz2BNAecetjxkV0q-Um8qZ0P8R-KpAHO10Q" />
            </Col>
            <Col lg="4"> 
                <CardPageStar title="Taux de cancer lié à la consommation d'alcool" rating="0" image="https://www6.inra.fr/var/internet6_national_nacre/storage/images/media/images/prevention-primaire/consommation-alcool-pur-france/44011-3-fre-FR/Consommation-alcool-pur-France.jpg" />
            </Col>
            <Col lg="4"> 
                <CardPageStar title="Pourcentage de cancer du rein chez l'homme et la femme" rating="0" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_EOg0RD8OrnzJxklaEOvzjhTHJConTWq7-GS_Dmz9LIGRVG1M" />
            </Col>
        </Row>
      </Container>
    );
  }
}

export default GraphPage;
