import React, { Component } from "react";
import { Input, Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import "./FormUpload.css";
import Graphs from './Graphs'

class FormUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graph : false,
    }
    this.boolean = this.boolean.bind(this)
  }

  boolean(){
    this.setState({
      graph: !this.state.graph
    })
  }
   
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Container>
              <h2 className="form-text form-title">Créez votre graphique</h2>
              <Row>
                <Col lg="4">
                  <Input
                    type="file"
                    className="btnparcourir"
                    onChange={this.boolean}
                    >Parcourir...
                    
                    </Input>
                </Col>
              </Row>
              <Row>
                <Col>
                <Input
                    type="select"
                    name="Rendu"
                  >
                    <option>Histogramme</option>
                    <option >Diagramme circulaire</option>
                    <option>Nuage de points</option>
                    <option>Courbe</option>
                  </Input>
                </Col>
              </Row>
              <br/>
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
            </Container>
          </FormGroup>
        </Form> 
        <br/>
        <br/>
        {
          this.state.graph ?
          <Container>
          <Graphs />
          <Row>
          <Col>
            <Button>Télécharger</Button>
            </Col>
            <Col>
            <Button>Partager</Button>
            </Col>
          </Row>
          
          <br/>
          <br/>
          <br/>
          <br/>
          </Container>
          :
          <div></div>
        }
        
      </div>
    );
  }
}

export default FormUpload;
