import React, { Component } from "react";
import { Button, Input, Container, Row, Col, Form, FormGroup } from "reactstrap";
import "./FormUpload.css";

class FormUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJson : {},
    };
  }
   
  

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Container className="margin-top">
              <h2 className="form-text">Créez votre graphique</h2>
              <Row>
                <Col lg="4">
                  <Input
                    type="file"
                    className="btnparcourir">Parcourir...
                    </Input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input type="text" placeholder="Titre" required />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Input
                    type="select"
                    name="Abscisse"
                  >
                    <option>Abscisse X</option>
                    <option >Genre</option>
                    <option>Ville</option>
                    <option>Protocole</option>
                  </Input>
                </Col>
                <Col>
                  <Input
                    type="select"
                    name="Ordonnée"
                  >
                    <option>Ordonnée Y</option>
                    <option>Pays</option>
                    <option>Années</option>
                    <option>Age</option>
                  </Input>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Input className="tag" type="textarea" placeholder="Tags" />
                  <Button className="btn-submit">Envoyer</Button>
                </Col>
              </Row>
            </Container>
          </FormGroup>
        </Form> 
      </div>
    );
  }
}

export default FormUpload;
