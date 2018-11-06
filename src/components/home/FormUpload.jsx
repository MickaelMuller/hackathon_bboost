import React, { Component } from "react";
import { Button, Input, Container, Row, Col } from "reactstrap";
import "./FormUpload.css";


class FormUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange() {

  }
  render() {
    return (
      <Container className="margin-top">
        <h2 className="form-text">Créez votre graphique</h2>
        <Row>
          <Col lg="4">
            <Input
              type="file"
              onChange={this.handleChange()}
              className="btnparcourir"
            >
              Parcourir...
            </Input>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input type="text" placeholder="Titre" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Input placeholder="Abcisse X" />
          </Col>
          <Col>
            <Input placeholder="Ordonée Y" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Input type="textarea" placeholder="Tags" />
            <Button className="btnsubmit">Envoyer</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormUpload;
