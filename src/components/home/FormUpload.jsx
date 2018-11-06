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
    const csv = ["one", "two", "three", 1, 2, 3 ]
    console.log(csv)
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    //return result; //JavaScript object
    console.log(JSON.stringify(result)); //JSON
  }
  render() {
    return (
      <Container>
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
