import React, { Component } from 'react';
import { Button, Input, Container, Row, Col } from 'reactstrap';
import './FormUpload.css'

class FormUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Container>
                <Row>
                    <Col>
                        <Input type="file" className="btnparcourir">Parcourir...</Input>
                        <Input type="text" placeholder="Titre"></Input>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input placeholder="Abcisse X"></Input>
                    </Col>
                    <Col>                  
                        <Input placeholder="Ordonée Y"></Input>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Input type="textarea" placeholder="Tags"></Input>
                        <Button className="btnsubmit">Envoyer</Button>
                    </Col>
                </Row>
                    
                
            </Container> 
            
         );
    }
}
 
export default FormUpload;